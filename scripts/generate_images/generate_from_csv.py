#!/usr/bin/env python3
"""Generate ad images from white-background product images listed in a CSV.

This script intentionally uses only Python's standard library. It downloads the
source image URL from `creative_id_image`, fills a prompt template with row
metadata, sends the image plus prompt to the OpenAI Images Edit API, and writes
generated images to `outputs/`.
"""

from __future__ import annotations

import argparse
import base64
import csv
import json
import mimetypes
import os
import pathlib
import random
import re
import sys
import time
import traceback
import urllib.error
import urllib.parse
import urllib.request
import uuid
from typing import Iterable


REQUIRED_COLUMNS = [
    "id",
    "material_id",
    "ori_title",
    "creative_id_image",
    "creative_id_brand",
    "creative_id_price",
    "creative_id_promotion",
    "level_one_category_name",
    "is_white_image",
]

DEFAULT_MODEL = "gpt-image-2"
DEFAULT_ENDPOINT = "https://api.openai.com/v1/images/edits"
DEFAULT_RANDOM_SEED = 20260523
CANONICAL_ORIENTATIONS = ["Product-oriented", "Context-oriented", "Symbolic-oriented"]
ORIENTATION_ALIASES = {"Affect-oriented": "Symbolic-oriented"}
ORIENTATION_CHOICES = CANONICAL_ORIENTATIONS + sorted(ORIENTATION_ALIASES)


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Generate ad images from white-background product-image CSV rows.",
    )
    parser.add_argument(
        "--csv",
        default="data/experiment/white_bg_product_catalog_experiment.csv",
        help="Input CSV path.",
    )
    parser.add_argument(
        "--prompt-file",
        default="prompts/ad_image_prompt.txt",
        help="Prompt template path. CSV columns can be used as {placeholders}.",
    )
    parser.add_argument(
        "--prompt",
        default=None,
        help="Inline prompt template. Overrides --prompt-file when provided.",
    )
    parser.add_argument(
        "--orientation",
        default="Product-oriented",
        choices=ORIENTATION_CHOICES,
        help="Creative orientation inserted into the prompt template. Affect-oriented is a deprecated alias for Symbolic-oriented.",
    )
    parser.add_argument("--output-dir", default="outputs/generated", help="Output directory.")
    parser.add_argument("--source-dir", default="outputs/source_images", help="Downloaded source image directory.")
    parser.add_argument("--manifest", default="outputs/generation_manifest.jsonl", help="JSONL manifest path.")
    parser.add_argument("--model", default=os.environ.get("OPENAI_IMAGE_MODEL", DEFAULT_MODEL), help="OpenAI image model.")
    parser.add_argument("--endpoint", default=os.environ.get("OPENAI_IMAGES_EDIT_ENDPOINT", DEFAULT_ENDPOINT), help="Images edit endpoint.")
    parser.add_argument("--size", default="1024x1024", help="Output size, e.g. 1024x1024, 1024x1536, 1536x1024.")
    parser.add_argument("--quality", default="medium", help="Model quality option, e.g. low, medium, high, auto.")
    parser.add_argument("--output-format", default="png", choices=["png", "jpeg", "webp"], help="Generated image format.")
    parser.add_argument("--n", type=int, default=1, help="Images to generate per row.")
    parser.add_argument("--limit", type=int, default=1, help="Maximum rows to process after filtering.")
    parser.add_argument("--start", type=int, default=0, help="Number of matching rows to skip before processing.")
    parser.add_argument("--sample-size", type=int, default=None, help="Randomly sample this many rows after filtering.")
    parser.add_argument(
        "--random-seed",
        type=int,
        default=int(os.environ.get("GENAI_AD_IMAGE_RANDOM_SEED", DEFAULT_RANDOM_SEED)),
        help=f"Random seed for --sample-size. Defaults to {DEFAULT_RANDOM_SEED}.",
    )
    parser.add_argument("--ids", default=None, help="Comma-separated product ids to process. Overrides --start filtering order.")
    parser.add_argument("--only-white", action="store_true", default=True, help="Only process rows where is_white_image == 1.")
    parser.add_argument("--include-non-white", dest="only_white", action="store_false", help="Allow rows where is_white_image != 1.")
    parser.add_argument("--overwrite", action="store_true", help="Regenerate outputs even if files already exist.")
    parser.add_argument("--dry-run", action="store_true", help="Print planned requests without downloading images or calling the API.")
    parser.add_argument("--download-only", action="store_true", help="Download source images and render prompts, but do not call the API.")
    parser.add_argument("--sleep", type=float, default=0.0, help="Seconds to sleep between API calls.")
    parser.add_argument("--retries", type=int, default=2, help="Retry count for image download and API calls.")
    parser.add_argument("--timeout", type=int, default=120, help="HTTP timeout seconds.")
    return parser.parse_args()


