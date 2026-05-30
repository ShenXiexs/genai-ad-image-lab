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
orientation-specific prompt files under prompts/
```

Source image column:

```text
creative_id_image
```

The script reads each selected product row, downloads the white-background product image from `creative_id_image`, renders the orientation-specific prompt template with product metadata, and sends both the image and prompt to the Images Edit endpoint.

## API Endpoint And Model

Default endpoint:

```text
POST https://api.vectorengine.cn/v1/images/edits
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
  --api-base-url https://api.vectorengine.cn/v1 \
  --endpoint https://api.vectorengine.cn/v1/images/edits
```


## Row Selection And Reproducibility

By default, the script processes the previous fixed random-10 sample and generates all three canonical orientations. The fixed sample ids are:

```text
79469, 1562371, 1241251, 103728, 1235091, 1557798, 1544158, 1251674, 28257, 104207
```

The default actual run is:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --api-key "sk-xxx"
```

For CSV-order rows:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --selection-mode sequential \
  --start 0 \
  --limit 20 \
  --api-key "sk-xxx"
```

For randomized experimental batches:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --selection-mode random \
  --sample-size 20 \
  --random-seed 20260523 \
  --api-key "sk-xxx"
```

`--random-seed` defaults to `20260523` and can also be set with `GENAI_AD_IMAGE_RANDOM_SEED`. The manifest records selection mode, `sample_size`, and `random_seed` for reproducibility.

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

or the runtime argument:

```bash
python3 scripts/generate_images/generate_from_csv.py --api-key "sk-xxx"
```

The key is read at runtime and is not written to repository files or the manifest.

## Prompt Template

Recommended orientation-specific prompt files:

```text
prompts/product_oriented_ad_image_prompt.txt
prompts/context_oriented_ad_image_prompt.txt
prompts/symbolic_oriented_ad_image_prompt.txt
```

The original prompts are preserved as `--prompt-version current`. A revised function-separation prompt set is available as `--prompt-version function_v2`:

```text
prompts/product_oriented_ad_image_prompt.function_v2.txt
prompts/context_oriented_ad_image_prompt.function_v2.txt
prompts/symbolic_oriented_ad_image_prompt.function_v2.txt
```

A concise Park-theory-grounded v4 prompt set is available as `--prompt-version v4`:

```text
prompts/product_oriented_ad_image_prompt.v4.txt
prompts/symbolic_oriented_ad_image_prompt.v4.txt
prompts/experiential_oriented_ad_image_prompt.v4.txt
```

A concept-only Park-theory-grounded v5 prompt set is available as `--prompt-version v5`:

```text
prompts/product_oriented_ad_image_prompt.v5.txt
prompts/symbolic_oriented_ad_image_prompt.v5.txt
prompts/experiential_oriented_ad_image_prompt.v5.txt
```

A balanced Park-theory-grounded v6 prompt set with general image-quality controls is available as `--prompt-version v6`:

```text
prompts/product_oriented_ad_image_prompt.v6.txt
prompts/symbolic_oriented_ad_image_prompt.v6.txt
prompts/experiential_oriented_ad_image_prompt.v6.txt
```

A v7 Park-theory-grounded prompt set with function_v2-style image quality and fidelity controls is available as `--prompt-version v7`:

```text
prompts/product_oriented_ad_image_prompt.v7.txt
prompts/symbolic_oriented_ad_image_prompt.v7.txt
prompts/experiential_oriented_ad_image_prompt.v7.txt
```

A v8 prompt set with Park's original definition and only minimal quality controls is available as `--prompt-version v8`:

```text
prompts/product_oriented_ad_image_prompt.v8.txt
prompts/symbolic_oriented_ad_image_prompt.v8.txt
prompts/experiential_oriented_ad_image_prompt.v8.txt
```

A v9 prompt set with Park's original definition plus selected function_v2-style detail controls is available as `--prompt-version v9`:

```text
prompts/product_oriented_ad_image_prompt.v9.txt
prompts/symbolic_oriented_ad_image_prompt.v9.txt
prompts/experiential_oriented_ad_image_prompt.v9.txt
```

A v10 prompt set with Park definitions plus later prompt-alignment and discriminant-validity controls is available as `--prompt-version v10`:

```text
prompts/product_oriented_ad_image_prompt.v10.txt
prompts/symbolic_oriented_ad_image_prompt.v10.txt
prompts/experiential_oriented_ad_image_prompt.v10.txt
```

A v11 prompt set with stronger white-background source-image grounding is available as `--prompt-version v11`:

```text
prompts/product_oriented_ad_image_prompt.v11.txt
prompts/symbolic_oriented_ad_image_prompt.v11.txt
prompts/experiential_oriented_ad_image_prompt.v11.txt
```

