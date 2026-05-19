# GenAI 生成广告图：产品类别 × AI 专属机制 × 图片维度匹配文献矩阵（0516）

目标：补强“不同商品种类应该匹配不同 GenAI 图片维度”的理论与实证支撑。核心不是把 GenAI 当成普通广告图的新场景，而是说明 GenAI 生成图具有传统人工图片不具备或不突出的机制：`AI source inference`、`generative search`、`prompt-image alignment`、`AI artifacts / hallucination`、`portfolio homogenization` 和 `scalable personalization`。这些 AI 专属机制会改变 `Product-oriented / Context-oriented / Affect-oriented` 三类图片在不同产品类别中的匹配关系。

筛选口径：优先 UTD24/FT50，其次 ABS 4/4*、CCF-A、Nature/Science 子刊。本文献表尽量保留能直接支持“产品类别/阶段/平台 × 图片或广告内容维度”的文章。

配套文件：[GenAI生成广告图_AI人图区别补充文献矩阵_0516.md](GenAI生成广告图_AI人图区别补充文献矩阵_0516.md) 负责回答“AI 图为什么不同于人类图”；本文档负责回答“不同产品类别为什么要匹配不同图片维度”。两者合起来可以形成：`AI source × AI-specific image mechanisms × creative orientation × product category fit` 的核心理论结构。

## 核心结论

最稳的理论表述是：

> The effectiveness of GenAI-generated ad images depends on the fit between product category and visual creative orientation. Product-diagnostic images should be more effective for utilitarian, high-risk, unfamiliar, or information-intensive products and lower-funnel decisions. Usage-simulation images should be more effective when consumers need to imagine product use, ownership, or fit with their lives. Affective-symbolic images should be more effective for hedonic, identity-expressive, aesthetic, or brand-personality-driven products, but they may be more vulnerable to AI-origin penalties because consumers perceive AI as less capable of subjective and affective judgment.

中文可写成：

> GenAI 广告图的效果取决于产品类别与视觉创意取向的匹配。产品诊断型图片更适合***功利型、高风险、不熟悉或信息密集型商品***，以及更靠近转化的决策阶段；使用模拟型图片更适合需要消费者想象使用、拥有或生活方式契合的商品；情感象征型图片更适合享乐型、身份表达型、审美型或品牌人格驱动的商品，但也更容易受到 AI 来源负效应影响，因为消费者可能认为 AI 缺少主观审美、情感判断和人类努力。

更适合突出理论贡献的版本是：

> Product-category fit is not unique to GenAI; traditional advertising can also match visual appeals to product types. What makes GenAI theoretically distinct is that the same fit problem is now governed by AI-specific mechanisms: consumers infer lower human effort and affective competence from AI origin, firms can generate and select from a large visual search space, generated images vary in prompt-image alignment and machine artifacts, and AI-assisted production may improve single-image quality while reducing portfolio-level distinctiveness. Therefore, GenAI changes not only which image orientation fits which product category, but also why such fit succeeds or fails.

中文可写成：

> 产品类别与广告图诉求匹配本身不是 GenAI 独有问题，传统广告图也可以研究。但 GenAI 的理论增量在于：同一个匹配问题现在受到 AI 来源推断、生成式搜索、图文/提示词对齐、AI 幻觉与瑕疵、创意组合同质化和规模化个性化的共同影响。因此，本文不是简单研究“什么产品适合什么图片”，而是研究“当图片由 GenAI 生成时，产品类别与图片创意取向的匹配机制如何被 AI 的创作来源和生成过程重新塑造”。

## 0. 为什么这个问题不能只被写成普通视觉广告问题

- 个人idea：不需要多训练的生图风格迁移？（不从prompt入手，而是向量空间直接变化，甚至调用向量空间？)

| 层级                  | 如果剥离 GenAI，仍然成立吗？ | 传统视觉广告能解释什么                                         | GenAI 带来的理论增量                                                                                                             |
| --------------------- | ---------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| 产品类别 × 图片诉求  | 成立                         | 功利品更需要信息，享乐品更需要情感，使用型产品更适合场景模拟。 | AI 来源会改变消费者对不同诉求的信任：功能图可能受益于算法客观性，情感/象征图可能受损于低努力、低真实感和低情感能力推断。         |
| 图文一致性 / 图片质量 | 成立                         | 图文一致、专业质量、低认知负担通常有利。                       | 对 GenAI 来说，一致性还包含 `prompt-image alignment`、semantic fidelity 和 hallucination control；这不是普通人工图的核心问题。 |
| 创意优化              | 部分成立                     | 人类设计师也能 A/B test 和优化素材。                           | GenAI 可以低成本生成大量候选图并进行 best-of-N 或 portfolio-level 搜索，改变“创意取向”从静态内容变量到可搜索设计空间。         |
| 个性化                | 部分成立                     | 传统广告可做定向投放和动态创意。                               | GenAI 能实时生成场景、人物、风格和卖点组合，个性化深度更高，也更容易触发隐私、creepiness 和真实性问题。                          |
| 创意多样性            | 部分成立                     | 品牌长期重复也会同质化。                                       | GenAI 可能提高单张图质量，却降低整体创意组合多样性，尤其影响需要差异化和品牌人格的品类。                                         |

## 0.1 AI 专属机制 × 产品类别匹配

