(function ($)
  { "use strict"
  





/* 1. Proloder */
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });

/* 2. sticky And Scroll UP */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 400) {
        $(".header-sticky").removeClass("sticky-bar");
        $('#back-top').fadeOut(500);
      } else {
        $(".header-sticky").addClass("sticky-bar");
        $('#back-top').fadeIn(500);
      }
    });

  // Scroll Up
    $('#back-top a').on("click", function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });
  

/* 3. slick Nav */
// mobile_menu
    var menu = $('ul#navigation');
    if(menu.length){
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: '+',
        openedSymbol:'-'
      });
    };

/* 4. MainSlider-1 */
    // h1-hero-active
    $('.slider-full-active').owlCarousel({
      loop:true,
      margin:0,
    items:1,
      navText: ['<i class="icofont icofont-long-arrow-left"></i>', '<i class="icofont icofont-long-arrow-right"></i>'],
      nav:false,
    dots:true,
      responsive:{
          0:{
              items:1,
              dots: false
          },
          767:{
              items:1
          },
          992:{
              items:1
          }
      }
    })

        var dot = $('.slider-active .owl-dot , .slider-full-active .owl-dot');
        dot.each(function() {
          var index = $(this).index() + 1;
          if(index < 10){
            $(this).html('0').append(index);
          }else{
            $(this).html(index);
          }
      });



/* 6. Nice Selectorp  */
  var nice_Select = $('select');
    if(nice_Select.length){
      nice_Select.niceSelect();
    }

/* 7. data-background */
    $("[data-background]").each(function () {
      $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
      });


/* 10. WOW active */
    new WOW().init();

// 11. ---- Mailchimp js --------//  
    function mailChimp() {
      $('#mc_embed_signup').find('form').ajaxChimp();
    }
    mailChimp();


//17. hamburger Menu
    $('.hamburger').on('click', function() {
      $(this).toggleClass('is-active');
      $(this).next().toggleClass('nav-menu-show')
    });




})(jQuery);
