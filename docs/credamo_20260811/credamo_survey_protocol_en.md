# Credamo Three-Stage Survey Protocol (International English)

> Version: 2026-08-11 v1.0  
> Status: implementation-ready design package; **ethics status: ETHICS_PENDING. No recruitment or data collection may begin before IRB/ethics approval.**  
> Authoritative sources: Feishu *Steps* (2026-08-07) and *Writing: Background-Motivation-PicSelection-0803* (2026-08-03). This protocol does not supersede historical material in `docs/`.

## 1. Study Architecture and Global Rules

The project contains three independent Credamo surveys.

| Stage | Project code | Target and purpose | Default quota |
| --- | --- | --- | --- |
| Product classification pretest | `PRE_A` | Target consumers rate 24 de-branded product candidates on utilitarian/hedonic orientation, symbolic affordance, and matching variables | N=160 per language; 6 products/person; about 40 valid ratings/product |
| Image validation pretest | `PRE_B` | Target consumers assess the intended meaning and quality of 36 internally shortlisted advertising images | N=210 per language; 6 images/person; about 35 valid ratings/image |
| Main experiment | `MAIN` | Estimate effects of visual-meaning strategy, product attributes, and AI-source disclosure on interpretation and advertising outcomes | Final N is determined after soft launch through mixed-effects power simulation; expand equally across 24 allocation units |

### 1.1 Shared eligibility and quality rules

- Participants must be at least 18 years old and fluent readers of English.
- Permit only desktop or tablet devices that can display square advertising images clearly. Mobile phones fail the device screen and exit politely.
- A participant may complete only one study stage; `PRE_A`, `PRE_B`, and `MAIN` samples are mutually exclusive.
- All scale items are required. Open-ended answers require at least three English words, but answer content does not trigger automated exclusion.
- Do not exclude a main-study participant because of disclosure recall, source inference, manipulation checks, or subjective dislike of an image. The primary disclosure analysis follows intention-to-treat.
- Record completion time, device, platform deduplication status, and page timing. Apply exclusions only under preregistered rules.

### 1.2 Standard response formats

Unless stated otherwise, agreement items use:

`1 Strongly disagree | 2 Disagree | 3 Somewhat disagree | 4 Neither agree nor disagree | 5 Somewhat agree | 6 Agree | 7 Strongly agree`

Semantic-differential items use seven equally spaced positions between the stated left and right anchors; the more favourable right anchor is coded 7. Variable names, option codes, and missing-data codes are identical to the Chinese protocol.

### 1.3 Governance placeholders

Before launch, replace all bracketed placeholders: `[PI name]`, `[institution]`, `[ethics approval number]`, `[contact email]`, `[incentive]`, `[estimated duration]`, `[data storage location]`, `[retention period]`, and `[withdrawal method]`.

## 2. Consent and Shared End Page

### 2.1 Consent page (`CONSENT_EN`)

**Title:** Advertising Image Impressions Study: Informed Consent

**Text:**

You are invited to take part in a study about impressions of product advertising images. The study is conducted by [PI name] at [institution]. If you agree to participate, you will view product images and answer questions about your immediate impressions. It will take approximately [estimated duration]. This study does not sell products and does not ask you to buy or use any product.

Participation is voluntary. You may stop before submitting without penalty; unsubmitted responses will not be used. The study is expected to involve minimal risk, such as mild fatigue from viewing images and answering attitude questions. You will receive no direct personal benefit, but your responses may help researchers understand how advertising images communicate different meanings.

The study will collect only information needed for the research. De-identified data will be stored at [data storage location], accessed only by authorised research staff, and retained for [retention period]. For questions about the study, data handling, withdrawal, or participant rights, contact [contact email]. Ethics approval status: [ethics approval number].

**Options:**

- `CONSENT_YES`: I am at least 18 years old, have read and understood this information, and voluntarily agree to participate.
- `CONSENT_NO`: I do not agree to participate.

`CONSENT_NO` terminates with: `Thank you for your time. You have not been enrolled in this study.`

### 2.2 Shared thank-you page (`THANKS_EN`)

`Thank you for taking part. Please submit your response to complete the survey.`

## 3. Pretest A: Product Classification and Screening

### 3.1 Purpose, materials, and randomisation

