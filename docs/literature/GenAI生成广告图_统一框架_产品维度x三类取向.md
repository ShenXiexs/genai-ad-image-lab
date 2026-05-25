# GenAI 生成广告图统一框架：产品/消费任务维度 × 三类创意取向

> 本文档由三份材料整合而成：`GenAI-Reference.md`、`GenAI生成广告图_产品类别匹配文献矩阵_0516.md`、`GenAI生成广告图_AI人图区别补充文献矩阵_0516.md`。整合目标是形成一份可以直接支持论文理论框架、实验设计、prompt 设计和变量测量的统一文档。原三份材料中的长文献矩阵、分散假设和重复解释已压缩为一个主框架。

## 1. 核心结论

本文最核心的问题不是“GenAI 图比人类图好不好”，也不是“哪一种图片整体最好”，而是：

> **GenAI 广告图的效果取决于产品/消费任务特征与图像创意取向之间的匹配。**

具体来说，需要降低不确定性、解释功能或呈现属性的产品，更适合 `Product-oriented / Function-diagnostic` 图；需要消费者想象自己使用、拥有、佩戴、摆放或消费的产品，更适合 `Context-oriented / Usage-simulation` 图；需要传递审美、身份、品牌人格和象征意义的产品，更适合 `Symbolic-oriented / Affective-symbolic` 图。

AI 生成来源不是本文主轴，而是边界条件。AI source inference、prompt-image alignment、AI artifacts 和 generative search 会改变上述匹配关系的强弱和风险：AI 可能更适合客观、功能、可验证的产品诊断任务，却更容易在享乐、审美、身份表达任务上遭遇 effort、authenticity 或 affective competence 的怀疑。

因此，一个最简洁的研究框架可以写成：

```text
Product / Task Characteristics
    ↓
Best-fit GenAI Creative Orientation
    ↓
Consumer Cognitive / Simulation / Affective / Behavioral Response

Boundary conditions:
AI source inference, prompt-image alignment, AI artifacts, generative search
```

## 2. 理论基础：从 Park 三分类到 GenAI 广告图三取向

Park, Jaworski, and MacInnis (1986) 将 brand concept 区分为 functional、experiential 和 symbolic 三类。这个理论非常适合作为本研究的上位框架，因为它强调品牌形象并不是产品类别本身，而是企业选择并管理的一种意义结构。同一个产品可以被定位成功能型、体验型或象征型 image。

本文将这一理论转译为 GenAI 广告图刺激的三类创意取向：

| Park et al. 的概念 | 原始含义 | 本文中的 GenAI 广告图取向 |
|---|---|---|
| `Functional concept` | 解决消费问题，强调外部问题解决和功能利益。 | `Product-oriented / Function-diagnostic`：强调产品是什么、做什么、有哪些属性和购买理由。 |
| `Experiential concept` | 提供感官愉悦、变化、体验和刺激。 | `Context-oriented / Usage-simulation`：强调使用场景、拥有想象、自我代入和 embodied simulation。 |
| `Symbolic concept` | 满足自我提升、角色位置、群体归属和身份认同。 | `Symbolic-oriented / Affective-symbolic`：强调象征意义、品牌人格、身份表达、审美态度。 |

这里需要特别注意：Park 的 `experiential` 比“场景图”更宽。为了避免概念过散，本文把它收紧为 usage simulation，即消费者通过图像想象产品如何进入自己的生活。这个收紧可以由 Elder and Krishna 的 visual depiction / embodied simulation、Hartmann et al. 的 brand selfie / self-reference，以及 Peracchio and Meyers-Levy 关于广告图风格属性传递概念的研究共同支持。

## 3. 三类创意取向的操作化定义

### 3.1 Product-oriented / Function-diagnostic

Product-oriented 图的核心不是“商品看起来更高级”，而是让消费者快速理解产品是什么、做什么、有哪些可见属性、解决什么问题、为什么值得考虑。它对应功能、属性诊断和信息处理路径。

**应该呈现：**

- 产品主体清楚、功能或属性证据清楚。
- 材料、结构、配件、接口、开合、尺寸、适配、包装保护、收纳、使用逻辑等非文字证据。
- 对信息密集、低熟悉、高风险或功能型产品，应优先强化产品可理解性和可信度。

**不应该呈现：**

- 只是更漂亮的白底图或高级静物。
- 让氛围、身份象征或生活方式成为主要说服点。
- 用假标签、假认证、假功能、假评分或夸张 claim 替代真实可见证据。

