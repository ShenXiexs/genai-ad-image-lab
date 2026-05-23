# Three Orientation Prompt Design

This document defines the prompt logic for generating three controlled advertising-image orientations from the same white-background product image. Runtime API calls use the English `.txt` prompt files through `--prompt-file`. Chinese `.zh.md` files are companion review versions for research discussion.

## Experimental Stimulus Classification Rationale

The three prompt orientations are grounded in Park, Jaworski, and MacInnis (1986)'s brand concept-image management framework. Their functional, experiential, and symbolic brand concepts provide the upper-level theoretical structure for separating advertising image mechanisms:

| Park et al. concept | Advertising-image translation | Experimental orientation | Primary consumer response |
| --- | --- | --- | --- |
| Functional | Product value, attributes, and diagnostic information | Product-oriented | Product understanding and feature clarity |
| Experiential | Usage episode, sensory experience, and self-reference | Context-oriented | Usage imagination and scene realism |
| Symbolic | Meaning, identity, mood, brand personality, and self-expression | Symbolic-oriented | Symbolic meaning and brand attitude |

This mapping is important because the study is not merely comparing three visual styles. It treats GenAI-generated advertising images as controlled stimuli that activate different persuasion mechanisms: functional product-value understanding, usage-context imagination, and symbolic brand attitude formation. `Affect-oriented` is now a deprecated compatibility name for `Symbolic-oriented`.

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

Each prompt defines a primary route of persuasion and explicitly suppresses the other two routes as dominant impressions:

| Orientation | Dominant mechanism | Explicitly suppressed dominant impressions |
| --- | --- | --- |
| Product-oriented | Functional product value, product clarity, and visual information diagnosticity | Lifestyle usage scene and symbolic mood |
| Context-oriented | Usage imagination and self-reference | Clean product display and abstract brand mood |
| Symbolic-oriented | Symbolic meaning, brand personality, self-expression, visual rhetoric, and mood | Product feature exposition and concrete usage demonstration |

This separation helps diagnose manipulation-check failures. If a Product-oriented image scores high on usage imagination or symbolic mood, the issue is cross-orientation contamination rather than only image quality.

## Product-Oriented Runtime Prompt

```text
You are generating controlled experimental stimuli for a consumer advertising study.

Use the provided white-background product image as the exact source product. Keep the source product identity constant. Preserve the product's core shape, material, color, packaging, logo, visible design, and physical structure.

Do not invent unsupported product functions, ingredients, certifications, awards, claims, slogans, ratings, prices, QR codes, badges, charts, arrows, or brand assets.

Do not generate new readable text inside the image. Existing text, logo, or package information already present on the source product may remain visible, but do not add new ad copy or rewrite package text. Leave clean negative space for later controlled text overlay.

Avoid screenshot-like layouts, banner-template look, low-quality collage, meme style, cluttered e-commerce mockups, distorted hands, broken packaging, unreadable characters, and unrealistic product geometry.

Generate a Product-oriented advertising image.

Primary route of persuasion: functional product value, product clarity, and visual information diagnosticity. Do not rely on lifestyle context, abstract mood, or symbolic atmosphere as the main persuasive route.

Advertising mechanism:
The image should help viewers quickly infer what the product is, what visible attributes it has, how it creates value, and why it may be worth considering. Use the product title, brand, category, price, and promotion metadata to infer plausible functional value cues, then translate those cues into non-text visual evidence.

Product metadata:
- Title: {ori_title}
- Brand: {creative_id_brand}
- Category: {level_one_category_name}
- Price: {creative_id_price}
- Promotion: {creative_id_promotion}

Metadata reasoning instruction:
- First infer the product type, material, structure, target user, purchase occasion, and likely value drivers from the title and category.
- For jewelry, fashion, beauty, accessories, home goods, electronics, sports, toys, books, food, or other categories, infer category-appropriate diagnostic cues such as craftsmanship, material finish, fit, scale, portability, durability, gift suitability, storage, compatibility, freshness, care, performance, or ease of use.
- Do not invent claims that are not visually supported. The inference should guide visual composition, not create fake text, badges, certifications, or product features.

Visual direction:
- Make the product the dominant subject, but make the image visibly more informative than the original white-background packshot.
- Add non-text visual evidence of functional value: material texture, structural details, craftsmanship, size/scale impression, accessory components, packaging, gift box, display stand, neutral holder, clasp/closure, interface, mechanism, freshness cue, durability cue, or category-relevant use affordance.
- For wearable or giftable products, neutral studio props such as a mannequin bust, hand form, jewelry stand, case, box, tray, or scale reference may be used if they clarify wearing, gifting, size, or craftsmanship without becoming a lifestyle story.
- Use a coherent studio composition with purposeful lighting, shadows, reflections, and close detail emphasis. A secondary close-detail area is acceptable if it feels integrated into one commercial product photograph and contains no labels, arrows, or text.
- Avoid a plain white or near-white packshot as the dominant visual solution. The background may be clean, but it should help reveal function, material, structure, scale, or purchase value.
- Ensure the visual content is semantically consistent with the product title, brand tier, category, price level, and promotion context.
- Leave clean negative space for possible controlled text overlay in later editing.

Strict boundaries:
- Do not create a lifestyle story or a specific everyday usage scene.
- Do not let emotional atmosphere, symbolic mood, or usage scene become the dominant visual impression, even if they appear as secondary elements.
- Do not add generated text, slogans, fake labels, fake badges, certifications, prices, ratings, charts, arrows, or comparison claims inside the image.
- Do not invent product functions, ingredients, awards, or brand messages.
- Do not alter the product's shape, color, logo, packaging, or physical structure.
- If the image could be described as merely the same white-background product photo with nicer lighting, larger scale, or minor retouching, the generation has failed.

Verification standard:
A viewer should be able to rate this image highly on "This image helps me understand what the product is and what it offers" and "This image makes the product features and value cues clear." The image should pass the 3-second diagnostic test: a viewer who has never heard of this product should quickly understand what it is, what visible attributes matter, and why it may be worth buying, while not primarily feeling that the image is about lifestyle imagination or symbolic mood.

Output:
One advertising image where functional product value and information diagnosticity are the primary goals. Aesthetic quality should serve product understanding, not replace it.
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

## Symbolic-Oriented Runtime Prompt

```text
You are generating controlled experimental stimuli for a consumer advertising study.