`PRE_A` has a source pool of 24 de-branded, white-background product candidates (`CAND_01`–`CAND_24`). Each participant is randomly assigned six distinct products in random order. Each product is shown only with its white-background reference image and a neutral category label; no brand, price, promotion, strategy label, or generation source is shown.

Use reusable block `PREA_PRODUCT_BLOCK`. Backend slots `PREA_SLOT_01`–`PREA_SLOT_06` map to a specific `candidate_product_id`; export this ID, category, and display order.

### 3.2 Introduction (`PREA_INTRO`)

**Title:** Product Category Impressions Study

**Text:**

You will see several product images without brand information. Please answer based on your general impression of this type of product, rather than on any particular brand, price, or promotion. There are no right or wrong answers; select the response that best reflects your first impression.

### 3.3 Reusable product block

**Page A: neutral display**

Show `[white-background reference image: {{candidate_product_id}}]` and `Product category: {{neutral_category_en}}`.

**Page B: utilitarian orientation, HED/UT (`PREA_U1`–`PREA_U5`)**

Stem: `Please evaluate this product category. For each pair of words, indicate which end better describes the product.`

| ID | Left anchor | Right anchor |
| --- | --- | --- |
| `PREA_U1` | Ineffective | Effective |
| `PREA_U2` | Unhelpful | Helpful |
| `PREA_U3` | Not functional | Functional |
| `PREA_U4` | Unnecessary | Necessary |
| `PREA_U5` | Impractical | Practical |

**Page C: hedonic orientation, HED/UT (`PREA_H1`–`PREA_H5`)**

Use the same stem.

| ID | Left anchor | Right anchor |
| --- | --- | --- |
| `PREA_H1` | Not fun | Fun |
| `PREA_H2` | Dull | Exciting |
| `PREA_H3` | Not delightful | Delightful |
| `PREA_H4` | Not thrilling | Thrilling |
| `PREA_H5` | Unenjoyable | Enjoyable |

**Page D: symbolic affordance (`PREA_SA1`–`PREA_SA4`)**

Stem: `Thinking about this product category, please indicate your agreement with the following statements.`

1. `PREA_SA1`: This product could express something about the user's identity.
2. `PREA_SA2`: This product can communicate a particular lifestyle or social image.
3. `PREA_SA3`: Owning this product may convey something about the kind of person who uses it.
4. `PREA_SA4`: This product has meaning beyond its practical function.

**Page E: matching checks**

1. `PREA_FAM1`: Before this study, how familiar were you with this type of product?  
   `1 Not at all familiar | 2 Slightly familiar | 3 Somewhat unfamiliar | 4 Neither familiar nor unfamiliar | 5 Somewhat familiar | 6 Familiar | 7 Very familiar`
2. `PREA_PRICE1`: I would expect this type of product to be expensive. (standard 7-point agreement scale)

### 3.4 Attention and demographics

Insert after the third product block:

`ATTN_PREA_01`: `To show that you are reading carefully, please select “Somewhat agree” for this item.`

Collect `AGE`, `GENDER`, `EDU`, `REGION`, `LANG_PRIMARY`, and `DEVICE` at the end. Use option codes shared with the Chinese protocol.

### 3.5 Scores and product-selection rules

- `UTIL_SCORE = mean(PREA_U1:PREA_U5)`; `HED_SCORE = mean(PREA_H1:PREA_H5)`; `SYMBOLIC_SCORE = mean(PREA_SA1:PREA_SA4)`.
- `ORIENTATION_SCORE = UTIL_SCORE - HED_SCORE`; do not dichotomise this continuous measure for the main analysis.
- Document candidate selection, familiarity/price balancing, category deduplication, and expert-audit outcomes in the `expert_audit` sheet.
- Retain three products in each cell. Sampling labels are only `U_LOW_S`, `U_HIGH_S`, `H_LOW_S`, and `H_HIGH_S`.

## 4. Pretest B: Image Manipulation and Quality Validation

### 4.1 Materials and balanced assignment

After internal blind review and automated diagnostics, retain one candidate per `product_id × strategy`, producing 36 images: 12 products × `F` (functional), `E` (experiential), and `S` (symbolic).

Each participant is randomly assigned six images from six different products, with two F, two E, and two S images. Randomise image order and do not repeat a product. Export `image_id`, `product_id`, `product_cell`, `strategy`, display order, and pretest quota cell for every `PREB_IMAGE_BLOCK`.

