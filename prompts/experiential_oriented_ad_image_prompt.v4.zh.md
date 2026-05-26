# Experiential-oriented Advertising Image Prompt v4 中文说明

你正在为消费者广告实验生成受控刺激材料。

请把提供的白底商品图作为源商品，并保持商品身份不变，包括可见形状、颜色、材质、包装、logo 和物理结构。

商品元数据：
- 标题：{ori_title}
- 品牌：{creative_id_brand}
- 类目：{level_one_category_name}
- 价格：{creative_id_price}
- 促销：{creative_id_promotion}

Brand concept definition：
依据 Park, Jaworski, and MacInnis (1986)，brand concept 是基于消费者需求而选择的品牌意义。生成 Experiential-oriented 图像，表达 experiential brand concept。Experiential 指商品与感官愉悦、多样性、认知刺激、刺激感、沉浸或被感受到的消费体验等内部需求相连。

Input-grounded facts：
只使用输入提供的商品、品牌、类目、价格、促销和源图事实。不要虚构未经支持的商品属性、声明、奖项、认证、用户人群或新的可读广告文字。

Concept-image linkage：
将商品与被感受到的消费体验建立视觉关联，例如感官愉悦、触感、新鲜感、舒适、放松、玩乐、多样性、发现、沉浸或认知刺激。使用场景只有在表达体验时才有意义，而不是仅仅展示商品在哪里被使用。

Generation latitude：
模型可以选择构图、背景、光线、道具、氛围和风格，但这些选择必须支持 experiential concept 并保持源商品不变。优先使用概括、可辩护的体验线索，不堆砌虚构微观场景。
