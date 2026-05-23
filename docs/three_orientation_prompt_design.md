# Three Orientation Prompt Design

This document defines the prompt logic for generating three controlled advertising-image orientations from the same white-background product image. Runtime API calls still use the English `.txt` prompt files through `--prompt-file`. Chinese `.zh.md` files are companion review versions for research discussion.

## Experimental Stimulus Classification Rationale

The three prompt orientations are grounded in Park, Jaworski, and MacInnis (1986)'s brand concept-image management framework. Their functional, experiential, and symbolic brand concepts provide the upper-level theoretical structure for separating advertising image mechanisms:

| Park et al. concept | Advertising-image translation | Experimental orientation | Primary consumer response |
| --- | --- | --- | --- |
| Functional | Product value, attributes, and diagnostic information | Product-oriented | Product understanding and feature clarity |
| Experiential | Usage episode, sensory experience, and self-reference | Context-oriented | Usage imagination and scene realism |
| Symbolic | Meaning, identity, mood, and brand personality | Affect-oriented | Aesthetic response and brand attitude |

This mapping is important because the study is not merely comparing three visual styles. It treats GenAI-generated advertising images as controlled stimuli that activate different persuasion mechanisms: product-value understanding, usage-context imagination, and affective-brand attitude formation. The prompts therefore need to be mutually exclusive enough to support discriminant validity in manipulation checks.

## Shared Meta Instruction

The following logic appears in all three runtime prompts:

```text
You are generating controlled experimental stimuli for a consumer advertising study.

Use the provided white-background product image as the exact source product. Keep the source product identity constant. Preserve the product's core shape, material, color, packaging, logo, visible design, and physical structure.

Do not invent unsupported product functions, ingredients, certifications, awards, claims, slogans, ratings, prices, QR codes, badges, charts, arrows, or brand assets.

Do not generate new readable text inside the image. Existing text, logo, or package information already present on the source product may remain visible, but do not add new ad copy or rewrite package text. Leave clean negative space for later controlled text overlay.

Avoid screenshot-like layouts, banner-template look, low-quality collage, meme style, cluttered e-commerce mockups, distorted hands, broken packaging, unreadable characters, and unrealistic product geometry.
```

## No-Generated-Text Policy

First-round stimuli should not let the image model generate ad copy. The image model is allowed to preserve source-product logo/package text already present in the white-background input image, but it should not create new readable text, slogans, prices, badges, charts, labels, QR codes, or claims.

This policy reduces three confounds:

| Risk | Why it matters |
| --- | --- |
| Text-image ratio is uncontrolled | Generated text would change visual attention and persuasion beyond orientation. |
| Text-picture congruency becomes noisy | Incorrect or irrelevant generated text could confound semantic fit. |
| AI text artifacts create quality differences | Garbled characters or fake claims would make image quality differ across conditions. |

Later studies can add text overlays through a controlled template pipeline if the study explicitly manipulates TIR, text-centeredness, or image-text congruency.

## Orientation Separation Logic

Each prompt now defines a primary route of persuasion and explicitly suppresses the other two routes as dominant impressions:

| Orientation | Dominant mechanism | Explicitly suppressed dominant impressions |
| --- | --- | --- |
| Product-oriented | Product information, clarity, and diagnosticity | Lifestyle usage scene and emotional atmosphere |
| Context-oriented | Usage imagination and self-reference | Clean product display and abstract brand mood |
| Affect-oriented | Mood, aesthetics, and brand personality | Product feature exposition and concrete usage demonstration |

This separation helps diagnose manipulation-check failures. If a Product-oriented image scores high on usage imagination or emotional response, the issue is cross-orientation contamination rather than only image quality.

## Product-Oriented Runtime Prompt

