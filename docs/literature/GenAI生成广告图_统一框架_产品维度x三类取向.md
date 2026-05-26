
# GenAI 生成广告图统一框架：产品/消费任务维度 × 三类创意取向

2026-05-25

## 1. 产品/任务特征与 GenAI 创意取向匹配

 **GenAI 广告图的效果取决于产品/消费任务特征与图像创意取向之间的匹配** 。这一命题建立在 brand concept-image management 的基础上：品牌形象可以被组织为 functional、experiential 和 symbolic 三类概念，而这些概念并不由产品类别天然决定，而是由企业希望消费者形成的利益联想来管理（Park, Jaworski, & MacInnis, 1986）。由此，GenAI 广告图可以被理解为三条视觉说服路径：`Product-oriented / Function-diagnostic`、`Context-oriented / Usage-simulation` 和 `Symbolic-oriented / Affective-symbolic`。

第一条路径是 `Product-oriented / Function-diagnostic`。当消费者面对**功利型、工具型、信息密集型、低熟悉度、高价格或高风险产品时**，关键消费任务通常是**降低不确定性、理解产品属性、判断功能是否满足需求**，并形成“为什么值得买”的理由。传统广告内容研究显示，informational advertising content 对 aided awareness 等认知阶段具有独立作用，而广告诉求在市场阶段和消费者知识结构不同的情况下应有所调整（Chandy, Tellis, MacInnis, & Thaivanich, 2001; Tsai & Honka, 2021）。功能利益与享乐利益会触发不同的产品评价与情绪结果，说明功能诊断和氛围偏好属于不同评价路径（Chitturi, Raghunathan, & Mahajan, 2007, 2008）。在视觉材料中，图片与文字或商品信息之间的语义一致性会提高处理流畅性和帮助性，图文构成也会影响社交媒体互动效果（Ceylan, Diehl, & Proserpio, 2024; Dang, Kwan, Jia, & Shi, 2026）。因此，需要解释功能、呈现属性、降低风险或支持比较判断的产品，更适合 Product-oriented 图：这种图应突出产品结构、材质、组件、接口、尺度、包装、使用 affordance 或其他可见证据，而不是用抽象氛围替代产品诊断。

第二条路径是 `Context-oriented / Usage-simulation`。当产品价值需要消费者想象自己如何使用、拥有、佩戴、手持、摆放、赠送或消费时，关键机制不只是“看到产品”，而是通过画面进入一个可信的使用时刻。视觉呈现可以触发 embodied mental simulation，产品朝向和可操作视角会影响消费者对使用行为的模拟与购买意愿（Elder & Krishna, 2012）。社交媒体中的品牌图像也表明，第一人称、手持或“brand selfie”式画面能够增强 self-reference，并且在品牌参与和点击反应上区别于纯人物自拍或普通 packshot（Hartmann, Heitmann, Schamp, & Netzer, 2021）。在个性化和再营销场景中，当消费者已进入更明确的购买旅程时，更具体的产品或场景信息往往更有价值（Lambrecht & Tucker, 2013）。因此，可穿戴、可手持、可触摸、需要尺寸/适配判断、服务体验型或活动型产品，更适合 Context-oriented 图：这种图应把产品放入一个单一、可信、物理关系正确的使用场景，让消费者自然推断“我会在何处、何时、如何使用它”。

第三条路径是 `Symbolic-oriented / Affective-symbolic`。当产品价值主要来自审美、身份表达、品牌人格、地位、关怀、自然、活力、专业感或其他象征意义时，关键任务不是解释功能，也不是演示具体使用，而是让产品成为一种意义载体。Park et al. (1986) 的 symbolic brand concept 已经把品牌意义、自我表达和社会角色放在与 functional concept 并列的位置；品牌人格研究进一步说明，消费者能够将品牌理解为 sincerity、excitement、competence、sophistication 和 ruggedness 等人格维度（Aaker, 1997）。视觉营销研究也显示，品牌形象和品牌个性可以从大规模图像中被识别和建模，视觉 GenAI 也可以围绕 AIDA 或 brand personality 等目标生成和优化广告内容（Heitmann, Jansen, Reisenbichler, & Schweidel, 2025; Liu, Dzyabura, & Mizik, 2020）。同时，产品审美可以被独立建模，但审美吸引力本身不等于广告说服路径；在本文中，审美应服务于象征意义、品牌人格和自我表达，而不是替代这些机制（Burnap, Hauser, & Timoshenko, 2023）。因此，享乐型、审美型、身份表达型、礼赠型或成熟同质品类，更适合 Symbolic-oriented 图：这种图应通过光线、色彩、构图、材质、隐喻和氛围传递品牌兼容的象征意义，而不是堆砌产品信息。