| AI 专属机制                                      | 为什么是 GenAI/AI 特有或更突出的机制                                                                    | 最可能受影响的产品类别                                             | 预测方向                                                                                                                          | 关键文献                                                                          |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `AI source inference`                          | 消费者会根据“AI 生成”推断创作者努力、意图、真实感、情感能力和主观判断能力。                           | 享乐型、审美型、身份表达型、人物/模特图、高品牌人格品类。          | AI 来源负效应在 `Affect-oriented × hedonic/symbolic products` 中更强；在 `Product-oriented × utilitarian products` 中更弱。 | Carney et al.; Grassini & Koivisto; Longoni & Cian; Castelo et al.; Garvey et al. |
| `Generative search / best-of-N selection`      | GenAI 的核心优势不是单张图天然更好，而是可以搜索巨大视觉空间，并按 CTR、品牌适配、AIDA 或品牌人格筛选。 | 户外、运动、汽车、防晒、3C、家具、差异化品牌。                     | 当产品评价标准清晰或可以定义优化目标时，AI 图优势更强；当品牌可接受性和身份意义更难形式化时，优势受限。                           | Daviet & Nishimura; Heitmann et al.; Burnap et al.; Zhang et al.                  |
| `Prompt-image alignment / semantic fidelity`   | GenAI 图可能“看起来好”，但未必忠实呈现 prompt、卖点、产品功能或品牌限制。                             | 功利型、高风险、信息密集、新品类、医疗/金融等敏感品类。            | 语义不对齐对认知结果、信任和转化的损害在 `Product-oriented × utilitarian/high-risk products` 中更强。                          | Zhang et al.; Ceylan et al.; Dang et al.; Houston et al.                          |
| `AI artifacts / hallucination / detectability` | 生成图可能包含物理不合理、身体/手部问题、产品结构错误或可检测机器痕迹。                                 | 人物图、穿戴图、可操作产品、高风险耐用品、需要产品细节真实的品类。 | artifact 对使用模拟和产品诊断图伤害更大；对纯氛围型图可能影响较弱，除非被消费者识别为 AI。                                        | Ojha et al.; Wang et al.; Ricker et al.; Miller et al.                            |
| `Portfolio homogenization`                     | AI 可能提升单张素材评价，但让不同素材更相似，削弱品牌长期差异化。                                       | 成熟同质品类、身份表达型品牌、审美/时尚/生活方式品牌。             | AI 图的短期 engagement 可能提高，但长期品牌 distinctiveness 和 creative diversity 可能下降。                                      | Doshi & Hauser; Lee & Chung; Meincke et al.; Liu et al.; Aaker                    |
| `Scalable personalization`                     | GenAI 能大规模生成不同场景、人物、卖点和风格版本，个性化粒度高于传统动态广告。                          | retargeting、后期旅程、低隐私风险商品、已有购买历史客户。          | 个性化 GenAI 图在后期旅程更有效；但在隐私敏感品类或高侵入视觉中可能反噬。                                                         | Lambrecht & Tucker; Sahni et al.; Goldfarb & Tucker; Daviet & Nishimura           |

## 1. 推荐的产品类别 × 图片维度匹配框架

| 产品/决策类型                           | 更可能匹配的 GenAI 图片取向                               | 理论机制                                                                        | 关键 DV                                                                       | 主要文献                                                                                |
| --------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 功利型 / 工具型商品                     | `Product-oriented`                                      | 降低不确定性，提升属性理解、诊断性、aided awareness。                           | product understanding, aided awareness, trust, purchase intention, conversion | Longoni & Cian; Tsai & Honka; Guitart & Stremersch; Chitturi et al.; Unnava & Burnkrant |
| 高风险 / 高价格 / 耐用品                | `Product-oriented + Context-oriented`                   | 既需要信息诊断，也需要使用/拥有模拟；单纯情绪图可能不够。                       | online search, sales, consideration, purchase intention                       | Guitart & Stremersch; Heitmann et al.; Burnap et al.; Townsend & Kahn                   |
| 享乐型 / 审美型 / 身份表达型商品        | `Affect-oriented + Context-oriented`                    | 审美、情感、品牌人格和自我表达更重要。                                          | aesthetic appeal, brand attitude, desire, brand personality perception, WTP   | Chitturi et al.; Aaker; Liu et al.; Hartmann et al.; Longoni & Cian                     |
| 可触摸 / 可使用 / 可穿戴 / 可手持商品   | `Context-oriented`                                      | 第一人称视角、手持、使用场景增强 self-reference 和 embodied mental simulation。 | purchase intention, self-reference, brand engagement, CTR                     | Elder & Krishna; Hartmann et al.; Peracchio & Meyers-Levy                               |
| 低熟悉 / 新品类 / 早期市场              | `Product-oriented`                                      | 信息型内容教育消费者，建立理解和 aided awareness。                              | awareness, recall, consideration                                              | Chandy et al.; Tsai & Honka                                                             |
| 成熟品类 / 品牌差异化不足               | `Affect-oriented`                                       | 情绪、品牌人格和象征意义帮助差异化。                                            | brand attitude, brand personality, interest, desire                           | Park et al.; Aaker; Liu et al.; Heitmann et al.                                         |
| 选择集大 / 电商列表页                   | `Product-oriented` 或低复杂度视觉                       | 视觉呈现虽更被偏好，但大选择集下会提高复杂度和 choice overload。                | choice deferral, perceived variety, choice overload                           | Townsend & Kahn                                                                         |
| 已形成明确偏好 / 后期旅程 / retargeting | 具体产品图、具体卖点、动态个性化图                        | 消费者已有窄化偏好，更容易响应具体产品信息。                                    | purchase, conversion, clicks                                                  | Lambrecht & Tucker; Lewis et al.; Sahni et al.; Daviet & Nishimura                      |
| 社交平台互动目标                        | `Affect-oriented` 或 `Context-oriented`，但需图文一致 | 情绪/品牌人格提升 likes/comments/shares；图文一致与专业质量提升 engagement。    | likes, comments, shares, CTR                                                  | Lee, Hosanagar & Nair; Li & Xie; Dang et al.; Kanuri et al.                             |
| 高隐私 / 敏感品类                       | 避免“高定向 + 高显眼”组合                               | 定向与强视觉/高侵入同时出现会触发隐私反感。                                     | purchase intent, privacy concern                                              | Goldfarb & Tucker                                                                       |

## 2. 文献宽表

