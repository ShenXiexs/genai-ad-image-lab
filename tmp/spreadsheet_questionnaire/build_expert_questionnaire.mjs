import fs from "node:fs/promises";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const outputDir = "/Users/samxie/Research/YoYoRecomSys_GenPic/Research_Proj/Psy/genai-ad-image-research/outputs/019fec98-cafc-7c41-8816-14b56e581dfc";
const outputPath = `${outputDir}/expert_review_questionnaire_bilingual.xlsx`;
const previewPath = `${outputDir}/expert_review_questionnaire_bilingual.png`;

const chiPath = "/Users/samxie/Research/YoYoRecomSys_GenPic/Research_Proj/Psy/genai-ad-image-research/local_only/paper/When AI Rewrites the News How Sentiment, Framing, and LLM Disclosure Shape Perceptions.pdf";

const rows = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  ["专家评审问卷变量与题项总表（中英文）", null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  ["量表规则：H/U采用7点语义差异量表；其余连续题采用1＝完全不同意、7＝完全同意。错误严重度采用1＝非常轻微、7＝非常严重，高分表示问题更严重。除错误严重度外，均统一为高分更好。中英文使用相同题号与变量编码。", null, null, null, null, null],
  [null, null, null, null, null, null],
  ["构念名称与定义", "参考文献", "原始测量 item／manipulation", "Adapted English", "最终中文", "题型、计分与用途"],

  ["Block 1：Blind Presentation and Product-level Classification / 盲呈现与商品属性判断", null, null, null, null, null],
  [
    "P0. Presentation Protocol（呈现规则）：每件商品的人工原图与三张AI图组成一个四图组。",
    `Khatiwada et al. (CHI '26), Section 3.2 and Table 1. Local source: ${chiPath}`,
    "Three independent coders evaluated each original article and its transformed versions using a common rubric before selecting the experimental material.",
    "You will evaluate candidate advertising materials. For each product, four images will be shown simultaneously as Image A, B, C, and D. Please evaluate each image independently based only on what is visible. The image positions do not indicate their source or intended strategy.",
    "您将评价候选广告材料。每件商品会同时呈现图片A、B、C和D。请仅依据图片中可见的信息，独立评价每张图片。图片位置不代表其来源或预定策略。",
    "[图文题] 每件商品重复一次；A/B/C/D位置对专家和商品随机；本阶段不显示Human、AI或F/E/S标签。"
  ],
  [
    "H1. Utilitarian Orientation（实用导向）：商品被认为有效、有帮助、具功能性、必要和实用的程度。",
    "Voss, Spangenberg, & Grohmann (2003). https://doi.org/10.1509/jmkr.40.3.310.19238",
    "Ineffective–Effective; Unhelpful–Helpful; Not functional–Functional; Unnecessary–Necessary; Impractical–Practical.",
    "Regardless of the specific advertising execution, in general, this product is: 1. Ineffective–Effective; 2. Unhelpful–Helpful; 3. Not functional–Functional; 4. Unnecessary–Necessary; 5. Impractical–Practical.",
    "不考虑广告图片的具体呈现，总体而言，该商品：1. 无效—有效；2. 无帮助—有帮助；3. 不具功能性—具功能性；4. 不必要—必要；5. 不实用—实用。",
    "[矩阵量表题] 7点语义差异；U_p＝U1–U5均值；商品层。"
  ],
  [
    "H2. Hedonic Orientation（享乐导向）：商品被认为有趣、令人兴奋、令人愉悦、刺激和令人享受的程度。",
    "Voss, Spangenberg, & Grohmann (2003). https://doi.org/10.1509/jmkr.40.3.310.19238",
    "Not fun–Fun; Dull–Exciting; Not delightful–Delightful; Not thrilling–Thrilling; Unenjoyable–Enjoyable.",
    "Regardless of the specific advertising execution, in general, this product is: 1. Not fun–Fun; 2. Dull–Exciting; 3. Not delightful–Delightful; 4. Not thrilling–Thrilling; 5. Unenjoyable–Enjoyable.",
    "不考虑广告图片的具体呈现，总体而言，该商品：1. 无趣—有趣；2. 乏味—令人兴奋；3. 不令人愉悦—令人愉悦；4. 不刺激—刺激；5. 不令人享受—令人享受。",
    "[矩阵量表题] 7点语义差异；H_p＝H1–H5均值；商品层。"
  ],

  ["Block 2：Blind Per-image Evaluation / 四张图片逐图盲评", null, null, null, null, null],
  [
    "Q1. Visual Quality（视觉质量）：图片的连贯自然、清晰、主体聚焦和广告合理性。",
    `Khatiwada et al. (CHI '26): Fluency and Conciseness; Otani et al. (2023). https://doi.org/10.1109/CVPR52729.2023.01372`,
    "Fluency: grammatically correct, coherent, and natural-sounding. Conciseness: appropriately concise without losing key information or intent. Adapted from text to visual materials.",
    "For each image: Q1. The image is visually coherent and natural. Q2. The image is clear and easy to inspect. Q3. The product is the clear visual focus. Q4. The image is plausible as a real advertisement.",
    "请分别评价每张图片：Q1. 图片在视觉上连贯且自然。Q2. 图片清晰，容易查看。Q3. 商品是图片中明确的视觉主体。Q4. 该图片作为现实中的广告是合理可信的。",
    "[矩阵量表题] A/B/C/D均回答4题；Q_{p,j}＝4题均值；四图均测。"
  ],
  [
    "Q2. Functional Meaning Intensity（功能意义强度）：图片突出功能、表现和问题解决的程度。",
    "Homburg, Schwemmle, & Kuehnl (2015). https://doi.org/10.1509/jm.14.0199",
    "The product is likely to perform well; is capable of doing its job; seems functional.",
    "For each image: F1. This image emphasizes the product’s practical functions and performance. F2. This image shows how the product can solve a practical problem or help complete a task. F3. This image presents the product as useful and effective.",
    "请分别评价每张图片：F1. 这张图片突出该商品的实际功能和性能。F2. 这张图片展示该商品如何解决实际问题或帮助完成任务。F3. 这张图片将该商品呈现为有用且有效的。",
    "[矩阵量表题] A/B/C/D均回答3题；F_{p,j}＝F1–F3均值；人工原图不预设正确类别。"
  ],
  [
    "Q3. Experiential Meaning Intensity（体验意义强度）：图片突出感官、情绪和使用体验想象的程度。",
    "Park, Jaworski, & MacInnis (1986). https://doi.org/10.1177/002224298605000401; Brakus, Schmitt, & Zarantonello (2009). https://doi.org/10.1509/jmkg.73.3.052",
    "The brand makes a strong sensory impression; is interesting in a sensory way; appeals to the senses. Adapted to image-level experience cues.",
    "For each image: E1. This image makes the experience of using or consuming the product seem appealing. E2. This image makes it easy to imagine what using or consuming the product would feel like. E3. The product as presented in this image seems sensorially and emotionally engaging.",
    "请分别评价每张图片：E1. 这张图片使使用或消费该商品的体验显得具有吸引力。E2. 这张图片使人容易想象使用或消费该商品时的感受。E3. 这张图片所呈现的商品在感官和情绪上具有吸引力。",
    "[矩阵量表题] A/B/C/D均回答3题；E_{p,j}＝E1–E3均值；人工原图不预设正确类别。"
  ],
  [
    "Q4. Symbolic Meaning Intensity（象征意义强度）：图片突出身份、地位、群体和生活方式意义的程度。",
    "Park, Jaworski, & MacInnis (1986). https://doi.org/10.1177/002224298605000401; Homburg et al. (2015). https://doi.org/10.1509/jm.14.0199",
    "The product helps establish a distinctive image, distinguish oneself from others, and symbolize achievement. Adapted to image-level symbolic cues.",
    "For each image: S1. This image presents the product as a way to express the user’s identity or personality. S2. This image presents the product as communicating status or a social role. S3. This image presents the product as signaling group membership or a particular lifestyle.",
    "请分别评价每张图片：S1. 这张图片将该商品呈现为表达使用者身份或个性的方式。S2. 这张图片将该商品呈现为能够传达地位或社会角色。S3. 这张图片将该商品呈现为能够体现群体归属或特定生活方式。",
    "[矩阵量表题] A/B/C/D均回答3题；S_{p,j}＝S1–S3均值；人工原图不预设正确类别。"
  ],
  [
    "Q5. Perceived Source（感知来源，可选诊断）：专家在揭示来源前判断人工原图。",
    "Study-specific diagnostic; not a validated scale.",
    "N/A.",
    "Which image do you think was produced through a human advertising-production process? A. Image A; B. Image B; C. Image C; D. Image D. How confident are you in this judgment? 1 = Not at all confident; 7 = Extremely confident.",
    "您认为哪张图片是通过人工广告制作流程完成的？A. 图片A；B. 图片B；C. 图片C；D. 图片D。您对该判断有多大把握？1＝完全没有把握；7＝非常有把握。",
    "[单选题]+[量表题] 仅诊断来源线索；不作为排除专家或图片的单独依据。答完后揭示Human与AI来源。"
  ],

  ["Block 3：AI-strategy Accuracy and Content Integrity / AI策略准确性与内容完整性", null, null, null, null, null],
  [
    "A1. Forced One-to-one Strategy Matching（强制一一匹配）：三张AI图能否被恢复为预定F/E/S策略。",
    "Perdue & Summers (1986). https://doi.org/10.1177/002224378602300401; study-specific matching task.",
    "Manipulation checks should assess whether the intended construct changed and whether confounding constructs were also affected.",
    "Assign each of the three AI images to one intended strategy. Use each strategy exactly once: Functional—emphasizes practical function, performance, or problem solving; Experiential—emphasizes sensory, emotional, or usage experience; Symbolic—emphasizes identity, status, group, or lifestyle meaning.",
    "请将三张AI图片分别匹配到一个预定策略，每种策略只能使用一次：Functional（功能型）—突出实际功能、性能或问题解决；Experiential（体验型）—突出感官、情绪或使用体验；Symbolic（象征型）—突出身份、地位、群体或生活方式意义。",
    "[矩阵下拉题] 三行＝三张AI图；选项＝F/E/S；必须强制一一对应。计算逐策略匹配率和整组全匹配率。"
  ],
  [
    "A2. Pairwise Strategy Separability（三策略两两区分度）：三张AI图的主导传播意义能否彼此区分。",
    "Chester & Lasko (2021). https://doi.org/10.1177/1745691620950684; Perdue & Summers (1986). https://doi.org/10.1177/002224378602300401",
    "Manipulation validation should assess the target construct and theoretically related non-target constructs to detect lack of specificity.",
    "Rate each displayed pair: P1. The two AI images are easy to distinguish in their dominant communicative meaning. Repeat for AI pair 1–2, pair 1–3, and pair 2–3.",
    "请评价每一组并排呈现的AI图片：P1. 这两张AI图片在主导传播意义上容易区分。分别评价AI图片1–2、1–3和2–3。",
    "[矩阵量表题] 三组配对各1题；后台映射为F–E、F–S、E–S；报告三项均值及最小值。"
  ],
  [
    "A3. Product Identity Faithfulness（商品身份保真）：AI图是否保持人工原图中的商品身份和关键属性。",
    `Khatiwada et al. (CHI '26): Faithfulness to Content; TIFA (Hu et al., 2023). https://openaccess.thecvf.com/content/ICCV2023/html/Hu_TIFA_Accurate_and_Interpretable_Text-to-Image_Faithfulness_Evaluation_with_Question_Answering_ICCV_2023_paper.html`,
    "The transformed material preserves the original content; image faithfulness should separately inspect objects and attributes.",
    "Compared with the human-produced original advertisement, for each AI image: ID1. It shows the same product category and identity. ID2. The overall shape and key components are preserved. ID3. The materials and textures are consistent. ID4. The main colors and visual attributes are consistent. ID5. It does not add a function or product feature that is absent from the original product.",
    "与人工制作的原始广告图相比，请分别评价每张AI图片：ID1. 呈现的是相同的商品类别和商品身份。ID2. 商品整体外形和关键部件得到保留。ID3. 商品材质和纹理保持一致。ID4. 商品主要颜色和视觉属性保持一致。ID5. 图片没有增加原商品并不存在的功能或特征。",
    "[矩阵量表题] 三张AI图各5题；ID_{p,s}＝ID1–ID5均值；硬门槛。"
  ],
  [
    "A4. Unintended Problems（非预期问题类型）：记录生成错误、虚构信息和不对称线索。",
    `Khatiwada et al. (CHI '26): Overt Bias or Misrepresentation; TIFA (Hu et al., 2023).`,
    "Transformation introduces unintended bias, exaggeration, or misleading content. Adapted to image-generation failures.",
    "For each AI image, select all problems present: A. Product identity drift or wrong category; B. Deformed, missing, or extra parts; C. Fabricated function or usage outcome; D. Unintended text, logo, or brand leakage; E. Invented price, award, or endorsement; F. Unsafe or physically implausible use; G. Gender, age, or cultural stereotype; H. Human anatomy error; I. Other; J. None.",
    "请分别检查每张AI图片，并选择所有存在的问题：A. 商品身份漂移或类别错误；B. 部件畸变、缺失或多余；C. 虚构功能或使用结果；D. 非预期文字、Logo或品牌泄漏；E. 虚构价格、奖项或背书；F. 危险或物理上不合理的使用方式；G. 性别、年龄或文化刻板线索；H. 人体结构错误；I. 其他；J. 无上述问题。",
    "[多选题] 三张AI图分别回答；选择“无上述问题”时不得同时选择其他项；记录错误计数和类型。"
  ],
  [
    "A5. Error Severity（错误严重度）：已识别问题对材料有效性的破坏程度。",
    "Study-specific severity follow-up based on the misrepresentation rubric.",
    "N/A—conditional follow-up.",
    "For each problem selected above, how severe is it? 1 = Very minor; 7 = Very severe.",
    "对于上题勾选的每一项问题，其严重程度如何？1＝非常轻微；7＝非常严重。",
    "[矩阵量表题] 仅显示已勾选问题；唯一高分更差的变量；报告每张图最大严重度和关键错误人数。"
  ],

  ["Block 4：Whole-set Evaluation and Revision / 四图组整体评价与修订", null, null, null, null, null],
  [
    "O1. Overall Effectiveness（整体有效性）：四图组作为正式实验材料的总体适用程度。",
    `Khatiwada et al. (CHI '26): Overall Effectiveness. Local source: ${chiPath}`,
    "In your view, how well does the transformation achieve the desired communicative goal? Open-ended in the source rubric; supplemented here with a 7-point rating.",
    "Overall, this four-image set is suitable for use as a coherent set of experimental advertising materials.",
    "总体而言，这个四图组适合作为一套完整的实验广告材料使用。",
    "[量表题] 1–7；诊断与并列裁决依据，不替代分项门槛。"
  ],
  [
    "O2. Weakest Image（最弱图片）：识别四图组中最需要修订的图片。",
    "Adapted from the CHI study’s quantitative-plus-qualitative material selection procedure.",
    "N/A—study-specific forced choice.",
    "Which image is the weakest member of this four-image set? A. Human-produced original; B. AI image 1; C. AI image 2; D. AI image 3; E. None—all four are acceptable.",
    "这组材料中最弱的是哪张图片？A. 人工制作的原始广告图；B. AI图片1；C. AI图片2；D. AI图片3；E. 没有—四张图均可接受。",
    "[单选题] 统计各图被选为最弱的比例。"
  ],
  [
    "O3. Open Diagnosis（开放诊断）：解释失败原因和修订建议。",
    `Khatiwada et al. (CHI '26): open-ended Overall Effectiveness feedback.`,
    "Open-ended reviewer explanation was used alongside quantitative ratings.",
    "Please explain why the selected image is weakest. Identify the main problem and the smallest revision that would make the set acceptable.",
    "请说明所选图片最弱的原因，指出最主要的问题，以及使该材料组达到可接受标准所需的最小修改。",
    "[填空题] 必答；用于裁决和定向重生，不计入总分。"
  ],
  [
    "O4. Revision Action（修订动作）：判断应局部重生还是替换完整材料。",
    "Study-specific decision item.",
    "N/A.",
    "What action do you recommend? A. Accept the complete set; B. Regenerate one specified AI image; C. Replace the human-produced original; D. Replace the entire product and image set; E. Other.",
    "您建议采取什么处理？A. 接受完整四图组；B. 重新生成指定的一张AI图片；C. 更换人工制作的原始广告图；D. 更换整个商品及四图组；E. 其他。",
    "[单选题]+[填空题] 用于确定修订范围。"
  ],

  ["Block 5：Within-cell Ranking and Retention / 四个材料格内排序与保留", null, null, null, null, null],
  [
    "R1. Within-cell Ranking（格内排序）：在同一材料格的3–4个商品四图组中进行完整排序。",
    `Khatiwada et al. (CHI '26) material selection; Otani et al. (2023). https://doi.org/10.1109/CVPR52729.2023.01372`,
    "Independent reviewers jointly informed material selection; image-evaluation protocols should be explicit and reproducible.",
    "Within this material cell, rank all candidate product image sets from most to least suitable for the formal experiment. Do not assign ties.",
    "请将本材料格中的所有候选商品四图组，按照进入正式实验的适合程度从高到低排序，不得并列。",
    "[排序题] 对实用×较高symbolic、实用×较低symbolic、享乐×较高symbolic、享乐×较低symbolic四格分别重复；报告Kendall’s W。"
  ],
  [
    "R2. Recommended Retention（建议保留）：每个材料格至少保留前2名。",
    "Study-specific retention rule.",
    "N/A—pre-registered selection rule.",
    "Which candidate product image sets should be retained from this material cell? Select at least two. If more than two are selected, briefly explain the tie or uncertainty.",
    "您建议本材料格保留哪些候选商品四图组？请至少选择2个。若选择超过2个，请简要说明并列或不确定性的原因。",
    "[多选题]+条件[填空题] 最少选择2项；最终每格至少保留前2名。"
  ],

  ["Block 6：Derived Indices and Reporting / 派生指标与报告规则", null, null, null, null, null],
  [
    "D1. Target-versus-competitor Margin（目标—竞争意义差值）：目标意义相对于最强非目标意义的分离程度。",
    "Mathematical analogy to multiclass margin: Crammer & Singer (2001). https://www.jmlr.org/papers/v2/crammer01a.html",
    "Multiclass margin compares the score of the correct class with the maximum score among competing classes. This is a mathematical analogy, not a validated psychometric scale.",
    "For AI strategy s: M_{p,s} = target-meaning mean − max(the two non-target meaning means). A larger positive value indicates clearer separation from the strongest competing meaning.",
    "对于AI策略s：M_{p,s}＝目标意义均值−两个非目标意义均值中的较大者。更大的正值表示目标意义与最强竞争意义之间的分离更清晰。",
    "派生描述指标；分别报告M_{p,F}、M_{p,E}、M_{p,S}，不能写成既有成熟量表。"
  ],
  [
    "D2. Set-level Separability（整组三策略区分度）：以最弱策略决定四图组的操纵表现。",
    "Non-compensatory/conjunctive decision logic: Einhorn (1970). https://doi.org/10.1037/h0028695",
    "A non-compensatory rule prevents strong performance on one required attribute from offsetting failure on another. The minimum operator is a study-specific conservative aggregation rule.",
    "SEP_p = min(M_{p,F}, M_{p,E}, M_{p,S}). The index prevents two successful AI strategies from masking failure of the third strategy.",
    "SEP_p＝min(M_{p,F}, M_{p,E}, M_{p,S})。该指标避免两张操纵成功的AI图片掩盖第三张策略图片的失败。",
    "派生筛选指标；与三项M、强制匹配率和开放诊断同时报告，不单独决定入选。"
  ],
  [
    "D3. Reliability and Decision Use（信度与决策用途）：区分专家一致性、描述性指标和硬门槛。",
    "McGraw & Wong (1996). https://doi.org/10.1037/1082-989X.1.1.30; Krippendorff (2018); Kendall’s W.",
    "Continuous ratings, categorical matching, and rankings require different agreement statistics.",
    "Report ICC(2,k) with 95% CI for continuous ratings; raw agreement and nominal Krippendorff’s alpha for F/E/S matching; Kendall’s W for within-cell rankings. Selection requires the pre-registered quality, manipulation, faithfulness, and error gates.",
    "连续评分报告ICC(2,k)及95%置信区间；F/E/S匹配报告原始一致率和nominal Krippendorff’s alpha；格内排序报告Kendall’s W。材料入选仍须同时通过预注册的质量、操纵、保真和错误门槛。",
    "分析说明；专家评审用于筛选材料，不能替代目标消费者预试验。"
  ],
];

