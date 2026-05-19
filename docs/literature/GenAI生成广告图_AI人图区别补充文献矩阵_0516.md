# GenAI 生成广告图：AI 图像 vs 人类图像差异补充文献矩阵（0516 修订版）

目标：补强论文中“GenAI 生成广告图不是普通广告图片场景替换，而是一类具有独特心理与技术属性的视觉刺激”的理论论证。

本版按证据强弱重排。第一优先级是直接比较 `AI-generated images / AI-generated visual ads` 与 `human-created images / real images / human-designed ads` 的文献；第二优先级是 GenAI 创意内容相较人类创意内容的差异；第三优先级才是 AI 来源、算法判断、hedonic/utilitarian 等机制文献。

配套文件：[GenAI生成广告图_产品类别匹配文献矩阵_0516.md](GenAI生成广告图_产品类别匹配文献矩阵_0516.md) 负责回答“不同产品类别为什么要匹配不同图片维度”。建议把两个文档合并成论文理论主线：`AI source × Product/Context/Affect creative orientation × product category fit`。

## 图示总览

### Fig. 1 Park 三分类理论桥接

<img src="Fig1_Park三分类理论桥接_0516.svg" alt="Park et al. (1986) 的 functional / experiential / symbolic 如何转译为 Product / Context / Affect 三类广告图创意取向" width="100%">

### Fig. 2 AI 图与人图差异框架

<img src="Fig2_AI图与人图差异框架_0516.svg" alt="AI 生成图相对人类图的四类差异：来源推断、内容结构、视觉痕迹、组合动态" width="100%">

### Fig. 3 AI 来源 × 创意取向假设模型

<img src="Fig3_AI来源x创意取向假设模型_0516.svg" alt="AI 来源与广告图创意取向交互，通过 effort、authenticity、self-imagery、quality/diversity 影响广告效果" width="100%">

### Fig. 4 文献证据分层图

<img src="Fig4_文献证据分层图_0516.svg" alt="文献证据分层：直接图像证据、创意内容证据、机制证据、技术证据" width="100%">

## 0. 三分类的上位理论基础：Park et al. (1986)

老师建议用 Park, Jaworski, and MacInnis (1986, Journal of Marketing) 作为三个维度最开始的理论基础，这个判断是对的，而且比直接说“LLM 推荐出三类图片”稳很多。

原文核心是 `brand concept-image management`。作者把 brand concept 定义为企业选择的品牌意义，来源于三类消费者需要：`functional`、`symbolic`、`experiential`。更关键的是，作者明确说这些概念指的是品牌被创造出来的 image，而不是产品类别；理论上同一个产品可以被定位成功能型、象征型或体验型形象。

因此，我们可以这样转译到广告图创意取向：

| Park et al. (1986) | 原始含义 | 本文广告图三分类 |
|---|---|---|
| `Functional concept` | 解决消费相关问题，强调外部问题解决与功能利益。 | `Product-oriented / product-diagnostic creatives`：产品属性、功能、价格、证据、购买理由。 |
| `Experiential concept` | 提供感官愉悦、变化、认知刺激。 | `Context-oriented / usage-simulation creatives`：使用场景、第一人称/手持/生活方式情境，让消费者想象产品如何进入自己的生活。 |
| `Symbolic concept` | 满足自我提升、角色位置、群体归属、身份认同。 | `Affect-oriented / affective-symbolic creatives`：情绪氛围、品牌人格、身份意义、审美与视觉修辞。 |

需要注意的细节：Park 的 `experiential` 不完全等于“场景图”。它更宽，包含感官愉悦、变化和刺激。我们把它转译为 `Context-oriented` 时，最好配合 Elder and Krishna (2012) 的 visual depiction / mental simulation、MacInnis and Price (1987) 的 imagery processing 来收紧为 `usage simulation`。这样不会被审稿人质疑“experiential 为什么等于使用场景”。

本地原文：`/Users/samxie/Research/YoYoRecomSys_GenPic/Research_Proj/Psy/Paper/GenPic_Ad/Park 等 - 1986 - Strategic Brand Concept-Image Management.pdf`

## 1. 现在这个补充文献方向是否 OK？

结论：原来的版本方向是对的，但还不够精准。它已经覆盖了 AI 来源、创意同质化、技术痕迹三条线；但如果老师要求“重点说明 AI 生成图对比人类生成图有什么区别、什么特点”，就必须把文献分层：