def read_rows(csv_path: pathlib.Path) -> list[dict[str, str]]:
    with csv_path.open(newline="", encoding="utf-8-sig") as csv_file:
        reader = csv.DictReader(csv_file)
        missing = [column for column in REQUIRED_COLUMNS if column not in (reader.fieldnames or [])]
        if missing:
            raise ValueError(f"Missing required CSV columns: {', '.join(missing)}")
        return list(reader)


def select_rows(rows: list[dict[str, str]], args: argparse.Namespace) -> list[dict[str, str]]:
    selected = rows
    if args.only_white:
        selected = [row for row in selected if str(row.get("is_white_image", "")).strip() == "1"]

    if args.ids:
        wanted = {item.strip() for item in args.ids.split(",") if item.strip()}
        selected = [row for row in selected if row.get("id") in wanted]
    else:
        selected = selected[args.start :]

    if args.sample_size is not None:
        if args.sample_size < 0:
            raise ValueError("--sample-size must be non-negative.")
        sample_size = min(args.sample_size, len(selected))
        selected = random.Random(args.random_seed).sample(selected, sample_size)

    if args.limit is not None and args.limit >= 0:
        selected = selected[: args.limit]
    return selected


def load_prompt_template(args: argparse.Namespace) -> str:
    if args.prompt:
        return args.prompt
    prompt_path = pathlib.Path(args.prompt_file)
    return prompt_path.read_text(encoding="utf-8")


def canonical_orientation(orientation: str) -> str:
    return ORIENTATION_ALIASES.get(orientation, orientation)


def render_prompt(template: str, row: dict[str, str], orientation: str) -> str:
    values = {key: clean_value(value) for key, value in row.items()}
    values["orientation"] = orientation
    return template.format_map(DefaultDict(values))


class DefaultDict(dict):
    def __missing__(self, key: str) -> str:
        return ""


def clean_value(value: str | None) -> str:
    if value is None:
        return ""
    return " ".join(str(value).split())


def safe_name(value: str, max_len: int = 80) -> str:
    value = value.strip() or "unknown"
    value = re.sub(r"[^\w.-]+", "_", value, flags=re.UNICODE)
    return value[:max_len].strip("_") or "unknown"


def extension_from_url(url: str) -> str:
    path = urllib.parse.urlparse(url).path
    suffix = pathlib.Path(path).suffix.lower()
    if suffix in {".jpg", ".jpeg", ".png", ".webp"}:
        return suffix
    return ".jpg"


def download_image(url: str, output_path: pathlib.Path, timeout: int, retries: int) -> pathlib.Path:
    output_path.parent.mkdir(parents=True, exist_ok=True)
    if output_path.exists() and output_path.stat().st_size > 0:
        return output_path

    headers = {
        "User-Agent": "Mozilla/5.0 (compatible; genai-ad-image-research/1.0)",
    }
    request = urllib.request.Request(url, headers=headers)
    last_error: Exception | None = None
    for attempt in range(retries + 1):
        try:
            with urllib.request.urlopen(request, timeout=timeout) as response:
                data = response.read()
            if not data:
                raise RuntimeError("Downloaded image is empty.")
            output_path.write_bytes(data)
            return output_path
        except Exception as exc:  # noqa: BLE001 - surface exact failure in manifest.
            last_error = exc
            if attempt < retries:
                time.sleep(min(2**attempt, 8))
    raise RuntimeError(f"Failed to download image after {retries + 1} attempts: {last_error}")