|  # | 文献                                                                                                                 | 年份/出处                                            | 等级       | 产品类别 / 平台 / 阶段                                             | 相关 IV / Moderator                                                                                          | DV                                                               | 核心发现                                                                                                                                            | 对 GenAI 图片的启发                                                                                |
| -: | -------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | ---------- | ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
|  1 | Park, Jaworski & MacInnis, “Strategic Brand Concept-Image Management”                                              | 1986, Journal of Marketing                           | UTD24/FT50 | 品牌概念，不限品类                                                 | functional / experiential / symbolic brand concept                                                           | brand image / positioning                                        | 同一产品理论上可被定位成功能型、体验型或象征型 image；概念不是固定产品类别。                                                                        | 三分类上位理论：Product / Context / Affect 是创意取向，不是商品固定标签。                          |
|  2 | Heitmann et al., “Picture Perfect: Engaging Customers with Visual Generative AI”                                   | 2025, Journal of Marketing                           | UTD24/FT50 | EV 耐用品、陌生 EV、差异化小车、防晒消耗品；Meta/display ads       | AI 广告、AIDA 训练、brand personality 训练、产品类别/差异化                                                  | AIDA, brand personality, brand attitude, CTR, recall/recognition | GenAI 广告可在 EV 和防晒等不同品类上表现好；但高度差异化产品边界更明显，纯 prompt / 纯美学不足。                                                    | 直接支撑“不同产品类别下 GenAI 图片目标要变”：耐用品需 AIDA/品牌人格，消耗品可测生活方式/转化。   |
|  3 | Daviet & Nishimura, “Leveraging Generative AI to Create Visual Content in Digital Advertising”                     | 2026, Marketing Science                              | UTD24/FT50 | outdoor activities；Instagram field ads                            | AI creative portfolio, brand acceptability, performance prediction                                           | CTR, brand acceptability                                         | 高 CTR 与品牌可接受性不完全重合；AI 优势在高维创意搜索而非单张美图。                                                                                | 对户外/运动/生活方式商品，Context 图需要同时过 brand/campaign fit 与 performance fit。             |
|  4 | Longoni & Cian, “Artificial Intelligence in Utilitarian vs. Hedonic Contexts”                                      | 2020/2022 issue, Journal of Marketing                | UTD24/FT50 | 功利 vs 享乐产品/推荐语境                                          | AI vs human recommendation; utilitarian vs hedonic attribute salience                                        | preference for AI vs human, resistance to AI                     | 消费者认为 AI 更擅长功利判断、较不擅长享乐判断；human-AI hybrid 可缓解。                                                                            | Product-oriented AI 图更容易被接受；Affect-oriented AI 图需强调 human touch / AI-assisted effort。 |
|  5 | Castelo, Bos & Lehmann, “Task-Dependent Algorithm Aversion”                                                        | 2019, Journal of Marketing Research                  | UTD24/FT50 | 主观任务 vs 客观任务，多领域                                       | perceived task objectivity / subjectivity                                                                    | trust in algorithms, reliance                                    | 算法在主观任务中更受抵触；提高任务客观性感知可提升算法信任。                                                                                        | 审美、情绪、品牌象征图更容易触发 AI 抵触；功能信息图较少。                                         |
|  6 | Tsai & Honka, “Informational and Noninformational Advertising Content”                                             | 2021, Marketing Science                              | UTD24/FT50 | auto insurance；购买漏斗                                           | informational vs noninformational ad content; shoppers vs nonshoppers; involved consumers                    | unaided awareness, aided awareness, consideration, purchase      | 广告数量提升 awareness；纯非信息内容提升 unaided awareness，纯信息内容提升 aided awareness；混合内容影响 shoppers/involved consumers 的 awareness。 | 高风险/信息密集商品适合 Product-oriented 图；但不同漏斗阶段应区分 unaided vs aided awareness。     |
|  7 | Guitart & Stremersch, “The Impact of Informational and Emotional Television Ad Content on Online Search and Sales” | 2021, Journal of Marketing Research                  | UTD24/FT50 | automobile；高价耐用品                                             | informational vs emotional content; product price/quality positioning                                        | online search, sales                                             | Emotional content 更偏驱动 online search；informational content 更偏提升 sales；产品价格/质量定位会调节内容效果。                                   | 耐用品广告图不要只做情绪氛围：早期搜索可用 Affect/Context，转化阶段要补 Product 信息。             |
|  8 | Chandy, Tellis, MacInnis & Thaivanich, “What to Say When”                                                          | 2001, Journal of Marketing Research                  | UTD24/FT50 | 新/旧市场，产品生命周期                                            | informational vs emotional appeals; market age                                                               | advertising effectiveness                                        | 新市场中教育型/信息型诉求更有效；成熟市场更需要情绪和差异化。                                                                                       | 新品类/新功能商品优先 Product-oriented；成熟同质品类可转向 Affect-oriented。                       |
|  9 | Chitturi, Raghunathan & Mahajan, “Form versus Function”                                                            | 2007, Journal of Marketing Research                  | UTD24/FT50 | 功能 vs 享乐属性权衡                                               | functional vs hedonic trade-offs                                                                             | product preference, WTP, specific emotions                       | 功能优势更影响选择任务；享乐优势在 WTP 中更重要，并激发不同情绪。                                                                                   | 若 DV 是购买/点击，Product 可能更强；若 DV 是 WTP/喜欢/品牌态度，Affect 可能更强。                 |
| 10 | Chitturi, Raghunathan & Mahajan, “Delight by Design”                                                               | 2008, Journal of Marketing                           | UTD24/FT50 | 产品设计利益                                                       | hedonic vs utilitarian benefits                                                                              | satisfaction, delight                                            | 满足 utilitarian needs 提升 satisfaction；满足 hedonic wants 提升 delight。                                                                         | Product 图适合信任/满意；Affect 图适合 delight/desire/interest。                                   |
| 11 | Dhar & Wertenbroch, “Consumer Choice Between Hedonic and Utilitarian Goods”                                        | 2000, Journal of Marketing Research                  | UTD24/FT50 | hedonic vs utilitarian goods                                       | acquisition vs forfeiture choice task                                                                        | choice, valuation                                                | 任务框架改变 hedonic/utilitarian 商品偏好；hedonic goods 在放弃/拥有语境中更突出。                                                                  | 使用模拟/拥有感图可能放大享乐型商品价值，尤其是“已经拥有/不想失去”的语境。                       |
| 12 | Elder & Krishna, “The Visual Depiction Effect in Advertising”                                                      | 2012, Journal of Consumer Research                   | UTD24/FT50 | 可操作/可使用产品；负向产品边界                                    | product orientation toward dominant hand; embodied simulation                                                | purchase intention                                               | 产品朝向能激发 embodied mental simulation，从而提高购买意愿；负效价产品可能反向。                                                                   | Context-oriented 图适合手持、可使用、可触摸商品；但对负向/风险产品要谨慎。                         |
| 13 | Hartmann et al., “The Power of Brand Selfies”                                                                      | 2021, Journal of Marketing Research                  | UTD24/FT50 | beverage/food, handheld electronics；Instagram/Twitter/display ads | packshot vs brand selfie vs consumer selfie; platform/product category                                       | likes, comments, purchase-intent comments, CTR, self-reference   | Consumer selfie 带来互动，但 brand selfie 更促进 purchase-intent comments 和 CTR；效果跨平台和品类稳健。                                            | 对手持/使用型商品，第一人称 Context 图比单纯加人脸更适合下层漏斗。                                 |
| 14 | Li & Xie, “Is a Picture Worth a Thousand Words?”                                                                   | 2020, Journal of Marketing Research                  | UTD24/FT50 | airlines vs SUV；Twitter vs Instagram                              | image presence, quality, professionalism, colorfulness, face, image-text fit; product category/platform      | engagement                                                       | 高质量/专业图跨平台和品类提升 engagement；colorfulness 效果随品类变化；face 和 image-text fit 在 Twitter 有用但 Instagram 不显著。                  | 图片质量是跨品类底线；颜色、人脸、图文一致性必须结合产品和平台，不可一刀切。                       |
| 15 | Dang et al., “When Words Meet Visuals”                                                                             | 2026, Journal of Marketing Research                  | UTD24/FT50 | Facebook/Instagram；69 品牌、9 品类                                | text-image ratio; text centeredness; informativeness; sentiment; text-picture congruency; object count; face | likes, comments                                                  | 文字占比通常降低 engagement；但居中、信息丰富、正向、图文一致可缓解；多物体/人脸会加剧信息竞争。                                                    | Product 图可用信息文字，但必须控制 TIR 和 congruency；Context/Affect 图中人脸和复杂背景会抢注意。  |
| 16 | Ceylan, Diehl & Proserpio, “Words Meet Photos”                                                                     | 2024, Journal of Marketing Research                  | UTD24/FT50 | Yelp review / platform review context                              | photo-text similarity; processing ease; language difficulty; image quality                                   | review helpfulness votes                                         | 图文相似性通过 processing ease 提升 helpfulness；低质量图或困难文本会削弱效果。                                                                     | 商品标题/卖点/prompt/背景一致性不是技术细节，而是认知结果变量的前因。                              |
| 17 | Lee, Hosanagar & Nair, “Advertising Content and Consumer Engagement on Social Media”                               | 2018, Management Science                             | UTD24/FT50 | Facebook；782 公司                                                 | brand personality content; directly informative content; combinations                                        | likes, comments, shares, click-throughs                          | 情绪/幽默/品牌人格提升 likes/comments/shares；价格/促销单独出现降低 engagement，但与品牌人格结合可提升；deals/promotions 推动 CTR。                 | Product 信息和 Affect 风格最好组合：只做促销信息会弱互动，但可提升点击。                           |
| 18 | Kanuri, Hughes & Hodges, “Standing Out from the Crowd”                                                             | 2024, International Journal of Research in Marketing | ABS 4      | Facebook；两个行业数据 + 眼动实验                                  | color complexity; exposure time; image height; caption sentiment/text complexity                             | engagement, attention                                            | 高色彩复杂度通过注意力提升 engagement；效果受曝光时间、图片高度、caption 情绪和文本复杂度调节。                                                     | Affect/Context 图可提高 color complexity 抓注意，但需避免负面文案和过度文本复杂。                  |
| 19 | Lewis et al., “Customer Relationship Stage and the Use of Picture-Dominant versus Text-Dominant Advertising”       | 2013, Journal of Retailing                           | ABS 4      | fashion retailer；email；prospects vs previous buyers              | picture-dominant vs text-dominant; customer relationship stage; inferred involvement                         | email response, purchase, revenue                                | 潜在客户对图片型邮件响应更高；购买/收入上文字型可等于或优于图片型；不同阶段应定制格式。                                                             | 早期可用视觉吸引，后期/转化要补信息；对 fashion 也不是图片越多越好。                               |
| 20 | Lambrecht & Tucker, “When Does Retargeting Work?”                                                                  | 2013, Journal of Marketing Research                  | UTD24/FT50 | online travel / hotel retargeting                                  | generic vs dynamic/product-specific retargeted ads; review-site visit; category browsing                     | purchase / conversion                                            | 动态具体产品广告只有在消费者访问 review site、形成明确偏好且正浏览相关内容时更有效；否则 generic ads 更稳。                                         | GenAI 个性化商品图应按旅程阶段投放：早期 lifestyle/generic，后期具体商品/属性图。                  |
| 21 | Sahni, Wheeler & Chintagunta, “Personalization in Email Marketing”                                                 | 2018, Marketing Science                              | UTD24/FT50 | 三家公司，多产品；acquisition 与 retention                         | recipient-specific personalization; noninformative content                                                   | open rate, sales leads, unsubscribe                              | 加入姓名等非产品信息提升打开率、销售线索并降低退订；机制是增加对广告其他内容的 processing effort。                                                  | GenAI 图的个性化不一定要改产品信息；可个性化场景/称呼/人群线索来提高 processing effort。           |
| 22 | Goldfarb & Tucker, “Online Display Advertising: Targeting and Obtrusiveness”                                       | 2011, Marketing Science                              | UTD24/FT50 | online display ads；隐私相关品类                                   | contextual targeting; obtrusiveness; privacy-sensitive categories                                            | purchase intent                                                  | 定向匹配和高显眼性各自有效，但组合会反效果，尤其在隐私敏感品类。                                                                                    | AI 个性化图不要同时“高度贴脸 + 高视觉侵入”；健康/金融/隐私品类尤其谨慎。                         |
| 23 | Townsend & Kahn, “The Visual Preference Heuristic”                                                                 | 2014, Journal of Consumer Research                   | UTD24/FT50 | product assortment；crackers, mutual funds 等                      | visual vs verbal depiction; choice set size; preference uncertainty                                          | perceived variety, complexity, choice overload, choice deferral  | 人们偏好视觉呈现，但大选择集/偏好不明确时，视觉呈现会提高复杂度和 choice overload；艺术/时尚天然偏视觉，基金类偏文字。                              | 电商商品列表若用大量 GenAI 图可能导致视觉过载；复杂功能品类需要文字/结构化信息。                   |
| 24 | Unnava & Burnkrant, “An Imagery-Processing View of the Role of Pictures in Print Advertisements”                   | 1991, Journal of Marketing Research                  | UTD24/FT50 | print ads / 产品属性信息                                           | pictures exemplifying verbal attribute info; verbal info imagery level                                       | ad recall                                                        | 图片只有在文字属性低 imagery 时更能帮助 recall；高 imagery 文字下，外部图片增益减弱。                                                               | 对抽象/难想象卖点，Product 图更有价值；对容易想象卖点，图片增益可能较小。                          |
| 25 | Miniard et al., “Picture-Based Persuasion Processes and the Moderating Role of Involvement”                        | 1991, Journal of Consumer Research                   | UTD24/FT50 | print ads；消费者 involvement                                      | product-relevant vs affect-laden pictures; involvement                                                       | brand attitude / persuasion                                      | 产品相关图片和情感图片走不同说服路径，involvement 会调节图片作用。                                                                                  | 高涉入商品更需要 Product 证据；低涉入/情绪消费更可用 Affect 图。                                   |
| 26 | Peracchio & Meyers-Levy, “Using Stylistic Properties of Ad Pictures to Communicate with Consumers”                 | 2005, Journal of Consumer Research                   | UTD24/FT50 | ad pictures                                                        | camera angle, orientation, processing effort, concept accessibility                                          | product perceptions / attitudes                                  | 图片风格属性可传递描述性概念，但需要足够加工和概念可得性。                                                                                          | GenAI 图的镜头角度、构图、产品朝向可作为高涉入/可加工场景的细操控。                                |
| 27 | Burnap, Hauser & Timoshenko, “Product Aesthetic Design”                                                            | 2023, Marketing Science                              | UTD24/FT50 | automotive / SUVs；家具椅子 proof-of-concept                       | generated design attributes; aesthetic ratings; ML augmentation                                              | aesthetic appeal / consumer ratings                              | 美学设计影响市场接受；模型可预测并生成更高消费者审美评分的产品设计。                                                                                | 对汽车、家具、3C 等外观重要品类，GenAI 图片的 aesthetics 本身是核心价值，不只是控制变量。          |
| 28 | Liu, Dzyabura & Mizik, “Visual Listening In”                                                                       | 2020, Marketing Science                              | UTD24/FT50 | apparel 与 beverage；Instagram                                     | visual brand attributes; BrandImageNet                                                                       | brand portrayal / brand perceptions                              | 消费者图片中的视觉品牌属性与传统 survey 的品牌感知相关。                                                                                            | Affect-oriented 图应按品类目标品牌人格生成，如 rugged、glamorous、healthy、fun。                   |
| 29 | Aaker, “Dimensions of Brand Personality”                                                                           | 1997, Journal of Marketing Research                  | UTD24/FT50 | 品牌人格，跨品类                                                   | sincerity, excitement, competence, sophistication, ruggedness                                                | brand personality perception                                     | 建立品牌人格五维度量表。                                                                                                                            | 为 Affect-oriented / brand-personality-trained GenAI 图提供测量维度。                              |
| 30 | Azer, Blasco-Arcas & Alexander, “Visual Modality of Engagement”                                                    | 2024, Journal of Service Research                    | ABS 4      | Amazon, Apple, American Airlines, Nike；Facebook/Instagram         | experiential, evidential, mocking, dissuasive visual engagement                                              | purchase intention, brand evaluation, imitation, resharing       | experiential visual engagement 对 purchase intention 和 brand evaluation 最强；evidential 与负向视觉形式效果不同。                                  | Context-oriented 图可分 experiential vs evidential；服务/产品/品牌视觉互动形式不同。               |
| 31 | Houston, Childers & Heckler, “Picture-Word Consistency and the Elaborative Processing of Advertisements”           | 1987, Journal of Marketing Research                  | UTD24/FT50 | print advertisements；图文整合                                     | picture-word consistency; elaborative processing                                                             | attitude / information processing                                | 图像和文字一致会改变消费者对广告的精细加工，是图文一致性经典基础。                                                                                  | 为 Product-oriented 图中的卖点文字、overlay text、prompt-image fit 提供基础理论。                  |