| 层级 | 能回答什么 | 是否应放主文 |
|---|---|---|
| A. 直接图像/视觉广告对比 | AI 图、AI 人脸、AI 艺术、AI 视觉广告和人类/真实图的差异。 | 应放主文，最强。 |
| B. GenAI 创意内容差异 | AI 生成内容可提高单件质量，但可能降低集合多样性。 | 可放主文或理论发展段。 |
| C. AI 来源机制 | 消费者认为 AI 缺少努力、情感、主观判断、人类意图。 | 放机制段，不能单独证明“图片不同”。 |
| D. 纯技术检测文献 | AI 图有可检测机器痕迹。 | 方法/附录/理论补强，不能当消费者心理主证据。 |

下面的表已经按这个逻辑重排。

## 2. 最建议优先引用的核心文献

| 优先级 | 文献 | 来源等级 | 说明 AI 图/AI 视觉内容和人类图有什么不同 | 对本文的直接用法 |
|---:|---|---|---|---|
| 1 | Grassini & Koivisto, “Understanding how personality traits, experiences, and attitudes shape negative bias toward AI-generated artworks” | Scientific Reports, Nature Portfolio | 参与者并不能稳定区分 AI 与人类艺术；客观上 AI 图甚至更受喜欢，但只要主观上被认为是 AI 生成，评价就下降。 | 支撑 `believed AI origin` 比 `true source` 更关键；广告实验必须测 `perceived AI source / AI detectability`。 |
| 2 | Eiserbeck et al., “Deepfake smiles matter less” | Scientific Reports, Nature Portfolio | 相同真实人脸只要被标为 fake / AI，正向表情的心理和神经反应就会变化；“AI/假脸微笑”感染力更弱。 | 如果广告图含人物/模特，AI 来源会改变情绪感染、真实感、信任和温暖感。 |
| 3 | Miller et al., “AI Hyperrealism” | Psychological Science | AI 脸可能被认为比真人脸更像真人；AI 脸更平均、更熟悉、更有吸引力、但也可能更不易记。 | 支撑人物广告图中的 `AI hyperrealism`、`human-likeness`、`uncanny / memorability`。若严格按 UTD/FT/Nature/Science/CCF 口径，可放辅助文献。 |
| 4 | Carney, Riveros & Tully, “Made With AI” | Journal of Consumer Research, UTD24/FT50 | AIGC 披露降低 engagement；不是因为内容质量差，而是降低 parasocial connection，部分由 perceived creator effort 驱动。 | 直接支撑“同一内容被认为是 AI 生成时，消费者反应不同”；适合做 AI disclosure 机制主文献。 |
| 5 | Daviet & Nishimura, “Leveraging Generative AI to Create Visual Content in Digital Advertising” | Marketing Science, UTD24/FT50 | AI 视觉广告的优势不是单张好看，而是能搜索高维创意空间；AI 组合与人类设计师、纯美学优化 AI 有不同表现。 | 支撑 AI 图的 `searchability`、`brand alignment`、`performance alignment`，说明 AI 不是简单替代人类设计。 |
| 6 | Heitmann et al., “Picture Perfect” | Journal of Marketing, UTD24/FT50 | 视觉 GenAI 广告可在 AIDA、品牌个性、CTR 上表现不同于传统/市场广告；但 prompt-only 或纯美学不足。 | 支撑“生成目标”本身是理论变量：AIDA-oriented、brand-personality-oriented、affective/lifestyle-oriented。 |
| 7 | Doshi & Hauser, “Generative AI enhances individual creativity but reduces the collective diversity of novel content” | Science Advances | GenAI 可提高单个创意作品评分，但使作品之间更相似，降低集合层面的新颖性/多样性。 | 支撑 AI 广告图可能“单张更优、组合更同质”；可转化为 `portfolio diversity` 假设。 |
| 8 | Ojha, Li & Lee, “Towards Universal Fake Image Detectors that Generalize Across Generative Models” | CVPR 2023, CCF-A | 生成图跨模型存在可被检测器捕捉的表征规律，说明 AI 图不等于真实/人类图的统计分布。 | 技术层面支撑 AI 图像有 machine-generated regularities；适合方法/附录或理论补强。 |

## 3. 分层文献矩阵

### A. 直接对比 AI 图像、AI 视觉广告与人类/真实图像