def encode_multipart(fields: dict[str, str], files: list[tuple[str, pathlib.Path]]) -> tuple[bytes, str]:
    boundary = f"----genai-ad-image-{uuid.uuid4().hex}"
    body = bytearray()

    for name, value in fields.items():
        body.extend(f"--{boundary}\r\n".encode())
        body.extend(f'Content-Disposition: form-data; name="{name}"\r\n\r\n'.encode())
        body.extend(str(value).encode("utf-8"))
        body.extend(b"\r\n")

    for field_name, file_path in files:
        mime_type = mimetypes.guess_type(file_path.name)[0] or "application/octet-stream"
        body.extend(f"--{boundary}\r\n".encode())
        body.extend(
            (
                f'Content-Disposition: form-data; name="{field_name}"; '
                f'filename="{file_path.name}"\r\n'
            ).encode()
        )
        body.extend(f"Content-Type: {mime_type}\r\n\r\n".encode())
        body.extend(file_path.read_bytes())
        body.extend(b"\r\n")

    body.extend(f"--{boundary}--\r\n".encode())
    return bytes(body), f"multipart/form-data; boundary={boundary}"


def call_openai_image_edit(
    *,
    api_key: str,
    endpoint: str,
    image_path: pathlib.Path,
    prompt: str,
    model: str,
    size: str,
    quality: str,
    output_format: str,
    n: int,
    timeout: int,
    retries: int,
) -> dict:
    fields = {
        "model": model,
        "prompt": prompt,
        "size": size,
        "quality": quality,
        "output_format": output_format,
        "n": str(n),
    }
    body, content_type = encode_multipart(fields, [("image", image_path)])
    request = urllib.request.Request(
        endpoint,
        data=body,
        method="POST",
        headers={
            "Authorization": f"Bearer {api_key}",
            "Content-Type": content_type,
        },
    )

    last_error: Exception | None = None
    for attempt in range(retries + 1):
        try:
            with urllib.request.urlopen(request, timeout=timeout) as response:
                return json.loads(response.read().decode("utf-8"))
        except urllib.error.HTTPError as exc:
            detail = exc.read().decode("utf-8", errors="replace")
            last_error = RuntimeError(f"HTTP {exc.code}: {detail}")
        except Exception as exc:  # noqa: BLE001 - surface exact failure in manifest.
            last_error = exc
        if attempt < retries:
            time.sleep(min(2**attempt, 8))
    raise RuntimeError(f"OpenAI image edit failed after {retries + 1} attempts: {last_error}")


def save_images(response: dict, output_prefix: pathlib.Path, output_format: str) -> list[pathlib.Path]:
    saved_paths: list[pathlib.Path] = []
    output_prefix.parent.mkdir(parents=True, exist_ok=True)
    for index, image_obj in enumerate(response.get("data", [])):
        b64_json = image_obj.get("b64_json")
        if not b64_json:
            continue
        suffix = f"_{index + 1}" if len(response.get("data", [])) > 1 else ""
        output_path = output_prefix.with_name(f"{output_prefix.name}{suffix}.{output_format}")
        output_path.write_bytes(base64.b64decode(b64_json))
        saved_paths.append(output_path)
    if not saved_paths:
        raise RuntimeError("API response did not contain data[].b64_json images.")
    return saved_paths


def append_manifest(manifest_path: pathlib.Path, record: dict) -> None:
    manifest_path.parent.mkdir(parents=True, exist_ok=True)
    with manifest_path.open("a", encoding="utf-8") as manifest_file:
        manifest_file.write(json.dumps(record, ensure_ascii=False) + "\n")