除此以外，消费者可能根据 AI disclosure 或 AI source inference 推断创作者努力、真实感、情感能力和关系性，从而改变对广告内容的反应；已有研究显示，社交媒体 AI 披露会影响消费者参与，且 AI 在功利与享乐语境中的接受度并不相同（Carney, Riveros, & Tully, 2025; Longoni & Cian, 2022）。由此可推断，AI 可能更适合客观、功能、可验证的产品诊断任务，却更容易在享乐、审美、身份表达或情感关系任务上遭遇 effort、authenticity 或 affective competence 的怀疑。与此同时，GenAI 图像还必须满足 prompt-image alignment、semantic fidelity 和 detail quality：多维人类偏好评价研究显示，不能用单一 aesthetic appeal 评分替代语义一致、细节质量和总体偏好；图文一致性也会影响处理流畅性和互动效果（Ceylan et al., 2024; Dang et al., 2026; Zhang et al., 2024）。AI artifacts、错误手部、错误结构、错误尺度或过度逼真的人脸也会改变真实感和可信度判断，尤其在需要物理交互或人物线索的 Context-oriented 图中更危险（Miller et al., 2023; Ojha, Li, & Lee, 2023）。

框架可表示为：

```Plain
Product / Task Characteristics
    ↓
Best-fit GenAI Creative Orientation
    ↓
Consumer Cognitive / Simulation / Affective / Behavioral Response

Boundary conditions:
AI source inference, prompt-image alignment, AI artifacts, generative search
```

## 2. 理论基础、产品匹配与 GenAI 边界条件

Park, Jaworski, and MacInnis (1986) 将 brand concept 区分为 functional、experiential 和 symbolic 三类。该理论可作为本文的上位框架，因为它强调品牌形象并不是产品类别本身，而是企业选择并管理的一种意义结构。同一个产品可以被定位成功能型、体验型或象征型 image。

本文将这一理论转译为 GenAI 广告图刺激的三类创意取向：

| Park et al. 的概念       | 原始含义                                     | 本文中的 GenAI 广告图取向                                                                         |
| ------------------------ | -------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `Functional concept`   | 解决消费问题，强调外部问题解决和功能利益。   | `Product-oriented / Function-diagnostic`：强调产品是什么、做什么、有哪些属性和购买理由。        |
| `Experiential concept` | 提供感官愉悦、变化、体验和刺激。             | `Context-oriented / Usage-simulation`：强调使用场景、拥有想象、自我代入和 embodied simulation。 |
| `Symbolic concept`     | 满足自我提升、角色位置、群体归属和身份认同。 | `Symbolic-oriented / Affective-symbolic`：强调象征意义、品牌人格、身份表达、审美态度。          |

需要区分的是，Park 的 `experiential` 概念比“场景图”更宽。为了避免概念过散，本文将其收紧为 usage simulation，即消费者通过图像想象产品如何进入自己的生活。这一界定可以由 visual depiction / embodied simulation、brand selfie / self-reference，以及广告图风格属性传递概念的研究共同支持（Elder & Krishna, 2012; Hartmann et al., 2021; Peracchio & Meyers-Levy, 2005）。

### **产品/消费任务维度与图像取向匹配**

产品/消费任务维度不宜简化为 utilitarian versus hedonic 的单一二分。更合适的处理方式是把产品理解为若干可以叠加的 task characteristics：有些产品需要功能解释，有些产品需要使用模拟，有些产品需要身份和象征意义，也有些产品同时具有高价格、低熟悉度、可穿戴或礼赠属性。实验设计时应选择最突出的产品/任务特征作为 moderator，并检验该特征与三类图像取向之间的匹配关系。

