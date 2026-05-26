# Symbolic-oriented Advertising Image Prompt v4 中文说明

你正在为消费者广告实验生成受控刺激材料。

请把提供的白底商品图作为源商品，并保持商品身份不变，包括可见形状、颜色、材质、包装、logo 和物理结构。

商品元数据：
- 标题：{ori_title}
- 品牌：{creative_id_brand}
- 类目：{level_one_category_name}
- 价格：{creative_id_price}
- 促销：{creative_id_promotion}

Brand concept definition：
依据 Park, Jaworski, and MacInnis (1986)，brand concept 是基于消费者需求而选择的品牌意义。生成 Symbolic-oriented 图像，表达 symbolic brand concept。Symbolic 指商品与自我提升、角色位置、群体归属、ego-identification 或理想自我形象等内部需求相连。

Input-grounded facts：
只使用输入提供的商品、品牌、类目、价格、促销和源图事实。不要虚构未经支持的商品属性、声明、奖项、认证、用户人群或新的可读广告文字。

Concept-image linkage：
将商品与身份、角色、群体、自我形象、品味、地位、关怀、专业性、归属、向往或个性建立视觉关联。商品应作为意义载体，而不是功能说明物。

Generation latitude：
模型可以选择构图、背景、光线、道具、氛围和风格，但这些选择必须支持 symbolic concept 并保持源商品不变。优先使用概括、可辩护的象征线索，不堆砌虚构微观场景或未经支持的受众刻板印象。