**主要机制与测量：**

| 机制 | 对应测量 |
|---|---|
| 降低不确定性 | perceived risk, trust |
| 提高产品诊断性 | perceived diagnosticity, product understanding |
| 提升语义一致和加工流畅性 | semantic alignment, processing fluency |
| 支持购买理由形成 | consideration, purchase intention |

**代表文献：** Tsai & Honka; Chandy et al.; Chitturi et al.; Ceylan et al.; Dang et al.; Zhang et al.; Unnava & Burnkrant。

### 3.2 Context-oriented / Usage-simulation

Context-oriented 图的核心不是“背景丰富”，而是让消费者想象自己如何使用、拥有、佩戴、手持、赠送、摆放或消费该产品。它对应使用想象、自我代入和 embodied simulation 路径。

**应该呈现：**

- 一个具体、单一、可信的使用时机。
- 第一人称、手持、局部身体、越肩视角、桌面使用中、旅行中、办公室中、厨房中等自然使用线索。
- 产品必须清楚可见，并且人与物的尺度、握持、姿势和物理关系真实。

**不应该呈现：**

- 中性棚拍上的功能解释图。
- 泛化、无关或混合多个场景的生活方式背景。
- 人脸、身体或手部成为主要注意力中心，导致产品变成装饰物。

**主要机制与测量：**

| 机制 | 对应测量 |
|---|---|
| 使用想象 | mental simulation, usage imagery |
| 自我代入 | self-reference, imagined ownership |
| 场景适配 | product-context fit, perceived realism |
| 下层漏斗反应 | purchase intention, CTR, product-use intention |

**代表文献：** Elder & Krishna; Hartmann et al.; Peracchio & Meyers-Levy; Lambrecht & Tucker; Daviet & Nishimura。

### 3.3 Symbolic-oriented / Affective-symbolic

Symbolic-oriented 图的核心不是“好看”，而是让产品承载意义：身份、品味、地位、关怀、自然、活力、专业、亲密、庆祝、未来感或其他品牌兼容的象征领域。它对应品牌人格、自我表达和态度形成路径。

**应该呈现：**

- 产品仍是视觉锚点，但被呈现为意义载体，而不是功能说明物。
- 光线、色彩、构图、材质、留白、视觉隐喻和氛围都服务于一个清晰象征领域。
- 能让消费者在不读文字的情况下感到“这个品牌/产品代表什么”。

**不应该呈现：**

- 只是高级静物或精致棚拍。
- 通过功能细节、部件布局或使用演示来说明产品价值。
- 让产品过小、过度抽象或隐藏在氛围里。

**主要机制与测量：**

| 机制 | 对应测量 |
|---|---|
| 品牌人格感知 | brand personality perception |
| 自我表达 | self-expression, identity fit |
| 审美与欲望 | aesthetic appeal, desire, WTP |
| 广告/品牌态度 | attitude toward ad, brand attitude |

**代表文献：** Chitturi et al.; Aaker; Liu et al.; Heitmann et al.; Burnap et al.; Park et al.。

## 4. 产品/消费任务维度 × 三类图像取向主表

这张表是本文后续选品、生成 prompt、实验刺激前测和假设发展的主表。产品维度来自现有文献，不应被理解为互斥类别；同一产品可能同时具有高风险、可穿戴、享乐或低熟悉等特征。实验设计时应选择最突出的产品/任务特征作为 moderator。

