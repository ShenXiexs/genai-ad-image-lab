# Three Orientation Prompt Design v4-v13

This document defines the v4-v13 prompt logic for generating three controlled advertising-image orientations from the same white-background product image. Runtime API calls use the English `.txt` prompt files through `--prompt-version v4`, `--prompt-version v5`, `--prompt-version v6`, `--prompt-version v7`, `--prompt-version v8`, `--prompt-version v9`, `--prompt-version v10`, `--prompt-version v11`, `--prompt-version v12`, or `--prompt-version v13`; Chinese `.zh.md` files are companion review versions for research discussion.

## Theoretical Basis

The v4-v13 prompt sets are grounded in Park, Jaworski, and MacInnis (1986)'s brand concept-image management framework. In their framework, a brand concept is a firm-selected brand meaning derived from basic consumer needs. The prompt therefore starts from concept definitions rather than from long lists of visual micro-details.

| Park et al. concept | v4-v13 orientation | Advertising-image translation | Primary consumer response |
| --- | --- | --- | --- |
| Functional | `Product-oriented` | Product linked to externally generated consumption problems or practical tasks | Functional value clarity |
| Symbolic | `Symbolic-oriented` | Product linked to self-image, role, group, identity, or ego-identification needs | Symbolic meaning and self-expression |
| Experiential | `Experiential-oriented` | Product linked to sensory pleasure, variety, cognitive stimulation, or felt experience | Experiential value and stimulation |

`Context-oriented` is not a v4-v13 theory label. It remains accepted only as a deprecated alias that maps to `Experiential-oriented` when `--prompt-version v4`, `--prompt-version v5`, `--prompt-version v6`, `--prompt-version v7`, `--prompt-version v8`, `--prompt-version v9`, `--prompt-version v10`, `--prompt-version v11`, `--prompt-version v12`, or `--prompt-version v13` is used. Older `current` and `function_v2` runs keep their original `Product-oriented`, `Context-oriented`, and `Symbolic-oriented` orientation set.

## Shared Prompt Discipline

The v6-v13 prompts restore experimental and image-quality controls after the concept-only v5 test:

- Keep the source product identity constant: shape, material, color, packaging, logo, visible design, and physical structure.
- Keep the product as the primary visual subject: sharp, well-lit, geometrically consistent, and easy to inspect.
- Use clean composition, plausible lighting and shadows, an uncluttered background, and coherent object relations.
- Do not invent product functions, ingredients, materials, certifications, awards, claims, slogans, ratings, prices, QR codes, badges, charts, arrows, or brand assets.
- Do not generate new readable text inside the image.
- Avoid low-quality collage, screenshot or template-like layouts, distorted hands, broken packaging, unreadable synthetic text, and unrealistic product geometry.
- Avoid unsupported demographic assumptions and overly specific visual micro-scenes.
- Allow composition, background, lighting, and style only when they support the selected brand concept and do not contradict the product facts.

This follows the prompt-control logic summarized in `local_only/prompt-ref.md`: structured concept-image linkage should carry the experimental manipulation, while product identity and non-concept constraints stay stable across conditions.

The v4 prompts are concise definition-first prompts with input grounding and generalization discipline. The v5 prompts are concept-only prompts that keep only the Park brand-concept definition block. The v6 prompts are the balanced version: they restore subject preservation, generic image-quality controls, no unsupported claims/text, product prominence, and concept-image linkage while avoiding the long micro-detail lists from v3/function_v2. The v7 prompts are the quality-focused version: they keep Park's definitions while restoring function_v2-style fidelity, artifact-avoidance, and verification guidance because the generated v2 images were empirically stronger in this project. The v8 prompts intentionally step back to Park's original definition plus only minimal quality controls. The v9 prompts keep that v8 definition-first logic but selectively reintroduce the most useful function_v2-style detail controls for product dominance, no new text, and artifact avoidance. The v10 prompts are the integrated research version: they combine Park's definitions with later prompt literature on grounding, prompt-image alignment, concept contamination avoidance, and discriminant-validity checks. The v11 prompts further strengthen grounding by explicitly requiring the model to read visible facts from the white-background source image first, then use metadata only as supporting evidence for concept inference. The v12 prompts directly fuse function_v2's visual direction, reasoning steps, and verification discipline with Park's functional, symbolic, and experiential brand-concept definitions. The v13 prompts keep that execution discipline but simplify the concept blocks, use source-image-first grounding in all three prompts, and add sharper discriminant-failure rules for three-way separation.

