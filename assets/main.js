$(document).ready(function() {
    $("#owl1").owlCarousel({
   	items: 1,
   	loop: true,
    autoplay: true,
   	dots: false, 
    smartSpeed: 2000,
    autoplayTimeout: 3000
   });	

   $(".main__block-bars").fancybox();
   $(".main__block-search").fancybox();
   $(".section__hidden-bars").fancybox();
   $(".section__hidden-search").fancybox();

   $(".top").on("click", function(e) {
            e.preventDefault();
            $("html, body").animate({scrollTop: 0}, 500);
   });

});