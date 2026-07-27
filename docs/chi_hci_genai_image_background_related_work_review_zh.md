# GenAI 广告图片研究：CHI/HCI Background、Related Work 与研究定位文献综述

> 更新日期：2026-07-27
> 研究对象：同一去品牌产品的功能型（functional）、体验型（experiential）与象征型（symbolic）GenAI 广告图片；Study 1 中并列随机分配的 AI 来源披露组与来源未披露组；产品实用／享乐取向与象征承载力；消费者对广告和产品的评价。
> 核验口径：使用 ACM、IEEE/CVF、NeurIPS、AAAI、期刊官网或 DOI 元数据；只有实际检查过全文及章节的论文，才分析其 Background / Related Work 的具体组织。文中“研究缺口”和“设计贡献”是基于证据的综合判断，不是原论文的直接结论。

## 结论先行

这项研究在 HCI 中最合适的定位，不是“比较三种广告风格哪一种最好”，也不是“再做一次 AI 披露是否降低信任的实验”。更准确的定位是：**把 GenAI 广告图片视为一种面向受众的视觉交互产物，检验系统是否能够稳定地产生不同的视觉意义策略、普通用户能否按设计者意图读出这些意义，以及来源披露和产品情境如何改变这种意义传达及其后续决策结果。**

现有文献形成了四条相邻但尚未真正闭合的研究链：

1. CHI/UIST/IUI 主要研究创作者如何提示、控制和迭代生成图片，以及界面怎样支持共同创作（Liu & Chilton, 2022; Liu et al., 2022; Chung & Adar, 2023; Dang et al., 2023; Fan et al., 2024）。
2. 计算机视觉与生成模型评估主要研究画质、文本—图像对齐、构图正确性和总体偏好，却很少验证图片是否向终端受众传达了预期的商业意义（Otani et al., 2023; Hu et al., 2023; Lee et al., 2023; Corneanu et al., 2025）。
3. 视觉修辞与消费者研究已经证明，图片是需要被解码的符号系统；视觉意义可能被误读，并会影响广告态度、心理模拟和自我联结（Scott, 1994; McQuarrie & Mick, 1999; Petridis & Chilton, 2019; Elder & Krishna, 2012）。
4. AI 来源与披露研究发现的不是单一“披露惩罚”：结果会随任务主观性、内容情感性、产品类型、标签形式和评价对象变化，可能为负、为零、形成正负双路径，或通过透明度提高平台信任（Jakesch et al., 2019; Kirkby et al., 2023; Wu et al., 2025; Koning & Voorveld, 2025; Shi & Jiang, 2026; Trattner et al., 2026）。

因此，本研究最有价值的 HCI 贡献是把这四条链连接成一个可检验框架：**生成控制 → 视觉意义是否被正确读出 → 心理机制 → 行为评价，并把 AI 披露作为 Study 1 中并列操纵的界面／来源线索，而不是孤立的道德标签。**

### 本文采用的披露设计边界

| 设计问题 | 本研究的确定做法 |
| --- | --- |
| AI 披露属于哪一阶段？ | 属于主实验 Study 1，不另设 Study 2。 |
| 如何分组？ | 参与者在首次观看广告图之前，被随机分配到 **AI 已披露组** 或 **来源未披露组**；两组并列运行。 |
| 是否为前后测？ | **不是。** 不让同一参与者经历披露前与披露后两个阶段，不估计个体内的 pre–post change，也不采用 crossover。 |
| 两组看到什么？ | 两组评价同一生成来源、同一视觉意义策略体系下的广告图片；主要差异是是否明确告知 GenAI 来源。未披露组不得被描述为“人类制作”。 |
| 披露何时测量？ | 披露本身是组间实验操纵，不是量表。所有核心 DV 完成后再测披露回忆；仅在来源未披露组末尾测一次自发 AI 来源推断，二者都不是披露前测。 |

## 1. 大模型生成（广告）图片的现状、目的、困惑与本研究 Motivation

### 1.1 现状：能力与应用扩张快，但研究对象仍以“通用生成”或“生成结果评价”为主

大模型生成图片已经从一次性 text-to-image output，发展为包含提示编写、局部控制、草图／区域输入、上下文提取和多轮迭代的人机共同创作过程。相关 HCI 工作分别研究 prompt 设计规则、类似绘画媒介的交互、世界构建、上下文感知创作和专业设计师工作流（Liu & Chilton, 2022; Chung & Adar, 2023; Dang et al., 2023; Fan et al., 2024; Park et al., 2024）。这条研究线的主要应用与目的可以概括为：降低视觉表达门槛、帮助用户把抽象意图转化为图像、加快候选方案探索，以及提高创作者对生成过程的可控性。

领域化应用也已经出现。Opal 将多模态生成组织为新闻插图工作流，说明具体任务域需要自己的概念提取、视觉搜索和编辑结构，而不能只依赖通用 prompt 框（Liu, Qiao, & Chilton, 2022）。在营销和传播领域，已有研究则更多从结果端考察 AI 生成视觉内容的真实性、信任、广告态度和购买反应，或研究 AI 来源、诉求与产品类型的匹配（Brüns & Meißner, 2024; Bui et al., 2024; Shi & Jiang, 2026; Gu et al., 2026）。因此，现状并不是“还没有人生成或研究 AI 广告图”，而是创作系统研究与消费者反应研究分别向前推进，却尚未形成一套连接两端的广告图生成体系。

| 现有研究方向 | 主要应用／目的 | 已解决的问题 | 对广告图仍留下的问题 |
| --- | --- | --- | --- |
| 通用 T2I prompt 与交互系统 | 将文字、草图、区域和上下文转为图像 | 提高表达效率、迭代能力与局部控制 | 控制成功通常由创作者判断，未验证广告受众是否读出预期产品意义 |
| 领域化图片生成 | 新闻插图、世界构建、专业视觉设计 | 把生成流程嵌入具体任务 | 新闻“主题—插图”流程不能直接回答商品应突出功能、体验还是象征意义 |
| T2I 基准与人类评价 | 检查画质、对象、构图、文本—图像一致性与总体偏好 | 提升输出质量与可比较性 | 字面对齐不等于传播意义对齐；“图做对了”不等于“广告说对了” |
| AI 广告与消费者反应 | 研究真实性、信任、态度、购买及披露效应 | 发现 AI 效应依赖内容、产品和披露情境 | 多数研究把既成广告当作刺激，较少公开可复用的、理论驱动的生成与筛选协议 |

### 1.2 核心困惑：广告图的成功标准不能只停留在“像不像”和“好不好看”

第一，生成控制仍具有随机性。prompt 措辞、style modifier、输入组织和 random seed 都可能改变输出；专业设计师也报告难以仅靠语言稳定表达视觉意图（Liu & Chilton, 2022; Oppenlaender, 2024; Grimal et al., 2024; Park et al., 2024）。第二，现有评估主要覆盖视觉质量、对象和空间关系、文本—图像 alignment 与总体偏好（Hu et al., 2023; Lee et al., 2023; Otani et al., 2023; Corneanu et al., 2025），但广告是一种需要受众解码的视觉传播。图片即使写实、完整且符合字面 prompt，也可能没有让消费者理解预期的功能、体验或身份意义；视觉修辞和视觉隐喻研究已经表明，隐含意义并不会被所有观看者一致理解（Scott, 1994; Petridis & Chilton, 2019; Mohanty & Ratneshwar, 2015）。第三，披露研究进一步说明，同一内容会因来源线索而被重新解释，因此广告内容策略与 AI 来源信念必须被因果分离（Jakesch et al., 2019; Koning & Voorveld, 2025; Shi & Jiang, 2026）。

这些困惑共同暴露出一个体系性缺口：现有工作尚未提供一套同时回答以下问题的商业 GenAI 图片框架：**生成时依据什么传播理论划分策略；如何在同一商品上稳定实现策略；如何区分技术质量、产品保真与意义保真；受众是否按设计意图解码；这种解码如何进一步影响广告和消费者结果。**

### 1.3 Motivation：提出理论驱动、可审计、受众验证的广告图生成策略体系

本研究的 Motivation 不应写成“GenAI 能快速生成广告，所以比较哪张图更好”，而应写成：**生成能力已经普及，但广告图缺少从传播目标到生成控制、再到受众意义验证的中间层。** 为填补这一缺口，本研究以 Park et al. (1986) 的 functional、experiential、symbolic brand concepts 为上位框架，将其转化为同一去品牌商品上的三类视觉意义策略；随后用固定源图、共享技术约束、版本化 prompt、候选生成记录和独立人类验证，检验这些策略是否真正产生不同的受众阅读路径。

这一策略体系的意义有三层。理论上，它把品牌概念与视觉修辞转化为可检验的 GenAI 生成条件；方法上，它把 creator-side control 与 audience-side meaning fidelity 连起来；设计上，它能够形成条件化知识：对于什么类型的商品和传播目标，应使用何种视觉策略，以及 AI 来源披露是否改变该策略的作用路径。更稳妥的新颖性表述是：**既有研究已经涉及 AI 广告图片及披露，但尚缺少一个在固定商品基础上生成、筛选并由受众验证 functional／experiential／symbolic 视觉意义的端到端框架。**

## 2. 从 CHI 新闻刺激选择到本研究广告图片选择

### 2.1 CHI 2026 新闻研究如何构造与筛选刺激

Khatiwada et al. (2026) 的 *When AI Rewrites the News* 提供了一个有用范例：把自然材料转化为受控生成刺激时，应先建立候选池，再通过模型和人类双重验证选择刺激，而不是直接使用研究者主观认为“最像条件”的版本。其步骤与数量如下。

