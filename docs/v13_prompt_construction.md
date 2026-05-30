# v13 Prompt Construction Notes

## Scope

This note explains how the `v13` three-orientation prompt set was built and where each major prompt block comes from.

One important limitation should be stated explicitly: the local file `local_only/Park 等 - 1986 - Strategic Brand Concept-Image Management.pdf` is a scanned PDF, so it is not reliable for direct text extraction. In `v13`, the Park definition blocks therefore rely on:

- `local_only/1986-related-paper/prompt_image_generation_ccfa_2023_2026/README.md`
- `local_only/1986-related-paper/prompt_image_generation_ccfa_2023_2026/notes/park1986_concept_evolution_from_original_papers.md`
- `local_only/prompt-ref.md`

These local notes already summarize the Park 1986 definitions and cross-check them against later papers that restate the same framework.

## Design Goal

`v13` is designed to solve a specific problem left by `v12`: keep the usable image quality and execution discipline close to `function_v2`, but make the three routes easier to distinguish in manipulation checks.

The design target is therefore:

1. Keep the exact white-background product identity stable.
2. Start from Park's concept definitions rather than from style lists.
3. Make only the concept route change across conditions.
4. Make the concept-image linkage visually legible within 3 seconds.
5. Explicitly suppress concept contamination across the three routes.

## Shared Scaffold and Evidence Map

| Prompt block | Why it is in v13 | Literature basis |
| --- | --- | --- |
| Use the white-background product image as the exact source product | The manipulation should change brand meaning, not product identity. | Park 1986 concept-image consistency logic; `README.md` "grounded constraints"; DreamBooth, Textual Inversion, and VGD on subject/reference consistency. |
| Read the source image first, metadata second | The source image is the strongest factual anchor; metadata should support concept inference, not overwrite visible facts. | `v11` local grounding logic in this repo; GLIGEN, ControlNet, T2I-Adapter, and Ranni on grounded conditions and accurate instruction following. |
| Do not invent unsupported functions, claims, or brand assets | Park's theory defines brand meaning, but does not license fabricating product facts. | `README.md` and `prompt-ref.md` "only include grounded facts"; GLIGEN, Ranni, OPT2I, and RePrompt on prompt-image consistency and faithfulness. |
| Do not add new readable text | The experimental manipulation should live in the image concept, not in generated ad copy or fake labels. | Local experimental-control requirement; controllable-generation literature in `prompt-ref.md` favors keeping unsupported entities/layout/text out of the free-form prompt. |
| Definition-first brand concept block | The route should be defined by consumer need before scene styling is chosen. | Park 1986 via `README.md` and `park1986_concept_evolution_from_original_papers.md`. |
| One dominant concept route per prompt | Functional, symbolic, and experiential are parallel concept classes, so the image should not mix them as equal routes. | Park 1986; `README.md` on choosing one dominant brand concept; Prompt-to-Prompt and OPT2I on focused semantic editing. |
| Concept-image linkage block | The prompt should operationalize the concept through scene/object relations rather than through long micro-detail lists. | `README.md`; `prompt-ref.md`; Prompt-to-Prompt, Attend-and-Excite, RePrompt. |
| Generation latitude limited to concept-supporting choices | Composition, lighting, and style are allowed, but only as servants of the selected concept. | `README.md` "generation latitude"; ControlNet, T2I-Adapter, DenseDiffusion, MultiDiffusion, and Ranni. |
| Discriminant failure rule and 3-second test | A successful image should be classifiable into one route quickly, without being easily relabeled as another route. | Local prompt-ref manipulation-check logic; later prompt-optimization literature emphasizes prompt-image consistency rather than stylistic excess. |

## Orientation-Specific Construction Logic

### 1. Product-oriented / Functional

**Definition used in v13**

- Functional concept = externally generated consumption needs.
- Visual translation = solving a problem, reducing friction, supporting a task, or making use more reliable.

**Why the prompt asks for product-problem linkage**

This comes directly from the Park-style functional definition summarized in the local notes. In `prompt-ref.md`, the functional route is operationalized through problem solving, task support, and practical affordance rather than through symbolic meaning or hedonic atmosphere.