| # | 文献 | 年份/出处 | 等级 | AI 图 vs 人类/真实图的关键区别 | 本文可用变量 |
|---:|---|---|---|---|---|
| A1 | Grassini & Koivisto, “Understanding how personality traits, experiences, and attitudes shape negative bias toward AI-generated artworks” | 2024, Scientific Reports | Nature Portfolio | AI 图和人类艺术图的客观来源不一定被识别；但主观认为是 AI 会触发负向偏见。 | `believed source`、`true source`、`AI detectability`、`aesthetic liking`、`positive emotion`。 |
| A2 | Eiserbeck et al., “Deepfake smiles matter less” | 2023, Scientific Reports | Nature Portfolio | 即使图片本身是真人脸，被标注为 fake / AI 后，正向表情的情绪效应被削弱。 | `AI/real label`、`emotional contagion`、`warmth`、`trust`、`positive affect`。 |
| A3 | Miller et al., “AI Hyperrealism: Why AI Faces Are Perceived as More Real Than Human Ones” | 2023, Psychological Science | 心理学顶刊，辅助 | AI 人脸可被认为比真人脸更真实；AI 脸具有平均化、熟悉、吸引力等特征。 | `human-likeness`、`perceived realism`、`memorability`、`uncanny cues`。 |
| A4 | Carney, Riveros & Tully, “Made With AI: Consumer Engagement with Social Media Containing AI Disclosures” | 2026, Journal of Consumer Research | UTD24/FT50 | 相同内容只要披露为 AIGC，消费者 engagement 下降；机制是 parasocial connection 和 creator effort。 | `AI disclosure`、`perceived effort`、`parasocial connection`、`engagement`。 |
| A5 | Daviet & Nishimura, “Leveraging Generative Artificial Intelligence to Create Visual Content in Digital Advertising” | 2026, Marketing Science | UTD24/FT50 | AI 视觉广告相较人类设计师素材，核心差异在于可搜索海量视觉空间，并同时优化表现与品牌适配。 | `AI portfolio` vs `human designer`；`aesthetics-only AI` vs `brand/performance-aligned AI`。 |
| A6 | Heitmann et al., “Picture Perfect: Engaging Customers with Visual Generative AI” | 2025, Journal of Marketing | UTD24/FT50 | 视觉 GenAI 广告可在 AIDA、品牌人格和 CTR 上与传统品牌广告不同；有效性取决于训练目标。 | `AIDA-trained AI image`、`brand-personality-trained AI image`、`prompt-only AI image`、`human/market ad baseline`。 |
| A7 | Tomlinson et al., “The carbon emissions of writing and illustrating are lower for AI than for humans” | 2024, Scientific Reports | Nature Portfolio | AI 插画和人类插画在生产成本/碳排上不同；但不是消费者心理差异主证据。 | 只能放管理意义：低成本、可规模化、可持续性；不建议做主假设依据。 |

### B. GenAI 创意内容相较人类创意内容的特点

| # | 文献 | 年份/出处 | 等级 | AI 内容特点 | 本文可用变量 |
|---:|---|---|---|---|---|
| B1 | Doshi & Hauser, “Generative AI enhances individual creativity but reduces the collective diversity of novel content” | 2024, Science Advances | Science 子刊 | GenAI 可提升单个作品的新颖性/有用性评价，但降低作品集合的相似性距离。 | `single-image quality` vs `portfolio diversity`。 |
| B2 | Lee & Chung, “An empirical investigation of the impact of ChatGPT on creativity” | 2024, Nature Human Behaviour | Nature 子刊 | ChatGPT 提升创意任务表现，尤其擅长把远距离概念组合成连贯方案，但更偏 incremental novelty。 | `incremental recombination`、`creative coherence`、`radical novelty`。 |
| B3 | Meincke, Nave & Terwiesch, “ChatGPT decreases idea diversity in brainstorming” | 2025, Nature Human Behaviour | Nature 子刊 | AI 辅助头脑风暴可能让不同人的想法更趋同。 | 广告图组合层面的 `visual/conceptual homogenization`。 |
| B4 | Zhang et al., “Learning Multi-Dimensional Human Preference for Text-to-Image Generation” | 2024, CVPR | CCF-A | 人对生成图的偏好是多维的，不是单一 overall score；包括 aesthetics、semantic alignment、detail quality。 | 生成广告图评价拆成 `aesthetics`、`semantic alignment`、`detail quality`、`overall preference`。 |

### C. 消费者为什么会把 AI 生成内容看得不同：机制文献

这些文献不是直接比较 AI 图和人类图，但能解释为什么 AI 生成广告图在情感型/象征型创意上可能被不同评价。

