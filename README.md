# GenAI Ad Image Research

This repository organizes research materials for studying how generative AI creates advertising images from white-background product images, and how product-category fit changes across different visual creative orientations.

The core research question is not only whether GenAI-generated ad images work, but how AI-specific mechanisms reshape visual persuasion: AI source inference, generative search, prompt-image alignment, AI artifacts, portfolio homogenization, and scalable personalization.

## Repository Structure

- `data/raw/white_bg_product_catalog.csv`: full white-background product catalog used as the source pool.
- `data/experiment/white_bg_product_catalog_experiment.csv`: smaller experiment-oriented product sample.
- `docs/literature/`: literature matrices and theory notes.
- `docs/figures/`: SVG theory diagrams and figure index.
- `docs/image_api_call_spec.md`: current image API call, model defaults, prompt fields, and test commands.
- `references/`: BibTeX references that can be versioned.
- `prompts/`: prompt templates used by image generation scripts.
- `scripts/`: scaffold for future data preparation and image generation scripts.
- `outputs/`: default destination for generated images, logs, and intermediate results. Contents are ignored by Git.

## Data Schema

Both product CSV files use the same fields:

```text
id, material_id, ori_title, creative_id_image, creative_id_brand,
creative_id_price, creative_id_promotion, level_one_category_name,
is_white_image
```

`creative_id_image` is the white-background product image URL and is the default image source for future generation pipelines.

## Planned Generation Workflow

Future scripts should:

1. Read product metadata from `data/raw/` or `data/experiment/`.
2. Filter to `is_white_image == 1`.
3. Generate prompts by product category and creative orientation.
4. Support `Product-oriented`, `Context-oriented`, and `Affect-oriented` ad image variants.
5. Write generated images and logs to `outputs/`.

## Generate Images

The first generation script is:

```bash
python3 scripts/generate_images/generate_from_csv.py --dry-run --limit 1
```

To download source white-background images without calling the API:

```bash
python3 scripts/generate_images/generate_from_csv.py --download-only --limit 3
```

To call the OpenAI Images Edit API:

```bash
export OPENAI_API_KEY="your_api_key"
python3 scripts/generate_images/generate_from_csv.py \
  --csv data/experiment/white_bg_product_catalog_experiment.csv \
  --prompt-file prompts/ad_image_prompt.txt \
  --orientation Product-oriented \
  --limit 1
```

Generated images and manifests are written to `outputs/`, which is ignored by Git.

## Copyright and Local Files

PDF papers, Word files, Excel files, extracted full texts, local IDE settings, and generated outputs are not intended for GitHub upload. Keep them local or under ignored paths such as `local_only/`.
