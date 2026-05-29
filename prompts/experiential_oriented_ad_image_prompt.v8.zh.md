# Experiential-oriented Advertising Image Prompt v8 中文说明

你正在为消费者研究生成一张受控广告图刺激。

使用输入的白底商品图作为 exact source product，保持商品的可见形状、材质、颜色、包装、logo、设计细节和物理结构不变。

商品元数据：
- Title: {ori_title}
- Brand: {creative_id_brand}
- Category: {level_one_category_name}
- Price: {creative_id_price}
- Promotion: {creative_id_promotion}

Brand concept definition：
依据 Park, Jaworski, and MacInnis (1986)，brand concept 是企业选择的、来自基本消费者需求的品牌意义。这里生成 Experiential-oriented 图，表达 experiential brand concept。Experiential 指商品与感官愉悦、多样性或认知刺激等内部需求相连。

最少质量控制：
- 生成一张连贯的广告图。
- 商品必须可识别、视觉上重要，并与源图保持一致。
- 不要新增可读文字、虚假 claims、价格、徽章或未被支持的商品特征。
- 不要扭曲商品、破坏包装或制造不合理物体关系。

Concept-image linkage：
把商品与一个由源图和元数据支持的体验感受视觉化关联起来。构图、背景、光线、人物、道具和场景只有在帮助表达感官愉悦、多样性或认知刺激且不违背已知商品事实时才可调整。功能解释和象征意义应保持次要。
