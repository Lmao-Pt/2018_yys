(function () {
	var $h_nav=$("#h_nav"),
		$h_logo=$(".h_logo"),
        $haveHide = $h_nav.find(".haveHide"),
		$hideDiv=$(".hideDiv"),
        $logo_l= $("#logo_l"),
        $h_btn=$(".button"),
        $r1=$(".r1"),
        $r2=$(".r2"),
        $r3=$(".r3"),
        $r4=$(".r4"),
        $s_btn=$(".s_btn"),
        $slide=$(".slide");
        $slide2=$(".slide2");
	    $s_btn.click(function() {
	        $slide.css({
                left: 372+'px',
                opacity: 1
            }),
            $slide2.css({
                left: -24+'px',
                zIndex: 1
            })
        });
    $slide2.click(function() {
        $slide2.css({
            zIndex: -1
        }),
        $slide.css({
            left: 0,
            opacity: 1

        })
    });
        var count=0;
        $h_btn.click( function() {
            if(count%2==0)
            {$r1.css({
                    left: 220+"px",
                    opacity: 0
                })
                $r2.css({
                    left: 110+"px",
                    opacity: 0
                })

                $r3.css({
                    left: 20+"px",
                    opacity: 1,
                    zIndex: 2
                })
                $r4.css({
                    left: 220+"px",
                    opacity: 1,
                    zIndex: 0
                })
            ++count;
            console.log(count);
            }
            else
            {
                $r1.css({
                    left: 20+"px",
                    opacity: 1
                })
                $r2.css({
                    left: 330+"px",
                    opacity: 1
                })
                $r3.css({
                    left: 220+"px",
                    opacity: 0
                })
                $r4.css({
                    left: 110+"px",
                    opacity: 0
                })
                ++count;
                console.log(count);
            }
        });

    $logo_l.delay(600).queue(function(){
        $(this).css({
            left : 60,
            opacity : 1
        });
    });
    $(window).scroll( navScroll() );
    function navScroll() {
        if ( $(document).scrollTop() ){
            $h_nav.addClass("scroll");
            $h_nav.removeClass("unscroll");
            $h_logo.stop().fadeIn();
            $logo_l.addClass("scale");
            $h_nav.addClass("isFixed")
        }else{
            $h_nav.removeClass("scroll");
            $h_nav.addClass("unscroll");
            $h_logo.stop().fadeOut();
            $logo_l.removeClass("scale");
            $h_nav.removeClass("isFixed")
        }
        return navScroll;
    }
    $haveHide.hover(
        function ()
        {
            $hideDiv.stop().slideDown();
            //$hideDiv.eq($(this).index("#h_nav .main_nav .haveHide")).stop().fadeIn(800);
        },
        function ()
        {
            $hideDiv.stop().slideUp();
            //$hideDiv.eq($(this).index("#h_nav .main_nav .haveHide")).stop().fadeOut(800);
        }
        );
})();
var $bannerUl=$(".bannerUl"),
    $bannerLi=$(".banner_li");
var curIndex = 0, //当前index
    imgLen = $(".bannerUl li").length; //图片总数
console.log(imgLen);
// 定时器自动变换2.5秒每次
var slideIndex = 4;   //记录初始图片的下标( 默认最初展示第四张图片，下标从0开始，所以初始值为3 )
//左边按钮的点击事件
$bannerUl.click(function(){
    // 点击左按钮的时候想要显示当前图片的前一张，所以slideIndex值要减去1
    slideIndex--;
    // animateLength表示想要让slideImageLists移动到什么位置，slideImageLists 的位置由 left属性来控制
    var animateLength = slideIndex * (-360) + "px";
    $bannerUl.animate({"left":animateLength},"slow",function(){
        // animate的回调函数(即执行完动画之后才会执行函数里面的内容)
        if(slideIndex <= 0){
            $(".slideImageLists").css({"left":"-1800px"});
            slideIndex = 5;
        }
    })
});

//新闻banner
var $news_banner=$(".news_li"),
    $move=$(".news");

  $news_banner.mouseenter( function(){
      var step=$(this).index(),
          movement=step*(-250) +"px";
      $move.animate({"left": movement},"normal",function(){
          // animate的回调函数(即执行完动画之后才会执行函数里面的内容)

      })
  });
