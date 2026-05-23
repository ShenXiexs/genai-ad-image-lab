# Image API Call Spec

This document describes the current image-generation API call used by this repository.

## Current Pipeline

Script:

```text
scripts/generate_images/generate_from_csv.py
```

Default input CSV:

```text
data/experiment/white_bg_product_catalog_experiment.csv
```

Default prompt template:

```text
prompts/ad_image_prompt.txt
```

Source image column:

```text
creative_id_image
```

The script reads each selected product row, downloads the white-background product image from `creative_id_image`, renders the prompt template with product metadata, and sends both the image and prompt to the Images Edit endpoint.

## API Endpoint And Model

Default endpoint:

```text
POST https://api.openai.com/v1/images/edits
```

Default model:

```text
gpt-image-2
```

The model and endpoint can be overridden:

```bash
export OPENAI_IMAGE_MODEL="gpt-image-2"
export OPENAI_IMAGES_EDIT_ENDPOINT="https://api.vectorengine.cn/v1/images/edits"
```

or:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --model gpt-image-2 \
  --endpoint https://api.vectorengine.cn/v1/images/edits
```


## Row Selection And Reproducibility

By default, the script processes rows in CSV order and applies `--limit` after filtering. For randomized experimental batches, use `--sample-size` with the fixed default seed:

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

`--random-seed` defaults to `20260523` and can also be set with `GENAI_AD_IMAGE_RANDOM_SEED`. The manifest records both `sample_size` and `random_seed` for reproducibility.

## Request Parameters

The script sends a multipart/form-data request with:

| Field | Current value / source | Meaning |
| --- | --- | --- |
| `image` | downloaded file from `creative_id_image` | The white-background product image to edit. |
| `prompt` | rendered from the selected prompt file | Instruction for creating the advertising image. |
| `model` | default `gpt-image-2` | Image generation/editing model. |
| `size` | default `1024x1024` | Output image size. |
| `quality` | default `medium` | Output quality level. |
| `output_format` | default `png` | Saved image format. |
| `n` | default `1` | Number of images generated per product row. |

Authentication uses:

```bash
export OPENAI_API_KEY="your_api_key"
```

## Prompt Template

Recommended orientation-specific prompt files:

```text
prompts/product_oriented_ad_image_prompt.txt
prompts/context_oriented_ad_image_prompt.txt
prompts/symbolic_oriented_ad_image_prompt.txt
```

The templates use CSV placeholders:

```text
{ori_title}
{creative_id_brand}
{level_one_category_name}
{creative_id_price}
{creative_id_promotion}
{orientation}
```

The rendered prompt tells the model to preserve product identity, avoid new generated text or unsupported claims, and generate one controlled advertising image based on the selected orientation.

## Creative Orientation

The script supports three canonical values:

```text
Product-oriented
Context-oriented
Symbolic-oriented
```

`Affect-oriented` is accepted only as a deprecated compatibility alias. When supplied, the script normalizes it to `Symbolic-oriented`; output paths, manifest orientation, and `{orientation}` prompt values use `Symbolic-oriented`.

Usage:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --prompt-file prompts/product_oriented_ad_image_prompt.txt \
  --orientation Product-oriented \
  --limit 1

python3 scripts/generate_images/generate_from_csv.py \
  --prompt-file prompts/context_oriented_ad_image_prompt.txt \
  --orientation Context-oriented \
  --limit 1

python3 scripts/generate_images/generate_from_csv.py \
  --prompt-file prompts/symbolic_oriented_ad_image_prompt.txt \
  --orientation Symbolic-oriented \
  --limit 1
```

## Output Files

Downloaded source images:

```text
outputs/source_images/{id}.{ext}
```

Generated images:

```text
outputs/generated/{orientation}/{id}_{orientation}.png
```

Manifest log:

```text
outputs/generation_manifest.jsonl
```

The manifest records product id, category, brand, canonical orientation, requested orientation, source URL, local source path, output prefix, model, size, quality, output format, status, prompt, API usage when returned, and errors if any.

`outputs/` is ignored by Git except for `outputs/.gitkeep`.

## Safe Test Commands

Render prompt only; no image download and no API call:

```bash
python3 scripts/generate_images/generate_from_csv.py --dry-run --limit 1
```

Download white-background image only; no API call:

```bash
python3 scripts/generate_images/generate_from_csv.py --download-only --limit 1
```

Run one actual API call:

```bash
export OPENAI_API_KEY="your_api_key"
python3 scripts/generate_images/generate_from_csv.py \
  --csv data/experiment/white_bg_product_catalog_experiment.csv \
  --prompt-file prompts/product_oriented_ad_image_prompt.txt \
  --orientation Product-oriented \
  --limit 1
```