| 产品/消费任务类型 | 最匹配图像取向 | 理论机制 | 推荐 DV | 关键文献 |
|---|---|---|---|---|
| 功利型、工具型、信息密集型产品 | `Product-oriented / Function-diagnostic` | 消费者需要判断功能、规格、兼容性、操作方式或购买理由；信息型视觉能降低不确定性并提升 aided awareness。 | product understanding, perceived diagnosticity, trust, aided awareness, consideration, purchase intention | Tsai & Honka; Longoni & Cian; Chitturi et al.; Unnava & Burnkrant; Ceylan et al. |
| 高风险、高价格、耐用品 | `Product-oriented` + 适度 `Context-oriented` | 高风险产品既需要属性证据，也需要拥有/使用模拟；单纯情绪氛围不足以建立信任。 | trust, perceived risk, consideration, online search, purchase intention, sales proxy | Guitart & Stremersch; Heitmann et al.; Burnap et al.; Townsend & Kahn |
| 服务型、体验型、活动型产品 | `Context-oriented / Usage-simulation`，必要时结合 `Symbolic-oriented` | 服务和活动难以用单一物理属性说明，消费者更依赖体验想象、场景沉浸和品牌/活动适配。 | usage imagery, perceived experience fit, engagement, brand evaluation, CTR | Daviet & Nishimura; Lambrecht & Tucker; Azer et al.; Hartmann et al. |
| 可触摸、可穿戴、可手持、需要适配或使用模拟的产品 | `Context-oriented / Usage-simulation` | 手持、佩戴、身体局部、产品朝向和第一人称视角可激发 embodied mental simulation。 | self-reference, embodied simulation, perceived fit, purchase intention, CTR | Elder & Krishna; Hartmann et al.; Peracchio & Meyers-Levy |
| 享乐型、审美型、身份表达型产品 | `Symbolic-oriented / Affective-symbolic` + 适度 `Context-oriented` | 这类产品的价值来自审美、情绪、品牌人格和自我表达；消费者不仅判断功能，也判断“是否符合我”。 | aesthetic appeal, desire, brand attitude, brand personality perception, WTP | Chitturi et al.; Aaker; Liu et al.; Hartmann et al.; Longoni & Cian |
| 低熟悉、新品类、早期市场 | `Product-oriented / Function-diagnostic` | 新市场需要教育和解释，消费者需要先理解产品用途和属性，才可能形成考虑集。 | awareness, recall, product understanding, consideration | Chandy et al.; Tsai & Honka; Ceylan et al. |
| 成熟同质品类、品牌差异化不足 | `Symbolic-oriented / Affective-symbolic` | 当基础功能差异不显著时，品牌人格、情绪和象征意义更能形成差异化。 | brand distinctiveness, brand attitude, interest, desire | Park et al.; Aaker; Liu et al.; Heitmann et al. |
| 后期旅程、明确偏好、retargeting 场景 | 具体 `Product-oriented` 或个性化 `Context-oriented` | 消费者已有窄化偏好时，更容易响应具体产品、卖点、动态个性化场景或可购买线索。 | clicks, conversion, purchase, response rate | Lambrecht & Tucker; Lewis et al.; Sahni et al.; Daviet & Nishimura |
| 社交平台互动目标 | `Context-oriented` 或 `Symbolic-oriented`，但必须保持图文一致 | 情绪、人物、色彩、品牌人格和场景可提高互动，但平台规范和图文一致性会调节效果。 | likes, comments, shares, engagement intention, CTR | Lee et al.; Li & Xie; Dang et al.; Kanuri et al.; Hartmann et al. |
| 高隐私或敏感品类 | 谨慎使用高度个性化 `Context-oriented`；优先清晰、低侵入表达 | 定向匹配和视觉显眼性同时过强可能触发隐私反感；健康、金融、身体、家庭等品类尤其敏感。 | privacy concern, trust, purchase intention | Goldfarb & Tucker; Lambrecht & Tucker; Sahni et al. |

## 5. 为什么产品维度不能只做二分

一个最简单的设计可以使用 utilitarian vs hedonic 二分，但这会丢掉很多文献中更有解释力的产品/任务特征。更稳妥的做法是把产品维度理解成几组可以测量或编码的 task characteristics：

| 产品/任务特征 | 它解释什么 | 对三类图像的含义 |
|---|---|---|
| 功能诊断需求 | 消费者是否需要功能、属性、规格、兼容性或可验证证据。 | 越高越需要 Product-oriented。 |
| 风险/价格/耐用性 | 决策是否昂贵、后果是否重要、是否长期使用。 | 需要 Product-oriented 建立信任，也可能需要 Context-oriented 帮助想象拥有和使用。 |
| 体验性/服务性 | 价值是否来自过程、活动、场景或体验。 | 越高越需要 Context-oriented。 |
| 可触摸/可穿戴/可手持性 | 消费者是否需要理解身体互动、尺度、佩戴或操作方式。 | 越高越需要 Context-oriented，并且对手部/身体 artifact 更敏感。 |
| 享乐/审美/身份表达 | 价值是否来自美感、快乐、品味、地位或自我表达。 | 越高越需要 Symbolic-oriented，但 AI 来源负效应也可能更强。 |
| 熟悉度/市场阶段 | 消费者是否已经理解该品类，市场是否成熟。 | 低熟悉偏 Product-oriented；成熟同质偏 Symbolic-oriented。 |
| 旅程阶段 | 消费者处于早期兴趣还是后期比较/转化。 | 早期可用 Context/Symbolic 激发兴趣；后期更需要 Product-oriented 或个性化具体图。 |

