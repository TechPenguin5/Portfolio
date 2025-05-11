$(document).ready(function() {
    $("#menu").click(function(){
        $(".nav").fadeToggle(300);
        var clicks = $(this).data('clicks');
          if (clicks) {
             $('.main').css("filter","blur(0px)");
             $('.status').css("filter","blur(0px)");
             $("#menu").css("display","block");
             $("#close-menu").css("display","none");
             $(".nav").fadeOut(300);
             $("html").css("overflow","hidden");

          } else {
             $('.main').css("filter","blur(50px)");
             $('.status').css("filter","blur(50px)");
             $("#menu").css("display","none");
             $("#close-menu").css("display","block");
             $("html").css("overscroll","hidden");
          }
          $(this).data("clicks", !clicks);
    });
    
    $("#close-menu").click(function(){
        $(".nav").fadeOut;
        var clicks = $(this).data('clicks');
          if (clicks) {
             $('.main').css("filter","blur(50px)");
             $('.status').css("filter","blur(50px)");
             $("#menu").css("display","none");
             $("#close-menu").css("display","block");
             $("html").css("overscroll","hidden");
          } else {
             $('.main').css("filter","blur(0px)");
             $('.status').css("filter","blur(0px)");
             $("#menu").css("display","block");
             $("#close-menu").css("display","none");
             $(".nav").fadeOut(300);
             $("html").css("overflow","hidden");
          }
          $(this).data("clicks", !clicks);
    });
    
    $(".card-link").click(function(){
        $(".card-details").slideToggle(300);
        var clicks = $(this).data('clicks');
            if (clicks) {
                 $('body').css("overflow-y","hidden");
                 $('.card-details-contents').css("overflow-y","auto");
              } else {
                 $('body').css("overflow-y","hidden");
                 $('.card-details-contents').css("overflow-y","auto");
              }
          $(this).data("clicks", !clicks);
    });
    
    $("#card-details-close").click(function(){
        $(".card-details").slideToggle(300);
        var clicks = $(this).data('clicks');
           if (clicks) {
                 $('body').css("overflow-y","auto");
              } else {
                 $('body').css("overflow-y","auto");
              }
          $(this).data("clicks", !clicks);
    });
});