| 产品/消费任务类型                                | 最匹配图像取向                                                            | 理论机制                                                                                               | 推荐 DV                                                                                                   | 关键文献                                                                         |
| ------------------------------------------------ | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 功利型、工具型、信息密集型产品                   | `Product-oriented / Function-diagnostic`                                | 消费者需要判断功能、规格、兼容性、操作方式或购买理由；信息型视觉能降低不确定性并提升 aided awareness。 | product understanding, perceived diagnosticity, trust, aided awareness, consideration, purchase intention | Tsai & Honka; Longoni & Cian; Chitturi et al.; Unnava & Burnkrant; Ceylan et al. |
| 高风险、高价格、耐用品                           | `Product-oriented`+ 适度 `Context-oriented`                           | 高风险产品既需要属性证据，也需要拥有/使用模拟；单纯情绪氛围不足以建立信任。                            | trust, perceived risk, consideration, online search, purchase intention, sales proxy                      | Guitart & Stremersch; Heitmann et al.; Burnap et al.; Townsend & Kahn            |
| 服务型、体验型、活动型产品                       | `Context-oriented / Usage-simulation`，必要时结合 `Symbolic-oriented` | 服务和活动难以用单一物理属性说明，消费者更依赖体验想象、场景沉浸和品牌/活动适配。                      | usage imagery, perceived experience fit, engagement, brand evaluation, CTR                                | Daviet & Nishimura; Lambrecht & Tucker; Azer et al.; Hartmann et al.             |
| 可触摸、可穿戴、可手持、需要适配或使用模拟的产品 | `Context-oriented / Usage-simulation`                                   | 手持、佩戴、身体局部、产品朝向和第一人称视角可激发 embodied mental simulation。                        | self-reference, embodied simulation, perceived fit, purchase intention, CTR                               | Elder & Krishna; Hartmann et al.; Peracchio & Meyers-Levy                        |
| 享乐型、审美型、身份表达型产品                   | `Symbolic-oriented / Affective-symbolic`+ 适度 `Context-oriented`     | 这类产品的价值来自审美、情绪、品牌人格和自我表达；消费者不仅判断功能，也判断“是否符合我”。           | aesthetic appeal, desire, brand attitude, brand personality perception, WTP                               | Chitturi et al.; Aaker; Liu et al.; Hartmann et al.; Longoni & Cian              |
| 低熟悉、新品类、早期市场                         | `Product-oriented / Function-diagnostic`                                | 新市场需要教育和解释，消费者需要先理解产品用途和属性，才可能形成考虑集。                               | awareness, recall, product understanding, consideration                                                   | Chandy et al.; Tsai & Honka; Ceylan et al.                                       |
| 成熟同质品类、品牌差异化不足                     | `Symbolic-oriented / Affective-symbolic`                                | 当基础功能差异不显著时，品牌人格、情绪和象征意义更能形成差异化。                                       | brand distinctiveness, brand attitude, interest, desire                                                   | Park et al.; Aaker; Liu et al.; Heitmann et al.                                  |
| 后期旅程、明确偏好、retargeting 场景             | 具体 `Product-oriented`或个性化 `Context-oriented`                    | 消费者已有窄化偏好时，更容易响应具体产品、卖点、动态个性化场景或可购买线索。                           | clicks, conversion, purchase, response rate                                                               | Lambrecht & Tucker; Lewis et al.; Sahni et al.; Daviet & Nishimura               |
| 社交平台互动目标                                 | `Context-oriented`或 `Symbolic-oriented`，但必须保持图文一致          | 情绪、人物、色彩、品牌人格和场景可提高互动，但平台规范和图文一致性会调节效果。                         | likes, comments, shares, engagement intention, CTR                                                        | Lee et al.; Li & Xie; Dang et al.; Kanuri et al.; Hartmann et al.                |
| 高隐私或敏感品类                                 | 谨慎使用高度个性化 `Context-oriented`；优先清晰、低侵入表达             | 定向匹配和视觉显眼性同时过强可能触发隐私反感；健康、金融、身体、家庭等品类尤其敏感。                   | privacy concern, trust, purchase intention                                                                | Goldfarb & Tucker; Lambrecht & Tucker; Sahni et al.                              |

