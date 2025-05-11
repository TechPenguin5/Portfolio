$(document).ready(function() {
    $("#menu").click(function(){
        $("aside").slideToggle(700);
    });
    $("aside nav ul li a").click(function(){
        $("aside").slideUp(700);
    });
    
    $('#menu').click(function() {
      var clicks = $(this).data('clicks');
      if (clicks) {
         $('#menu').css("left","10px");
      } else {
        $('#menu').css("left","5px");
      }
      $(this).data("clicks", !clicks);
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > $(window).height()-75){
                $("header").css("position","fixed")
                $("header").css("top","0")
            }else{
                $("header").css("position","absolute")
                $("header").css("bottom","0")
                $("header").css("top","auto")
                $("header li a").css("color","#ffffff")
            }
        });
    
        $(window).scroll(function(){
            if($(window).scrollTop() > $(window).height()/1.5){
                    $("header").css("background","#ffffff")
                    $("header li a").css("color","#000000")
                    $("header").css("border-bottom","1px solid #bebebe")
                    $("header").css("box-shadow","2px 0 2px #eeeeee")
            }else{
                    $("header").css("background","transparent")
                    $("header").css("box-shadow","none")
                    $("header").css("border-bottom","0px solid #eeeeee")
            }
        });
    });

$(document).ready(function() {
if (window.matchMedia('(min-width: 900.001px)').matches) {
    var myFunctionMin = $(function() {
 		$('a[href*=#]:not([href=#])').click(function() {
			    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			      var target = $(this.hash);
			      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
			        $('html,body').animate({
			          scrollTop: target.offset().top - 75
			        }, 1000);
			        return false;
			      }
                }
		      });
            });
            }
    
    if (window.matchMedia('(max-width: 900.001px)').matches) {
    var myFunctionMax = $(function() {
 		$('a[href*=#]:not([href=#])').click(function() {
			    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			      var target = $(this.hash);
			      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
			        $('html,body').animate({
			          scrollTop: target.offset().top - -1
			        }, 1000);
			        return false;
			      }
                }
		      });
            });
            }
});