| 阶段 | Khatiwada et al. (2026) 的做法 | 数量／选择结果 | 方法理由 |
| --- | --- | ---: | --- |
| 原始材料池 | 从 New York Times、Reuters、AP 等可信来源选择近三年、300–650 词的政治或社会争议性新闻；论文将 immigration、climate change、voting laws 写作主题示例 | 3 篇原文 | 保证现实性、时效性及可操纵空间；不把论文的 “e.g.” 误报为三篇文章的精确标题 |
| 条件生成 | 对每篇原文生成 neutral/extreme sentiment × balanced/one-sided framing 四个版本 | 每篇 4 个版本，共 12 个改写刺激 | 在保留事实和主题的同时正交操纵 tone 与 framing |
| 多模型验证 | GPT 与 Grok 生成；Claude 与 Gemini 作为架构不同的外部检查者；失败版本修改 prompt 后再生成 | 对候选版本迭代检查 | 降低生成模型自我偏好和单模型语言先验造成的偏差 |
| 人工筛选 | 3 名具政治学或内容分析专长的编码者用六个 7 点指标评价：fluency、faithfulness、tone accuracy、framing clarity、overt bias/misrepresentation、conciseness | 比较 Article 1–3 的整套版本，最终选择讨论 FEMA 重组与灾害响应的 Article 2 | Article 2 在流畅性、事实保真和受控语气转换上最稳定；选择依据不是单一“最好看／最流畅”判断 |
| 计算复核 | 使用 VADER 检查情感方向，以 entropy 近似 framing diversity | 在人工选择后进行 post hoc validation | 用自动指标补充而非替代人类构念判断 |
| 最终实验材料 | 只保留一篇原文及其四个条件版本 | 4 个实验版本；另有原文 baseline | 最大化单一刺激的内容效度，减少主题、原始偏差和篇章差异造成的噪声 |

该研究主实验的四个改写条件各 `n=45`，另有原文 baseline `n=45`，总计 `N=225`。其主实验参与者在首次评价时尚未收到 LLM 修改披露，随后在同一研究流程中得知 LLM 介入并再次完成相关评价。**本研究借鉴的是它的“候选材料 → 受控生成 → 多源验证 → 人工筛选 → 冻结刺激”逻辑，不采用这种序贯披露评价。** 本研究仍在 Study 1 首次看图前将参与者并列随机分配到 AI 已披露组或来源未披露组。

### 2.2 为什么本研究选择广告图片，而不是继续研究 news

选择广告图片不是因为新闻不重要，而是因为本研究的问题属于另一类 HCI 设计空间。新闻研究关注 LLM 如何改变既有文本的 tone、framing、bias 和 credibility；本研究关注 T2I 系统如何把同一个商品转译为不同的视觉价值主张，以及消费者能否恢复这一设计意图。广告图片具有三个方法优势：其一，白底商品参考图提供稳定的视觉锚点，可以在保持商品身份不变的前提下改变传播策略；其二，功能、体验与象征意义具有成熟的营销和消费者理论来源（Park et al., 1986; Homburg et al., 2015; Brakus et al., 2009），可以避免用“cinematic”“luxury”“minimalist”等纯风格词替代理论构念；其三，广告图同时连接生成界面、视觉理解和行为评价，使研究能够观察从生成控制到意义解码，再到广告态度和购买意愿的完整链条。

与新闻论文只保留一篇文章不同，本研究不能只保留一个商品。单一商品能够提高刺激控制，却会让“策略效果”与该商品自身的实用性、享乐性和象征性完全混淆。为支持 `strategy × product orientation × symbolic affordance` 的推断，本研究需要在每个商品属性格保留多个 exemplar，并在统计模型中处理 participant、product 与 image 的层级结构。这是对 Khatiwada et al. 方法逻辑的领域适配，而不是机械复制。

### 2.3 商品与图片最初各选多少：区分已确认事实与正式方案目标

| 层级 | 当前可核验数量 | 含义与状态 |
| --- | ---: | --- |
| 初始商品池 | 15 个 | `Experiment-Test0709.csv`：实用–高象征 4、实用–低象征 3、享乐–高象征 5、享乐–低象征 3。这是候选分布，不是已经由被试验证的最终分类。 |
| 正式商品目标 | 每格至少 3 个，共至少 12 个 | Study 0 商品预检验后保留；若某格不足 3 个，应补充候选商品，不能为平衡而强留失败商品。 |
| 每个商品 × 策略的生成候选 | 至少 3 张 | 三种策略分别生成，候选顺序、prompt、模型、参数和输出哈希进入 manifest。 |
| 若最终保留 12 个商品时的候选图 | 每种策略至少 36 张，共至少 108 张 | `12 商品 × 3 策略 × 3 候选`；Product-oriented、Experiential-oriented、Symbolic-oriented 各至少 36 张候选。 |
| 正式冻结刺激 | 每种策略 12 张，共 36 张 | 每个 `商品 × 策略` 只冻结 1 张，即 `12 × 3 × 1`；三类数量完全平衡。 |

这里必须区分**历史工程输出**与**确认性刺激数量**。仓库 `outputs/` 中存在 v11–v16、rollout、局部重生成和 logo overlay 等多轮文件；这些记录反映 prompt 迭代和技术修复，不能相加后写成论文的候选刺激样本量。论文应以最终冻结的 `stimulus_manifest.csv` 为唯一计数依据，分别报告 generated、technical-QC rejected、human-validation rejected、replacement 和 included。当前能够作为既成事实报告的是 15 个初始商品及其四格分布；“108 张候选、36 张正式图”在完成 manifest 与独立刺激验证前应写成预注册目标，而不是已经完成的结果。

### 2.4 本研究选图步骤与每一步的理由

| 步骤 | 操作 | 选择／排除规则 | 理由 |
| --- | --- | --- | --- |
| 1. 建立商品候选池 | 从具有清晰白底参考图的商品中建立实用／享乐 × 高／低象征性四格候选 | 去除无法去品牌、商品主体不清、价格／促销不可分离或类别重复严重的材料 | 先保证源商品可控，避免生成阶段无法区分策略效应与源图缺陷 |
| 2. 商品层预检验 | 由独立中国成年样本评价实用性、享乐性、象征承载力、熟悉度和预期价格 | 每格至少保留 3 个；目标取向差异和象征性差异达到预注册阈值；控制极端熟悉度／价格 | 商品分类必须来自受众判断，而不是研究者标签 |
| 3. 受控候选生成 | 对每个保留商品分别生成三种策略，每个 `商品 × 策略` 至少 3 张 | 固定模型、wrapper、1:1 图幅、源图和共同禁则；只改变理论策略 prompt | 让条件差异尽可能归因于视觉意义策略 |
| 4. 盲法技术 QC | 检查商品身份、几何、文字、品牌／价格、虚构功能、手部／物体 artifact 和构图连贯性 | 按归档生成顺序选择第一张通过 QC 的候选；失败图保留及编码原因 | 防止研究者挑选“最有效”图片造成 researcher degrees of freedom；第一张合格规则比主观择优更可复现 |
| 5. 独立人类刺激验证 | 不显示策略标签，测主导意义三选一、产品保真和广告连贯／可信度 | 目标路线选择率至少 50%，其 95% CI 排除 33.3% 猜测；产品保真与视觉质量均值至少 4.5/7；同商品三策略质量差不超过 0.60 | 人类受众而非 LLM 决定构念是否被正确实现；同时防止某策略仅因画质更好而获益 |
| 6. 定向替换 | 只修改失败的 `商品 × 策略` prompt，并用独立样本复核替换图 | 不回看广告态度、购买意愿或主实验结果选图 | 把修复限制在失败单元，避免利用结果变量反向优化刺激 |
| 7. 冻结与审计 | 冻结 36 张正式图及 manifest，保留全部失败图、原因、prompt、版本、seed／参数和哈希 | 正式 Study 1 启动后不得换图 | 保证可复现性，并把成功与失败模式都转化为 HCI 设计知识 |

这一流程把 CHI 新闻研究的核心原则推广到广告图片：**先构造理论上可区分的候选条件，再用独立证据验证，最后冻结刺激。** 但它进一步解决了图片域的特有问题，包括同一商品身份保持、视觉 artifact、虚构功能、跨策略画质平衡，以及受众能否读出目标商业意义。

## 3. 检索范围、纳入标准与证据等级

本综述围绕五组关键词检索：`text-to-image / generative AI image / prompt engineering / human-AI co-creation`、`human evaluation / image quality / text-image alignment / preference`、`visual rhetoric / visual metaphor / advertising image / visual meaning`、`AI disclosure / AI-generated label / authenticity / trust`、`utilitarian hedonic / symbolic product / advertising appeal`。重点检索 ACM Digital Library（CHI、UIST、IUI、C&C、NordiCHI、WebSci）、IEEE/CVF、NeurIPS、AAAI ICWSM，以及 JCR、JMR、JM、Journal of Advertising、CHB、JBR、JRCS 等相关期刊。

| 等级                | 纳入规则                                                          | 在本文中的用途                           |
| ------------------- | ----------------------------------------------------------------- | ---------------------------------------- |
| A：核心全文证据     | 同行评审，且已查看全文的 Introduction、Background 或 Related Work | 分析论文如何组织背景、如何收束缺口       |
| B：核心结果证据     | 同行评审，官方页面、摘要、方法和结果可核验，但未逐段检查完整背景  | 支撑研究现状、效应方向与边界条件         |
| C：扩展理论证据     | 高质量营销、心理学、传播、IS 或计算机视觉研究                     | 支撑变量、机制和跨领域连接               |
| D：新近／预印本证据 | 预印本或较新、尚未形成稳定引用链的研究                            | 仅作趋势与方法补充，不承担核心新颖性主张 |

纳入文献共覆盖 HCI 创作系统、人类评估、视觉意义与广告、AI 披露／来源判断四组。没有将博客、商业报告和无法核验作者或 DOI 的条目列入正式证据。由于数据库结果仍可能遗漏非英语论文、最新 online-first 论文和尚未被索引的 2026 年论文，本综述应被理解为**面向研究设计的高覆盖叙述性综述**，不是 PRISMA 式穷尽系统综述。