### 4.2 Introduction (`PREB_INTRO`)

**Title:** Advertising Image Understanding and Quality Study

**Text:**

You will see several product advertising images. Please answer based on each image itself. The images do not display their design goal or production source. Do not try to guess what the researchers expect; report your first impression.

### 4.3 Reusable image block

**Page A: advertising image only**

Display `[advertising image: {{image_id}}]`. Do not show the white-background reference image, product description, strategy label, or AI source.

**Page B: perceived functional visual orientation (`PREB_F1`–`PREB_F5`)**

Stem: `Based on the advertising image you just saw, please indicate your agreement with the following statements.`

1. This image makes the product seem functional.
2. This image makes the product seem capable of doing its job.
3. This image makes the product seem likely to perform well.
4. This image clearly communicates the product's practical function.
5. This image highlights what the product is supposed to do.

**Page C: perceived experiential visual orientation (`PREB_E1`–`PREB_E7`)**

Use the same stem.

1. The product as presented in this image makes a strong impression on my visual or other senses.
2. The product as presented in this image is interesting in a sensory way.
3. The product as presented in this image appeals to my senses.
4. The product as presented in this image seems sensorially pleasing.
5. The product as presented in this image seems stimulating.
6. The product as presented in this image seems able to stimulate my curiosity.
7. The product as presented in this image seems interesting to experience.

**Page D: perceived symbolic visual orientation (`PREB_S1`–`PREB_S5`)**

Use the same stem.

1. This image makes the product seem capable of expressing a distinctive image.
2. This image makes the product seem helpful for distinguishing the user from others.
3. This image makes the product seem able to symbolise personal achievements or identity.
4. This image suggests something about the kind of person who would use this product.
5. This image gives the product meaning beyond its practical function.

**Page E: dominant meaning and recognition**

1. `PREB_DOM`: Which aspect does this image emphasise most?
   - `DOM_F`: What practical problem the product solves.
   - `DOM_E`: What using or consuming it may feel like.
   - `DOM_S`: What it says about a person, role, or group.
   - `DOM_UNCLEAR`: Cannot tell.
2. `PREB_RECOG`: What type of product is shown in this image? Please answer briefly.

**Page F: reference comparison and technical quality**

Only on this page, show `[white-background reference image: {{product_id}}]` beside `[advertising image: {{image_id}}]`.

Stem: `Please compare the two images and rate the advertising image on the following statements.`

| Construct | ID | Item |
| --- | --- | --- |
| Product fidelity | `PREB_PF1` | The advertised product appears to be the same product as the reference product. |
| Product fidelity | `PREB_PF2` | The image preserves recognisable design features of the product. |
| Coherence/ad plausibility | `PREB_VQ1` | The image is visually coherent. |
| Coherence/ad plausibility | `PREB_VQ2` | The image looks like a plausible product advertisement. |
| Image quality | `PREB_IQ1` | The image is clear and sharp. |
| Image quality | `PREB_IQ2` | The colours appear appropriate and visually stable. |
| Image quality | `PREB_IQ3` | I am satisfied with the overall quality of the image. |
| Image quality | `PREB_IQ4` | The image has no visible artefacts or distortions. |
| Image quality | `PREB_IQ5` | The resolution meets my expectation. |
| Photorealism | `PREB_PR1` | The image looks like a photograph of a real scene. |
| Photorealism | `PREB_PR2` | I can easily imagine seeing this image in the real world. |
| Photorealism | `PREB_PR3` | The textures look natural and real. |
| Processing fluency | `PREB_FLU1` | This image is easy to understand. |
| Processing fluency | `PREB_FLU2` | It is easy to make sense of this image. |
| Processing fluency | `PREB_FLU3` | The image presentation feels clear. |
| Aesthetic appeal | `PREB_VA1` | The image is visually striking. |
| Aesthetic appeal | `PREB_VA2` | The image is good-looking. |
| Aesthetic appeal | `PREB_VA3` | The image looks appealing. |

### 4.4 Stimulus freeze and failure handling