## 3. 如何把这些文献转化为本文假设

### H1：产品类型调节三类 GenAI 图片的效果

> Product-diagnostic GenAI images should outperform usage-simulation and affective-symbolic images for utilitarian, high-risk, unfamiliar, or information-intensive products, whereas affective-symbolic images should be more effective for hedonic, aesthetic, identity-expressive, or brand-personality-driven products.

中文逻辑：功利、高风险、陌生、信息密集的商品需要降低不确定性，所以 Product-oriented 更强；享乐、审美、身份表达型商品依赖情绪和象征意义，所以 Affect-oriented 更强。

主支撑：Park et al.; Longoni & Cian; Tsai & Honka; Guitart & Stremersch; Chitturi et al.; Aaker; Liu et al.

### H2：消费者旅程阶段调节图片信息具体性

> Generic lifestyle or affective images should be more effective in early-stage awareness and broad-interest contexts, whereas product-specific and information-rich GenAI images should be more effective after consumers have formed narrower preferences or entered lower-funnel decision stages.

中文逻辑：早期用户还没有明确偏好，过具体的产品图未必有效；后期用户已经在比较具体属性，具体商品图、卖点图和动态个性化图更有效。

主支撑：Tsai & Honka; Chandy et al.; Lambrecht & Tucker; Lewis et al.; Sahni et al.; Daviet & Nishimura.

