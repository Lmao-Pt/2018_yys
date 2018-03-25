(function () {
	var $h_nav=$("#h_nav"),
		$h_logo=$(".h_logo"),
        $haveHide = $h_nav.find(".haveHide"),
		$hideDiv=$(".hideDiv"),
        $logo_l= $("#logo_l");
        $h_btn=$(".button");
        $r1=$(".r1");
        $r2=$(".r2");
        $r3=$(".r3");
        $r4=$(".r4");
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
                    opacity: 1
                })
                $r4.css({
                    left: 330+"px",
                    opacity: 1
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