## Version Intent

| Version | Design intention |
| --- | --- |
| `v8` | Park 1986 original definition first, with only minimal quality controls so the manipulation mostly lives in the definition itself. |
| `v9` | Park original definition plus selected v2-style detail controls that materially improve output fidelity without returning to long micro-scene instructions. |
| `v10` | Integrated version for the current study: Park definition + grounded product facts + prompt-image alignment + artifact control + clearer orientation separation. |
| `v11` | Strong-grounding version: explicitly extract visible facts from the white-background image first, then combine those facts with metadata to build concept-image linkage. |
| `v12` | Function_v2-quality version: keep the v2-style visual discipline and execution logic, but replace the old three-route semantics with Park's three definitions. |
| `v13` | Discriminant-separation version: keep v12-style execution discipline, but use source-image-first grounding and stricter cross-route contamination checks. |

## Orientation Separation Logic

Each v6-v13 prompt defines one dominant concept route and keeps the other two routes non-dominant:

| Orientation | Dominant mechanism | Suppressed dominant impressions |
| --- | --- | --- |
| `Product-oriented` | Functional product-problem linkage | Symbolic identity and experiential stimulation |
| `Symbolic-oriented` | Self-image, role, group, or identity meaning | Functional explanation and sensory stimulation |
| `Experiential-oriented` | Sensory pleasure, variety, cognitive stimulation, or felt experience | Practical problem solving and symbolic identity |

This makes manipulation checks interpretable. A failed image is not just an aesthetic failure; it is usually a concept-contamination failure.

## Runtime Files