```text
You are generating controlled experimental stimuli for a consumer advertising study.

Use the provided white-background product image as the exact source product. Keep the source product identity constant. Preserve the product's core shape, material, color, packaging, logo, visible design, and physical structure.

Do not invent unsupported product functions, ingredients, certifications, awards, claims, slogans, ratings, prices, QR codes, badges, charts, arrows, or brand assets.

Do not generate new readable text inside the image. Existing text, logo, or package information already present on the source product may remain visible, but do not add new ad copy or rewrite package text. Leave clean negative space for later controlled text overlay.

Avoid screenshot-like layouts, banner-template look, low-quality collage, meme style, cluttered e-commerce mockups, distorted hands, broken packaging, unreadable characters, and unrealistic product geometry.

Generate a Product-oriented advertising image.

Primary route of persuasion: product information, clarity, and diagnosticity. Do not rely on lifestyle context or emotional atmosphere as the main persuasive route.

Advertising mechanism:
The image should help viewers clearly understand the product itself: what it is, what it looks like, what visible features it has, and why it appears valuable or worth considering.

Product metadata:
- Title: {ori_title}
- Brand: {creative_id_brand}
- Category: {level_one_category_name}
- Price: {creative_id_price}
- Promotion: {creative_id_promotion}

Visual direction:
- Make the product the dominant subject of the image.
- Keep the product large, sharp, well-lit, and easy to inspect.
- Use a clean commercial background that improves product clarity rather than lifestyle storytelling.
- Visualize specific product attributes, materials, structural features, packaging details, craftsmanship, size impression, freshness, durability, or premium finish, depending on the product category.
- If the product title or category implies a key functional benefit, make that benefit visually deducible from the image alone without adding text or claims.
- Use composition, lighting, shadow, reflection, and spacing to make the product look trustworthy and professionally presented.
- Ensure the visual content is semantically consistent with the product title and category.
- Leave clean negative space for possible controlled text overlay in later editing.

Strict boundaries:
- Do not create a lifestyle story or a specific usage scene.
- Do not make emotion, atmosphere, or symbolic mood the main persuasive route.
- Do not let emotional atmosphere or usage scene become the dominant visual impression, even if they appear as secondary elements.
- Do not add generated text, slogans, fake labels, fake badges, certifications, prices, ratings, charts, arrows, or comparison claims inside the image.
- Do not invent product functions, ingredients, awards, or brand messages.
- Do not alter the product's shape, color, logo, packaging, or physical structure.

Verification standard:
A viewer should be able to rate this image highly on "This image helps me understand what the product is and what it offers" and "This image makes the product features clear." The image should pass the 3-second diagnostic test: a viewer who has never heard of this product should quickly understand what it is and why it may be worth buying, while not primarily feeling that the image is about lifestyle imagination or emotional mood.

Output:
One advertising image where product clarity and information diagnosticity are the primary goals. Aesthetic quality should serve product understanding, not replace it.
```

## Context-Oriented Runtime Prompt

```text
You are generating controlled experimental stimuli for a consumer advertising study.

Use the provided white-background product image as the exact source product. Keep the source product identity constant. Preserve the product's core shape, material, color, packaging, logo, visible design, and physical structure.

Do not invent unsupported product functions, ingredients, certifications, awards, claims, slogans, ratings, prices, QR codes, badges, charts, arrows, or brand assets.

Do not generate new readable text inside the image. Existing text, logo, or package information already present on the source product may remain visible, but do not add new ad copy or rewrite package text. Leave clean negative space for later controlled text overlay.

Avoid screenshot-like layouts, banner-template look, low-quality collage, meme style, cluttered e-commerce mockups, distorted hands, broken packaging, unreadable characters, and unrealistic product geometry.

Generate a Context-oriented advertising image.

Primary route of persuasion: usage imagination and self-reference. Do not rely on product-information labels or abstract emotional symbolism as the main persuasive route.

Advertising mechanism:
The image should help viewers imagine using, owning, holding, wearing, gifting, consuming, or placing the product in a realistic everyday situation.

Product metadata:
- Title: {ori_title}
- Brand: {creative_id_brand}
- Category: {level_one_category_name}
- Price: {creative_id_price}
- Promotion: {creative_id_promotion}

Visual direction:
- Place the product in a plausible, category-appropriate usage context.
- The scene should answer: where, when, or how would a consumer naturally use or encounter this product?
- Infer the single most plausible usage occasion for this specific product title and category, and commit to that one occasion throughout the entire composition. Do not blend multiple occasions in one image.
- Ground the scene in a specific usage occasion that matches the product category, such as morning routine, commute, workout, gifting moment, dining occasion, beauty routine, home cleaning, pet care, office use, outdoor activity, or a similarly concrete situation.
- Make the product clearly visible and recognizable within the scene.
- Use environmental cues that match the product category, likely use occasion, and consumer situation.
- Prefer natural social-media-native composition rather than a staged catalog layout.
- Prefer a first-person, hand-holding, partial body, over-the-shoulder, or back-view perspective where the consumer implicitly becomes the product user.
- Avoid showing a full frontal face unless the product category clearly requires facial expression or identity.
- If a human face appears, keep it partial, naturally angled, or softly out of focus. Do not generate hyperrealistic frontal AI faces that may trigger authenticity concerns.
- Keep any human-object interaction physically realistic, with correct scale, grip, posture, and placement.
- Ensure the background environment and foreground objects are semantically consistent with the product title and category.

Strict boundaries:
- Do not make the image mainly about abstract mood or symbolic emotion.
- Do not let clean product display or abstract brand mood become the dominant visual impression.
- Do not reduce the product to a small decorative object in the background.
- Do not add generated text, slogans, fake labels, fake badges, ratings, or unsupported claims.
- Do not use generic backgrounds unrelated to the product category.
- Do not create unrealistic hands, distorted bodies, impossible product scale, or physically implausible interaction.
- Do not alter the product's shape, color, logo, packaging, or physical structure.

Verification standard:
A viewer should be able to rate this image highly on "This image helps me imagine myself using this product" and "This image shows a realistic usage situation." The usage occasion should be concrete enough that viewers can infer where, when, or how the product would be used, while not primarily reading the image as a clean product display or abstract mood piece.

Output:
One advertising image optimized for usage imagination, self-reference, realistic usage situation, product-context fit, and engagement.
```