### H3：平台语境调节图片维度

> Image quality and professionalism should help across platforms, but the effectiveness of colorfulness, faces, text-picture fit, and overlay text should depend on the platform’s interaction norm and information-processing context.

中文逻辑：Instagram、Twitter/X、Facebook、display ads、Yelp、WhatsApp 的“看图方式”不同；不能把同一张 GenAI 图跨平台直接假设同效。

主支撑：Li & Xie; Hartmann et al.; Dang et al.; Ceylan et al.; Lee et al.; Kanuri et al.; Goldfarb & Tucker.

### H4：AI 来源负效应在享乐/情感/主观判断品类更强

> AI-generated images should face stronger perceived-effort and authenticity penalties in hedonic, aesthetic, subjective, or identity-expressive categories than in utilitarian or product-diagnostic categories.

中文逻辑：消费者认为 AI 更擅长客观/功利判断，不擅长享乐/主观/情感判断。因此，AI 生成图在 Affect-oriented 商品中要么需要 human-AI hybrid framing，要么需要 effort-signaling disclosure。

主支撑：Longoni & Cian; Castelo et al.; Chitturi et al.；AI 来源机制的直接支撑见配套文件中的 Carney et al. 与 Grassini & Koivisto。

### H5：图文一致性是跨品类底线，但重要性在信息型品类更强