因此，本文的核心 moderator 不必写成“产品类别”本身，而可以写成更有理论解释力的 `product/task characteristics`。实际实验中，可以选择两个最清楚、最可操作的产品特征做设计，例如：

- 功能诊断需求高 vs 低。
- 享乐/身份表达高 vs 低。
- 可使用/可穿戴性高 vs 低。
- 高风险/高价格 vs 低风险/低价格。

## 6. GenAI 作为边界条件，而不是主轴

产品-图像取向匹配本身并非 GenAI 独有；传统广告也可以研究“什么产品适合什么图片诉求”。GenAI 的理论增量在于，同一个匹配问题现在受到 AI 生成来源和生成过程的影响。因此，本研究不应把 AI 机制完全展开成另一套复杂主模型，而应把它们作为边界条件整合进产品匹配框架。

| GenAI 边界条件 | 为什么重要 | 最可能影响的匹配关系 | 代表文献 |
|---|---|---|---|
| `AI source inference / disclosure` | 消费者会根据 AI 来源推断创作者努力、意图、真实感、情感能力和主观判断能力。 | 对 `Symbolic-oriented × 享乐/审美/身份表达产品` 的惩罚可能更强；对 `Product-oriented × 功利/信息型产品` 的惩罚可能较弱。 | Carney et al.; Grassini & Koivisto; Longoni & Cian; Castelo et al.; Garvey et al. |
| `Prompt-image alignment / semantic fidelity` | GenAI 图可能看起来好，却没有忠实呈现 prompt、产品属性、场景、品牌限制或功能价值。 | 对 `Product-oriented × 功利/高风险/信息密集产品` 损害最大，因为产品诊断路径依赖语义准确性。 | Zhang et al.; Ceylan et al.; Dang et al.; Houston et al. |
| `AI artifacts / hallucination` | 手部、身体、产品结构、尺度和物理互动错误会破坏可信度。 | 对 `Product-oriented` 和 `Context-oriented` 伤害更大，因为功能证据和使用模拟需要物理可信。 | Ojha et al.; Wang et al.; Ricker et al.; Miller et al.; Elder & Krishna |
| `Generative search / best-of-N` | GenAI 的优势不在单张图天然更好，而在可以生成大量候选并按产品任务目标筛选。 | 当筛选目标清晰时更有优势，例如产品诊断性、AIDA、品牌适配、brand personality；只优化美感不足。 | Daviet & Nishimura; Heitmann et al.; Zhang et al.; Burnap et al. |
| `Portfolio homogenization` | GenAI 可能提高单张素材平均质量，却降低组合层面的多样性和品牌差异化。 | 对成熟同质品类、身份品牌、审美/生活方式品牌尤其重要。 | Doshi & Hauser; Lee & Chung; Meincke et al.; Liu et al.; Aaker |
| `Scalable personalization` | GenAI 可大规模生成不同产品、场景、人群和风格组合，但也可能引发隐私和 creepiness 风险。 | 后期旅程、retargeting 和低隐私风险品类更可能受益；敏感品类更易反噬。 | Lambrecht & Tucker; Sahni et al.; Goldfarb & Tucker; Daviet & Nishimura |

## 7. 可直接写进论文的理论模型

本文的理论模型可以画成三层：

```text
Layer 1: Product / Task Characteristics
  - functional diagnostic need
  - perceived risk / price / durability
  - experiential or service nature
  - touch / wear / handheld affordance
  - hedonic / aesthetic / identity-expressive value
  - familiarity / market stage
  - customer journey stage

Layer 2: Best-fit Creative Orientation
  - Product-oriented / Function-diagnostic
  - Context-oriented / Usage-simulation
  - Symbolic-oriented / Affective-symbolic

Layer 3: Consumer Response
  - cognition: product understanding, perceived diagnosticity, processing fluency
  - simulation: self-reference, mental simulation, perceived realism
  - affect/meaning: aesthetic appeal, desire, brand personality, brand attitude
  - behavior: CTR, consideration, purchase intention, conversion proxy

Boundary:
  - AI source inference / disclosure
  - prompt-image alignment
  - AI artifacts / hallucination
  - generative search / best-of-N selection
```