## Affect-Oriented Runtime Prompt

```text
You are generating controlled experimental stimuli for a consumer advertising study.

Use the provided white-background product image as the exact source product. Keep the source product identity constant. Preserve the product's core shape, material, color, packaging, logo, visible design, and physical structure.

Do not invent unsupported product functions, ingredients, certifications, awards, claims, slogans, ratings, prices, QR codes, badges, charts, arrows, or brand assets.

Do not generate new readable text inside the image. Existing text, logo, or package information already present on the source product may remain visible, but do not add new ad copy or rewrite package text. Leave clean negative space for later controlled text overlay.

Avoid screenshot-like layouts, banner-template look, low-quality collage, meme style, cluttered e-commerce mockups, distorted hands, broken packaging, unreadable characters, and unrealistic product geometry.

Generate an Affect-oriented advertising image.

Primary route of persuasion: mood, aesthetics, and brand personality. Do not rely on functional explanation or concrete usage demonstration as the main persuasive route.

Advertising mechanism:
The image should shape viewers' emotional response and attitude toward the product or brand through mood, aesthetics, visual symbolism, lighting, color, texture, and brand personality cues.

Product metadata:
- Title: {ori_title}
- Brand: {creative_id_brand}
- Category: {level_one_category_name}
- Price: {creative_id_price}
- Promotion: {creative_id_promotion}

Visual direction:
- Keep the product as the visual anchor of the composition.
- Choose one dominant brand personality from this controlled vocabulary and build the entire image around it: glamorous, rugged, healthy, fun, sincere, sophisticated, warm, futuristic, natural, playful, premium, refined.
- If the product title and brand do not strongly imply a specific personality, infer from category conventions: skincare or beauty should lean sincere, natural, or refined; electronics should lean futuristic, premium, or sophisticated; food or beverage should lean warm, fun, or healthy; sportswear or outdoor products should lean rugged, energetic, or playful; jewelry or luxury goods should lean glamorous, sophisticated, premium, or refined.
- State the chosen personality implicitly through visual treatment only. Do not write the personality word, slogan, or mood label as text in the image.
- Every visual element, including lighting, color palette, background texture, depth, shadows, reflections, and composition, should reinforce the single chosen personality rather than mixing contradictory tones.
- Use color complexity deliberately: rich, layered color palettes for energetic, playful, fun, or expressive personalities; minimal, monochromatic, or restrained palettes for premium, sophisticated, refined, calm, or elegant personalities.
- Make the product desirable through aesthetic treatment rather than explicit information or usage demonstration.
- The image should evoke a felt response in 2 seconds without requiring the viewer to read any text.
- Ensure the emotional tone is brand-compatible and product-category compatible. Do not apply contradictory moods to the same image.
- The image may resemble a premium brand visual, emotional still life, symbolic product portrait, or high-end social media campaign image.

Strict boundaries:
- Do not create a detailed usage scene as the main focus.
- Do not use functional labels, comparison charts, dense information design, or promotion-heavy layout.
- Do not let product feature exposition or concrete usage demonstration become the dominant visual impression.
- Do not add generated text, slogans, fake labels, fake badges, ratings, or unsupported claims.
- Do not make the product hard to recognize, too small, overly abstract, or hidden in the atmosphere.
- Do not use human faces or identity cues unless explicitly required.
- Do not alter the product's shape, color, logo, packaging, or core appearance.

Verification standard:
A viewer should be able to rate this image highly on "This image has strong visual appeal" and "This image gives me a clear sense of the brand's personality and mood." The emotional impact should come from atmosphere and composition, not from ad copy, product feature exposition, or a concrete usage demonstration.

Output:
One advertising image where aesthetic appeal and brand personality perception are the primary goals. The image should generate a felt emotional response and a clear brand impression independently of any product information it contains.
```