> Text-image congruency should improve cognitive and engagement outcomes across product categories, but its effect should be stronger for product-diagnostic images and for categories where consumers rely on explicit attributes or functional claims.

中文逻辑：图文一致性在所有图里都重要，但对功能型、高风险、属性丰富商品尤其关键，因为用户需要把视觉场景和卖点信息整合成可信认知。

主支撑：Ceylan et al.; Dang et al.; Houston et al.; Unnava & Burnkrant; Li & Xie.

### H6：AI 来源使产品类别匹配产生不对称惩罚

> The product-category fit advantage of affective-symbolic images should be weaker when the image is disclosed or perceived as AI-generated, especially for hedonic, aesthetic, identity-expressive, and human-centered product categories.

中文逻辑：传统广告中，享乐/身份表达商品通常更适合情感象征图；但如果图片被认为是 AI 生成，消费者可能推断创作者努力、真实感、情感能力和主观审美不足。因此，AI 来源不是简单主效应，而是会削弱某些本来应该匹配的情感型图片。

主支撑：Carney et al.; Grassini & Koivisto; Eiserbeck et al.; Longoni & Cian; Castelo et al.

### H7：GenAI 的优势来自生成式搜索，而不是单张图片本身

> GenAI-generated images should outperform human-created or prompt-only images when firms can generate and select among many candidates using product-category-relevant objectives, but this advantage should decline when selection optimizes only aesthetics rather than brand or product fit.

中文逻辑：如果只是拿“一张 AI 图”对比“一张人图”，理论贡献有限；更 AI 专属的逻辑是 GenAI 可以搜索大规模视觉空间。对功利/高风险产品，筛选目标应是信息清晰、产品诊断性和信任；对享乐/身份型产品，筛选目标应是品牌人格、审美和情感，但还要处理 AI 来源负效应。

主支撑：Daviet & Nishimura; Heitmann et al.; Burnap et al.; Zhang et al.

### H8：Prompt-image alignment 是 GenAI 图的核心质量维度

> Prompt-image alignment should matter more for product-diagnostic GenAI images and for utilitarian, high-risk, unfamiliar, or information-intensive products than for purely affective or atmospheric images.

中文逻辑：传统广告图也有图文一致性，但 GenAI 图额外有“prompt 到 image 是否忠实”的问题。一张图可以很好看，却不忠实表达产品功能、卖点或品牌限制；这对功能型和高风险商品尤其致命。

主支撑：Zhang et al.; Ceylan et al.; Dang et al.; Houston et al.; Unnava & Burnkrant.

### H9：AI artifacts 对产品诊断和使用模拟路径伤害更大

> AI artifacts and hallucinated details should hurt product understanding, trust, and purchase intention more strongly for product-diagnostic and usage-simulation images than for affective-symbolic images.

中文逻辑：手部、身体、产品结构、材质、尺寸和使用场景错误会直接破坏“产品可用”“功能可信”“我能想象使用它”的路径。因此 artifact 不是单纯图片质量问题，而是会选择性破坏 Product-oriented 和 Context-oriented 图的机制。

主支撑：Ojha et al.; Wang et al.; Ricker et al.; Miller et al.; Elder & Krishna; Hartmann et al.

### H10：AI 个性化的收益取决于旅程阶段和隐私敏感性

> Scalable GenAI personalization should improve lower-funnel outcomes when consumers have formed product-specific preferences, but it should backfire in privacy-sensitive categories or when visual personalization feels overly intrusive.

中文逻辑：GenAI 可以把产品、场景、人群、文案和风格按消费者特征重组，这比传统动态广告更强。但越贴脸、越像“为我生成”，越容易触发隐私和真实性问题，尤其在健康、金融、身体、家庭等敏感品类。

主支撑：Lambrecht & Tucker; Sahni et al.; Goldfarb & Tucker; Daviet & Nishimura.

## 4. 按 DV 和 Moderator 的落地表

| DV 组                              | 最匹配的图片维度                                                                                               | 应重点考虑的 Moderator                                                                                         | 推荐文献                                                                                    |
| ---------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Cognitive / informational outcomes | Product-oriented; high image-text congruency; prompt fidelity                                                  | utilitarian/high-risk/information-intensive products; low familiarity; early market; low imagery verbal claims | Tsai & Honka; Chandy et al.; Ceylan et al.; Dang et al.; Houston et al.; Unnava & Burnkrant |
| Engagement outcomes                | Affect-oriented or Context-oriented; high quality; color complexity; brand personality; moderated overlay text | platform; social norm; product category; visual complexity; text sentiment; face/object count                  | Lee et al.; Li & Xie; Dang et al.; Kanuri et al.; Hartmann et al.; Azer et al.              |
| Attitudinal / affective outcomes   | Affect-oriented; brand personality; aesthetic design; usage simulation                                         | hedonic/symbolic products; brand familiarity; AI disclosure; perceived effort/authenticity                     | Aaker; Liu et al.; Chitturi et al.; Heitmann et al.; Longoni & Cian; Carney et al.          |
| Behavioral / lower-funnel outcomes | Product-specific, brand-aligned, information-rich, best-of-N selected image                                    | shopper vs nonshopper; review-site visit; existing customer; product specificity; privacy sensitivity          | Lambrecht & Tucker; Lewis et al.; Sahni et al.; Daviet & Nishimura; Goldfarb & Tucker       |