const workbook = Workbook.create();
const sheet = workbook.worksheets.add("专家评审问卷总表");
sheet.showGridLines = false;
sheet.getRange(`A1:F${rows.length}`).values = rows;

sheet.getRange(`A1:F${rows.length}`).format = {
  font: { typeface: "宋体", fontSize: 11, color: "#000000" },
  verticalAlignment: "top",
  wrapText: true,
};

sheet.getRange("A3:F3").format = {
  font: { typeface: "宋体", fontSize: 18, bold: true, color: "#000000" },
  rowHeight: 30,
};
sheet.getRange("A7:F7").format = {
  font: { typeface: "宋体", fontSize: 11, color: "#000000" },
  fill: "#FFF2CC",
  rowHeight: 42,
};
sheet.getRange("A9:F9").format = {
  font: { typeface: "宋体", fontSize: 11, bold: true, color: "#000000" },
  horizontalAlignment: "center",
  verticalAlignment: "center",
  wrapText: true,
  borders: { preset: "all", style: "thin", color: "#808080" },
  rowHeight: 32,
};

const blockRows = [10, 14, 20, 26, 31, 34];
for (const row of blockRows) {
  sheet.getRange(`A${row}:F${row}`).format = {
    fill: "#FFFF00",
    font: { typeface: "宋体", fontSize: 11, bold: true, color: "#000000" },
    verticalAlignment: "center",
    wrapText: true,
    rowHeight: 25,
  };
}