A v12 prompt set that directly fuses function_v2-style image quality and visual direction with Park's three brand-concept definitions is available as `--prompt-version v12`:

```text
prompts/product_oriented_ad_image_prompt.v12.txt
prompts/symbolic_oriented_ad_image_prompt.v12.txt
prompts/experiential_oriented_ad_image_prompt.v12.txt
```

A v13 prompt set that keeps the v12-style execution discipline but sharpens source-image-first grounding and discriminant separation is available as `--prompt-version v13`:

```text
prompts/product_oriented_ad_image_prompt.v13.txt
prompts/symbolic_oriented_ad_image_prompt.v13.txt
prompts/experiential_oriented_ad_image_prompt.v13.txt
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

The script supports version-specific canonical values. `current` and `function_v2` use:

```text
Product-oriented
Context-oriented
Symbolic-oriented
```

`v3`, `v4`, `v5`, `v6`, `v7`, `v8`, `v9`, `v10`, `v11`, `v12`, and `v13` use Park et al. brand concepts:

```text
Product-oriented
Symbolic-oriented
Experiential-oriented
```

`Affect-oriented` is accepted only as a deprecated compatibility alias. When supplied, the script normalizes it to `Symbolic-oriented`; output paths, manifest orientation, and `{orientation}` prompt values use `Symbolic-oriented`. Under `--prompt-version v3`, `v4`, `v5`, `v6`, `v7`, `v8`, `v9`, `v10`, `v11`, `v12`, or `v13`, `Context-oriented`, `context`, and `usage` are deprecated compatibility aliases for `Experiential-oriented`.

Usage:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --image-type product \
  --selection-mode sequential \
  --limit 1

python3 scripts/generate_images/generate_from_csv.py \
  --image-type context \
  --selection-mode sequential \
  --limit 1

python3 scripts/generate_images/generate_from_csv.py \
  --image-type symbolic \
  --selection-mode sequential \
  --limit 1
```

Use the v4 prompt set:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --prompt-version v4 \
  --selection-mode sequential \
  --limit 1

python3 scripts/generate_images/generate_from_csv.py \
  --prompt-version v4 \
  --image-type experiential \
  --selection-mode sequential \
  --limit 1

python3 scripts/generate_images/generate_from_csv.py \
  --prompt-version v4 \
  --orientation Context-oriented \
  --selection-mode sequential \
  --limit 1
```

Use the v5 concept-only prompt set:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --prompt-version v5 \
  --selection-mode sequential \
  --limit 1
```

Use the v6 balanced prompt set:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --prompt-version v6 \
  --selection-mode sequential \
  --limit 1
```

Use the v7 quality-focused Park prompt set:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --prompt-version v7 \
  --selection-mode sequential \
  --limit 1
```

Use the v8 minimal-definition Park prompt set:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --prompt-version v8 \
  --selection-mode sequential \
  --limit 1
```

Use the v9 definition-plus-detail Park prompt set:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --prompt-version v9 \
  --selection-mode sequential \
  --limit 1
```

Use the v10 integrated research prompt set:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --prompt-version v10 \
  --selection-mode sequential \
  --limit 1
```

Use the v11 stronger-grounding prompt set:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --prompt-version v11 \
  --selection-mode sequential \
  --limit 1
```

Use the v12 function_v2-quality plus Park-definition prompt set:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --prompt-version v12 \
  --selection-mode sequential \
  --limit 1
```

Use the v13 sharper-separation prompt set:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --prompt-version v13 \
  --selection-mode sequential \
  --limit 1
```

Use the revised Function v2 prompt set:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --image-type product \
  --prompt-version function_v2 \
  --selection-mode random \
  --sample-size 10 \
  --random-seed 20260523 \
  --api-key "sk-xxx"
```

## Output Files

Downloaded source images:

```text
outputs/{model}_{selection_label}_{orientation_label}_{timestamp}/source_images/{id}.{ext}
```

Generated images:

```text
outputs/{model}_{selection_label}_{orientation_label}_{timestamp}/generated/{orientation}/{id}_{orientation}.png
```

Manifest log:

```text
outputs/{model}_{selection_label}_{orientation_label}_{timestamp}/generation_manifest.jsonl
```

The manifest records product id, category, brand, canonical orientation, requested orientation, selection mode, prompt version, run directory, source URL, local source path, output prefix, endpoint, model, size, quality, output format, status, prompt, API usage when returned, and errors if any.

`outputs/` is ignored by Git except for `outputs/.gitkeep`.

## Safe Test Commands

Render prompt only; no image download and no API call:

```bash
python3 scripts/generate_images/generate_from_csv.py --dry-run --selection-mode sequential --limit 1
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
  --orientation Product-oriented \
  --selection-mode sequential \
  --limit 1
```