如果要突出 AI 专属贡献，DV 和 moderator 应该这样重排：

| AI 专属变量                              | 更适合解释的 DV                                                                    | 最关键 Moderator                                                            | 为什么有理论增量                                                         |
| ---------------------------------------- | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `perceived AI source / AI disclosure`  | ad attitude, brand attitude, trust, engagement, parasocial connection              | hedonic vs utilitarian; affective vs product-diagnostic creative            | 传统广告没有“AI 创作者努力/情感能力”推断问题。                         |
| `prompt-image alignment`               | product understanding, processing ease, trust, aided awareness, purchase intention | functional/high-risk vs hedonic; product-diagnostic vs affective            | 传统图文一致性是素材整合问题；GenAI 还有 prompt 到图像的生成忠实度问题。 |
| `AI artifacts / hallucination`         | realism, trust, mental simulation, product diagnosticity, conversion               | product detail importance; human model presence; wearable/handheld products | AI 图可能出现人类设计图较少见的身体、结构、物理和细节错误。              |
| `generative search / best-of-N`        | CTR, brand acceptability, AIDA, brand personality perception                       | clear optimization target; product category; brand constraints              | GenAI 让创意从单张素材变成可搜索和可筛选的候选空间。                     |
| `portfolio diversity / homogenization` | brand distinctiveness, novelty, long-term engagement, brand personality            | mature categories; identity brands; hedonic categories                      | AI 可能单张图更好，但组合更相似，这改变长期品牌差异化逻辑。              |
| `scalable personalization`             | click, conversion, revisit, upsell, unsubscribe, privacy concern                   | journey stage; privacy sensitivity; existing vs new customers               | GenAI 能深度生成个性化视觉，但同时放大隐私和 creepiness 风险。           |

## 5. 最适合本文实验的设计建议

### 推荐主实验：2 × 3 × 2，把 AI 放进理论核心

最建议不要只做 `3 图片取向 × 2 产品类型`，因为那确实可以被审稿人理解成传统广告图研究。更好的主实验是：

| 因子               | 水平                                                                 |
| ------------------ | -------------------------------------------------------------------- |
| Source framing     | AI-generated vs human-created                                        |
| GenAI 图片创意取向 | Product-oriented vs Context-oriented vs Affect-oriented              |
| 产品类型           | utilitarian / information-intensive vs hedonic / identity-expressive |

关键预测：

| 匹配条件                                              | 预期优势                                                                |
| ----------------------------------------------------- | ----------------------------------------------------------------------- |
| human-created × hedonic × Affect-oriented           | ad attitude、authenticity、desire 更高                                  |
| AI-generated × utilitarian × Product-oriented       | product understanding、trust、purchase intention 更高或 AI penalty 更弱 |
| AI-generated × hedonic × Affect-oriented            | 最容易出现 effort/authenticity penalty                                  |
| AI-assisted by designer × hedonic × Affect-oriented | 可缓解纯 AI 来源负效应                                                  |

这组设计的贡献点更清楚：不是只问“什么产品适合什么图”，而是问“AI 来源如何改变产品类别与视觉创意取向的匹配”。

### 基础实验：3 × 2 产品类型匹配实验

| 因子               | 水平                                                                 |
| ------------------ | -------------------------------------------------------------------- |
| GenAI 图片创意取向 | Product-oriented vs Context-oriented vs Affect-oriented              |
| 产品类型           | utilitarian / information-intensive vs hedonic / identity-expressive |

关键预测：

| 匹配条件                                 | 预期优势                                                                 |
| ---------------------------------------- | ------------------------------------------------------------------------ |
| utilitarian × Product-oriented          | product understanding, trust, purchase intention 更高                    |
| hedonic × Affect-oriented               | ad attitude, aesthetic appeal, desire, brand personality perception 更高 |
| hand-held / wearable × Context-oriented | self-reference, mental simulation, purchase intention 更高               |

这个实验可以作为前测或 Study 1，但最好不要作为唯一主实验，因为剥离 GenAI 后仍然成立。

### 推荐机制实验：Prompt alignment / artifact 作为 AI 专属操控

| 因子                 | 水平                                                                         |
| -------------------- | ---------------------------------------------------------------------------- |
| Product type         | utilitarian/high-risk vs hedonic/low-risk                                    |
| Creative orientation | Product-oriented vs Context-oriented                                         |
| AI-specific quality  | high prompt-image alignment / no artifact vs low alignment / subtle artifact |

关键预测：低 alignment 或 artifact 对 utilitarian/high-risk × Product-oriented 的 product understanding、trust 和 purchase intention 损害更强；对 hedonic/atmospheric 图的损害相对较弱，除非消费者识别出 AI 来源。

### 推荐行为实验：旅程阶段 × GenAI 个性化

| 因子                  | 水平                                                                              |
| --------------------- | --------------------------------------------------------------------------------- |
| Customer journey      | early broad interest vs late specific comparison                                  |
| GenAI personalization | generic lifestyle/brand image vs product-specific / user-specific generated image |

关键预测：早期 generic lifestyle/brand 图更适合 awareness/interest；后期 product-specific 或 user-specific GenAI 图更适合 purchase/conversion。但在隐私敏感品类中，user-specific 图可能提升 privacy concern 并削弱 purchase intention。

### 推荐 portfolio 实验：单张质量 vs 组合多样性