| # | 文献 | 年份/出处 | 等级 | 机制 | 本文用法 |
|---:|---|---|---|---|---|
| C1 | Longoni & Cian, “Artificial Intelligence in Utilitarian vs. Hedonic Contexts: The Word-of-Machine Effect” | 2020, Journal of Marketing | UTD24/FT50 | 消费者认为 AI 更擅长 utilitarian 判断，较不擅长 hedonic 判断；human-AI hybrid 可缓解。 | 预测 AI 来源对 `Product-oriented` 更友好，对 `Affect-oriented` 更不利。 |
| C2 | Castelo, Bos & Lehmann, “Task-Dependent Algorithm Aversion” | 2019, Journal of Marketing Research | UTD24/FT50 | 人们更不愿把主观任务交给算法，因为认为算法缺乏主观判断能力。 | 解释为什么审美、情绪、品牌象征图更容易触发 AI 抵触。 |
| C3 | Clegg et al., “Unveiling the Mind of the Machine” | 2024, Journal of Consumer Research | UTD24/FT50 | 高适应性算法被认为更有创造力但更不可预测。 | 区分 `adaptive GenAI workflow` vs `template/pre-programmed workflow`。 |
| C4 | Garvey, Kim & Duhachek, “Bad News? Send an AI. Good News? Send a Human” | 2023, Journal of Marketing | UTD24/FT50 | AI agent 被认为意图较弱；人类更适合传递正向/温暖信息。 | 支撑 AI 图像创作者可能被感知为低意图、低温度、低真诚。 |
| C5 | Longoni, Cian & Kyung, “Algorithmic Transference” | 2023, Journal of Marketing Research | UTD24/FT50 | 人们更容易把一个 AI 的失败泛化到其他 AI，因为 AI 被视为同质。 | 若 AI 图出现错误，消费者可能泛化为“AI 广告图不可靠”。 |

### D. 技术层面：AI 图像有可检测的机器痕迹

这些文献最好放在“为什么 AI 图像是不同媒介/不同刺激”的背景段、方法附录或预筛选部分，不宜直接作为消费者心理机制的主证据。

| # | 文献 | 年份/出处 | 等级 | AI 图像特点 | 本文用法 |
|---:|---|---|---|---|---|
| D1 | Ojha, Li & Lee, “Towards Universal Fake Image Detectors that Generalize Across Generative Models” | 2023, CVPR | CCF-A | 生成图跨模型存在可泛化检测的表征特征。 | 说明 AI 图有 machine-generated regularities。 |
| D2 | Wang et al., “DIRE for Diffusion-Generated Image Detection” | 2023, ICCV | CCF-A | Diffusion 生成图比真实图更容易被扩散模型重构，DIRE 用重构误差区分真/假。 | 支撑 `AI realism` 不等于 `real/human image equivalence`。 |
| D3 | Ricker, Lukovnikov & Fischer, “AEROBLADE” | 2024, CVPR | CCF-A | Latent diffusion 图像因 autoencoder 管线留下重构痕迹。 | 说明 Stable Diffusion/Midjourney 类输出带有生成管线痕迹。 |
| D4 | Sha et al., “DE-FAKE” | 2023, ACM CCS | CCF-A | 文生图模型生成的假图可与真实图区分，不同模型具有一定指纹。 | 可作为 `AI artifact / model fingerprint` 的方法论支撑。 |

## 4. 可直接写进论文的理论段落

### 中文版

既有品牌理论将品牌概念区分为功能型、体验型和象征型。Park, Jaworski, and MacInnis (1986) 指出，品牌概念是企业选择并长期管理的品牌意义，来源于消费者的功能、体验和象征需要；这些概念指向品牌形象，而不是固定的产品类别。基于这一理论传统，本文将 LLM/GenAI 生成广告图概念化为三类创意取向：产品诊断型、使用模拟型和情感象征型。

本文进一步提出，GenAI 生成广告图并不是人类广告图的低成本替代物，而是一类理论上不同的视觉刺激。第一，消费者会依据 AI 来源推断创作者努力、意图性、真实性和情感能力，从而改变对广告图的评价。第二，GenAI 可以通过大规模生成和筛选提高单张素材的局部质量，但也可能使创意组合更加同质化。第三，即使 AI 图像在表面上高度逼真，计算机视觉研究仍显示生成图具有可检测的模型痕迹。因此，研究 GenAI 生成广告图不仅扩展了广告图创意取向理论，也揭示了 AI 作为创作来源如何改变产品诊断、使用模拟和情感象征三类视觉说服路径。

### English Version

Prior brand theory distinguishes functional, experiential, and symbolic brand concepts. Park, Jaworski, and MacInnis (1986) define a brand concept as a firm-selected brand meaning derived from functional, experiential, and symbolic consumer needs, emphasizing that these concepts describe the image created for a brand rather than fixed product categories. Building on this tradition, we conceptualize LLM/GenAI-generated advertising images along three creative orientations: product-diagnostic, usage-simulation, and affective-symbolic creatives.

