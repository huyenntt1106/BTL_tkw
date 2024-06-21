$(document).ready(function(){
    $(window).scroll(function(){
        var sticky = $("#header"),
            scroll = $(window).scrollTop();
      
        if (scroll >= 100) {
            sticky.addClass('fixed');
            $(".top-header").addClass('display-none');
        }else {
            sticky.removeClass('fixed');
            $(".top-header").removeClass('display-none');
        }
    });
})