const diagnosticRows = [15, 19, 23, 24, 25, 27, 28, 29, 30, 35, 36, 37];
for (const row of diagnosticRows) {
  sheet.getRange(`A${row}:F${row}`).format.fill = "#F2F2F2";
}

for (let row = 11; row <= rows.length; row += 1) {
  if (blockRows.includes(row)) continue;
  sheet.getRange(`A${row}`).format.font = { typeface: "宋体", fontSize: 11, bold: true, color: "#000000" };
}

sheet.getRange(`A10:F${rows.length}`).format.borders = {
  insideHorizontal: { style: "thin", color: "#D9D9D9" },
};

const widths = [38, 31, 46, 58, 58, 38];
for (let col = 0; col < widths.length; col += 1) {
  sheet.getRangeByIndexes(0, col, rows.length, 1).format.columnWidth = widths[col];
}

for (let row = 11; row <= rows.length; row += 1) {
  if (blockRows.includes(row)) continue;
  const maxLength = Math.max(...rows[row - 1].map((v) => (v == null ? 0 : String(v).length)));
  const estimated = Math.min(210, Math.max(68, 42 + Math.ceil(maxLength / 48) * 15));
  sheet.getRange(`A${row}:F${row}`).format.rowHeight = estimated;
}

sheet.freezePanes.freezeRows(9);
sheet.freezePanes.freezeColumns(1);

await fs.mkdir(outputDir, { recursive: true });
const preview = await workbook.render({
  sheetName: "专家评审问卷总表",
  range: `A1:F${rows.length}`,
  scale: 1.35,
  format: "png",
});
await fs.writeFile(previewPath, new Uint8Array(await preview.arrayBuffer()));

const output = await SpreadsheetFile.exportXlsx(workbook);
await output.save(outputPath);

const inspection = await workbook.inspect({
  kind: "table",
  range: `专家评审问卷总表!A7:F${rows.length}`,
  include: "values,formulas",
  tableMaxRows: 50,
  tableMaxCols: 6,
  tableMaxCellChars: 180,
  maxChars: 22000,
});
process.stdout.write(`${inspection.ndjson}\n`);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  summary: "final formula error scan",
});
process.stdout.write(`${errors.ndjson}\n`);
process.stdout.write(`OUTPUT ${outputPath}\nPREVIEW ${previewPath}\nROWS ${rows.length}\n`);