- Before collection, record preregistered thresholds for target-strategy recognition, confidence intervals against the 33.3% baseline, product fidelity, quality, and quality balance across strategies in `qa_checklist`.
- Never use Aad, purchase intention, satisfaction, recommendation, or any main-experiment result to select an image.
- If a cell fails, replace only that `product_id × strategy` image and send the replacement through the complete `PRE_B` check. Do not reselect successful cells.
- After all 36 images pass, set `frozen=TRUE` in `stimuli` and preserve filename, prompt version, model/wrapper, seed, generation date, and replacement history.

## 5. Main Experiment: 3×2 Advertising-Image Experiment

### 5.1 Backend randomisation specification

Do not disclose experimental-group labels to participants. Randomisation uses the following fields.

| Field | Levels | Implementation |
| --- | --- | --- |
| `PRODUCT_CELL` | `U_LOW_S`, `U_HIGH_S`, `H_LOW_S`, `H_HIGH_S` | Equal allocation across four cells; each cell contains exactly three frozen products |
| `DISC` | `1=AI_DISCLOSED`, `0=NO_SOURCE_DISCLOSURE` | 1:1 allocation within each product cell |
| `PAIR_ID` | `AB`, `AC`, `BC` within each cell | Rotate equally within each product-cell × disclosure stratum |
| `ORDER_START` | `A_FIRST`, `B_FIRST` | Randomly choose which product begins the alternating sequence |
| `STRATEGY_ORDER_A/B` | permutations of F/E/S | Independently randomise the three strategies for each product; never present the same product consecutively |

There are `4 product cells × 2 disclosure conditions × 3 product pairs = 24` base allocation units. Each participant evaluates two products × three strategies = six trials, in `A-B-A-B-A-B` or `B-A-B-A-B-A` order. Each trial exports `trial_no`, `product_id`, `image_id`, `strategy`, `DISC`, `PRODUCT_CELL`, and `PAIR_ID`.

### 5.2 Welcome page and source-disclosure manipulation

**Shared welcome page (`MAIN_INTRO`):**

**Title:** Advertising Image Impressions Study

**Text:**

Please view each advertising image and report your immediate impression of that image. Answer based on the image itself and do not return to alter an earlier response. The images are research materials only and do not constitute commercial product promises.

**AI-disclosed condition (`DISC=1`, `MAIN_DISCLOSED`):**

The advertising images you will evaluate were generated by a generative AI system from standardised visual briefs. Please view and evaluate them one at a time.

**No-source-disclosure condition (`DISC=0`, `MAIN_UNDISCLOSED`):**

The advertising images you will evaluate were produced from de-branded product reference images and research-defined visual briefs. Please view and evaluate them one at a time.

The undisclosed condition must not mention AI, artificial intelligence, human creation, photographers, or an equivalent production-source claim.

### 5.3 Fixed page order within every trial

Keep `[advertising image: {{image_id}}]` visible at the top of each trial page. Do not show a source label, prompt, brand, strategy name, white-background reference image, or actual price.

#### Page 1: natural interpretation of advertising meaning

`MAIN_INTERP_OPEN`: `What do you think this advertisement is mainly communicating about the product? Please describe it briefly in your own words.`

After collection, two blind coders classify answers as `FUNC`, `EXP`, `SYM`, `MIXED`, `UNCLEAR_IRRELEVANT`, or `OTHER_EMERGENT`.

#### Page 2: product-category recognition

`MAIN_RECOG_OPEN`: `What type of product is shown in this image? Please answer briefly.`

#### Page 3: product-image fit (3 items)

Stem: `Please evaluate the fit between this product and the visual presentation in the image.`

| ID | Left anchor | Right anchor |
| --- | --- | --- |
| `FIT1` | Do not go well together | Go well together |
| `FIT2` | Bad match | Good match |
| `FIT3` | Incompatible | Compatible |

#### Page 4: representational trust in the product image (4 items)

Stem: `Based on the advertising image you just saw, please indicate your agreement with the following statements.`

1. `TR1`: This product image is trustworthy.
2. `TR2`: I can rely on this image when evaluating the product.
3. `TR3`: I believe this image truthfully visualises the product.
4. `TR4`: I trust that the actual product would be consistent with what is shown in the image.

#### Page 5: perceived advertisement authenticity (3 items)

1. `PA1`: This advertisement feels genuine rather than fabricated.
2. `PA2`: The product presentation feels authentic.
3. `PA3`: This advertisement fits a plausible product-use context.

