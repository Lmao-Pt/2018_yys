# 2018yys
阴阳师官网</br>
第一部分： header  预览图如下 </br>
![image](https://github.com/Lmao-Pt/2018yys/blob/master/review.png) </br>
实现要点： </br>1、顶部导航栏h_nav 分为左右两部分（二维码，logo + 顶部导航）当右侧滚动条移动时，h_nav固定显示在屏幕顶端用到定位fixed。滚动条处于最顶端时 h_nav随页面缩小缩放 不能使用fixed 应改为absolute定位 实现：通过jQuery scrollTop方法 判断并区分两种状态下的h_nav ------给不同状态下的h_nav添加不同的ClassName  并在css样式中改变其定位方式。</br></br>
2、二级导航栏的淡入淡出效果  使用jQuery  .hover()方法 选定二级导航栏 为其添加 .stop().slideDown()/.slideUp() 方法</br>
![image](https://github.com/Lmao-Pt/2018yys/blob/master/review3.png)</br></br>
3、banner 按下按钮后两角色交替出现   通过设置role的opacity以及绝对定位的left值 产生从初始量 透明/不透明  left值较大/较小 变化成结束时的状态，形成一种淡入淡出的效果。 jQuery获取元素  设置了if else的判断语句 并定义了一个全局变量count=0  根据count的奇偶来决定点击button时两组role的交替变化</br>
![image](https://github.com/Lmao-Pt/2018yys/blob/master/review2.png) </br></br>
4、左上方阴阳师三个汉字的logo  ： scroll一旦下移便消失   同样通过scrollTop来判断何时发生变化 下移时给logo添加新的ClassName 并通过css操控其opacity以及scale（）缩放程度 实现滚动条一旦下移logo就消失的效果  通过transition 控制变化时的属性  产生类似的动画效果