## 4. 核心 HCI 论文如何组织 Background / Related Work

下表不是只总结“论文做了什么”，而是拆解它们如何从大背景走到可研究的 HCI 问题。标为“全文核验”的行均已检查论文实际章节。

| 论文与证据状态                                               | Background / Related Work 的实际组织                                                                                                                                                                     | 研究如何收束缺口                                                                                            | 对本研究写作的直接启发                                                                                                                  |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Liu & Chilton (2022), CHI，全文核验                          | Introduction：T2I 能力突破 → 开放式文本带来试错式 prompt search → 将问题定义为 prompt engineering；Related Work：① generative methods as creativity support tools；② T2I 技术；③ prompt engineering | 生成空间巨大，但缺少可解释、语义化的控制；HCI 需要把 ML 能力转化为可用交互范式                              | 先承认生成能力，再把问题转为“是否能用稳定、可理解的语义策略控制输出”；三种 visual orientation 可写成比单纯 style 更高层的语义控制变量 |
| Liu, Qiao, & Chilton (2022), UIST，全文核验                  | 从 T2I 的不透明和随机试错切入 → 选择新闻插图这一高时效、高概念需求任务；Related Work：生成模型与语义控制 → NLP prompt engineering → multimodality                                                     | 既有系统很少围绕具体设计任务组织从文本到视觉概念的搜索                                                      | 写作时尽早说明“广告图片”不是通用艺术图片，而是有传播目标、受众和决策后果的任务域                                                      |
| Khatiwada et al. (2026), CHI，全文核验                       | Introduction：新闻极化与 AI 介入新闻生产 → sentiment／framing 可改变叙事 → LLM disclosure 的受众效应未知；Background 依次组织为：① framing 与 emotional tone 理论；② sentiment／framing 的受众效应；③ media bias、trust 与技术干预；④ AI／LLM 内容生成与披露 | 既有研究尚未在 AI 改写新闻中正交控制 tone × framing，并同时检验披露如何改变感知；方法上以 3 篇原文、12 个改写候选、多模型复核和 3 人编码筛出一套刺激 | 借鉴“候选池 → 受控生成 → 多源验证 → 人工筛选 → 冻结”的材料选择链；广告域则需要多个商品 exemplar、产品保真与意义保真检查，且本研究不沿用其同一参与者披露前后测 |
| Fan et al. (2024), CHI，全文核验                             | Introduction 从图片承载信息／情感与情境灵感开始；Related Work 明确分为：① human-AI co-creation；② context-aware systems；③ image generation/editing；④ LLM multi-agent systems                       | 现有共同创作系统利用 prompt，却没有充分利用用户情境；用 formative study 形成设计要求                        | 可采用“四个文献桶—一个交叉点”的结构：生成控制、视觉理解、人类评价、披露；最后指出交叉点尚未被检验                                    |
| Dang et al. (2023), UIST，全文核验                           | 先从 world-building 的实际工作流与困难写起 → 指出 click-once prompt 假设与迭代创作不符；Related Work：图像合成技术 → prompting → scene generation → human-AI co-creativity                           | 现有系统缺少层级、空间和多模态的 expressive prompting                                                       | 研究缺口应落在“现有系统优化输入端，但缺乏面向受众的输出语义验证”，而非笼统说 T2I 不可控                                               |
| Chung & Adar (2023), UIST，全文核验                          | Introduction 用传统绘画的逐步判断对比端到端 T2I；Background：① physical-to-digital painting；② AI image generation；③ interaction with AI generation                                                  | 技术已有 inpainting、prompt mixing 等能力，但交互模型没有支持逐步塑形、含混概念和用户所有感                 | 本研究可借用“从生产过程到输出后果”的反转：创作者端研究强调控制过程，我们则检验控制结果是否被受众按预期理解                            |
| Ko et al. (2023), IUI，全文核验                              | Introduction：LTGM 能力与普及 → 艺术家困惑；Background：① LTGM democratization；② AI 支持艺术家；随后以 72 篇系统论文的综述构造 user–task–role 分析框架                                             | 技术属性和 prompt 研究多，关于艺术家如何实际采用的研究少                                                    | 可以显式搭建“生成者—任务—受众”三级：既有 HCI 多集中生成者和任务，本研究补足受众对输出的意义解码与反应                               |
| Park et al. (2024), NordiCHI，全文核验                       | Introduction 先区分宏观态度研究与日常实践；Related Work：① GenAI in HCI；② GenAI creativity support tools；③ industry applications                                                                    | 既有研究多研究早期创意阶段、无经验用户或一般态度，缺少有经验从业者的日常工作流证据                          | 写作中应先承认 HCI 已有丰富创作支持研究，再准确指出“受众端的商业视觉意义与评价”仍未充分进入这些系统论文                               |
| Petridis & Chilton (2019), C&C，全文核验                     | Introduction：视觉隐喻广泛但容易误读 → 机器理解困难之前，先问人类如何出错；Background 解释 source–target–property；Related Work 分为视觉隐喻理解与说服                                                | 既有研究常用总体“易理解”或选择题，缺少开放解释与错误类型分析                                              | 这是本研究 manipulation check 的关键依据：不能只测好看、真实或喜欢，还要验证受众是否把功能／体验／象征意义读对                          |
| Jakesch et al. (2019), CHI，全文核验                         | Introduction 先定义 AI-mediated communication 并与 CMC 区分；Background：① impression formation／warranting；② bots and agents；③ trustworthiness in Airbnb                                           | 不是研究 AI 文本质量，而是研究“相信 AI 参与创作”如何改变对人的判断；在混合来源环境中出现 Replicant Effect | 将披露写成一种来源线索：同一视觉内容可能因来源信念而改变真实性、信任和广告评价；需要区分内容效应与标签效应                              |
| Otani et al. (2023), CVPR，全文核验                          | Introduction：自动指标与人类感知错位 → 审计 37 篇论文发现协议和报告不一致；Related Work：human evaluation → crowdsourcing quality → automatic metrics                                                 | 不只是“需要人评”，而是需要可复现、标准化、能报告标注质量的人评协议                                        | Study 0B 应把视觉质量、产品保真、意义保真和总体偏好分开；报告每张图的评价人数、呈现方式、量尺、随机化与一致性                           |
| Pawelczyk, Dimmery, & Yan (2026), ICWSM，全文核验            | Introduction：法规／平台实践 → 标签的直接效应未知 → 进一步提出未标记内容的溢出风险；Related Work 从 misinformation warning labels 迁移到 AI 图片标签，再引出 implied authenticity effect               | 现有视觉标签研究多关注被标记内容，缺少对未标记内容的间接影响和非美国情境证据                                | 披露部分应先建立“界面治理问题”，再写直接评价和心理机制；同时承认标签可能改变未披露内容的基线推断                                      |
| Ragot, Martin, & Cojean (2020), CHI EA，官方元数据与摘要核验 | 以 HCI 中对机器／AI 的感知偏差为背景，使用艺术品的真实来源与声称来源区分内容属性和归因线索                                                                                                               | 565 名参与者对喜欢、美、创新和意义评分；被认为是人类创作的作品总体评价更高                                  | 为“同一内容、不同来源信念”的因果分离提供早期视觉证据；但艺术评价不能直接外推到产品广告                                                |
| Shi & Jiang (2026), SAGE Open，官方全文预览与摘要核验        | 从广告业采用 GenAI 与披露争议切入，整合 ELM 和调节定向理论，构造 novelty 正向、authenticity 负向的双刃剑模型                                                                                             | 直接研究 AI 广告图片标签，并发现产品类型调节两条路径                                                        | 这是本研究最近邻，必须正面比较：本研究不能再声称首次研究“披露 × 产品类型”，而应强调视觉意义策略、象征承载力、意义理解和不同中介机制  |

### 4.1 可复用的 CHI/HCI 背景写作模式

这些论文反复使用五个写作动作：

1. **先写实践，不先写变量。** 例如先说明设计者正在用 GenAI 生成图片、广告图片承担意义传递任务、平台开始显示 AI 标签，再引出具体构念。
2. **把技术能力与人的困难并置。** “模型能生成高质量图片”并不自动推出“人能够有效控制或正确理解图片”；CHI 的问题通常就在二者之间。
3. **Related Work 按问题链而非按年代排列。** 每一小节承担一个逻辑部件，末段明确“这组工作解决了什么、还没有解决什么”。
4. **缺口紧贴方法。** 如果缺口是“意义可能被误读”，方法就必须包含意义识别或 manipulation validation；如果缺口是“标签改变来源判断”，方法就必须固定内容，并在 Study 1 开始时将参与者随机分配到 AI 已披露组或来源未披露组，以 post-only 组间比较识别披露效应。
5. **贡献对应证据层级。** 系统论文通常贡献 artifact、interaction technique、study insight 和 design implications；本研究没有新系统时，应把贡献写成 conceptual framework、evaluation protocol、factorial evidence 和 design knowledge，而不是硬称“构建新界面”。

## 5. 四条文献流的证据地图

### 5.1 GenAI 图片生成、提示与创作工作流