一句话模型表述：

> Product and task characteristics determine which visual persuasion route is most appropriate; GenAI creative orientation operationalizes that route; consumer response depends on the fit between the two, with AI-specific mechanisms shaping the strength and risk of the fit.

中文表述：

> 产品和消费任务特征决定了最适合的视觉说服路径；GenAI 广告图的三类创意取向是这些路径的视觉操作化；消费者反应取决于产品/任务与图像取向的匹配程度，而 AI 来源、提示词忠实度、生成瑕疵和候选筛选机制会改变这种匹配的效果强弱和风险。

## 8. 可直接写进论文的命题/假设

### H1：产品/任务-图像取向匹配

GenAI 广告图的效果取决于产品/消费任务特征与创意取向之间的匹配。功利、工具、信息密集、低熟悉或高风险产品更依赖 `Product-oriented / Function-diagnostic` 图；可触摸、可穿戴、可手持、服务或体验型产品更依赖 `Context-oriented / Usage-simulation` 图；享乐、审美、身份表达或成熟同质品类更依赖 `Symbolic-oriented / Affective-symbolic` 图。

### H2：三类创意取向的不同心理路径

三类 GenAI 广告图通过不同心理机制影响消费者反应：Product-oriented 主要通过 product understanding、perceived diagnosticity 和 trust；Context-oriented 主要通过 self-reference、mental simulation 和 perceived realism；Symbolic-oriented 主要通过 brand personality perception、aesthetic appeal、desire 和 brand attitude。

### H3：AI 来源的非对称边界效应

当图像被披露或感知为 AI 生成时，AI 来源负效应更可能削弱 `Symbolic-oriented × 享乐/审美/身份表达产品` 的效果，因为消费者可能推断 AI 缺少人类努力、情感能力和主观审美判断；该负效应在 `Product-oriented × 功利/信息型产品` 中可能较弱。

### H4：Prompt-image alignment 的选择性损害

Prompt-image alignment 对所有 GenAI 图都重要，但对 `Product-oriented × 功利/高风险/信息密集产品` 尤其关键。语义不对齐会优先破坏产品理解、诊断性、信任和购买意愿，而不仅仅是降低图片美感。

### H5：AI artifacts 的路径依赖效应

AI artifacts 和 hallucinated details 对 Product-oriented 和 Context-oriented 的损害大于对纯 Symbolic-oriented 的损害。产品结构错误、尺寸错误、手部/身体错误或不真实互动会直接破坏功能可信度和使用模拟。

### H6：GenAI 优势来自可搜索视觉空间

GenAI 图像的理论优势不在于单张图片天然优于人类图，而在于企业可以低成本生成大量候选，并根据产品任务相关目标进行筛选。当筛选目标是 product diagnosticity、usage realism、brand personality 或 brand acceptability 时，GenAI 更可能形成理论增量；如果只按 aesthetic appeal 筛选，优势会变弱或偏离广告目标。

## 9. 实验设计落地

### 9.1 基础设计：产品/任务维度 × 三类创意取向

最基础的实验可以是：

| 因子 | 水平 |
|---|---|
| Creative orientation | Product-oriented vs Context-oriented vs Symbolic-oriented |
| Product/task characteristic | high functional diagnostic need vs high hedonic/identity value，或 high usage-simulation need vs low usage-simulation need |

关键预测：

| 匹配条件 | 预期优势 |
|---|---|
| high functional diagnostic need × Product-oriented | product understanding, diagnosticity, trust, purchase intention 更高 |
| high usage-simulation need × Context-oriented | self-reference, mental simulation, perceived realism, purchase intention 更高 |
| high hedonic/identity value × Symbolic-oriented | aesthetic appeal, brand personality perception, desire, brand attitude 更高 |

### 9.2 GenAI 边界条件设计

如果要突出 AI 理论贡献，可以增加一个边界条件，而不是同时加入所有 AI 机制：

| 设计方向 | 因子 | 适合检验什么 |
|---|---|---|
| AI source framing | AI-generated vs human-created / human-assisted | AI 来源是否削弱 Symbolic-oriented 的优势。 |
| Alignment quality | high prompt-image alignment vs low alignment | 产品诊断型图是否更依赖语义忠实度。 |
| Artifact quality | no visible artifact vs subtle physical artifact | 使用模拟和产品诊断路径是否更容易被物理错误破坏。 |
| Selection workflow | single AI output vs best-of-N selected output | GenAI 优势是否来自生成式搜索和筛选。 |