**Why the prompt allows handling / operation / fit / protection / storage / compatibility / care cues**

These cue families are not arbitrary decorations. They are the repo's literature-grounded operational translation of "externally generated needs" into ad imagery:

- they make the product's practical role visible;
- they rely on product-object relations rather than unsupported textual claims;
- they fit the controllable-generation recommendation to express semantics through grounded visual relations.

**Why the prompt suppresses symbolic and experiential dominance**

If the image mainly communicates status, identity, or sensory atmosphere, then it is no longer a clean functional manipulation.

### 2. Symbolic-oriented / Symbolic

**Definition used in v13**

- Symbolic concept = internally generated needs tied to self-enhancement, role position, group membership, ego-identification, or desired self-image.

**Why the prompt asks for product-identity linkage**

This is the closest image-level translation of the Park symbolic definition. The viewer should infer what choosing or displaying the product says about the owner, not what the product mechanically does.

**Why the prompt allows atmosphere / setting / composition / light / scale / restrained metaphor**

`prompt-ref.md` already operationalizes the symbolic route through these cue families. They are concept-bearing cues because they help the product function as a meaning carrier.

**Why the prompt suppresses functional explanation and experiential pleasure**

If the image mainly teaches use, setup, or concrete problem solving, it becomes functional. If it mainly feels pleasurable or immersive without a clear identity meaning, it drifts toward experiential.

### 3. Experiential-oriented / Experiential

**Definition used in v13**

- Experiential concept = internally generated needs tied to sensory pleasure, variety, cognitive stimulation, immersion, or felt consumption experience.

**Why the prompt asks for product-experience linkage**

The viewer should infer what the encounter feels like. This follows the Park experiential definition and the repo's later notes that translate the route into felt sensory or cognitive experience.

**Why the prompt allows texture / atmosphere / motion implication / rhythm / color / immersive context**

These are the visual cue families already supported in `prompt-ref.md` for turning experiential meaning into image form without inventing unsupported textual claims.

**Why usage scenes are allowed but constrained**

The prompt explicitly says that a usage scene is acceptable only when it expresses felt experience. This is important because older "context" prompts can easily collapse into generic usage illustration rather than genuine experiential meaning.

## Why v13 Is Different from v12

`v13` keeps the useful parts of `v12`, but removes or tightens three things:

1. It removes some more project-specific personality taxonomies and category heuristics that were useful for generation, but less directly grounded in Park's definitions.
2. It imports the stronger "source image first, metadata second" logic from `v11` into all three prompts.
3. It adds an explicit discriminant-failure rule: if the same image could be relabeled as another route without changing the main cue, the prompt has failed.

In short, `v12` is "stronger execution plus Park definitions"; `v13` is "strong execution plus Park definitions plus sharper discriminant validity."

## Practical Reading Rule for the Three Prompts

If the three prompts are working correctly, the viewer's first reading should be:

- `Product-oriented`: "I understand what problem this product helps solve."
- `Symbolic-oriented`: "I understand what this product says about the person or identity."
- `Experiential-oriented`: "I understand what it feels like to encounter or consume this product."

If a generated image cannot be summarized in that form within 3 seconds, it is probably not a clean implementation of the target brand concept.

## Sources Used

- Park, Jaworski, and MacInnis (1986), via local scanned PDF and the repo's Park summary notes.
- `local_only/1986-related-paper/prompt_image_generation_ccfa_2023_2026/README.md`
- `local_only/1986-related-paper/prompt_image_generation_ccfa_2023_2026/notes/park1986_concept_evolution_from_original_papers.md`
- `local_only/prompt-ref.md`
- ControlNet (ICCV 2023)
- DreamBooth (CVPR 2023)
- GLIGEN (CVPR 2023)
- Textual Inversion (ICLR 2023)
- Prompt-to-Prompt (ICLR 2023)
- Attend-and-Excite (SIGGRAPH 2023)
- T2I-Adapter (AAAI 2024)
- DenseDiffusion (ICCV 2023)
- MultiDiffusion (ICML 2023)
- Ranni (CVPR 2024)
- OPT2I (ICLR 2025)
- RePrompt (ICLR 2026)