| 文献                       | 场景与方法                                 | 核心发现／主张                                                              | 对本研究的连接                                                                   |
| -------------------------- | ------------------------------------------ | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Liu & Chilton (2022)       | CHI；五组 prompt 实验                      | prompt 结构、style、subject 与随机性影响生成结果；提出 T2I prompt 设计指南  | 三种意义策略必须用可复现 prompt 模板、随机种子／候选生成与人工筛选协议实现       |
| Liu et al. (2022)          | UIST；新闻插图系统与用户研究               | 把 tone、subject、style 组织为结构化搜索，使可用结果和效率提高              | 视觉策略可作为结构化 prompt 维度，而非事后给图片贴标签                           |
| Chung & Adar (2023)        | UIST；PromptPaint 系统与用户研究           | 文本不足以表达所有视觉意图；混合、局部和中途干预支持迭代控制                | 同一产品生成三类图片时需要记录多轮修改，避免把偶然产物当作策略效应               |
| Dang et al. (2023)         | UIST；WorldSmith，形成性研究与首次使用研究 | text、sketch、region filling 支持层级和空间化的迭代世界构建                 | 高层意义与低层构图应分开控制；产品主体和关键属性必须保持稳定                     |
| Fan et al. (2024)          | CHI；ContextCam，形成性研究与情境用户研究  | 环境与个人情境可转化为主题、prompt 和个性化图片                             | 说明“情境”可以进入生成流程；本研究进一步把产品类型与象征承载力作为系统化情境   |
| Ko et al. (2023)           | IUI；72 篇系统综述 + 28 位视觉艺术家访谈   | LTGM 扮演 automation、exploration、mediation 三类角色；仍需可控性和领域定制 | 广告生成是领域任务，不能直接沿用通用艺术 prompt 或只以创作者满意度评估           |
| Park et al. (2024)         | NordiCHI；16 位汽车行业专业设计者访谈      | 专业设计者需要视觉输入、迭代工作流、prompt 控制和经验性素材                 | 生成协议应保留视觉参考、候选比较与迭代轨迹，未来工具可把策略选择显式化           |
| Oppenlaender (2024)        | Behaviour & IT；prompt modifier taxonomy   | 系统整理 T2I prompt modifiers                                               | 可用于检查三类 prompt 中是否混入不对等的摄影、风格、质量修饰词                   |
| Oppenlaender et al. (2025) | IJHCI；三项 prompt skill 研究              | 普通人会描述内容，但缺少艺术／风格词汇；写和改 prompt 是可区分技能          | 不能把参与者不会写 prompt 当作视觉策略无效；正式研究让参与者评价成品而非生成图片 |
| Feng et al. (2024)         | IEEE TVCG；PromptMagician 可视分析系统     | 通过结果聚类、词语推荐和比较支持 prompt refinement                          | 提示应可追溯并保存策略—词语—结果映射，便于刺激复现                             |
| Torricelli et al. (2024)   | WebSci；分析超过 145,000 条 prompt         | 界面快捷选项与较少的概念探索、较低 prompt 细节相关                          | 生成界面本身会塑造输出；实验必须统一界面、模型版本和可用控制项                   |

这组工作的共同盲点不是“没有用户研究”，而是**用户主要是创作者，结果指标主要是可控性、效率、创造力、满意度和意图匹配**。它们很少让广告的目标受众判断图片究竟传达了哪一类产品意义，更少追踪这种解码如何影响购买、推荐或分享。

### 5.2 人类如何评价 T2I 输出

| 文献                                | 评价对象与维度                                                              | 对本研究的方法启示                                                          |
| ----------------------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Otani et al. (2023)                 | 审计 37 篇 T2I 论文；比较评分／排序、文字表述、标注者资格和样本量           | 分开报告单图评分和比较选择；明确每个刺激的评价人数、量尺、资格与一致性      |
| Hu et al. (2023), TIFA              | 用问答拆解 prompt—image faithfulness；对象、计数、空间关系、组合等         | 产品图片的“符合 prompt”也应拆为主体、属性、关系和场景，而不是单一对齐题   |
| Kirstain et al. (2023), Pick-a-Pic  | 真实用户对两张生成图的成对偏好；训练 PickScore                              | 本研究的比较偏好可保留 forced choice，但不能用偏好替代策略理解和理论构念    |
| Xu et al. (2023), ImageReward       | 137K 专家比较；评分与排序结合                                               | 可借鉴先做质量门槛、再做相对偏好的两层筛选                                  |
| Lee et al. (2023), HEIM             | 12 个维度、62 个场景、26 个模型；含 alignment、quality、aesthetics、bias 等 | “好图”是多维的；至少要把视觉质量、审美、逼真度、产品保真和意义保真分开    |
| Ghosh et al. (2023), GenEval        | 对象共现、位置、计数和颜色的自动细粒度检查                                  | 生成后可用自动／人工双重检查产品颜色、数量、朝向和属性是否跨条件一致        |
| Grimal et al. (2024), TIAM          | 分析对象、数量、颜色及随机 seed 对对齐的影响                                | 随机种子可能系统性改变质量；应保存并报告 seed 或至少报告候选采样策略        |
| Corneanu et al. (2025), GenomeBench | scene graph + 引导式人类问答，分解整体含混判断                              | Study 0B 的题项应具体到产品、场景、属性和关系，减少“总体上是否匹配”的歧义 |
| Zhang et al. (2025), Q-Eval-100K    | 100K 图／视频、960K 人工标注；视觉质量与 alignment                          | 支持将质量与对齐作为两个不同的筛选门槛                                      |
| Aziz et al. (2024)                  | 预印本；photorealism、image quality、text-image alignment                   | 可作为逼真度与质量题项的补充来源，但证据等级低于正式同行评审基准            |

这一文献流最清楚地支持本研究的四层验证：

1. **视觉质量（visual quality）**：清晰、无伪影、构图与光影；
2. **产品保真（product fidelity）**：主体身份、关键外观和属性没有跨条件漂移；
3. **意义保真（meaning fidelity）**：图片是否主要传达预先指定的 functional / experiential / symbolic 意义；
4. **受众后果（audience consequences）**：广告态度、满意度、购买、推荐、分享、真实性和信任。

### 5.3 视觉理解、视觉修辞与广告意义

| 文献                                        | 核心理论／证据                                                                                | 对三类 visual orientation 的作用                                             |
| ------------------------------------------- | --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| Scott (1994)                                | 广告图片是依赖惯例和认知处理的视觉修辞，不只是情绪刺激或现实反映                              | 支持把 GenAI 图像当作意义系统，而不是单纯的美感刺激                          |
| McQuarrie & Mick (1999)                     | 视觉修辞结构会影响 elaboration、广告态度，文化能力影响视觉 tropes 的处理                      | 说明同一视觉策略不会被所有人同样解码，需要检查理解与熟悉度                   |
| Phillips (2000)                             | verbal anchoring 可提高复杂图片的理解；完整解释也可能减少解谜乐趣和喜欢                       | 正式刺激若加标题／文案，文案会改变策略理解；应统一或谨慎操纵                 |
| Phillips & McQuarrie (2004)                 | visual rhetoric 可按视觉结构与意义操作分类                                                    | 可用于编码生成图片究竟通过 juxtaposition、fusion、replacement 或其他结构传意 |
| McQuarrie & Phillips (2005)                 | 图片隐喻可比文字隐喻产生更开放的推断和间接说服                                                | 象征型图片可能提升自我联结，也可能因含混而被误读                             |
| Scott & Vargas (2007)                       | 消费者可以从图片“读出”产品属性；提出图片作为新型书写系统                                    | 直接支撑从图片读取功能、体验和社会意义的研究命题                             |
| Mohanty & Ratneshwar (2015)                 | 隐喻不一致程度越高，主观理解越低；认知需求和关系加工发挥作用                                  | 可将 visual complexity／理解难度作为刺激筛选项或稳健性变量，而非默认控制     |
| Petridis & Chilton (2019)                   | 无解释文本时视觉隐喻正确理解率为 41.3%；错误涉及对象、source/target、属性转移；意义熟悉度重要 | 必须做策略识别和开放式／forced-choice 理解检查，不能用创作者意图代替受众理解 |
| Park et al. (1986)                          | 品牌概念可围绕 functional、experiential、symbolic needs 管理                                  | 为三类意义策略提供上位概念来源，但它不是现成的图片量表                       |
| Homburg et al. (2015)                       | 新产品设计具有 functional、aesthetic、symbolic 等维度并产生市场后果                           | 支撑视觉刺激中功能与象征意义的操作化和操纵检查                               |
| Candi et al. (2017)                         | 在线评论中消费者会回应产品设计的 functional、aesthetic、symbolic 面向                         | 支撑这些设计意义在数字消费情境中可被感知和评价                               |
| Brakus et al. (2009)                        | 品牌体验包含 sensory、affective、intellectual、behavioral 维度                                | 为 experiential 图片的感官和认知刺激题项提供依据                             |
| Jiang & Benbasat (2007)                     | 在线产品呈现通过 perceived diagnosticity 改变产品理解和评价                                   | 功能型图片预期更直接提升可诊断性，但其他策略也可能通过不同信息路径作用       |
| Elder & Krishna (2012)                      | 视觉呈现可促进具身的产品使用心理模拟，并影响购买意向                                          | 体验型图片的核心候选机制之一                                                 |
| Escalas & Bettman (2003, 2005); Belk (1988) | 产品／品牌意义可以连接实际自我、理想自我和社会身份                                            | 象征型图片的核心候选机制是 image-evoked product–self connection             |
| Voss et al. (2003)                          | 享乐和实用是可分别测量的双维度，不是强迫二选一                                                | 产品取向要在产品层预检；不能只凭研究者直觉分类                               |

这组文献也提醒：**aesthetic 不等于 experiential，symbolic 不等于“看起来高端”，functional 不等于白底产品照。** 三种策略必须根据被受众读出的意义来定义，而不是根据研究者对构图风格的主观命名。

### 5.4 AI 披露、来源判断、真实性与信任