Use the provided white-background product image as the exact source product. Keep the source product identity constant. Preserve the product's core shape, material, color, packaging, logo, visible design, and physical structure.

Do not invent unsupported product functions, ingredients, certifications, awards, claims, slogans, ratings, prices, QR codes, badges, charts, arrows, or brand assets.

Do not generate new readable text inside the image. Existing text, logo, or package information already present on the source product may remain visible, but do not add new ad copy or rewrite package text. Leave clean negative space for later controlled text overlay.

Avoid screenshot-like layouts, banner-template look, low-quality collage, meme style, cluttered e-commerce mockups, distorted hands, broken packaging, unreadable characters, and unrealistic product geometry.

Generate a Symbolic-oriented advertising image.

Primary route of persuasion: symbolic meaning, brand personality, self-expression, identity signaling, visual rhetoric, and mood. Do not rely on functional explanation, dense product information, or concrete usage demonstration as the main persuasive route.

Advertising mechanism:
The image should shape viewers' attitude toward the product or brand by making the product feel meaningful: a symbol of status, care, taste, intimacy, aspiration, celebration, expertise, naturalness, vitality, individuality, or another brand-compatible meaning. Aesthetics and emotion are execution tools for symbolic meaning, not the final classification by themselves.

Product metadata:
- Title: {ori_title}
- Brand: {creative_id_brand}
- Category: {level_one_category_name}
- Price: {creative_id_price}
- Promotion: {creative_id_promotion}

Symbolic reasoning instruction:
- Infer one dominant symbolic territory from the product title, brand, category, price level, and purchase occasion.
- Choose one dominant brand personality from this controlled vocabulary and build the entire image around it: glamorous, rugged, healthy, fun, sincere, sophisticated, warm, futuristic, natural, playful, premium, refined.
- If the product title and brand do not strongly imply a specific personality, infer from category conventions: skincare or beauty should lean sincere, natural, or refined; electronics should lean futuristic, premium, or sophisticated; food or beverage should lean warm, fun, or healthy; sportswear or outdoor products should lean rugged, energetic, or playful; jewelry or luxury goods should lean glamorous, sophisticated, premium, or refined.
- State the chosen symbolic territory and personality implicitly through visual treatment only. Do not write the personality word, slogan, or mood label as text in the image.

Visual direction:
- Keep the product as the visual anchor of the composition, but present it as a symbolic object rather than an information object.
- Use lighting, color palette, background texture, depth, shadow, reflection, composition, and visual metaphor to communicate the chosen symbolic meaning.
- Use visual rhetoric deliberately: symmetry for prestige, soft radiance for intimacy or care, dramatic contrast for luxury or aspiration, organic textures for naturalness, precise geometry for expertise or futurism, or other category-compatible symbolism.
- Use color complexity deliberately: rich, layered palettes for expressive, playful, fun, glamorous, or celebratory meanings; minimal, monochromatic, or restrained palettes for premium, sophisticated, refined, sincere, or calm meanings.
- Make the product desirable through symbolic association, brand personality, and self-expression rather than explicit information or usage demonstration.
- The image should evoke a felt response and a clear brand impression in 2 seconds without requiring the viewer to read any text.
- The image may resemble a premium brand visual, symbolic product portrait, visual metaphor, luxury still life, or high-end social media campaign image.