We further argue that GenAI-generated advertising images are not merely low-cost substitutes for human-created images, but theoretically distinct visual stimuli. First, AI origin changes consumers' inferences about creator effort, intentionality, authenticity, and affective competence. Second, GenAI can improve the local quality of individual creatives through large-scale generation and selection, while potentially reducing diversity across a portfolio of creatives. Third, even when generated images appear photorealistic, computer vision research shows that they can contain machine-traceable regularities. Studying GenAI-generated ad images therefore extends theories of visual advertising by showing how AI as a creative source reshapes product-diagnostic, usage-simulation, and affective-symbolic persuasion routes.

## 5. 最适合本文的假设方向

| 假设方向 | 逻辑 | 主要支撑 |
|---|---|---|
| H1：创意取向调节 AI 来源效应 | AI 图在产品诊断型广告中可能更容易被接受；在情感象征型广告中更容易因缺少人类努力、情感和主观判断而受损；使用模拟型取决于真实感与自我代入。 | Park et al.; Longoni & Cian; Castelo et al.; Carney et al.; Grassini & Koivisto |
| H2：AI 来源通过 effort / authenticity 损害情感说服 | 披露 AI 生成会降低 perceived creator effort、authenticity、parasocial connection，进而降低广告态度和品牌态度。 | Carney et al.; Grassini & Koivisto; Eiserbeck et al.; Garvey et al. |
| H3：AI 图优势来自搜索和筛选，而非单纯美感 | best-of-N 或 portfolio-level AI workflow 只有在同时优化消费者反应和品牌适配时才优于单张 AI 或人类 baseline；只优化 aesthetics 不够。 | Daviet & Nishimura; Heitmann et al.; Zhang et al. |
| H4：AI 图提升单张质量但降低组合多样性 | AI 生成素材可能平均质量更高，但由于模型、prompt、模板和偏好奖励相似，整体创意组合更同质。 | Doshi & Hauser; Lee & Chung; Meincke et al.; Ojha et al. |

## 6. 参考链接

- Park, Jaworski & MacInnis, Journal of Marketing: https://journals.sagepub.com/doi/10.1177/002224298605000401
- Grassini & Koivisto, Scientific Reports: https://www.nature.com/articles/s41598-024-54294-4
- Eiserbeck et al., Scientific Reports: https://www.nature.com/articles/s41598-023-42802-x
- Miller et al., Psychological Science: https://journals.sagepub.com/doi/10.1177/09567976231207095
- Carney, Riveros & Tully, Journal of Consumer Research: https://academic.oup.com/jcr/advance-article/doi/10.1093/jcr/ucag013/8672493
- Daviet & Nishimura, Marketing Science: https://pubsonline.informs.org/doi/abs/10.1287/mksc.2024.1130
- Heitmann et al., Journal of Marketing: https://journals.sagepub.com/doi/10.1177/00222429251356993
- Doshi & Hauser, Science Advances: https://www.science.org/doi/10.1126/sciadv.adn5290
- Lee & Chung, Nature Human Behaviour: https://www.nature.com/articles/s41562-024-01953-1
- Meincke, Nave & Terwiesch, Nature Human Behaviour: https://www.nature.com/articles/s41562-025-02173-x
- Longoni & Cian, Journal of Marketing: https://journals.sagepub.com/doi/10.1177/0022242920957347
- Castelo, Bos & Lehmann, Journal of Marketing Research: https://journals.sagepub.com/doi/10.1177/0022243719851788
- Clegg et al., Journal of Consumer Research: https://academic.oup.com/jcr/article/51/2/342/7450123
- Garvey, Kim & Duhachek, Journal of Marketing: https://journals.sagepub.com/doi/abs/10.1177/00222429211066972
- Longoni, Cian & Kyung, Journal of Marketing Research: https://journals.sagepub.com/doi/10.1177/00222437221110139
- Ojha, Li & Lee, CVPR 2023: https://openaccess.thecvf.com/content/CVPR2023/html/Ojha_Towards_Universal_Fake_Image_Detectors_That_Generalize_Across_Generative_Models_CVPR_2023_paper.html
- Wang et al., ICCV 2023 DIRE: https://openaccess.thecvf.com/content/ICCV2023/papers/Wang_DIRE_for_Diffusion-Generated_Image_Detection_ICCV_2023_paper.pdf
- Ricker, Lukovnikov & Fischer, CVPR 2024 AEROBLADE: https://cvpr.thecvf.com/virtual/2024/poster/29888
- Sha et al., ACM CCS 2023 DE-FAKE: https://dblp.org/rec/conf/ccs/ShaLYZ23.html
- Zhang et al., CVPR 2024 MPS: https://cvpr.thecvf.com/virtual/2024/poster/30079