## Manipulation-Check Anchors

The checks should test both convergent validity and discriminant validity. Each orientation should score high on its intended mechanism and comparatively lower on competing mechanisms.

| Orientation | Should Score High | Should Score Low For Discriminant Validity |
| --- | --- | --- |
| Product-oriented | Product understanding; feature clarity; information diagnosticity; perceived quality | Emotional arousal; usage imagination; abstract brand mood |
| Context-oriented | Usage imagination; self-reference; scene realism; product-context fit | Dense product information; clean catalog display; abstract emotional intensity |
| Affect-oriented | Visual appeal; emotional response; brand personality perception; ad attitude | Product feature clarity; information diagnosticity; concrete usage-scene specificity |

Suggested item wording:

| Orientation | High-score manipulation check items | Low-score discriminant check items |
| --- | --- | --- |
| Product-oriented | "This image helps me understand what the product is and what it offers." / "This image makes the product features clear." | "This image mainly helps me imagine using the product." / "This image mainly creates an emotional mood." |
| Context-oriented | "This image helps me imagine myself using this product." / "This image shows a realistic usage situation." | "This image mainly explains product features." / "This image mainly creates an abstract brand mood." |
| Affect-oriented | "This image has strong visual appeal." / "This image gives me a clear sense of the brand's personality and mood." | "This image mainly explains what the product does." / "This image mainly shows a concrete use occasion." |

## Aesthetics Versus Experimental Effectiveness

Aesthetic quality is not treated as a universal success criterion. It serves different roles by condition:

| Orientation | Role of aesthetics |
| --- | --- |
| Product-oriented | Aesthetics should support product clarity and perceived quality, not replace information diagnosticity. |
| Context-oriented | Aesthetics should support realism and self-reference, not turn the image into abstract mood. |
| Affect-oriented | Aesthetics is the core route, but it must remain brand-compatible and product-recognizable. |

## Runtime Files

| Purpose | File |
| --- | --- |
| Product English runtime prompt | `prompts/product_oriented_ad_image_prompt.txt` |
| Context English runtime prompt | `prompts/context_oriented_ad_image_prompt.txt` |
| Affect English runtime prompt | `prompts/affect_oriented_ad_image_prompt.txt` |
| Product Chinese review prompt | `prompts/product_oriented_ad_image_prompt.zh.md` |
| Context Chinese review prompt | `prompts/context_oriented_ad_image_prompt.zh.md` |
| Affect Chinese review prompt | `prompts/affect_oriented_ad_image_prompt.zh.md` |
| Structured prompt registry | `prompts/orientation_prompts.json` |

## Dry-Run Commands

These commands render the runtime prompt and do not call the image API:

```bash
python3 scripts/generate_images/generate_from_csv.py   --prompt-file prompts/product_oriented_ad_image_prompt.txt   --orientation Product-oriented   --dry-run   --limit 1

python3 scripts/generate_images/generate_from_csv.py   --prompt-file prompts/context_oriented_ad_image_prompt.txt   --orientation Context-oriented   --dry-run   --limit 1

python3 scripts/generate_images/generate_from_csv.py   --prompt-file prompts/affect_oriented_ad_image_prompt.txt   --orientation Affect-oriented   --dry-run   --limit 1
```