#### Page 6: attitude toward the advertisement, Aad (3 items)

Stem: `Overall, I find this advertisement…`

| ID | Left anchor | Right anchor |
| --- | --- | --- |
| `AAD1` | Unfavourable | Favourable |
| `AAD2` | Unappealing | Appealing |
| `AAD3` | Unpleasant | Pleasant |

#### Page 7: purchase intention (4 items)

1. `PI1`: I would consider buying this product.
2. `PI2`: I am likely to purchase this product.
3. `PI3`: I would be willing to buy this product.
4. `PI4`: If I needed this type of product, I would consider this one.

#### Page 8: advertising satisfaction (3 items)

1. `AS1`: Overall, I am satisfied with this advertisement.
2. `AS2`: This advertisement meets what I expect from an advertisement for this type of product.
3. `AS3`: After viewing it, I feel satisfied with its information and presentation.

#### Page 9: short manipulation checks (after all outcome measures)

Stem: `Based on the advertising image you just saw, please indicate your agreement with the following statements.`

1. `MC_F`: This image clearly communicates the product's practical function.
2. `MC_E`: The product as presented in this image seems interesting to experience.
3. `MC_S`: This image gives the product meaning beyond its practical function.
4. `MC_DOM`: Which aspect does this image emphasise most?
   - `DOM_F`: What practical problem the product solves.
   - `DOM_E`: What using or consuming it may feel like.
   - `DOM_S`: What it says about a person, role, or group.
   - `DOM_UNCLEAR`: Cannot tell.

### 5.4 Pages after all six trials

**Comparative selection, once per product:**

Show the product's F/E/S frozen images again in randomised positions and record `display_position`.

`IMG_PREF`: `Which image would you most prefer to be used to present this product?`

- `PREF_F`: Image A
- `PREF_E`: Image B
- `PREF_S`: Image C
- `PREF_NONE`: None of them

Recode the selected position to strategy using `image_id` at export.

**Familiarity and involvement, once per product:**

Stem: `Please answer based on your experience before taking this study.`

| ID | Left anchor | Right anchor |
| --- | --- | --- |
| `FAM1` | Unfamiliar | Familiar |
| `FAM2` | Inexperienced | Experienced |
| `FAM3` | Not knowledgeable | Knowledgeable |
| `INV1` | Unimportant | Important |
| `INV2` | Irrelevant | Relevant |
| `INV3` | Means nothing to me | Means a lot to me |
| `INV4` | Uninvolving | Involving |
| `INV5` | Not needed | Needed |

**Controlled full-GAAIS insertion:**

`GAAIS_01`–`GAAIS_20` use the confirmatory-validated Schepman & Rodway version with the five-point response scale: `1 Strongly disagree | 2 Disagree | 3 Neutral | 4 Agree | 5 Strongly agree`. Score the 12 positive and eight negative items as separate subscales; do not collapse them into an unvalidated total score.

This protocol deliberately does not recreate the 20 item texts from memory. Before launch, the research team must import the exact current English wording from the authors' open resource or Appendix A, confirm reuse permission, independently translate/back-translate it for the Chinese protocol, and mark `GAAIS_VERIFIED=TRUE` in `translation_log`. Until that gate is met, disable the full module rather than replace it with researcher-written items and call the result GAAIS.

**Source inference, undisclosed condition only (`DISC=0`):**

`AI_INFER`: `Before receiving any information about the source of the images, how likely did you think it was that these images were made by generative AI?`

`1 Extremely unlikely | 2 Unlikely | 3 Somewhat unlikely | 4 Unsure | 5 Somewhat likely | 6 Likely | 7 Extremely likely`

**Disclosure recall, both conditions, after all outcome measures:**

`DISC_RECALL`: `How did the study introduction describe the production source of these advertising images?`

- `RECALL_AI`: It explicitly stated that they were made by generative AI.
- `RECALL_NONE`: It did not state a specific production source.
- `RECALL_HUMAN`: It explicitly stated that they were made by a human photographer.
- `RECALL_DK`: I do not remember.

**Attention, demographics, and demand guess:**

