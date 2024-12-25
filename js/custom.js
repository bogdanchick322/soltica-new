(function($) {
  $.fn.menumaker = function(options) {
    var cssmenu = $(this), settings = $.extend({
      format: "dropdown",
      sticky: false
    }, options);
    return this.each(function() {
      $(this).find(".button").on('click', function(){
        $(this).toggleClass('menu-opened');
        var mainmenu = $(this).next('ul');
        if (mainmenu.hasClass('open')) {
          mainmenu.slideToggle().removeClass('open');
        }
        else {
          mainmenu.slideToggle().addClass('open');
          if (settings.format === "dropdown") {
            mainmenu.find('ul').show();
          }
        }
      });
      cssmenu.find('li ul').parent().addClass('has-sub');
      multiTg = function() {
        cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
        cssmenu.find('.submenu-button').on('click', function() {
          $(this).toggleClass('submenu-opened');
          if ($(this).siblings('ul').hasClass('open')) {
            $(this).siblings('ul').removeClass('open').slideToggle();
          }
          else {
            $(this).siblings('ul').addClass('open').slideToggle();
          }
        });
      };
      if (settings.format === 'multitoggle') multiTg();
      else cssmenu.addClass('dropdown');
      if (settings.sticky === true) cssmenu.css('position', 'fixed');
      resizeFix = function() {
        var mediasize = 1000;
        if ($( window ).width() > mediasize) {
          cssmenu.find('ul').show();
        }
        if ($(window).width() <= mediasize) {
          cssmenu.find('ul').hide().removeClass('open');
        }
      };
      resizeFix();
      return $(window).on('resize', resizeFix);
    });
  };
})(jQuery);

(function($){
  $(document).ready(function(){
    $("#cssmenu").menumaker({
      format: "multitoggle"
    });
  });
})(jQuery);

$(document).ready(function() {


  var scrollTop = $(".scrollTop");

  $(window).scroll(function () {
    // declare variable
    var topPos = $(this).scrollTop();

    // if user scrolls down - show scroll to top button
    if (topPos > 100) {
      $(scrollTop).css("opacity", "1");

    } else {
      $(scrollTop).css("opacity", "0");
    }

  }); // scroll END

//Click event to scroll to top
  $(scrollTop).click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 800);
    return false;

  }); // click() scroll top EMD

});


  $(document).ready(function(){
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
});


$(function () {

  var mySwiper = new Swiper('.hero-slider .swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

    // If we need pagination
    pagination: '.swiper-pagination',

  });
});

$(function(){

  var swiper = new Swiper('.carousel-section .swiper-container', {
    effect: 'slide',
    navigation: {
      nextEl: ".carousel-section .button-next",
      prevEl: ".carousel-section .button-prev",
    },
    breakpoints: {
      420: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      },
    },
    loop: true,
    slidesPerView: 4,
    spaceBetween: 20,
    simulateTouch: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });
});

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));



$( '.js-input' ).keyup(function() {
  if( $(this).val() ) {
    $(this).addClass('not-empty');
  } else {
    $(this).removeClass('not-empty');
  }
});