### 9.3 刺激材料生成原则

为了保证三类取向的实验效度，生成刺激时应遵守以下规则：

1. 同一商品的三类图必须保持产品身份、logo、包装、颜色、结构一致。
2. 三类图只改变创意取向，不应同时改变清晰度、质量、文字量、价格信息或产品大小。
3. Product-oriented 必须呈现功能/属性/诊断证据，不能只是高级棚拍。
4. Context-oriented 必须呈现单一可信使用时机，不能只是任意背景。
5. Symbolic-oriented 必须呈现明确象征意义或品牌人格，不能只是好看。
6. 所有图都应避免新增可读文字、假 claim、假认证、错误手部、错误尺度、错误产品结构。
7. 前测应同时测美感、产品清晰度、使用想象、象征意义、真实感和 AI detectability。

## 10. 测量建议

| 构念 | 建议测量题项方向 |
|---|---|
| Product understanding | “这张图帮助我理解产品是什么/做什么。” |
| Perceived diagnosticity | “这张图提供了判断该产品是否适合我的有用信息。” |
| Trust / credibility | “这张图让我觉得产品信息可信。” |
| Mental simulation | “这张图让我容易想象自己使用/拥有这个产品。” |
| Product-context fit | “图中的场景与这个产品的使用方式匹配。” |
| Brand personality perception | “这张图传达了清晰的品牌个性。” |
| Symbolic meaning | “这张图让我感到这个产品代表某种身份/品味/意义。” |
| Aesthetic appeal | “这张图在视觉上有吸引力。” |
| Perceived AI source | “我觉得这张图可能是 AI 生成的。” |
| Prompt-image / product fidelity | “图像准确呈现了产品和任务要求。” |
| Artifact perception | “图中有不自然、错误或不真实的细节。” |
| Purchase intention | “看完这张图后，我更愿意考虑购买该产品。” |

注意：aesthetic appeal 不能替代 symbolic meaning；image quality 不能替代 product diagnosticity；使用场景真实感不能替代 self-reference。三类图像应分别测量各自的主机制，否则容易得出“哪张图更好看”而不是“哪条说服路径更有效”。

## 11. 核心证据-论点映射

| Source / 文献组 | 可用事实 | 支撑的正文论点 | 引用位置 | 风险 |
|---|---|---|---|---|
| Park et al. | brand concept 可分 functional、experiential、symbolic，且不是固定产品类别。 | 三类图像取向有上位品牌理论基础；同一产品可生成不同取向刺激。 | 理论基础段 | Park 的 experiential 不完全等于场景图，需要用 mental simulation 文献收紧。 |
| Tsai & Honka; Chandy et al. | 信息型内容更适合 awareness / aided awareness，新市场更需要教育型诉求。 | 低熟悉、信息密集或功能型产品更适合 Product-oriented。 | 产品匹配主表 | 不能直接推出所有转化指标都更强。 |
| Chitturi et al.; Longoni & Cian | 功能/享乐利益影响不同消费结果；消费者认为 AI 更适合功利判断而非享乐判断。 | 功能型产品更适合 Product-oriented；享乐/主观品类更易受到 AI 来源怀疑。 | 产品维度与 AI source 段 | utilitarian/hedonic 不是唯一产品维度。 |
| Elder & Krishna; Hartmann et al. | 产品朝向、第一人称/手持/brand selfie 可增强使用想象、自我参照或购买相关反应。 | 可触摸、可手持、可穿戴产品更适合 Context-oriented。 | 使用模拟段 | 人脸和 consumer selfie 可能提高互动但分散产品代入。 |
| Aaker; Liu et al.; Heitmann et al. | 品牌人格和视觉品牌属性可以被测量，并可通过视觉 GenAI 目标训练或生成。 | Symbolic-oriented 应强调品牌人格和象征意义，而不只是美感。 | 象征取向段 | 需要避免把品牌人格简化成颜色或风格。 |
| Daviet & Nishimura; Heitmann et al. | GenAI 广告可被优化到 AIDA、品牌人格、CTR 和品牌适配，但纯美学或 prompt-only 不足。 | GenAI 优势来自目标化搜索和筛选，而不是单张美图。 | GenAI 边界条件 | 需要记录生成和筛选流程，否则理论增量弱。 |
| Carney et al.; Grassini & Koivisto; Castelo et al. | AI 来源会改变 effort、authenticity、情感能力、主观判断或互动评价。 | AI 来源可能削弱 Symbolic-oriented 在享乐/身份型产品中的优势。 | AI source 边界条件 | 若实验不披露 AI，也要测 perceived AI source / detectability。 |
| Zhang et al.; Ceylan et al.; Dang et al. | 生成图评价有 semantic alignment/detail quality；图文一致性和图片质量影响加工和互动。 | prompt-image alignment 是 GenAI 产品诊断图的关键质量底线。 | 质量控制/前测段 | 不能只用 aesthetic score 作为刺激质量标准。 |
| Ojha et al.; Wang et al.; Miller et al. | AI 图像可能有可检测痕迹，AI 人脸/生成图可能影响真实感判断。 | AI artifact 和 detectability 是刺激质量和边界条件，不是单纯审美问题。 | 前测/方法段 | 技术检测文献不能单独证明消费者心理效应。 |