def iter_records(rows: Iterable[dict[str, str]], args: argparse.Namespace, template: str) -> Iterable[dict]:
    for row in rows:
        product_id = safe_name(row.get("id", ""))
        orientation = safe_name(args.orientation)
        source_url = row.get("creative_id_image", "").strip()
        source_ext = extension_from_url(source_url)
        source_path = pathlib.Path(args.source_dir) / f"{product_id}{source_ext}"
        output_prefix = pathlib.Path(args.output_dir) / args.orientation / f"{product_id}_{orientation}"
        prompt = render_prompt(template, row, args.orientation)
        yield {
            "row": row,
            "product_id": product_id,
            "source_url": source_url,
            "source_path": source_path,
            "output_prefix": output_prefix,
            "prompt": prompt,
        }


def main() -> int:
    args = parse_args()
    requested_orientation = args.orientation
    args.orientation = canonical_orientation(args.orientation)
    rows = select_rows(read_rows(pathlib.Path(args.csv)), args)
    template = load_prompt_template(args)

    if not rows:
        print("No rows selected.", file=sys.stderr)
        return 1

    api_key = os.environ.get("OPENAI_API_KEY")
    if not api_key and not (args.dry_run or args.download_only):
        print("OPENAI_API_KEY is required unless --dry-run or --download-only is used.", file=sys.stderr)
        return 2

    for record in iter_records(rows, args, template):
        row = record["row"]
        output_prefix: pathlib.Path = record["output_prefix"]
        expected_output = output_prefix.with_suffix(f".{args.output_format}")
        manifest_record = {
            "id": row.get("id"),
            "material_id": row.get("material_id"),
            "category": row.get("level_one_category_name"),
            "brand": row.get("creative_id_brand"),
            "orientation": args.orientation,
            "requested_orientation": requested_orientation,
            "source_url": record["source_url"],
            "source_path": str(record["source_path"]),
            "output_prefix": str(output_prefix),
            "model": args.model,
            "size": args.size,
            "quality": args.quality,
            "output_format": args.output_format,
            "sample_size": args.sample_size,
            "random_seed": args.random_seed,
            "status": "planned",
            "prompt": record["prompt"],
        }

        try:
            if expected_output.exists() and not args.overwrite:
                manifest_record["status"] = "skipped_exists"
                append_manifest(pathlib.Path(args.manifest), manifest_record)
                print(f"SKIP existing output for id={row.get('id')}: {expected_output}")
                continue

            print(f"PROCESS id={row.get('id')} category={row.get('level_one_category_name')} orientation={args.orientation}")
            if args.dry_run:
                manifest_record["status"] = "dry_run"
                append_manifest(pathlib.Path(args.manifest), manifest_record)
                print(record["prompt"])
                continue

            source_path = download_image(
                record["source_url"],
                record["source_path"],
                timeout=args.timeout,
                retries=args.retries,
            )
            manifest_record["source_path"] = str(source_path)

            if args.download_only:
                manifest_record["status"] = "downloaded"
                append_manifest(pathlib.Path(args.manifest), manifest_record)
                continue

            response = call_openai_image_edit(
                api_key=api_key or "",
                endpoint=args.endpoint,
                image_path=source_path,
                prompt=record["prompt"],
                model=args.model,
                size=args.size,
                quality=args.quality,
                output_format=args.output_format,
                n=args.n,
                timeout=args.timeout,
                retries=args.retries,
            )
            saved_paths = save_images(response, output_prefix, args.output_format)
            manifest_record["status"] = "generated"
            manifest_record["outputs"] = [str(path) for path in saved_paths]
            manifest_record["api_usage"] = response.get("usage")
            append_manifest(pathlib.Path(args.manifest), manifest_record)
            print(f"SAVED id={row.get('id')} outputs={saved_paths}")
            if args.sleep > 0:
                time.sleep(args.sleep)
        except Exception as exc:  # noqa: BLE001 - keep batch processing robust.
            manifest_record["status"] = "error"
            manifest_record["error"] = str(exc)
            manifest_record["traceback"] = traceback.format_exc()
            append_manifest(pathlib.Path(args.manifest), manifest_record)
            print(f"ERROR id={row.get('id')}: {exc}", file=sys.stderr)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
