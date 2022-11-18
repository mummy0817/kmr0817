$(document).ready(function(){
    // menu
    $(".menu_open").click(function(){
        $("nav").animate({"right":"0"},"normal");
        
    });
    $(".menu_close").click(function(){
        $("nav").animate({"right":"-100%"},"fast");
    });


	$('nav .menu_wrap .menu li').click(function(){
		var thisIndex = $(this).index();
			
		$('nav .menu_wrap .menu li a').removeClass('on');
		$(this).children('a').addClass('on');

		$('nav .category .submenu').hide();
		$('nav .category .submenu').eq(thisIndex).show();
	});


	$('nav .menu_wrap .menu li').first().trigger('click');

	$('nav .category .submenu > ul > li > a').click(function(){

		$(this).next('ul').slideToggle(300);
		/*
		if ($(this).next('ul').css('display') == 'block'){
			$(this).next('ul').slideUp(300);
		}
		else {
			$(this).next('ul').slideDown(300);
		}
		*/
	});

	//totop
    $(window).scroll(function(){
        // 화면높이
        let w_height = $(this).height();
        // 스크롤높이
        let sc_num = $(this).scrollTop();
        if ( sc_num > w_height ){
            $(".totop").fadeIn(400);
        }else{
            $(".totop").fadeOut(400);
        }
    });
	


});