| 文献                                           | 情境与主要结果                                                                                       | 本研究应如何使用                                                                                                     |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Jakesch et al. (2019)                          | CHI；同一人类文本在“可能由 AI 写”环境中被不同评价；混合来源时出现 Replicant Effect                 | 披露改变的是接收者对来源和信号可操纵性的理解，不只是技术态度                                                         |
| Hancock et al. (2020)                          | 定义 AI-mediated communication，并提出信号、关系、伦理研究议程                                       | 将 GenAI 广告图定位为代表品牌进行沟通的 AI-mediated visual communication                                             |
| Ragot et al. (2020)                            | CHI EA；人类／AI 艺术来源与归因影响美、喜欢、创新和意义判断                                          | 视觉内容和来源标签必须因果分离                                                                                       |
| Gangadharbatla (2022)                          | 艺术品归因实验；人们难准确识别来源，归因知识与作品类型交互影响评价和购买意向                         | AI 披露效应可能依赖视觉内容类型，不能只估计一个平均主效应                                                            |
| Bellaiche et al. (2023)                        | 两项实验；同样的 AI 图被标为人类创作时得到更积极、深刻和有意义的评价                                 | 支撑 label-induced top-down judgment；也提示 art meaning 与 product utility 可能不同                                 |
| Epstein et al. (2020)                          | AI 的工具／行动者措辞与拟人化影响信用和责任分配                                                      | 披露文本应固定为中性制作过程说明，避免把 AI 写成自主创作者                                                           |
| Millet et al. (2023)                           | 对 AI 艺术的贬低部分源于 anthropocentric creativity beliefs                                          | 一般 AI 态度和人类中心创造力信念可作异质性分析，但不宜纳入所有主模型                                                 |
| Nightingale & Farid (2022)                     | AI 合成人脸难以与真实人脸区分，且被评为更可信                                                        | 视觉逼真度本身不能替代来源识别，也不能推出披露后的信任方向                                                           |
| Brüns & Meißner (2024)                       | GenAI 社交媒体内容降低感知品牌真实性                                                                 | 支撑 authenticity 作为重要结果／机制，但不能假设它必然是唯一机制                                                     |
| Bui et al. (2024)                              | AI 视觉内容的感知真实性关联旅游信任和 patronage intention                                            | 支撑视觉真实性—信任—行为后果链                                                                                     |
| Kirkby et al. (2023)                           | 3×3 品牌文本实验；AI 披露并未必然降低 brand voice authenticity 或品牌态度                           | 证明披露惩罚并非普遍规律，应预注册双向或条件性假设                                                                   |
| Wu, Dodoo, & Wen (2025)                        | 三项广告实验；AI 用于广告投放还是创作会影响 WOM，取决于任务客观性／复杂性判断                        | 披露应明确 AI 在制作中的角色；图片“由 AI 生成”与“AI 辅助编辑”不可混用                                            |
| Koning & Voorveld (2025)                       | GenAI 广告披露提高 AI／说服知识，并通过不同路径降低或提高信任                                        | 说明 persuasion knowledge 可以产生相反间接效应；报告总效应与机制效应                                                 |
| Kirk & Givi (2025)                             | 七项预注册实验；AI 创作情感营销文本降低口碑和忠诚，真实性与 moral disgust 为机制；事实性文本效应减弱 | functional 与 experiential/symbolic 策略可能改变披露惩罚，因后两者更依赖人情味和表达意图                             |
| Grigsby, Michelsen, & Zamudio (2025)           | 服务广告；披露、信任与服务无形性                                                                     | 表明产品／服务可验证性是披露效应的重要边界条件                                                                       |
| Shi & Jiang (2026)                             | 三项广告图片实验；披露通过 novelty 正向、authenticity 负向影响广告态度、产品态度和购买；产品类型调节 | 最近邻证据；本研究需超越“实用 vs. 享乐 × 披露”，检验具体视觉意义策略和不同心理机制                                |
| Gu, Li, & Xiang (2026)                         | AIGC 广告；来源、诉求和品牌匹配影响广告回避                                                          | 进一步证明“AI 来源 × message appeal”已经是活跃主题；贡献应聚焦三分视觉意义及象征承载力，而不是宽泛的 appeal match |
| Pawelczyk et al. (2026)                        | ICWSM；过程型与危害型标签降低 AI 图的感知真实性，并轻微提高未标记图片真实性                          | 来源未披露组也会主动推断来源；可在该组完成所有核心评价后一次性测量 inferred AI authorship，但它不是披露前测，也不改变并列组间设计 |
| Trattner et al. (2026)                         | ICWSM；6,114 人、三国；C2PA provenance 标签提高图片透明度、可信度与新闻平台信任                      | “中性 AI 声明”和“可验证 provenance”不是同一种披露；未来设计贡献可讨论分层披露                                    |
| Dietvorst et al. (2015); Castelo et al. (2019) | 算法厌恶受错误经验与任务主观性影响                                                                   | 对体验／象征等较主观意义任务，来源线索可能比功能任务更不利，但需实证检验                                             |
| Longoni & Cian (2022)                          | word-of-machine effect：AI 建议的接受取决于享乐／实用属性权衡                                        | 为产品取向和 AI 来源的交互提供理论桥梁，但推荐来源不等于广告图片来源                                                 |
| Friestad & Wright (1994)                       | Persuasion Knowledge Model                                                                           | 披露可能激活对广告制作和说服意图的识别，从而改变信任与态度                                                           |

这里最重要的综合不是“AI 披露会降低评价”，而是：

> **披露是一种改变解释框架的界面线索。它既可能触发不真实性、机器不适合主观任务、道德不适和说服防御，也可能提供新奇感、诚实／透明信号和可验证来源。净效应取决于视觉内容要求用户相信什么。**

## 6. 本研究在 HCI 领域的可辩护研究缺口

### Gap 1：创作者端的 semantic control 尚未连接到受众端的 semantic reception

CHI/UIST 的系统研究已经证明，prompt、style、context、sketch、region control 和迭代界面能够改善创作者对生成过程的控制（Liu & Chilton, 2022; Chung & Adar, 2023; Dang et al., 2023; Fan et al., 2024）。但是，这些研究通常用创作者满意度、可控性、效率、灵感和 intent alignment 评价系统。**仍缺少一个面向广告受众的检验：被系统控制出来的“功能／体验／象征”意义，是否真的被非创作者稳定读出。**

这不是简单的“加几个消费者 DV”。它把 human-AI co-creation 的成功标准从 creator-side intention 扩展到 audience-side interpretation。

### Gap 2：T2I 评估的 alignment 仍主要是字面和构图对齐，而不是传播意义对齐

TIFA、GenEval、TIAM、HEIM、GenomeBench 和 Q-Eval-100K 已经显著细化对象、计数、空间关系、颜色、画质和总体偏好（Hu et al., 2023; Ghosh et al., 2023; Grimal et al., 2024; Corneanu et al., 2025; Zhang et al., 2025）。但一幅图片可以在字面上完全符合 prompt、质量很高，同时仍然没有让受众理解它想传达的产品意义。视觉修辞研究进一步表明，隐含意义经常被误读，而且熟悉度和结构复杂度会改变理解（Petridis & Chilton, 2019; Mohanty & Ratneshwar, 2015）。

因此，需要把 **semantic meaning fidelity** 作为独立评价层：不是问“图片里有没有杯子和蒸汽”，而是问“图片主要让产品显得实用、值得体验，还是能够表达身份”。

### Gap 3：视觉广告理论解释“图片如何有意义”，但缺少同一产品、可控生成的三策略因果比较

广告和消费者文献长期区分功能、体验、象征意义，也证明图片可触发诊断性、心理模拟和自我联结（Park et al., 1986; Scott, 1994; Jiang & Benbasat, 2007; Elder & Krishna, 2012; Homburg et al., 2015）。然而，传统研究通常使用不同广告、品牌或人工制作刺激，难以把产品身份、画质、构图和意义策略同时控制。

GenAI 提供了一个新的实验能力：在同一去品牌产品和相同技术约束下系统地产生多种意义策略。不过，这种能力只有在经过产品保真、画质和意义理解的多阶段验证后，才能成为有效的因果操作。

### Gap 4：AI 披露的情境性已被证明，但“披露 × 三种视觉意义 × 产品象征承载力”仍未被闭合

最近研究已经覆盖 AI 披露与产品类型、情感／理性诉求、任务客观性、广告信任和真实性（Wu et al., 2025; Kirk & Givi, 2025; Koning & Voorveld, 2025; Shi & Jiang, 2026; Gu et al., 2026）。尤其是 Shi and Jiang (2026) 已经研究广告图片披露与实用产品的交互，Gu et al. (2026) 已经研究来源、诉求和品牌匹配。因此，不能宣称本研究首次发现 disclosure–content fit。

仍可辩护的推进是：

- 把宽泛 emotional/rational appeal 细化为 **functional / experiential / symbolic visual meaning strategy**；
- 同时区分产品的 **hedonic/utilitarian orientation** 与 **symbolic affordance**，避免把产品类型压成一个轴；
- 检验披露是否改变不同意义路径的有效性：diagnosticity、mental simulation、product–self connection；
- 在同一产品上固定真实来源，把“AI disclosure vs. no source disclosure”作为 **Study 1 的 post-only between-subject parallel arms**，在首次看图前一次性随机分组，从而分离内容效应与来源信念效应；不采用披露前后测。

### Gap 5：HCI 缺少一套适合商业 GenAI 图片的端到端人类评估协议

生成系统研究、模型基准、视觉理解和广告效果研究使用不同成功指标，彼此很少连通。本研究可以形成一套可复用协议：

`产品层验证 → 生成与审计 → 视觉质量／保真筛选 → 意义识别 → Study 1 并列随机分组（AI 已披露／来源未披露） → 正式受众评价 → 后置披露回忆与来源推断`

它同时响应 HCI 对生成控制、可复现人评、视觉理解和负责任披露的要求（Otani et al., 2023; Petridis & Chilton, 2019; Pawelczyk et al., 2026）。

## 7. 可写入论文的 HCI 研究贡献

以下贡献应写成“本研究将／本研究提供”，在结果出来前不要写成已经证实的事实。