- `ATTN_MAIN_01`: `To show that you are reading carefully, please select “Disagree” for this item.`
- `AGE`, `GENDER`, `EDU`, `REGION`, `LANG_PRIMARY`, `DEVICE`.
- `DEMAND_OPEN`: `What do you think this study was mainly examining? Please answer briefly.`

### 5.5 True-source debrief, both conditions, before submission

**Title:** Study Information

**Text:**

All advertising images you evaluated were generated by a generative AI system from de-branded product reference images and research-defined visual instructions. Different images were intended to highlight product function, the possible experience of using the product, or meanings related to identity, roles, or groups. They are research materials only and do not constitute commercial product promises.

At the start of the study, some participants were not given information about the image production source. This was necessary to study whether source information changes how people interpret and evaluate the same images. Now that all outcome measures are complete, we provide the true explanation to every participant. If you wish to withdraw an unsubmitted response, use [withdrawal method]. For questions, contact [contact email].

## 6. Scoring, Analysis, and Audit Constraints

| Construct | Export/scoring | Analysis role |
| --- | --- | --- |
| `AAD` | `mean(AAD1:AAD3)` | Co-primary outcome |
| `PI` | `mean(PI1:PI4)` | Co-primary outcome |
| Natural interpretation/`MC_DOM` | Blind coding, category proportions, and coder agreement | Meaning fidelity and manipulation validation |
| `FIT` | `mean(FIT1:FIT3)` | Proximal evaluation/potential mechanism; no current causal mediation claim |
| `TR` | `mean(TR1:TR4)` | Disclosure-related secondary outcome |
| `PA` | `mean(PA1:PA3)` | Disclosure-related secondary outcome |
| `AS` | `mean(AS1:AS3)` | Secondary advertising outcome |
| `FAM`, `INV` | Calculated separately for each product | Outcome-specific covariates |
| GAAIS | Author-specified positive and negative subscale rules | Exploratory covariate/moderator only after complete-scale verification |

The image-level primary model estimates strategy, `DISC`, continuous product attributes, and their interactions with at least participant and product/image-level random effects. Disclosure recall is used only in preregistered per-protocol sensitivity analyses; the ITT analysis retains recall failures.

## 7. Pre-launch QA and Ethics Gate

The launch owner must sign off on all of the following:

1. Chinese and English `question_id`s, option codes, scale direction, and page order match item by item.
2. The `stimuli` manifest contains exactly 12 products, three in each of four cells, and one frozen F/E/S image per product.
3. All 24 base allocation paths run; each produces exactly six trials and never presents the same product consecutively.
4. Simulate at least 10,000 assignments to inspect balance across `PRODUCT_CELL`, `DISC`, `PAIR_ID`, and starting product.
5. No page or trial in `DISC=0` contains AI-source language or a false human-creation claim before outcome measurement.
6. Test image rendering, termination logic, open text, conditional routing, and debrief on desktop, tablet, and phone. Phone must terminate correctly.
7. Soft launch in both languages; review duration, dropout, straight-lining, open-response quality, and image loading. Do not use the maximal-information version directly for confirmatory inference.
8. Consent, retention, access control, cross-border data handling, risk mitigation, debrief, ethics approval, and preregistration are all `PASS` or `NOT_APPLICABLE`; otherwise ethics remains `ETHICS_PENDING/BLOCKED`.

## 8. Scale Sources and Adaptation Boundaries

- HED/UT: Voss, Spangenberg, & Grohmann (2003).
- Symbolic affordance/visual symbolism: Belk (1988); Escalas & Bettman (2005); Homburg et al. (2015); Candi et al. (2017).
- Experiential meaning: Park, Jaworski, & MacInnis (1986); Brakus, Schmitt, & Zarantonello (2009).
- Open visual interpretation and the distinction from object recognition: Petridis & Chilton (2019).
- Fit: Rifon, Choi, Trimble, & Li (2004).
- Attitude toward the advertisement: MacKenzie, Lutz, & Belch (1986).
- Purchase intention: Dodds, Monroe, & Grewal (1991).
- Image quality/diagnostics: Otani et al. (2023); HEIM; AGIQA-3K; AIGCIQA2023.
- GAAIS: Schepman & Rodway (2023), https://doi.org/10.1080/10447318.2022.2085400.

Mark every context-adapted item as `adapted` in `question_bank`. Do not describe a newly written item as a verbatim established-scale item when no direct mature scale item exists.