## 12. 核心引用清单

以下只保留最适合本文主线的核心文献。原先长文献矩阵可作为内部资料，但正文不建议全部展开。

- Park, Jaworski & MacInnis, `Strategic Brand Concept-Image Management`：三类取向的上位理论基础。
- Tsai & Honka, `Informational and Noninformational Advertising Content`：信息型广告内容、awareness 和购买漏斗。
- Chandy, Tellis, MacInnis & Thaivanich, `What to Say When`：新品类/成熟市场中信息诉求与情感诉求的差异。
- Chitturi, Raghunathan & Mahajan, `Form versus Function` / `Delight by Design`：功能利益与享乐利益的不同消费结果。
- Longoni & Cian, `Artificial Intelligence in Utilitarian vs. Hedonic Contexts`：AI 更被认为适合功利判断而非享乐判断。
- Elder & Krishna, `The Visual Depiction Effect in Advertising`：视觉呈现、身体模拟和购买意愿。
- Hartmann et al., `The Power of Brand Selfies`：packshot、brand selfie、consumer selfie 与 self-reference / CTR。
- Lambrecht & Tucker, `When Does Retargeting Work?`：动态具体产品广告在后期旅程更有效。
- Daviet & Nishimura, `Leveraging Generative AI to Create Visual Content in Digital Advertising`：GenAI 视觉广告的搜索、品牌适配与表现优化。
- Heitmann et al., `Picture Perfect`：视觉 GenAI、AIDA、品牌人格和广告表现。
- Aaker, `Dimensions of Brand Personality`：品牌人格测量基础。
- Liu, Dzyabura & Mizik, `Visual Listening In`：视觉品牌属性与品牌感知。
- Burnap, Hauser & Timoshenko, `Product Aesthetic Design`：产品审美评价可被建模，但不等于广告说服。
- Carney, Riveros & Tully, `Made With AI`：AI disclosure、creator effort、parasocial connection。
- Ceylan, Diehl & Proserpio, `Words Meet Photos`：图文相似性、processing ease 和 helpfulness。
- Dang et al., `When Words Meet Visuals`：文字-图像比例、图文一致性和社交媒体互动。
- Zhang et al., `Learning Multi-Dimensional Human Preference for Text-to-Image Generation`：生成图多维评价，尤其 semantic alignment 和 detail quality。
- Ojha, Li & Lee, `Towards Universal Fake Image Detectors that Generalize Across Generative Models`：AI 图像可检测机器痕迹，适合作为方法/边界补强。

## 13. 最终使用建议

论文正文可以按以下顺序写：

1. 用 Park et al. 引出 functional / experiential / symbolic 三类品牌 image concept。
2. 将其转译为 Product-oriented、Context-oriented、Symbolic-oriented 三类 GenAI 广告图。
3. 说明三类图像不是固定产品类别，而是三条视觉说服路径。
4. 引入产品/消费任务维度，解释为什么不同产品需要不同路径。
5. 将 AI 来源、alignment、artifact 和 generative search 放在边界条件层。
6. 提出产品/任务 × 图像取向匹配假设，再补充 AI 来源或质量边界假设。

一句话收束：

> 本研究的理论贡献在于把 GenAI 广告图从“低成本生成的漂亮图片”重新概念化为“可按产品/消费任务匹配的视觉说服路径”，并进一步说明 AI 来源和生成过程如何改变这些路径的有效性边界。
