$(function() {
  "use strict";

  var nav_offset_top = $('header').height() + 50; 
    /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

	//* Navbar Fixed  
    function navbarFixed(){
        if ( $('.header_area').length ){ 
            $(window).scroll(function() {
                var scroll = $(window).scrollTop();   
                if (scroll >= nav_offset_top ) {
                    $(".header_area").addClass("navbar_fixed");
                } else {
                    $(".header_area").removeClass("navbar_fixed");
                }
            });
        };
    };
    navbarFixed();





  //------- mailchimp --------//  
	function mailChimp() {
		$('#mc_embed_signup').find('form').ajaxChimp();
	}
  mailChimp();






//---------------------------galleryy------------------//


 (function($) {
  
  "use strict";
  
  // Testimonial Carousel
  if ($('.testimonial-carousel').length) {
    $('.testimonial-carousel').owlCarousel({
      animateOut: 'slideOutDown',
        animateIn: 'zoomIn',
      loop:true,
      margin:0,
      nav:true,
      smartSpeed: 300,
      autoplay: 7000,
      navText: [ '<span class="arrow-left"></span>', '<span class="arrow-right"></span>' ],
      responsive:{
        0:{
          items:1
        },
        600:{
          items:1
        },
        800:{
          items:1
        },
        1024:{
          items:1
        }
      }
    });     
  }
  
})(window.jQuery);


  
    