| Purpose | File |
| --- | --- |
| Product English runtime prompt v4 | `prompts/product_oriented_ad_image_prompt.v4.txt` |
| Symbolic English runtime prompt v4 | `prompts/symbolic_oriented_ad_image_prompt.v4.txt` |
| Experiential English runtime prompt v4 | `prompts/experiential_oriented_ad_image_prompt.v4.txt` |
| Product English runtime prompt v5 | `prompts/product_oriented_ad_image_prompt.v5.txt` |
| Symbolic English runtime prompt v5 | `prompts/symbolic_oriented_ad_image_prompt.v5.txt` |
| Experiential English runtime prompt v5 | `prompts/experiential_oriented_ad_image_prompt.v5.txt` |
| Product English runtime prompt v6 | `prompts/product_oriented_ad_image_prompt.v6.txt` |
| Symbolic English runtime prompt v6 | `prompts/symbolic_oriented_ad_image_prompt.v6.txt` |
| Experiential English runtime prompt v6 | `prompts/experiential_oriented_ad_image_prompt.v6.txt` |
| Product English runtime prompt v7 | `prompts/product_oriented_ad_image_prompt.v7.txt` |
| Symbolic English runtime prompt v7 | `prompts/symbolic_oriented_ad_image_prompt.v7.txt` |
| Experiential English runtime prompt v7 | `prompts/experiential_oriented_ad_image_prompt.v7.txt` |
| Product English runtime prompt v8 | `prompts/product_oriented_ad_image_prompt.v8.txt` |
| Symbolic English runtime prompt v8 | `prompts/symbolic_oriented_ad_image_prompt.v8.txt` |
| Experiential English runtime prompt v8 | `prompts/experiential_oriented_ad_image_prompt.v8.txt` |
| Product English runtime prompt v9 | `prompts/product_oriented_ad_image_prompt.v9.txt` |
| Symbolic English runtime prompt v9 | `prompts/symbolic_oriented_ad_image_prompt.v9.txt` |
| Experiential English runtime prompt v9 | `prompts/experiential_oriented_ad_image_prompt.v9.txt` |
| Product English runtime prompt v10 | `prompts/product_oriented_ad_image_prompt.v10.txt` |
| Symbolic English runtime prompt v10 | `prompts/symbolic_oriented_ad_image_prompt.v10.txt` |
| Experiential English runtime prompt v10 | `prompts/experiential_oriented_ad_image_prompt.v10.txt` |
| Product English runtime prompt v11 | `prompts/product_oriented_ad_image_prompt.v11.txt` |
| Symbolic English runtime prompt v11 | `prompts/symbolic_oriented_ad_image_prompt.v11.txt` |
| Experiential English runtime prompt v11 | `prompts/experiential_oriented_ad_image_prompt.v11.txt` |
| Product English runtime prompt v12 | `prompts/product_oriented_ad_image_prompt.v12.txt` |
| Symbolic English runtime prompt v12 | `prompts/symbolic_oriented_ad_image_prompt.v12.txt` |
| Experiential English runtime prompt v12 | `prompts/experiential_oriented_ad_image_prompt.v12.txt` |
| Product English runtime prompt v13 | `prompts/product_oriented_ad_image_prompt.v13.txt` |
| Symbolic English runtime prompt v13 | `prompts/symbolic_oriented_ad_image_prompt.v13.txt` |
| Experiential English runtime prompt v13 | `prompts/experiential_oriented_ad_image_prompt.v13.txt` |
| Product Chinese review prompt v4 | `prompts/product_oriented_ad_image_prompt.v4.zh.md` |
| Symbolic Chinese review prompt v4 | `prompts/symbolic_oriented_ad_image_prompt.v4.zh.md` |
| Experiential Chinese review prompt v4 | `prompts/experiential_oriented_ad_image_prompt.v4.zh.md` |
| Product Chinese review prompt v5 | `prompts/product_oriented_ad_image_prompt.v5.zh.md` |
| Symbolic Chinese review prompt v5 | `prompts/symbolic_oriented_ad_image_prompt.v5.zh.md` |
| Experiential Chinese review prompt v5 | `prompts/experiential_oriented_ad_image_prompt.v5.zh.md` |
| Product Chinese review prompt v6 | `prompts/product_oriented_ad_image_prompt.v6.zh.md` |
| Symbolic Chinese review prompt v6 | `prompts/symbolic_oriented_ad_image_prompt.v6.zh.md` |
| Experiential Chinese review prompt v6 | `prompts/experiential_oriented_ad_image_prompt.v6.zh.md` |
| Product Chinese review prompt v7 | `prompts/product_oriented_ad_image_prompt.v7.zh.md` |
| Symbolic Chinese review prompt v7 | `prompts/symbolic_oriented_ad_image_prompt.v7.zh.md` |
| Experiential Chinese review prompt v7 | `prompts/experiential_oriented_ad_image_prompt.v7.zh.md` |
| Product Chinese review prompt v8 | `prompts/product_oriented_ad_image_prompt.v8.zh.md` |
| Symbolic Chinese review prompt v8 | `prompts/symbolic_oriented_ad_image_prompt.v8.zh.md` |
| Experiential Chinese review prompt v8 | `prompts/experiential_oriented_ad_image_prompt.v8.zh.md` |
| Product Chinese review prompt v9 | `prompts/product_oriented_ad_image_prompt.v9.zh.md` |
| Symbolic Chinese review prompt v9 | `prompts/symbolic_oriented_ad_image_prompt.v9.zh.md` |
| Experiential Chinese review prompt v9 | `prompts/experiential_oriented_ad_image_prompt.v9.zh.md` |
| Product Chinese review prompt v10 | `prompts/product_oriented_ad_image_prompt.v10.zh.md` |
| Symbolic Chinese review prompt v10 | `prompts/symbolic_oriented_ad_image_prompt.v10.zh.md` |
| Experiential Chinese review prompt v10 | `prompts/experiential_oriented_ad_image_prompt.v10.zh.md` |
| Product Chinese review prompt v11 | `prompts/product_oriented_ad_image_prompt.v11.zh.md` |
| Symbolic Chinese review prompt v11 | `prompts/symbolic_oriented_ad_image_prompt.v11.zh.md` |
| Experiential Chinese review prompt v11 | `prompts/experiential_oriented_ad_image_prompt.v11.zh.md` |
| Product Chinese review prompt v12 | `prompts/product_oriented_ad_image_prompt.v12.zh.md` |
| Symbolic Chinese review prompt v12 | `prompts/symbolic_oriented_ad_image_prompt.v12.zh.md` |
| Experiential Chinese review prompt v12 | `prompts/experiential_oriented_ad_image_prompt.v12.zh.md` |
| Product Chinese review prompt v13 | `prompts/product_oriented_ad_image_prompt.v13.zh.md` |
| Symbolic Chinese review prompt v13 | `prompts/symbolic_oriented_ad_image_prompt.v13.zh.md` |
| Experiential Chinese review prompt v13 | `prompts/experiential_oriented_ad_image_prompt.v13.zh.md` |
| Structured prompt registry | `prompts/orientation_prompts.json` |