### **GenAI 作为边界条件**

产品-图像取向匹配本身并非 GenAI 独有；传统广告也可以研究不同产品适合何种图片诉求。GenAI 的理论增量在于，同一匹配关系会受到生成来源和生成过程的影响。因此，AI source inference、prompt-image alignment、AI artifacts 和 generative search 更适合作为边界条件，而不是另起一套独立主模型。

| GenAI 边界条件                                 | 为什么重要                                                                             | 最可能影响的匹配关系                                                                                                         | 代表文献                                                                          |
| ---------------------------------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `AI source inference / disclosure`           | 消费者会根据 AI 来源推断创作者努力、意图、真实感、情感能力和主观判断能力。             | 对 `Symbolic-oriented × 享乐/审美/身份表达产品`的惩罚可能更强；对 `Product-oriented × 功利/信息型产品`的惩罚可能较弱。 | Carney et al.; Grassini & Koivisto; Longoni & Cian; Castelo et al.; Garvey et al. |
| `Prompt-image alignment / semantic fidelity` | 视觉质量较高的 GenAI 图也可能没有忠实呈现 prompt、产品属性、场景、品牌限制或功能价值。 | 对 `Product-oriented × 功利/高风险/信息密集产品`损害最大，因为产品诊断路径依赖语义准确性。                                | Zhang et al.; Ceylan et al.; Dang et al.; Houston et al.                          |
| `Generative search / best-of-N`              | GenAI 的优势不在单次生成结果本身，而在可以生成大量候选并按产品任务目标筛选。           | 当筛选目标清晰时更有优势，例如产品诊断性、AIDA、品牌适配、brand personality；只优化美感不足。                                | Daviet & Nishimura; Heitmann et al.; Zhang et al.; Burnap et al.                  |
| `Portfolio homogenization`                   | GenAI 可能提高单张素材平均质量，却降低组合层面的多样性和品牌差异化。                   | 对成熟同质品类、身份品牌、审美/生活方式品牌尤其重要。                                                                        | Doshi & Hauser; Lee & Chung; Meincke et al.; Liu et al.; Aaker                    |
| `Scalable personalization`                   | GenAI 可大规模生成不同产品、场景、人群和风格组合，但也可能引发隐私和 creepiness 风险。 | 后期旅程、retargeting 和低隐私风险品类更可能受益；敏感品类更易反噬。                                                         | Lambrecht & Tucker; Sahni et al.; Goldfarb & Tucker; Daviet & Nishimura           |

## 3. 理论模型、研究命题与证据映射

### 3.1 理论模型

本文的理论模型包含三层：产品/消费任务特征决定最适合的视觉说服路径；三类 GenAI 创意取向将这些路径具体化为广告图；消费者反应取决于产品/任务特征与图像取向的匹配程度。AI 来源、提示词忠实度、生成瑕疵和候选筛选机制则改变这种匹配关系的效果强弱和风险。

