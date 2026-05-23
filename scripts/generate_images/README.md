# Generate Images

Generate advertising images from white-background product images listed in the CSV files.

Expected workflow:

1. Read product rows from `data/raw/white_bg_product_catalog.csv` or `data/experiment/white_bg_product_catalog_experiment.csv`.
2. Download or reference the white-background product image from `creative_id_image`.
3. Generate prompts based on product category and creative orientation.
4. Support three canonical creative orientations:
   - `Product-oriented`
   - `Context-oriented`
   - `Symbolic-oriented`
5. Save generated images to `outputs/`.

`Affect-oriented` is accepted as a deprecated alias for `Symbolic-oriented`; new runs should use `Symbolic-oriented`.

Recommended output naming:

```text
{id}_{orientation}_{variant}.png
```

## Usage

Preview selected rows and rendered prompts without network calls:

```bash
python3 scripts/generate_images/generate_from_csv.py --dry-run --limit 1
```

Preview a deterministic random sample. The default random seed is `20260523`:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --csv data/experiment/white_bg_product_catalog_experiment.csv \
  --prompt-file prompts/product_oriented_ad_image_prompt.txt \
  --orientation Product-oriented \
  --sample-size 10 \
  --limit 10 \
  --random-seed 20260523 \
  --dry-run
```

Download white-background source images without calling the image API:

```bash
python3 scripts/generate_images/generate_from_csv.py --download-only --limit 3
```

Generate one image using the experiment CSV:

```bash
export OPENAI_API_KEY="your_api_key"
python3 scripts/generate_images/generate_from_csv.py \
  --csv data/experiment/white_bg_product_catalog_experiment.csv \
  --prompt-file prompts/product_oriented_ad_image_prompt.txt \
  --orientation Product-oriented \
  --limit 1
```

Use a different canonical orientation:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --prompt-file prompts/context_oriented_ad_image_prompt.txt \
  --orientation Context-oriented \
  --limit 1

python3 scripts/generate_images/generate_from_csv.py \
  --prompt-file prompts/symbolic_oriented_ad_image_prompt.txt \
  --orientation Symbolic-oriented \
  --limit 1
```

## Important Arguments

- `--csv`: input product CSV.
- `--prompt-file`: prompt template with CSV placeholders such as `{ori_title}` and `{level_one_category_name}`.
- `--prompt`: inline prompt template; overrides `--prompt-file`.
- `--orientation`: one of `Product-oriented`, `Context-oriented`, `Symbolic-oriented`; deprecated alias `Affect-oriented` is normalized to `Symbolic-oriented`.
- `--limit`: maximum rows to process after filtering or sampling.
- `--sample-size`: randomly sample N rows after white-image filtering and optional `--start`/`--ids` selection.
- `--random-seed`: deterministic seed for `--sample-size`; defaults to `20260523` or `GENAI_AD_IMAGE_RANDOM_SEED`.
- `--ids`: comma-separated product ids to process.
- `--dry-run`: render prompts only.
- `--download-only`: download source images only.
- `--model`: image model, defaults to `OPENAI_IMAGE_MODEL` or `gpt-image-2`.
- `--endpoint`: image edit endpoint, defaults to `OPENAI_IMAGES_EDIT_ENDPOINT` or the OpenAI Images Edit endpoint.
- `--output-dir`: generated image destination, defaults to `outputs/generated`.

## Outputs

- Generated images: `outputs/generated/{orientation}/{id}_{orientation}.png`
- Downloaded source images: `outputs/source_images/{id}.{ext}`
- Manifest JSONL: `outputs/generation_manifest.jsonl`
