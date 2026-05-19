# Prepare Data

Placeholder for future data preparation scripts.

Expected workflow:

1. Validate that input CSV files contain the required schema.
2. Filter rows where `is_white_image == 1`.
3. Sample products by `level_one_category_name`.
4. Create experiment-ready CSV files under `data/experiment/`.

The full catalog should remain in `data/raw/white_bg_product_catalog.csv`.