| 贡献类型       | 可主张的贡献                                                                                                                                                            | 必须有的实证支撑                                                               |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| 概念贡献       | 将 GenAI 广告图片定义为需要跨越 creator intent 与 audience interpretation 的 AI-mediated visual communication；提出 functional、experiential、symbolic 三类视觉意义策略 | 三类操纵在受众中可区分；不是仅由研究者或 prompt 命名                           |
| 方法贡献       | 提出商业 T2I 图片的多层人评协议：质量、产品保真、意义保真、受众后果                                                                                                     | Study 0A/0B 透明报告、刺激级数据、随机化、标注人数和一致性                     |
| 实证贡献       | 在固定产品和真实生成来源的条件下，通过 Study 1 的 AI 已披露／来源未披露并列组间随机化，估计视觉意义策略、产品取向、象征承载力与披露的主效应和交互                         | 披露采用 post-only between-subject 分组；有足够产品和刺激重复；模型正确处理 participant、product、image 的层级结构 |
| 机制贡献       | 区分三条意义路径：perceived diagnosticity、product-use mental simulation、image-evoked product–self connection                                                         | 量表有文献来源；避免把所有中介塞入一个不加区分的模型；报告竞争机制             |
| 设计知识贡献   | 形成“什么产品／什么传播目标／是否披露／用何种视觉策略”的条件化设计建议                                                                                                | 建议来自效应和不确定性，而不是只凭均值排序；明确未支持和边界条件               |
| 负责任 AI 贡献 | 揭示透明披露与传播有效性之间可能的权衡，并区分中性过程披露、危害警示和可验证 provenance                                                                                 | 不把无披露写成“人类制作”；不采用披露前后测；仅在核心 DV 后测量披露回忆及未披露组的来源推断；讨论 provenance 的外部证据 |

### 可直接使用的中文贡献段落

> 本研究将文本到图像生成的 HCI 研究从创作者端的提示控制与共同创作，扩展到受众端的视觉意义理解与决策。我们提出并检验一种面向商业 GenAI 图片的三分视觉意义框架，区分功能型、体验型与象征型呈现，并通过多阶段人类评估分别验证视觉质量、产品保真与意义保真。在此基础上，Study 1 在参与者首次看图前将其随机分配到 AI 来源已披露组或来源未披露组，以 post-only 并列组间设计考察这一界面来源线索如何与视觉意义策略、产品的实用／享乐取向及象征承载力共同影响广告评价、购买、推荐与分享，并比较可诊断性、产品使用心理模拟和产品—自我联结三条机制。由此，本研究提供的不只是某种图片“更有效”的结论，而是一组关于生成式视觉界面应如何根据产品意义、受众解码和透明度要求进行条件化设计的实证知识。

### 可直接使用的英文贡献段落

> This work extends HCI research on text-to-image generation from creator-side prompting and control to audience-side interpretation and decision making. We introduce a three-part framework of visual meaning strategies for commercial GenAI imagery—functional, experiential, and symbolic—and a staged human-evaluation protocol that separates visual quality, product fidelity, and meaning fidelity. In Study 1, participants are randomly assigned before their first image exposure to parallel AI-disclosed or source-not-disclosed arms; disclosure is therefore a post-only between-subject manipulation rather than a pre–post intervention. We examine how this interface-level source cue interacts with visual meaning, utilitarian–hedonic product orientation, and symbolic affordance to shape advertising evaluations and behavioral intentions. By distinguishing perceived diagnosticity, product-use mental simulation, and image-evoked product–self connection, the study aims to produce conditional design knowledge about when and how GenAI imagery should communicate product meaning under transparency requirements.

## 8. 建议的 Background / Related Work 章节结构

### 8.1 Generative AI Image Creation as a Human–AI Interaction Problem

先综述 prompt engineering、迭代控制、多模态输入、专业设计工作流和 context-aware co-creation。结尾不要说“生成不可控”，而要写：现有研究显著改善了创作者对生成过程的控制，但很少把成功定义为目标受众是否正确理解输出所承载的意义（Liu & Chilton, 2022; Ko et al., 2023; Chung & Adar, 2023; Fan et al., 2024; Park et al., 2024）。

### 8.2 From Image Quality to Meaning Fidelity

先写 T2I 评价从 FID／CLIPScore 走向人类偏好、细粒度问答和多维基准，再写这些评估仍以字面 alignment 为中心。随后引入视觉修辞和视觉隐喻误读，提出 meaning fidelity（Otani et al., 2023; Hu et al., 2023; Lee et al., 2023; Petridis & Chilton, 2019）。

### 8.3 Functional, Experiential, and Symbolic Meaning in Product Images

用 Park et al. (1986) 提供三类上位品牌概念，用 Homburg et al. (2015)、Candi et al. (2017) 和 Brakus et al. (2009) 操作化视觉意义，再分别连接 diagnosticity、mental simulation 和 self-connection（Jiang & Benbasat, 2007; Elder & Krishna, 2012; Escalas & Bettman, 2003）。结尾引出产品实用／享乐取向和象征承载力是匹配条件，而不是把三类策略看成全局排名。

### 8.4 AI Disclosure as a Source Cue in Visual Communication

从 AI-mediated communication、来源归因和 persuasion knowledge 写起，再综合负效应、零效应、双路径和 provenance 正效应。必须把 Shi and Jiang (2026) 与 Gu et al. (2026) 作为最近邻，而不是忽略它们。最后指出尚未闭合的是：作为 Study 1 并列组间条件的来源线索，如何改变三类视觉意义的解读机制，并与独立的 product symbolic affordance 共同作用。这里应明确写成 AI 已披露组与来源未披露组的 post-only 比较，而不是披露前后变化。

### 8.5 Research Questions and Design Contribution

用一个清晰的因果问题收束：

> When a generative image system renders the same product through different visual meaning strategies, can audiences reliably recover the intended meaning, and how do product context and AI-source disclosure alter the psychological and behavioral consequences of that meaning?

然后将假设／研究问题分为：

- RQ/H1：三种策略能否在 meaning check 中被区分；
- RQ/H2：策略与产品实用／享乐取向是否匹配；
- RQ/H3：象征型策略的效果是否依赖产品象征承载力；
- RQ/H4：Study 1 中 AI 已披露组与来源未披露组之间的差异，是否随三种视觉意义策略而变化；
- RQ/H5：diagnosticity、mental simulation、self-connection 是否构成差异化机制。

## 9. 证据—主张对应表

| 拟写入论文的主张                             | 主要证据                                                                             | 安全写法                                                                                                                                      | 不应写法                                              |
| -------------------------------------------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| T2I 已降低图像创作门槛，但 prompt 控制仍困难 | Liu & Chilton (2022); Chung & Adar (2023); Oppenlaender et al. (2025)                | “Existing work documents persistent challenges in expressing and refining visual intent.”                                                   | “T2I systems are uncontrollable.”                   |
| HCI 现有研究偏创作者端                       | Ko et al. (2023); Park et al. (2024); Fan et al. (2024)                              | “Much of the HCI literature evaluates creator workflows, control, or co-creative experience.”                                               | “HCI has ignored users.”                            |
| 现有相关工作尚未形成端到端广告图策略体系     | Liu, Qiao, & Chilton (2022); Otani et al. (2023); Shi & Jiang (2026); Gu et al. (2026) | “Prior work separately advances domain-specific generation workflows, reproducible image evaluation, and consumer responses to AI advertising; an unresolved problem is how to connect advertising theory, controlled generation, audience-side meaning validation, and downstream outcomes.” | “There is no research on AI-generated advertising images.” |
| 自动指标不能替代人评                         | Otani et al. (2023); Lee et al. (2023)                                               | “Common automatic metrics do not fully align with human perception and omit some dimensions.”                                               | “Automatic metrics are useless.”                    |
| 生成刺激应经过候选池、独立验证与冻结         | Khatiwada et al. (2026); Otani et al. (2023)                                         | “Controlled generative experiments benefit from a documented candidate pool, construct-specific human validation, and a frozen stimulus set.” | “Researchers may select whichever generated outputs look best.” |
| 视觉意义可能被误读                           | Petridis & Chilton (2019); Mohanty & Ratneshwar (2015)                               | “Implicit visual meaning is neither automatic nor uniform across viewers.”                                                                  | “Most people cannot understand visual ads.”         |
| AI 披露效应具有条件性                        | Kirkby et al. (2023); Wu et al. (2025); Koning & Voorveld (2025); Shi & Jiang (2026) | “Disclosure effects vary in direction and mechanism across tasks, content, and label designs.”                                              | “Disclosure always lowers trust.”                   |
| 最近研究已涉及产品类型／诉求                 | Shi & Jiang (2026); Gu et al. (2026); Kirk & Givi (2025)                             | “Recent work has begun to identify content and product contingencies.”                                                                      | “No study has examined content × disclosure.”      |
| 本研究仍有新增量                             | 上述四条文献流的交叉综合                                                             | “The unresolved issue is whether controlled visual meaning is recovered by audiences and how disclosure changes distinct meaning pathways.” | “This is the first study of AI advertising images.” |

## 10. 对当前实验设计的具体建议