## Dry-Run Commands

Render all three v4 prompts without calling the image API:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --prompt-version v4 \
  --dry-run \
  --limit 1 \
  --no-progress
```

Render a single experiential prompt:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --prompt-version v4 \
  --orientation Experiential-oriented \
  --dry-run \
  --limit 1 \
  --no-progress
```

Legacy context alias under v4:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --prompt-version v4 \
  --orientation Context-oriented \
  --dry-run \
  --limit 1 \
  --no-progress
```

In the last command, the manifest and rendered `{orientation}` value use `Experiential-oriented`, while `requested_orientation` records `Context-oriented`.

Render the concept-only v5 prompts:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --prompt-version v5 \
  --dry-run \
  --limit 1 \
  --no-progress
```

Render the balanced v6 prompts:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --prompt-version v6 \
  --dry-run \
  --limit 1 \
  --no-progress
```

Render the quality-focused v7 prompts:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --prompt-version v7 \
  --dry-run \
  --limit 1 \
  --no-progress
```

Render the minimal-definition v8 prompts:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --prompt-version v8 \
  --dry-run \
  --limit 1 \
  --no-progress
```

Render the v9 prompts with selected v2-style detail controls:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --prompt-version v9 \
  --dry-run \
  --limit 1 \
  --no-progress
```

Render the integrated v10 prompts:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --prompt-version v10 \
  --dry-run \
  --limit 1 \
  --no-progress
```

Render the strong-grounding v11 prompts:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --prompt-version v11 \
  --dry-run \
  --limit 1 \
  --no-progress
```

Render the function_v2-quality v12 prompts:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --prompt-version v12 \
  --dry-run \
  --limit 1 \
  --no-progress
```

Render the sharper-separation v13 prompts:

```bash
python3 scripts/generate_images/generate_from_csv.py \
  --prompt-version v13 \
  --dry-run \
  --limit 1 \
  --no-progress
```

## Manipulation-Check Anchors

| Orientation | Should score high | Should score low for discriminant validity |
| --- | --- | --- |
| `Product-oriented` | Practical problem solving; functional value clarity; product-problem fit | Self-image meaning; sensory or cognitive stimulation |
| `Symbolic-oriented` | Symbolic meaning; role/group/self-image fit; self-expression | Functional explanation; sensory stimulation as the main message |
| `Experiential-oriented` | Sensory pleasure; variety; immersion; cognitive stimulation; felt experience | Practical problem solving; role/group/status signaling |

Suggested high-score items:

| Orientation | Items |
| --- | --- |
| `Product-oriented` | "This image helps me understand what practical problem the product solves." / "This image makes the product's functional value clear." |
| `Symbolic-oriented` | "This image communicates what the product symbolizes." / "This image expresses a role, group, or self-image meaning." |
| `Experiential-oriented` | "This image communicates the experience the product can provide." / "This image evokes sensory pleasure, variety, or stimulation." |

## Literature Rationale

- Park et al. (1986) supplies the definition-first classification: functional, symbolic, and experiential brand concepts.
- ControlNet, T2I-Adapter, GLIGEN, BoxDiff, DenseDiffusion, MultiDiffusion, InteractDiffusion, and Ranni support separating semantic intent, objects, layout, and interaction constraints instead of relying on ad hoc detail lists.
- Prompt-to-Prompt, Attend-and-Excite, OPT2I, and RePrompt support minimal concept-specific prompt changes while keeping product facts and generation constraints stable.
- DreamBooth, Textual Inversion, and VGD support treating the source product as a grounded/reference subject while the prompt focuses on brand meaning.
- ControlNet-style generic quality prompts, Attend-and-Excite, and Ranni motivate the v6-v13 quality/fidelity controls for product salience, attribute binding, instruction following, spatial relation coherence, and avoidance of visible generation artifacts.
- Discrete Prompt Optimization, Learning to Sample Effective and Diverse Prompts, and DPO-Diff support avoiding unsupported style suffixes and optimizing for concept-image consistency.
