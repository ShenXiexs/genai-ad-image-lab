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

The script reads each selected product row, downloads the white-background product image from `creative_id_image`, renders the prompt template with product metadata, and sends both the image and prompt to the OpenAI Image API edit endpoint.

## API Endpoint And Model

Current endpoint:

```text
POST https://api.openai.com/v1/images/edits
```

Current default model:

```text
gpt-image-1.5
```

The model can be overridden by either:

```bash
export OPENAI_IMAGE_MODEL="gpt-image-1"
```

or:

```bash
python3 scripts/generate_images/generate_from_csv.py --model gpt-image-1
```

The endpoint can be overridden with:

```bash
export OPENAI_IMAGES_EDIT_ENDPOINT="https://api.openai.com/v1/images/edits"
```

## Request Parameters

The script sends a multipart/form-data request with:

| Field | Current value / source | Meaning |
|---|---|---|
| `image` | downloaded file from `creative_id_image` | The white-background product image to edit. |
| `prompt` | rendered from `prompts/ad_image_prompt.txt` | Instruction for creating the advertising image. |
| `model` | default `gpt-image-1.5` | Image generation/editing model. |
| `size` | default `1024x1024` | Output image size. |
| `quality` | default `medium` | Output quality level. |
| `output_format` | default `png` | Saved image format. |
| `n` | default `1` | Number of images generated per product row. |

Authentication uses:

```bash
export OPENAI_API_KEY="your_api_key"
```

## Prompt Template

Current template file:

```text
prompts/ad_image_prompt.txt
```

The template uses CSV placeholders:

```text
{ori_title}
{creative_id_brand}
{level_one_category_name}
{creative_id_price}
{creative_id_promotion}
{orientation}
```

The rendered prompt currently tells the model to:

- Use the white-background product image as the source product.
- Preserve product appearance, shape, color, and visible packaging details.
- Use product title, brand, category, price, promotion, and creative orientation.
- Make the image commercially appealing.
- Avoid incorrect text, fake claims, unsupported certifications, distorted hands, broken product geometry, unrealistic packaging, and cluttered backgrounds.
- Output an e-commerce or social media advertising image.

## Creative Orientation

The script supports three controlled values:

```text
Product-oriented
Context-oriented
Affect-oriented
```

Usage:

```bash
python3 scripts/generate_images/generate_from_csv.py --orientation Product-oriented --limit 1
python3 scripts/generate_images/generate_from_csv.py --orientation Context-oriented --limit 1
python3 scripts/generate_images/generate_from_csv.py --orientation Affect-oriented --limit 1
```

At the moment, `orientation` is inserted into the same base prompt. If stronger experimental manipulation is needed later, create separate prompt templates for each orientation.

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

The manifest records product id, category, brand, orientation, source URL, local source path, output prefix, model, size, quality, output format, status, prompt, API usage when returned, and errors if any.

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
  --prompt-file prompts/ad_image_prompt.txt \
  --orientation Product-oriented \
  --limit 1
```

## Official References

- OpenAI Image generation guide: https://platform.openai.com/docs/guides/images/image-generation
- OpenAI Images API reference: https://platform.openai.com/docs/api-reference/images
- OpenAI GPT Image 1 model page: https://platform.openai.com/docs/models/gpt-image-1
