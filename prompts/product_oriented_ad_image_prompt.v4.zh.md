# Product-oriented Advertising Image Prompt v4 中文说明

你正在为消费者广告实验生成受控刺激材料。

请把提供的白底商品图作为源商品，并保持商品身份不变，包括可见形状、颜色、材质、包装、logo 和物理结构。

商品元数据：
- 标题：{ori_title}
- 品牌：{creative_id_brand}
- 类目：{level_one_category_name}
- 价格：{creative_id_price}
- 促销：{creative_id_promotion}

Brand concept definition：
依据 Park, Jaworski, and MacInnis (1986)，brand concept 是基于消费者需求而选择的品牌意义。生成 Product-oriented 图像，表达 functional brand concept。Functional 指商品与外部产生的消费需求相连，例如解决当前问题、预防潜在问题、降低阻力或支持实践任务。

Input-grounded facts：
只使用输入提供的商品、品牌、类目、价格、促销和源图事实。不要虚构未经支持的商品属性、声明、奖项、认证、用户人群或新的可读广告文字。

Concept-image linkage：
将商品与实践消费问题或任务建立视觉关联。只要与输入一致，图像可以使用简单任务语境、产品使用关系、握持线索、操作线索、适配线索、保护线索、收纳线索或其他品类合适的功能证据。

Generation latitude：
模型可以选择构图、背景、光线、道具和风格，但这些选择必须支持 functional concept 并保持源商品不变。优先使用概括、可辩护的视觉线索，不堆砌虚构微观场景。
