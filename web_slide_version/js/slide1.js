$(function(){
    var $points = $('.points'),
    $prev = $('.prev'),
    $next = $('.next'),
    $li = $('.slide_list li');
    var iLen = $li.length;
    var iPrev = 0;
    var iNow = 0;
    var bIsmove = false;

    $li.not(':first').css({'left':760});
    for(i=0;i<iLen;i++){
        var $pLi = $('<li>');
        $points.append($pLi);
        if(i==0){
            $pLi.addClass('active').siblings().removeClass('active');
        }
    }
    // $points.show();
    
    $points.children().click(function(){
        iNow = $(this).index();
        fnMove();
        $(this).addClass('active').siblings().removeClass('active');
        
    })
    
    function fnMove(){
        if(iNow<0){
            iNow = iLen-1;
            iPrev = 0;
            $li.eq(iPrev).animate({'left':760}).siblings().css({'left':-760});
            $li.eq(iNow).animate({'left':0},function(){
                bIsmove = false;
            });
            iPrev = iNow;
            return;
        }
        if(iNow>iLen-1){
            iNow = 0;
            iPrev = iLen -1;
            $li.eq(iPrev).animate({'left':-760}).siblings().css({'left':760});
            $li.eq(iNow).animate({'left':0},function(){
                bIsmove = false;
            });
            iPrev = iNow;
            return;
        }

        if(iNow>iPrev){
            $li.eq(iPrev).animate({'left':-760}).siblings().css({'left':760});
            $li.eq(iNow).animate({'left':0},function(){
                bIsmove = false;
            });
            iPrev = iNow;
        }
        if(iNow<iPrev){
            $li.eq(iPrev).animate({'left':760}).siblings().css({'left':-760});
            $li.eq(iNow).animate({'left':0},function(){
                bIsmove = false;
            });
            iPrev = iNow;
        }
        if(iNow==iPrev){
            return;
        }
      
    }

    $prev.click(function(){
        if(bIsmove){
         return;   
        }
        bIsmove = true;
        iNow--;
        fnMove();
        $points.children().eq(iNow).addClass('active').siblings().removeClass('active');
    })
    
    $next.click(function(){
        if(bIsmove){
            return;   
           }
        bIsmove = true;
        iNow++;
        fnMove();
        $points.children().eq(iNow).addClass('active').siblings().removeClass('active');
    })
    // 设置定时器
    var oTimer = setInterval(fnAutomove,4000);
    function fnAutomove(){
        iNow++;
        fnMove();
        $points.children().eq(iNow).addClass('active').siblings().removeClass('active');
    }
    $li.mouseenter(function(){
        clearInterval(oTimer);
    })
    $li.mouseleave(function(){
    oTimer = setInterval(fnAutomove,4000);
    })
})