1. **保留 Study 0A 与 0B。** 产品取向和象征承载力先在产品层验证；图片质量、产品保真和意义保真在刺激层验证。它们是产品／刺激验证，不是 AI 披露前测。
2. **将披露固定为 Study 1 的并列组间因素。** 参与者在首次看图前一次性随机进入 AI 已披露组或来源未披露组；同一参与者不跨组、不在披露前后重复评价，也不另设披露 Study 2。
3. **不要把无披露组写成人类制作。** 使用“未说明来源”，否则实验比较的是 AI vs. human source claim，而不是 disclosure vs. no source disclosure。
4. **把意义识别放在独立刺激验证中，不在正式研究中反复追问。** 正式研究逐图问“这是不是 AI”或“它是哪类策略”会显著启动研究目的和 persuasion knowledge。
5. **所有核心 DV 使用 post-only 比较。** 满意／广告态度、购买、推荐、分享、可信度和真实性等结果均在参与者所属条件下测量一次；不计算 disclosure pre–post change score。
6. **只把来源推断和披露回忆作为后置检查。** 仅在来源未披露组完成所有核心 DV 后测一次 inferred AI authorship；两组在结果题完成后回答 disclosure recall。二者不属于披露前测，也不用于 ITT 排除。
7. **分离 aesthetic、experiential 与 authenticity。** 美观是刺激质量；体验意义是图片让使用体验变得可感；真实性是对内容／品牌是否真实可信的判断。
8. **随机效应覆盖 participant、product 和 image。** 如果每个产品只有一张策略图，策略效应会与图片实例混淆；最好每个 product × strategy 有多个合格实例，或至少在限制中明确刺激抽样边界。
9. **报告失败刺激。** HCI 贡献不仅是最后选中的“成功图片”，还包括不同策略常见的失败模式，例如功能信息不足、体验场景抢走产品主体、象征线索含混或身份意义被误读。
10. **将 2026 最近邻写入论文。** Shi and Jiang (2026)、Gu et al. (2026)、Pawelczyk et al. (2026) 和 Trattner et al. (2026) 会让背景更及时，也能迫使贡献陈述保持精确。

## 参考文献