Strict boundaries:
- Do not create a detailed concrete usage scene as the main focus.
- Do not use functional labels, comparison charts, dense information design, feature exposition, or promotion-heavy layout.
- Do not let product feature explanation or concrete usage demonstration become the dominant visual impression.
- Do not add generated text, slogans, fake labels, fake badges, ratings, or unsupported claims.
- Do not make the product hard to recognize, too small, overly abstract, or hidden in the atmosphere.
- Do not use human faces or identity cues unless explicitly required by the symbolic meaning and product category.
- Do not alter the product's shape, color, logo, packaging, or core appearance.

Verification standard:
A viewer should be able to rate this image highly on "This image gives me a clear sense of the brand's symbolic meaning" and "This image communicates a distinctive brand personality or self-expressive mood." The symbolic impact should come from atmosphere, composition, visual metaphor, and brand-compatible aesthetics, not from ad copy, product feature exposition, or a concrete usage demonstration.

Output:
One advertising image where symbolic meaning, brand personality perception, self-expression, desire, and attitude toward the ad are the primary goals. Aesthetic appeal should support symbolic persuasion, not replace it.
```

## Manipulation-Check Anchors

The checks should test both convergent validity and discriminant validity. Each orientation should score high on its intended mechanism and comparatively lower on competing mechanisms.

| Orientation | Should Score High | Should Score Low For Discriminant Validity |
| --- | --- | --- |
| Product-oriented | Product understanding; feature clarity; functional value cues; information diagnosticity; perceived quality | Usage imagination; symbolic mood; abstract brand personality |
| Context-oriented | Usage imagination; self-reference; scene realism; product-context fit | Dense product information; clean catalog display; abstract symbolic intensity |
| Symbolic-oriented | Symbolic meaning; brand personality perception; self-expression; visual appeal; ad attitude | Product feature clarity; information diagnosticity; concrete usage-scene specificity |

Suggested item wording:

| Orientation | High-score manipulation check items | Low-score discriminant check items |
| --- | --- | --- |
| Product-oriented | "This image helps me understand what the product is and what it offers." / "This image makes the product's features and value cues clear." | "This image mainly helps me imagine using the product." / "This image mainly creates a symbolic brand mood." |
| Context-oriented | "This image helps me imagine myself using this product." / "This image shows a realistic usage situation." | "This image mainly explains product features." / "This image mainly creates an abstract brand mood." |
| Symbolic-oriented | "This image gives me a clear sense of the brand's symbolic meaning." / "This image communicates a distinctive brand personality or self-expressive mood." | "This image mainly explains what the product does." / "This image mainly shows a concrete use occasion." |

## Aesthetics Versus Experimental Effectiveness

Aesthetic quality is not treated as a universal success criterion. It serves different roles by condition:

| Orientation | Role of aesthetics |
| --- | --- |
| Product-oriented | Aesthetics should reveal functional value and product diagnosticity, not create a prettier packshot. |
| Context-oriented | Aesthetics should support realism and self-reference, not turn the image into abstract mood. |
| Symbolic-oriented | Aesthetics is an execution route for symbolic meaning, but the product must remain recognizable and brand-compatible. |

## Runtime Files

| Purpose | File |
| --- | --- |
| Product English runtime prompt | `prompts/product_oriented_ad_image_prompt.txt` |
| Context English runtime prompt | `prompts/context_oriented_ad_image_prompt.txt` |
| Symbolic English runtime prompt | `prompts/symbolic_oriented_ad_image_prompt.txt` |
| Deprecated Affect compatibility prompt | `prompts/affect_oriented_ad_image_prompt.txt` |
| Product Chinese review prompt | `prompts/product_oriented_ad_image_prompt.zh.md` |
| Context Chinese review prompt | `prompts/context_oriented_ad_image_prompt.zh.md` |
| Symbolic Chinese review prompt | `prompts/symbolic_oriented_ad_image_prompt.zh.md` |
| Deprecated Affect Chinese compatibility prompt | `prompts/affect_oriented_ad_image_prompt.zh.md` |
| Structured prompt registry | `prompts/orientation_prompts.json` |

## Dry-Run Commands

These commands render the runtime prompt and do not call the image API:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --prompt-file prompts/product_oriented_ad_image_prompt.txt \
  --orientation Product-oriented \
  --dry-run \
  --limit 1

python3 scripts/generate_images/generate_from_csv.py \
  --prompt-file prompts/context_oriented_ad_image_prompt.txt \
  --orientation Context-oriented \
  --dry-run \
  --limit 1

python3 scripts/generate_images/generate_from_csv.py \
  --prompt-file prompts/symbolic_oriented_ad_image_prompt.txt \
  --orientation Symbolic-oriented \
  --dry-run \
  --limit 1
```

`Affect-oriented` remains accepted by the script as a deprecated alias, but it is normalized to `Symbolic-oriented` for the prompt placeholder, manifest orientation, and output path.
