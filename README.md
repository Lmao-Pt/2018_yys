# 2018yys
阴阳师官网</br>
第一部分： header  预览图如下 </br>
![image](https://github.com/Lmao-Pt/2018yys/blob/master/review.png) </br>
实现要点： 1、顶部导航栏h_nav 分为左右两部分（二维码，logo + 顶部导航）当右侧滚动条移动时，h_nav固定显示在屏幕顶端用到定位fixed</br>
滚动条处于最顶端时 h_nav随页面缩小缩放 不能使用fixed 应改为absolute定位。     实现：通过jQuery scrollTop方法 判断并区分两种状态下的h_nav

