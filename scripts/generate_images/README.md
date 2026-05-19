# Generate Images

Placeholder for future GenAI image generation scripts.

Expected workflow:

1. Read product rows from `data/raw/white_bg_product_catalog.csv` or `data/experiment/white_bg_product_catalog_experiment.csv`.
2. Download or reference the white-background product image from `creative_id_image`.
3. Generate prompts based on product category and creative orientation.
4. Support three creative orientations:
   - `Product-oriented`
   - `Context-oriented`
   - `Affect-oriented`
5. Save generated images to `outputs/`.

Recommended output naming:

```text
{id}_{orientation}_{variant}.png
```