| 因子                | 水平                                                                           |
| ------------------- | ------------------------------------------------------------------------------ |
| Creative source     | human portfolio vs GenAI portfolio                                             |
| Portfolio structure | high single-image quality / low diversity vs moderate quality / high diversity |
| Product category    | mature symbolic brand vs utilitarian functional brand                          |

关键预测：GenAI portfolio 可能提升单张图的 aesthetic appeal 或 CTR，但在成熟符号型品牌中，低 diversity 会削弱 brand distinctiveness 和 brand personality clarity。

## 6. 参考链接

- Park, Jaworski & MacInnis, Journal of Marketing: https://journals.sagepub.com/doi/10.1177/002224298605000401
- Heitmann et al., Journal of Marketing: https://journals.sagepub.com/doi/10.1177/00222429251356993
- Daviet & Nishimura, Marketing Science: https://pubsonline.informs.org/doi/abs/10.1287/mksc.2024.1130
- Longoni & Cian, Journal of Marketing: https://journals.sagepub.com/doi/10.1177/0022242920957347
- Castelo, Bos & Lehmann, Journal of Marketing Research: https://journals.sagepub.com/doi/10.1177/0022243719851788
- Tsai & Honka, Marketing Science: https://pubsonline.informs.org/doi/abs/10.1287/mksc.2021.1291
- Guitart & Stremersch, Journal of Marketing Research: https://journals.sagepub.com/doi/10.1177/0022243720962505
- Chandy et al., Journal of Marketing Research PDF: https://students.marshall.usc.edu/sites/default/files/tellis/intellcont/JMR_What_to_Say_When%20%282%29-1.pdf
- Chitturi, Raghunathan & Mahajan, Journal of Marketing Research: https://journals.sagepub.com/doi/10.1509/jmkr.44.4.702
- Chitturi, Raghunathan & Mahajan, Journal of Marketing: https://journals.sagepub.com/doi/10.1509/JMKG.72.3.048
- Dhar & Wertenbroch, Journal of Marketing Research: https://doi.org/10.1509/jmkr.37.1.60.18718
- Elder & Krishna, Journal of Consumer Research: https://academic.oup.com/jcr/article/38/6/988/1792229
- Hartmann et al., Journal of Marketing Research: https://journals.sagepub.com/doi/10.1177/00222437211037258
- Li & Xie, Journal of Marketing Research: https://journals.sagepub.com/doi/10.1177/0022243719881113
- Dang et al., Journal of Marketing Research: https://journals.sagepub.com/doi/10.1177/00222437251373042
- Ceylan, Diehl & Proserpio, Journal of Marketing Research: https://journals.sagepub.com/doi/10.1177/00222437231169711
- Lee, Hosanagar & Nair, Management Science: https://pubsonline.informs.org/doi/10.1287/mnsc.2017.2902
- Kanuri, Hughes & Hodges, IJRM: https://doi.org/10.1016/j.ijresmar.2023.08.007
- Lewis et al., Journal of Retailing: https://doi.org/10.1016/j.jretai.2013.01.003
- Lambrecht & Tucker, Journal of Marketing Research: https://journals.sagepub.com/doi/10.1509/jmr.11.0503
- Sahni, Wheeler & Chintagunta, Marketing Science: https://pubsonline.informs.org/doi/10.1287/mksc.2017.1066
- Goldfarb & Tucker, Marketing Science: https://pubsonline.informs.org/doi/10.1287/mksc.1100.0583
- Townsend & Kahn, Journal of Consumer Research: https://academic.oup.com/jcr/article/40/5/993/2734049
- Unnava & Burnkrant, Journal of Marketing Research: https://journals.sagepub.com/doi/10.1177/002224379102800210
- Miniard et al., Journal of Consumer Research: https://doi.org/10.1086/209244
- Peracchio & Meyers-Levy, Journal of Consumer Research: https://doi.org/10.1086/429599
- Burnap, Hauser & Timoshenko, Marketing Science: https://pubsonline.informs.org/doi/10.1287/mksc.2022.1429
- Liu, Dzyabura & Mizik, Marketing Science: https://pubsonline.informs.org/doi/10.1287/mksc.2020.1226
- Aaker, Journal of Marketing Research: https://journals.sagepub.com/doi/10.1177/002224379703400304
- Azer, Blasco-Arcas & Alexander, Journal of Service Research: https://journals.sagepub.com/doi/10.1177/10946705231190867
- Houston, Childers & Heckler, Journal of Marketing Research: https://doi.org/10.2307/3151383
- Carney, Riveros & Tully, Journal of Consumer Research: https://academic.oup.com/jcr/advance-article/doi/10.1093/jcr/ucag013/8672493
- Grassini & Koivisto, Scientific Reports: https://www.nature.com/articles/s41598-024-54294-4
- Eiserbeck et al., Scientific Reports: https://www.nature.com/articles/s41598-023-42802-x
- Garvey, Kim & Duhachek, Journal of Marketing: https://journals.sagepub.com/doi/abs/10.1177/00222429211066972
- Doshi & Hauser, Science Advances: https://www.science.org/doi/10.1126/sciadv.adn5290
- Lee & Chung, Nature Human Behaviour: https://www.nature.com/articles/s41562-024-01953-1
- Meincke, Nave & Terwiesch, Nature Human Behaviour: https://www.nature.com/articles/s41562-025-02173-x
- Zhang et al., CVPR 2024 MPS: https://cvpr.thecvf.com/virtual/2024/poster/30079
- Ojha, Li & Lee, CVPR 2023: https://openaccess.thecvf.com/content/CVPR2023/html/Ojha_Towards_Universal_Fake_Image_Detectors_That_Generalize_Across_Generative_Models_CVPR_2023_paper.html
- Wang et al., ICCV 2023 DIRE: https://openaccess.thecvf.com/content/ICCV2023/papers/Wang_DIRE_for_Diffusion-Generated_Image_Detection_ICCV_2023_paper.pdf
- Ricker, Lukovnikov & Fischer, CVPR 2024 AEROBLADE: https://cvpr.thecvf.com/virtual/2024/poster/29888
- Miller et al., Psychological Science: https://journals.sagepub.com/doi/10.1177/09567976231207095
