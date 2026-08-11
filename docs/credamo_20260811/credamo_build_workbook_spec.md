# Credamo Build Workbook Specification

> Intended export: `credamo_build_workbook.xlsx`  
> Current state: source specification complete; XLSX export is blocked because the workspace has no configured spreadsheet authoring runtime. Do not replace this specification with an unverified hand-built workbook. When the runtime is available, create one workbook with the sheets and exact schemas below.

## 1. Workbook-wide rules

- Use UTF-8 text, freeze the first row on every operational sheet, enable filters, wrap long text, and use a pale-blue header row.
- Preserve all identifiers as text. Use no merged cells in data tables.
- `question_id`, `option_code`, `product_id`, `image_id`, `path_id`, and `source_id` are language-neutral interfaces.
- The `question_bank` has one row per question; response options belong in `options`, not in a comma-separated question cell.
- Chinese and English are mirror rows keyed by `question_id + language`; rows with a blank translation are a release blocker.
- Formulas and QA checks must remain visible and auditable. No hidden logic may determine a condition or score.

## 2. Required sheets and schemas

### 2.1 `README`

| Field | Value |
| --- | --- |
| Package title | Credamo bilingual three-stage survey design |
| Version | 2026-08-11 v1.0 |
| Authoritative inputs | Feishu Steps 2026-08-07; Feishu paper design 2026-08-03 |
| Status | `ETHICS_PENDING`; not fieldable before all QA and approvals pass |
| Chinese protocol | `credamo_survey_protocol_zh.md` |
| English protocol | `credamo_survey_protocol_en.md` |
| Maximum-information choice | Enabled: all Main-trial batteries retained; prune only after soft launch and preregistered amendment |
| XLSX release gate | Spreadsheet runtime configured, formula/error scan passed, all sheets visually rendered |

### 2.2 `question_bank`

Use these exact columns in this order:

`stage, language, block_id, page_id, question_id, construct, role, question_type, prompt, required, display_logic, randomization_group, source, adaptation_status, scoring, analysis_level, notes`

Populate two mirror rows (`zh-CN`, `en`) for every reusable question defined in the two protocol files. `prompt` holds only the stem or item wording; endpoint labels, options, and response values are in `options`.

Required code families:

| Stage | IDs / repeating blocks | Role |
| --- | --- | --- |
| `PRE_A` | `CONSENT`, `PREA_INTRO`, `PREA_U1:U5`, `PREA_H1:H5`, `PREA_SA1:SA4`, `PREA_FAM1`, `PREA_PRICE1`, `ATTN_PREA_01`, demographics | Product classification |
| `PRE_B` | `PREB_INTRO`, `PREB_F1:F5`, `PREB_E1:E7`, `PREB_S1:S5`, `PREB_DOM`, `PREB_RECOG`, `PREB_PF1:PF2`, `PREB_VQ1:VQ2`, `PREB_IQ1:IQ5`, `PREB_PR1:PR3`, `PREB_FLU1:FLU3`, `PREB_VA1:VA3` | Meaning and quality validation |
| `MAIN` | `MAIN_INTERP_OPEN`, `MAIN_RECOG_OPEN`, `FIT1:FIT3`, `TR1:TR4`, `PA1:PA3`, `AAD1:AAD3`, `PI1:PI4`, `AS1:AS3`, `MC_F`, `MC_E`, `MC_S`, `MC_DOM`, `IMG_PREF`, `FAM1:FAM3`, `INV1:INV5`, `GAAIS_01:GAAIS_20`, `AI_INFER`, `DISC_RECALL`, `ATTN_MAIN_01`, demographics, `DEMAND_OPEN` | Image-level outcomes and post-study measures |

Set `role` as one of: `screen`, `consent`, `instruction`, `iv`, `primary_interpretive_dv`, `primary_dv`, `secondary_dv`, `manipulation_check`, `covariate`, `quality_check`, `demographic`, `attention_check`, `debrief`.

Set `adaptation_status` as one of: `verbatim_en`, `translated`, `adapted`, `researcher_written`, `controlled_insertion`.

`GAAIS_01:GAAIS_20` must have `adaptation_status=controlled_insertion` until exact source wording, reuse permission, and Chinese back-translation are verified. The workbook must not allow a launch-ready status while any GAAIS text cell is blank or unverified.