- Aziz, M., Rehman, U., Safi, S. A., & Abbasi, A. Z. (2024). *Visual verity in AI-generated imagery: Computational metrics and human-centric analysis* [Preprint]. arXiv. https://doi.org/10.48550/arXiv.2408.12762
- Belk, R. W. (1988). Possessions and the extended self. *Journal of Consumer Research, 15*(2), 139–168. https://doi.org/10.1086/209154
- Bellaiche, L., Shahi, R., Turpin, M. H., Ragnhildstveit, A., Sprockett, S., Barr, N., Christensen, A., & Seli, P. (2023). Humans versus AI: Whether and why we prefer human-created compared to AI-created artwork. *Cognitive Research: Principles and Implications, 8*, Article 42. https://doi.org/10.1186/s41235-023-00499-6
- Brakus, J. J., Schmitt, B. H., & Zarantonello, L. (2009). Brand experience: What is it? How is it measured? Does it affect loyalty? *Journal of Marketing, 73*(3), 52–68. https://doi.org/10.1509/jmkg.73.3.052
- Brüns, J. D., & Meißner, M. (2024). Do you create your content yourself? Using generative artificial intelligence for social media content creation diminishes perceived brand authenticity. *Journal of Retailing and Consumer Services, 79*, 103790. https://doi.org/10.1016/j.jretconser.2024.103790
- Bui, H. T., Filimonau, V., & Sezerel, H. (2024). AI-thenticity: Exploring the effect of perceived authenticity of AI-generated visual content on tourist patronage intentions. *Journal of Destination Marketing & Management, 34*, 100956. https://doi.org/10.1016/j.jdmm.2024.100956
- Candi, M., Jae, H., Makarem, S., & Mohan, M. (2017). Consumer responses to functional, aesthetic and symbolic product design in online reviews. *Journal of Business Research, 81*, 31–39. https://doi.org/10.1016/j.jbusres.2017.08.006
- Castelo, N., Bos, M. W., & Lehmann, D. R. (2019). Task-dependent algorithm aversion. *Journal of Marketing Research, 56*(5), 809–825. https://doi.org/10.1177/0022243719851788
- Chung, J. J. Y., & Adar, E. (2023). PromptPaint: Steering text-to-image generation through paint medium-like interactions. In *Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology* (pp. 1–17). Association for Computing Machinery. https://doi.org/10.1145/3586183.3606777
- Corneanu, C. A., Feng, Q., & Martinez, A. M. (2025). Structured human assessment of text-to-image generative models. In *Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision* (pp. 4481–4490). https://openaccess.thecvf.com/content/WACV2025/html/Corneanu_Structured_Human_Assessment_of_Text-to-Image_Generative_Models_WACV_2025_paper.html
- Dang, H., Brudy, F., Fitzmaurice, G., & Anderson, F. (2023). WorldSmith: Iterative and expressive prompting for world building with a generative AI. In *Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology* (pp. 1–17). Association for Computing Machinery. https://doi.org/10.1145/3586183.3606772
- Dietvorst, B. J., Simmons, J. P., & Massey, C. (2015). Algorithm aversion: People erroneously avoid algorithms after seeing them err. *Journal of Experimental Psychology: General, 144*(1), 114–126. https://doi.org/10.1037/xge0000033
- Elder, R. S., & Krishna, A. (2012). The “visual depiction effect” in advertising: Facilitating embodied mental simulation through product orientation. *Journal of Consumer Research, 38*(6), 988–1003. https://doi.org/10.1086/661531
- Epstein, Z., Levine, S., Rand, D. G., & Rahwan, I. (2020). Who gets credit for AI-generated art? *iScience, 23*(9), 101515. https://doi.org/10.1016/j.isci.2020.101515
- Escalas, J. E., & Bettman, J. R. (2003). You are what they eat: The influence of reference groups on consumers’ connections to brands. *Journal of Consumer Psychology, 13*(3), 339–348. https://doi.org/10.1207/S15327663JCP1303_14
- Escalas, J. E., & Bettman, J. R. (2005). Self-construal, reference groups, and brand meaning. *Journal of Consumer Research, 32*(3), 378–389. https://doi.org/10.1086/497549
- Fan, X., Wu, Z., Yu, C., Rao, F., Shi, W., & Tu, T. (2024). ContextCam: Bridging context awareness with creative human-AI image co-creation. In *Proceedings of the CHI Conference on Human Factors in Computing Systems* (Article 157, pp. 1–17). Association for Computing Machinery. https://doi.org/10.1145/3613904.3642129
- Feng, Y., Wang, X., Wong, K. K., Wang, S., Lu, Y., Zhu, M., Wang, B., & Chen, W. (2024). PromptMagician: Interactive prompt engineering for text-to-image creation. *IEEE Transactions on Visualization and Computer Graphics, 30*(1), 295–305. https://doi.org/10.1109/TVCG.2023.3327168
- Friestad, M., & Wright, P. (1994). The persuasion knowledge model: How people cope with persuasion attempts. *Journal of Consumer Research, 21*(1), 1–31. https://doi.org/10.1086/209380
- Gangadharbatla, H. (2022). The role of AI attribution knowledge in the evaluation of artwork. *Empirical Studies of the Arts, 40*(2), 125–142. https://doi.org/10.1177/0276237421994697
- Ghosh, D., Hajishirzi, H., & Schmidt, L. (2023). GenEval: An object-focused framework for evaluating text-to-image alignment. In *Advances in Neural Information Processing Systems, 36*. https://doi.org/10.52202/075280-2270
- Grigsby, J. L., Michelsen, M., & Zamudio, C. (2025). Service ads in the era of generative AI: Disclosures, trust, and intangibility. *Journal of Retailing and Consumer Services, 84*, 104231. https://doi.org/10.1016/j.jretconser.2025.104231
- Grimal, P., Le Borgne, H., Ferret, O., & Tourille, J. (2024). TIAM—A metric for evaluating alignment in text-to-image generation. In *Proceedings of the IEEE/CVF Winter Conference on Applications of Computer Vision* (pp. 2890–2899). https://openaccess.thecvf.com/content/WACV2024/html/Grimal_TIAM_-_A_Metric_for_Evaluating_Alignment_in_Text-to-Image_Generation_WACV_2024_paper.html
- Gu, C., Li, X., & Xiang, Q. (2026). Aligning source, appeal, and brand: Resolving the disclosure–effect dilemma in AIGC advertising. *Electronic Commerce Research and Applications, 77*, 101598. https://doi.org/10.1016/j.elerap.2026.101598
- Hancock, J. T., Naaman, M., & Levy, K. (2020). AI-mediated communication: Definition, research agenda, and ethical considerations. *Journal of Computer-Mediated Communication, 25*(1), 89–100. https://doi.org/10.1093/jcmc/zmz022
- Homburg, C., Schwemmle, M., & Kuehnl, C. (2015). New product design: Concept, measurement, and consequences. *Journal of Marketing, 79*(3), 41–56. https://doi.org/10.1509/jm.14.0199
- Hong, J.-W., & Curran, N. M. (2019). Artificial intelligence, artists, and art: Attitudes toward artwork produced by humans vs. artificial intelligence. *ACM Transactions on Multimedia Computing, Communications, and Applications, 15*(2s), Article 58, 1–16. https://doi.org/10.1145/3326337
- Hu, Y., Liu, B., Kasai, J., Wang, Y., Ostendorf, M., Krishna, R., & Smith, N. A. (2023). TIFA: Accurate and interpretable text-to-image faithfulness evaluation with question answering. In *Proceedings of the IEEE/CVF International Conference on Computer Vision* (pp. 20406–20417). https://openaccess.thecvf.com/content/ICCV2023/html/Hu_TIFA_Accurate_and_Interpretable_Text-to-Image_Faithfulness_Evaluation_with_Question_Answering_ICCV_2023_paper.html
- Jakesch, M., French, M., Ma, X., Hancock, J. T., & Naaman, M. (2019). AI-mediated communication: How the perception that profile text was written by AI affects trustworthiness. In *Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems* (Article 239, pp. 1–13). Association for Computing Machinery. https://doi.org/10.1145/3290605.3300469
- Jiang, Z., & Benbasat, I. (2007). Research note—Investigating the influence of the functional mechanisms of online product presentations. *Information Systems Research, 18*(4), 454–470. https://doi.org/10.1287/isre.1070.0124
- Khatiwada, P., Pappu, V., Bagozzi, B. E., & Mauriello, M. L. (2026). When AI rewrites the news: How sentiment, framing, and LLM disclosure shape perceptions. In *Proceedings of the 2026 CHI Conference on Human Factors in Computing Systems* (pp. 1–25). Association for Computing Machinery. https://doi.org/10.1145/3772318.3791527
- Kirk, C. P., & Givi, J. (2025). The AI-authorship effect: Understanding authenticity, moral disgust, and consumer responses to AI-generated marketing communications. *Journal of Business Research, 186*, 114984. https://doi.org/10.1016/j.jbusres.2024.114984
- Kirkby, A., Baumgarth, C., & Henseler, J. (2023). To disclose or not disclose, is no longer the question—Effect of AI-disclosed brand voice on brand authenticity and attitude. *Journal of Product & Brand Management, 32*(7), 1108–1122. https://doi.org/10.1108/JPBM-02-2022-3864
- Kirstain, Y., Polyak, A., Singer, U., Matiana, S., Penna, J., & Levy, O. (2023). Pick-a-Pic: An open dataset of user preferences for text-to-image generation. In *Advances in Neural Information Processing Systems, 36*. https://doi.org/10.52202/075280-1594
- Ko, H.-K., Park, G., Jeon, H., Jo, J., Kim, J., & Seo, J. (2023). Large-scale text-to-image generation models for visual artists’ creative works. In *Proceedings of the 28th International Conference on Intelligent User Interfaces* (pp. 919–933). Association for Computing Machinery. https://doi.org/10.1145/3581641.3584078
- Koning, B., & Voorveld, H. A. M. (2025). Disclaimer! This content is AI-generated: How AI-disclosures influence trust in advertisements and organizations. *Journal of Interactive Advertising, 25*(3), 240–253. https://doi.org/10.1080/15252019.2025.2554149
- Lee, T., Yasunaga, M., Meng, C., Mai, Y., Park, J. S., Gupta, A., Zhang, Y., Narayanan, D., Teufel, H., Bellagente, M., Kang, M., Park, T., Leskovec, J., Zhu, J.-Y., Li, F.-F., Wu, J., Ermon, S., & Liang, P. (2023). Holistic evaluation of text-to-image models. In *Advances in Neural Information Processing Systems, 36*. https://proceedings.neurips.cc/paper_files/paper/2023/hash/dd83eada2c3c74db3c7fe1c087513756-Abstract-Datasets_and_Benchmarks.html
- Liu, V., & Chilton, L. B. (2022). Design guidelines for prompt engineering text-to-image generative models. In *Proceedings of the 2022 CHI Conference on Human Factors in Computing Systems* (Article 384, pp. 1–23). Association for Computing Machinery. https://doi.org/10.1145/3491102.3501825
- Liu, V., Qiao, H., & Chilton, L. (2022). Opal: Multimodal image generation for news illustration. In *Proceedings of the 35th Annual ACM Symposium on User Interface Software and Technology* (pp. 1–17). Association for Computing Machinery. https://doi.org/10.1145/3526113.3545621
- Longoni, C., & Cian, L. (2022). Artificial intelligence in utilitarian vs. hedonic contexts: The “word-of-machine” effect. *Journal of Marketing, 86*(1), 91–108. https://doi.org/10.1177/0022242920957347
- McQuarrie, E. F., & Mick, D. G. (1999). Visual rhetoric in advertising: Text-interpretive, experimental, and reader-response analyses. *Journal of Consumer Research, 26*(1), 37–54. https://doi.org/10.1086/209549
- McQuarrie, E. F., & Phillips, B. J. (2005). Indirect persuasion in advertising: How consumers process metaphors presented in pictures and words. *Journal of Advertising, 34*(2), 7–20. https://doi.org/10.1080/00913367.2005.10639188
- Millet, K., Buehler, F., Du, G., & Kokkoris, M. D. (2023). Defending humankind: Anthropocentric bias in the appreciation of AI art. *Computers in Human Behavior, 143*, 107707. https://doi.org/10.1016/j.chb.2023.107707
- Mohanty, P., & Ratneshwar, S. (2015). Did you get it? Factors influencing subjective comprehension of visual metaphors in advertising. *Journal of Advertising, 44*(3), 232–242. https://doi.org/10.1080/00913367.2014.967424
- Nightingale, S. J., & Farid, H. (2022). AI-synthesized faces are indistinguishable from real faces and more trustworthy. *Proceedings of the National Academy of Sciences, 119*(8), e2120481119. https://doi.org/10.1073/pnas.2120481119
- Oppenlaender, J. (2024). A taxonomy of prompt modifiers for text-to-image generation. *Behaviour & Information Technology, 43*(15), 3763–3776. https://doi.org/10.1080/0144929X.2023.2286532
- Oppenlaender, J., Linder, R., & Silvennoinen, J. (2025). Prompting AI art: An investigation into the creative skill of prompt engineering. *International Journal of Human–Computer Interaction, 41*(16), 10207–10229. https://doi.org/10.1080/10447318.2024.2431761
- Otani, M., Togashi, R., Sawai, Y., Ishigami, R., Nakashima, Y., Rahtu, E., Heikkilä, J., & Satoh, S. (2023). Toward verifiable and reproducible human evaluation for text-to-image generation. In *Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition* (pp. 14277–14286). https://doi.org/10.1109/CVPR52729.2023.01372
- Park, C. W., Jaworski, B. J., & MacInnis, D. J. (1986). Strategic brand concept-image management. *Journal of Marketing, 50*(4), 135–145. https://doi.org/10.1177/002224298605000401
- Park, H., Eirich, J., Luckow, A., & Sedlmair, M. (2024). “We are visual thinkers, not verbal thinkers!”: A thematic analysis of how professional designers use generative AI image generation tools. In *Proceedings of the 13th Nordic Conference on Human-Computer Interaction* (Article 35, pp. 1–14). Association for Computing Machinery. https://doi.org/10.1145/3679318.3685370
- Pawelczyk, F., Dimmery, D., & Yan, P. (2026). Implied authenticity effect? The impact of explicit labels on AI-generated content. *Proceedings of the International AAAI Conference on Web and Social Media, 20*(1), 1738–1766. https://doi.org/10.1609/icwsm.v20i1.42721
- Petridis, S., & Chilton, L. B. (2019). Human errors in interpreting visual metaphor. In *Proceedings of the 2019 Conference on Creativity and Cognition* (pp. 187–197). Association for Computing Machinery. https://doi.org/10.1145/3325480.3325503
- Phillips, B. J. (2000). The impact of verbal anchoring on consumer response to image ads. *Journal of Advertising, 29*(1), 15–24. https://doi.org/10.1080/00913367.2000.10673600
- Phillips, B. J., & McQuarrie, E. F. (2004). Beyond visual metaphor: A new typology of visual rhetoric in advertising. *Marketing Theory, 4*(1–2), 113–136. https://doi.org/10.1177/1470593104044089
- Ragot, M., Martin, N., & Cojean, S. (2020). AI-generated vs. human artworks: A perception bias towards artificial intelligence? In *Extended Abstracts of the 2020 CHI Conference on Human Factors in Computing Systems* (pp. 1–10). Association for Computing Machinery. https://doi.org/10.1145/3334480.3382892
- Scott, L. M. (1994). Images in advertising: The need for a theory of visual rhetoric. *Journal of Consumer Research, 21*(2), 252–273. https://doi.org/10.1086/209396
- Scott, L. M., & Vargas, P. (2007). Writing with pictures: Toward a unifying theory of consumer response to images. *Journal of Consumer Research, 34*(3), 341–356. https://doi.org/10.1086/519145
- Shi, Y., & Jiang, Z. (2026). Consumer responses to AI disclosure labels: The role of novelty and authenticity. *SAGE Open, 16*(1). https://doi.org/10.1177/21582440261417793
- Torricelli, M., Martino, M., Baronchelli, A., & Aiello, L. M. (2024). The role of interface design on prompt-mediated creativity in generative AI. In *Proceedings of the ACM Web Science Conference* (pp. 235–240). Association for Computing Machinery. https://doi.org/10.1145/3614419.3644000
- Trattner, C., Forstner, S. L., Starke, A. D., & Knudsen, E. (2026). C2PA provenance labels increase trust in digital news platforms across Western countries. *Proceedings of the International AAAI Conference on Web and Social Media, 20*(1), 2267–2279. https://doi.org/10.1609/icwsm.v20i1.42749
- Voss, K. E., Spangenberg, E. R., & Grohmann, B. (2003). Measuring the hedonic and utilitarian dimensions of consumer attitude. *Journal of Marketing Research, 40*(3), 310–320. https://doi.org/10.1509/jmkr.40.3.310.19238
- Wu, L., Dodoo, N. A., & Wen, T. J. (2025). Disclosing AI’s involvement in advertising to consumers: A task-dependent perspective. *Journal of Advertising, 54*(1), 20–38. https://doi.org/10.1080/00913367.2024.2309929
- Xu, J., Liu, X., Wu, Y., Tong, Y., Li, Q., Ding, M., Tang, J., & Dong, Y. (2023). ImageReward: Learning and evaluating human preferences for text-to-image generation. In *Advances in Neural Information Processing Systems, 36*. https://doi.org/10.52202/075280-0700
- Zhang, Z., Kou, T., Wang, S., Li, C., Sun, W., Wang, W., Li, X., Wang, Z., Cao, X., Min, X., Liu, X., & Zhai, G. (2025). Q-Eval-100K: Evaluating visual quality and alignment level for text-to-vision content. In *Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition* (pp. 10621–10631). https://openaccess.thecvf.com/content/CVPR2025/html/Zhang_Q-Eval-100K_Evaluating_Visual_Quality_and_Alignment_Level_for_Text-to-Vision_Content_CVPR_2025_paper.html