```Plain
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

### 3.2 可能的研究命题

#### RQ1：产品/任务-图像取向匹配

GenAI 广告图的效果取决于产品/消费任务特征与创意取向之间的匹配。功利、工具、信息密集、低熟悉或高风险产品更依赖 `Product-oriented / Function-diagnostic` 图；可触摸、可穿戴、可手持、服务或体验型产品更依赖 `Context-oriented / Usage-simulation` 图；享乐、审美、身份表达或成熟同质品类更依赖 `Symbolic-oriented / Affective-symbolic` 图。

#### RQ2：三类创意取向的不同心理路径

三类 GenAI 广告图通过不同心理机制影响消费者反应：Product-oriented 主要通过 product understanding、perceived diagnosticity 和 trust；Context-oriented 主要通过 self-reference、mental simulation 和 perceived realism；Symbolic-oriented 主要通过 brand personality perception、aesthetic appeal、desire 和 brand attitude。

#### RQ3：AI 来源的非对称边界效应

当图像被披露或感知为 AI 生成时，AI 来源负效应更可能削弱 `Symbolic-oriented × 享乐/审美/身份表达产品` 的效果，因为消费者可能推断 AI 缺少人类努力、情感能力和主观审美判断；该负效应在 `Product-oriented × 功利/信息型产品` 中可能较弱。

#### RQ4：Prompt-image alignment 的选择性损害

Prompt-image alignment 对所有 GenAI 图都重要，但对 `Product-oriented × 功利/高风险/信息密集产品` 尤其关键。语义不对齐会优先破坏产品理解、诊断性、信任和购买意愿，而不仅仅是降低图片美感。

### 3.3 论文参考

| Source / 文献组                                    | 可用事实                                                                             | 支撑的正文论点                                                         |
| -------------------------------------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| Park et al.                                        | brand concept 可分 functional、experiential、symbolic，且不是固定产品类别。          | 三类图像取向有上位品牌理论基础；同一产品可生成不同取向刺激。           |
| Tsai & Honka; Chandy et al.                        | 信息型内容更适合 awareness / aided awareness，新市场更需要教育型诉求。               | 低熟悉、信息密集或功能型产品更适合 Product-oriented。                  |
| Chitturi et al.; Longoni & Cian                    | 功能/享乐利益影响不同消费结果；消费者认为 AI 更适合功利判断而非享乐判断。            | 功能型产品更适合 Product-oriented；享乐/主观品类更易受到 AI 来源怀疑。 |
| Elder & Krishna; Hartmann et al.                   | 产品朝向、第一人称/手持/brand selfie 可增强使用想象、自我参照或购买相关反应。        | 可触摸、可手持、可穿戴产品更适合 Context-oriented。                    |
| Aaker; Liu et al.; Heitmann et al.                 | 品牌人格和视觉品牌属性可以被测量，并可通过视觉 GenAI 目标训练或生成。                | Symbolic-oriented 应强调品牌人格和象征意义，而不只是美感。             |
| Daviet & Nishimura; Heitmann et al.                | GenAI 广告可被优化到 AIDA、品牌人格、CTR 和品牌适配，但纯美学或 prompt-only 不足。   | GenAI 优势来自目标化搜索和筛选，而不是单张高美感图像。                 |
| Carney et al.; Grassini & Koivisto; Castelo et al. | AI 来源会改变 effort、authenticity、情感能力、主观判断或互动评价。                   | AI 来源可能削弱 Symbolic-oriented 在享乐/身份型产品中的优势。          |
| Zhang et al.; Ceylan et al.; Dang et al.           | 生成图评价有 semantic alignment/detail quality；图文一致性和图片质量影响加工和互动。 | prompt-image alignment 是 GenAI 产品诊断图的关键质量底线。             |
| Ojha et al.; Wang et al.; Miller et al.            | AI 图像可能有可检测痕迹，AI 人脸/生成图可能影响真实感判断。                          | AI artifact 和 detectability 是刺激质量和边界条件，不是单纯审美问题。  |

## References

* Aaker, J. L. (1997). Dimensions of brand personality. *Journal of Marketing Research, 34*(3), 347-356. https://doi.org/10.1177/002224379703400304
* Burnap, A., Hauser, J. R., & Timoshenko, A. (2023). Product aesthetic design: A machine learning augmentation. *Marketing Science, 42*(6), 1029-1056. https://doi.org/10.1287/mksc.2022.1429
* Carney, S., Riveros, I., & Tully, S. (2025). *Made with AI: Consumer engagement with social media containing AI disclosures* (SSRN Scholarly Paper). Social Science Research Network. https://doi.org/10.2139/ssrn.4988760
* Ceylan, G., Diehl, K., & Proserpio, D. (2024). Words meet photos: When and why photos increase review helpfulness. *Journal of Marketing Research, 61*(1), 5-26. https://doi.org/10.1177/00222437231169711
* Chandy, R. K., Tellis, G. J., MacInnis, D. J., & Thaivanich, P. (2001). What to say when: Advertising appeals in evolving markets. *Journal of Marketing Research, 38*(4), 399-414. https://doi.org/10.1509/jmkr.38.4.399.18908
* Chitturi, R., Raghunathan, R., & Mahajan, V. (2007). Form versus function: How the intensities of specific emotions evoked in functional versus hedonic trade-offs mediate product preferences. *Journal of Marketing Research, 44*(4), 702-714.
* Chitturi, R., Raghunathan, R., & Mahajan, V. (2008). Delight by design: The role of hedonic versus utilitarian benefits. *Journal of Marketing, 72*(3), 48-63.
* Dang, I. C., Kwan, C. M. C., Jia, J. S., & Shi, Y. (2026). When words meet visuals: How content composition drives social media engagement for marketer-generated content. *Journal of Marketing Research, 63*(1), 167-190. https://doi.org/10.1177/00222437251373042
* Daviet, R., & Nishimura, A. (2026). Leveraging generative artificial intelligence to create visual content in digital advertising. *Marketing Science*. https://doi.org/10.1287/mksc.2024.1130
* Elder, R. S., & Krishna, A. (2012). The “visual depiction effect” in advertising: Facilitating embodied mental simulation through product orientation. *Journal of Consumer Research, 38*(6), 988-1003. https://doi.org/10.1086/661531
* Hartmann, J., Heitmann, M., Schamp, C., & Netzer, O. (2021). The power of brand selfies. *Journal of Marketing Research, 58*(6), 1159-1177. https://doi.org/10.1177/00222437211037258
* Heitmann, M., Jansen, T. P. J., Reisenbichler, M., & Schweidel, D. A. (2025). Picture perfect: Engaging customers with visual generative AI. *Journal of Marketing*. https://doi.org/10.1177/00222429251356993
* Lambrecht, A., & Tucker, C. (2013). When does retargeting work? Information specificity in online advertising. *Journal of Marketing Research, 50*(5), 561-576.
* Li, Y., & Xie, Y. (2020). Is a picture worth a thousand words? An empirical study of image content and social media engagement. *Journal of Marketing Research, 57*(1), 1-19. https://doi.org/10.1177/0022243719881113
* Liu, L., Dzyabura, D., & Mizik, N. (2020). Visual listening in: Extracting brand image portrayed on social media. *Marketing Science, 39*(4), 669-686. https://doi.org/10.1287/mksc.2020.1226
* Longoni, C., & Cian, L. (2022). Artificial intelligence in utilitarian vs. hedonic contexts: The “word-of-machine” effect. *Journal of Marketing, 86*(1), 91-108. https://doi.org/10.1177/0022242920957347
* Miller, E. J., Steward, B. A., Witkower, Z., Sutherland, C. A. M., Krumhuber, E. G., & Dawel, A. (2023). AI hyperrealism: Why AI faces are perceived as more real than human ones. *Psychological Science, 34*(12), 1390-1403. https://doi.org/10.1177/09567976231207095
* Ojha, U., Li, Y., & Lee, Y. J. (2023). Towards universal fake image detectors that generalize across generative models. In *Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition*.
* Park, C. W., Jaworski, B. J., & MacInnis, D. J. (1986). Strategic brand concept-image management. *Journal of Marketing, 50*(4), 135-145. https://doi.org/10.1177/002224298605000401
* Peracchio, L. A., & Meyers-Levy, J. (2005). Using stylistic properties of ad pictures to communicate with consumers. *Journal of Consumer Research, 32*(1), 29-40.
* Tsai, Y.-L., & Honka, E. (2021). Informational and noninformational advertising content. *Marketing Science, 40*(6), 1030-1058. https://doi.org/10.1287/mksc.2021.1291
* Zhang, S., Wang, B., Wu, J., Li, Y., Gao, T., Zhang, D., & Wang, Z. (2024). Learning multi-dimensional human preference for text-to-image generation. In *2024 IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)* (pp. 8018-8027). IEEE. https://doi.org/10.1109/CVPR52733.2024.00766
