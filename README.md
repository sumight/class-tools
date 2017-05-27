# Class Tools

CSS-UTILS is a css library that offer util classes frequently-used.

## Size

Easily set element width or height use short classes.


ClassName | Example | Range | Description
---------|----------|---------|---------
w-[x] | `.w-100` | [5,10...500]  | 设置元素的宽度为 100px
h-[x] | `.h-100` | [5,10...500]  | 设置元素的高度为 100px
pct-[x] | `.pct-50` | [1,2...99,100]  | 设置元素的宽度为 50%

## Space

Set padding or margin from elements.

ClassName | Example | Range | Description
---------|----------|---------|---------
p-[x] | `.p-10` | [0, 5, ...100]  | `padding: 10px`
pl-[x] | `.pl-10` | [0, 5, ...100]  | `padding-left: 10px`
pr-[x] | `.pr-10` | [0, 5, ...100]  | `padding-right: 10px`
pt-[x] | `.pt-10` | [0, 5, ...100]  | `padding-top: 10px`
pb-[x] | `.pb-10` | [0, 5, ...100]  | `padding-bottom: 10px`
pv-[x] | `.pv-10` | [0, 5, ...100]  | `padding-top:10px;padding-bottom:10px;`
ph-[x] | `.ph-10` | [0, 5, ...100]  | `padding-left:10px;padding-right:10px;`



ClassName | Example | Range | Description
---------|----------|---------|---------
m-[x] | `.m-10` | [0, 5, ...100]  | `margin: 10px`
ml-[x] | `.ml-10` | [0, 5, ...100]  | `margin-left: 10px`
mr-[x] | `.mr-10` | [0, 5, ...100]  | `margin-right: 10px`
mt-[x] | `.mt-10` | [0, 5, ...100]  | `margin-top: 10px`
mb-[x] | `.mb-10` | [0, 5, ...100]  | `margin-bottom: 10px`
mv-[x] | `.mv-10` | [0, 5, ...100]  | `margin-top:10px;margin-bottom:10px;`
mv-auto |  |   | `margin-left: auto;margin-right: auto`
mh-[x] | `.mh-10` | [0, 5, ...100]  | `margin-left:10px;margin-right:10px;`

## Text

The following utils can be used to add additional styles to texts.

ClassName | Description
---------|----------
`.ellipsis`| 文字溢出时沈略
`.nowrap`| 文字不换行
`.lowercase`| 转化为小写字母
`.uppercase`| 转化为大写字母
`.capitalize`| 转化为首字母大写
`.bold`| 文字粗体
`.italic`| 文字斜体
`.tr`| 文字右对齐 ➡️
`.tl`| 文字左对齐 ←
`.tc`| 文字居中对齐
`.vt`| 文字垂直顶部对齐
`.vm`| 文字垂直居中对齐
`.vb`| 文字垂直底部对齐 

## Float

ClassName | Description
---------|----------
`.fr`| float right
`.fl`| float left
`.clearfix`| 添加在容器上清除浮动

# Display

ClassName | Description
---------|----------
`.inline`| display inline
`.block`| display block
`.inline-block`| display inlin-block
`.none`| display none

# Position

ClassName | Description
---------|----------
`.relative`| position relative
`.absolute`| position absolute
`.fixed`| position fixed
`.sticky`| position fixed
`.top`| 附着在顶部
`.bottom`| 附着在底部
`.left`| 附着在左侧
`.right`| 附着在右侧
`.fillin`| 填充整个容器

# Pointer

ClassName | Description
---------|----------
`.pointer`| cursor pointer
`.not-allowed`| cursor not-allowed
`.help`| cursor help

# Visibility

ClassName | Description
---------|----------
`.hidden`| visibility hidden
`.visible`| visibility visible
`.hover-prev-visible`| visible when hover previous sibling
`.hover-parent-visible`| visible when hover parent
`.hover-self-visible`| visible when hover self
`.focus-prev-visible`| visible when focus previous sibling
`.focus-parent-visible`| visible when focus parent