### 2.3 `options`

Use columns:

`question_id, language, option_code, option_value, option_label, anchor_side, display_order, exclusive, notes`

Required reusable option groups:

| Group | Code/value rule | Chinese label | English label |
| --- | --- | --- | --- |
| `LIKERT7` | `L7_1`–`L7_7`, values 1–7 | 非常不同意 … 非常同意 | Strongly disagree … Strongly agree |
| `LIKERT5_GAAIS` | `L5_1`–`L5_5`, values 1–5 | 非常不同意 … 非常同意 | Strongly disagree … Strongly agree |
| `DOM` | `DOM_F`, `DOM_E`, `DOM_S`, `DOM_UNCLEAR` | 与中文协议完全一致 | With English wording in protocol |
| `DISC_RECALL` | `RECALL_AI`, `RECALL_NONE`, `RECALL_HUMAN`, `RECALL_DK` | 与中文协议完全一致 | With English wording in protocol |
| `IMG_PREF` | `PREF_F`, `PREF_E`, `PREF_S`, `PREF_NONE` | 图片 A/B/C、都不选 | Image A/B/C, none of them |
| `CONSENT` | `CONSENT_YES`, `CONSENT_NO` | 同意/不同意 | Agree/do not agree |

For semantic differential questions, use seven numeric positions with endpoint labels stored in `option_label` at values 1 and 7 and blank intermediary labels. Do not reverse the numeric values across items.

### 2.4 `codebook`

Use columns:

`variable_name, item_ids, source_id, construct_definition, scale_type, scoring_formula, reverse_scored, primary_status, analysis_level, inclusion_rule, exclusion_rule, notes`

Mandatory composite rows:

| Variable | Item IDs | Scoring | Status |
| --- | --- | --- | --- |
| `UTIL_SCORE` | `PREA_U1:PREA_U5` | mean | Pretest-A selection input |
| `HED_SCORE` | `PREA_H1:PREA_H5` | mean | Pretest-A selection input |
| `SYMBOLIC_SCORE` | `PREA_SA1:PREA_SA4` | mean | Pretest-A selection input |
| `ORIENTATION_SCORE` | `UTIL_SCORE - HED_SCORE` | continuous difference | Main moderator input; not a dichotomous analysis variable |
| `PREB_FUNC` | `PREB_F1:PREB_F5` | mean | Pretest-B manipulation validation |
| `PREB_EXP` | `PREB_E1:PREB_E7` | mean | Pretest-B manipulation validation |
| `PREB_SYM` | `PREB_S1:PREB_S5` | mean | Pretest-B manipulation validation |
| `FIT` | `FIT1:FIT3` | mean | Proximal/secondary |
| `TR` | `TR1:TR4` | mean | Disclosure-related secondary |
| `PA` | `PA1:PA3` | mean | Disclosure-related secondary |
| `AAD` | `AAD1:AAD3` | mean | Co-primary |
| `PI` | `PI1:PI4` | mean | Co-primary |
| `AS` | `AS1:AS3` | mean | Secondary |
| `FAM` | `FAM1:FAM3` | mean by product | Covariate |
| `INV` | `INV1:INV5` | mean by product | Optional covariate |
| `GAAIS_POS` | verified positive subset | author rule | Exploratory; only if gated module is complete |
| `GAAIS_NEG` | verified negative subset | author rule | Exploratory; only if gated module is complete |

### 2.5 `randomization`

Use columns:

`path_id, product_cell, disc, pair_id, product_a_id, product_b_id, order_start, strategy_order_a, strategy_order_b, sequence_template, trial_count, quota_weight, status`

`strategy_order_a` and `strategy_order_b` are dynamic independent permutations of `F|E|S`; the platform implementation must sample among the six permutations and record the realised order. `sequence_template` is either `A-B-A-B-A-B` or `B-A-B-A-B-A`. Every base path has `trial_count=6`, `quota_weight=1`, and `status=ACTIVE` after stimulus freeze.

The 24 base paths are:

| path_id | product_cell | disc | pair_id | product_a_id | product_b_id |
| --- | --- | ---: | --- | --- | --- |
| `ULS_D0_AB` | `U_LOW_S` | 0 | AB | `ULS_A` | `ULS_B` |
| `ULS_D0_AC` | `U_LOW_S` | 0 | AC | `ULS_A` | `ULS_C` |
| `ULS_D0_BC` | `U_LOW_S` | 0 | BC | `ULS_B` | `ULS_C` |
| `ULS_D1_AB` | `U_LOW_S` | 1 | AB | `ULS_A` | `ULS_B` |
| `ULS_D1_AC` | `U_LOW_S` | 1 | AC | `ULS_A` | `ULS_C` |
| `ULS_D1_BC` | `U_LOW_S` | 1 | BC | `ULS_B` | `ULS_C` |
| `UHS_D0_AB` | `U_HIGH_S` | 0 | AB | `UHS_A` | `UHS_B` |
| `UHS_D0_AC` | `U_HIGH_S` | 0 | AC | `UHS_A` | `UHS_C` |
| `UHS_D0_BC` | `U_HIGH_S` | 0 | BC | `UHS_B` | `UHS_C` |
| `UHS_D1_AB` | `U_HIGH_S` | 1 | AB | `UHS_A` | `UHS_B` |
| `UHS_D1_AC` | `U_HIGH_S` | 1 | AC | `UHS_A` | `UHS_C` |
| `UHS_D1_BC` | `U_HIGH_S` | 1 | BC | `UHS_B` | `UHS_C` |
| `HLS_D0_AB` | `H_LOW_S` | 0 | AB | `HLS_A` | `HLS_B` |
| `HLS_D0_AC` | `H_LOW_S` | 0 | AC | `HLS_A` | `HLS_C` |
| `HLS_D0_BC` | `H_LOW_S` | 0 | BC | `HLS_B` | `HLS_C` |
| `HLS_D1_AB` | `H_LOW_S` | 1 | AB | `HLS_A` | `HLS_B` |
| `HLS_D1_AC` | `H_LOW_S` | 1 | AC | `HLS_A` | `HLS_C` |
| `HLS_D1_BC` | `H_LOW_S` | 1 | BC | `HLS_B` | `HLS_C` |
| `HHS_D0_AB` | `H_HIGH_S` | 0 | AB | `HHS_A` | `HHS_B` |
| `HHS_D0_AC` | `H_HIGH_S` | 0 | AC | `HHS_A` | `HHS_C` |
| `HHS_D0_BC` | `H_HIGH_S` | 0 | BC | `HHS_B` | `HHS_C` |
| `HHS_D1_AB` | `H_HIGH_S` | 1 | AB | `HHS_A` | `HHS_B` |
| `HHS_D1_AC` | `H_HIGH_S` | 1 | AC | `HHS_A` | `HHS_C` |
| `HHS_D1_BC` | `H_HIGH_S` | 1 | BC | `HHS_B` | `HHS_C` |

### 2.6 `stimuli`

Use columns:

`product_id, product_cell, product_label_neutral_zh, product_label_neutral_en, strategy, image_id, image_path, candidate_version, prompt_version, model_wrapper, seed, generated_at, internal_blind_review, computational_diagnostics, pretest_b_status, frozen, replacement_of, notes`

Populate 36 frozen-image interface rows exactly as follows; replace every placeholder with the final manifest data before launch.

| product_cell | product IDs | required `image_id` pattern |
| --- | --- | --- |
| `U_LOW_S` | `ULS_A`, `ULS_B`, `ULS_C` | `{product_id}_F`, `{product_id}_E`, `{product_id}_S` |
| `U_HIGH_S` | `UHS_A`, `UHS_B`, `UHS_C` | `{product_id}_F`, `{product_id}_E`, `{product_id}_S` |
| `H_LOW_S` | `HLS_A`, `HLS_B`, `HLS_C` | `{product_id}_F`, `{product_id}_E`, `{product_id}_S` |
| `H_HIGH_S` | `HHS_A`, `HHS_B`, `HHS_C` | `{product_id}_F`, `{product_id}_E`, `{product_id}_S` |

`frozen` is `FALSE` until Pretest B passes the preregistered selection rules. A main-experiment build must fail QA if any of the 36 interface rows is missing, duplicated, has no image path, or is not frozen.

### 2.7 `expert_audit`

Use columns:

`candidate_product_id, reviewer_id_blinded, reviewer_role, utilitarian_rating, hedonic_rating, symbolic_affordance_rating, familiarity_comment, price_comment, technical_eligibility, category_duplication_risk, retain_recommendation, disagreement_flag, adjudication_note, final_decision, audit_date`

Consumer ratings remain the primary source for product perceptions. This sheet records independent expert review, and any model-assisted diagnostic can only be recorded in `disagreement_flag`/`adjudication_note`; it does not replace the consumer score.

### 2.8 `translation_log`

Use columns:

`question_id, source_language, source_text_version, zh_forward_translation, translator_1, zh_back_translation, translator_2, discrepancy, final_zh_text, adjudicator, status, verified_at, notes`

Allowed `status`: `DRAFT`, `FORWARD_TRANSLATED`, `BACK_TRANSLATED`, `ADJUDICATED`, `GAAIS_VERIFIED`, `RELEASED`.

### 2.9 `qa_checklist`

Use columns:

`qa_id, category, check, expected_result, evidence_location, owner, status, checked_at, blocking, notes`

The blocking checks are:

| qa_id | Check | Expected result |
| --- | --- | --- |
| `QA_01` | Unique question IDs | one `question_id + language` row per intended wording |
| `QA_02` | Bilingual parity | Chinese and English counts and IDs match exactly |
| `QA_03` | Stimulus completeness | 12 products and 36 F/E/S images; four cells each have three products |
| `QA_04` | Freeze gate | all 36 rows `frozen=TRUE` before Main launch |
| `QA_05` | Base paths | exactly 24 active rows, all trial_count=6 |
| `QA_06` | Pair balance | each product cell has AB, AC, and BC once under each disclosure level |
| `QA_07` | No consecutive product | both sequence templates alternate A and B |
| `QA_08` | Disclosure safety | `DISC=0` pages contain no AI-source or false-human statement before outcomes |
| `QA_09` | Scoring | all composites have item lists, direction, and analysis role |
| `QA_10` | Ethics gate | consent, privacy, risk/debrief, institution, and data plan all pass |
| `QA_11` | GAAIS gate | complete item wording and translations verified or whole module disabled |
| `QA_12` | Soft launch | both languages tested for image loading, time, dropout, open text, and straight-lining |

## 3. Formula and audit requirements for the eventual XLSX

Implement formula-driven QA cells on `qa_checklist` or a dedicated summary area:

| Check | Example formula / rule |
| --- | --- |
| Number of active base paths | `=COUNTIFS(randomization!M:M,"ACTIVE")` must equal 24 |
| Cell count | `=COUNTIF(stimuli!B:B,"U_LOW_S")` (and equivalents) must equal 9 image rows per cell |
| F/E/S count per product | `=COUNTIFS(stimuli!A:A,product_id,stimuli!E:E,"F")` (and E/S equivalents) must each equal 1 |
| Frozen rows | `=COUNTIF(stimuli!P:P,TRUE)` must equal 36 before Main release |
| Translation parity | compare sorted `question_id` lists by language; mismatch is blocking |
| GAAIS release gate | every `GAAIS_*` row must be `GAAIS_VERIFIED` or module state must be `DISABLED` |

After authoring, render every workbook sheet, inspect representative tables/formulas, and scan for `#REF!`, `#DIV/0!`, `#VALUE!`, `#NAME?`, and `#N/A` before exporting a single `.xlsx` file.

## 4. Credamo configuration map

| Workbook interface | Credamo configuration |
| --- | --- |
| `question_bank` + `options` | Build question pages and matrices in the listed `page_id` order |
| `PREA_SLOT_*` / `PREB_IMAGE_BLOCK` | Use random/group survey logic with hidden product/image IDs written to exports |
| `randomization` | Use randomized-experiment/group assignment to allocate `PRODUCT_CELL`, `DISC`, and `PAIR_ID`; set equal quotas |
| `stimuli` | Upload only frozen image assets and map by `image_id`; no visible strategy metadata |
| `display_logic` | Show disclosed vs undisclosed instruction once before trials; show AI inference only if `DISC=0` |
| `qa_checklist` | Conduct 24 path tests, quota simulation, and bilingual soft launch before recruitment |

This specification deliberately does not claim a direct Credamo import format. Use it as the canonical manual build sheet unless Credamo supplies a documented import schema that is verified against these columns.
