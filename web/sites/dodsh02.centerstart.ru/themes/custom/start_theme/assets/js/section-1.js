
$ = jQuery.noConflict();

/* accordeon for main-menu */
$(document).ready(function () {

   $('.main-menu li.main-menu__item_collapsed>a').on('click', function(){
       $(this).removeAttr('href');
       let element = $(this).parent('li');
       if (element.hasClass('active')) {
         element.removeClass('active');
         element.find('li').removeClass('active');
         element.find('ul').slideUp();
       }
       else {
         element.addClass('active');
         element.children('ul').slideDown();
         element.siblings('li').children('ul').slideUp();
         element.siblings('li').removeClass('active');
         element.siblings('li').find('li').removeClass('active');
         element.siblings('li').find('ul').slideUp();
       }
     });
});

/* toggle for main-menu */
$(document).ready(function () {

  if ($(window).width() < 1045) {
  
    $('#block-menu-main-menu').on('click', function () {

      $(this).siblings().slideToggle(400);
      $('#block-tretemenyu-menu').siblings().slideToggle(400);
      $(this).toggleClass('active');

    });
  }

});


/* раскрывает главное меню, если открыты страницы */
const slideDown = () => {
  $('.main-menu').children().first().toggleClass('active');
  $('.main-menu .submenu').first().slideDown(0);
}
if (window.location.pathname === '/sveden/education') {
  slideDown();
}
if (window.location.pathname === '/sveden/common') {
  slideDown();
}
if (window.location.pathname ==='/sveden/struct') {
  slideDown();
}
if (window.location.pathname ==='/sveden/document') {
  slideDown();
}
if (window.location.pathname === '/sveden/eduStandarts') {
  slideDown();
}
if (window.location.pathname === '/sveden/employees') {
  slideDown();
}
if (window.location.pathname === '/sveden/objects') {
  slideDown();
}
if (window.location.pathname === '/sveden/grants') {
  slideDown();
}
if (window.location.pathname === '/sveden/paid_edu') {
  slideDown();
}
if (window.location.pathname === '/sveden/budget') {
  slideDown();
}
if (window.location.pathname === '/sveden/vacant') {
  slideDown();
}
if (window.location.pathname === '/sveden/ovz') {
  slideDown();
}
if (window.location.pathname === '/sveden/inter') {
  slideDown();
}






/* slick for banners */
$(document).ready(function () {

  if ($(window).width() > 1045) {
    // если админка, увеличиваем timout 
    if ($('#toolbar-administration').length) { 

      setTimeout(function () {
      
        jQuery('.banners-custom__inner').slick({
          /*       prevArrow: '<button class="slick-prev slick-arrow"></button>',
                nextArrow: '<button class="slick-next slick-arrow"></button>', */
          speed: 500,
          infinite: true,
          centerMode: true,
          autoplay: true,
          autoplaySpeed: 2000,
          vertical: true,
          slidesToShow: 1,
          arrows: false,
          dots: true,
          verticalSwiping: true,
          responsive: [
            {
              breakpoint: 1047,
              settings: "unslick"
            }
          ]
        });
  
          // mousewheel on   // прокрутка мышкой
         let slider = $(".banners-custom__inner");
  
         slider.on('wheel', (function (e) {
          e.preventDefault();
  
         if (e.originalEvent.deltaY < 0) {
           $(this).slick('slickNext');
         } else {
           $(this).slick('slickPrev');
         }
        }));
  
      }, 2000);
    } else {
      setTimeout(function () {
      
        jQuery('.banners-custom__inner').slick({
          /*       prevArrow: '<button class="slick-prev slick-arrow"></button>',
                nextArrow: '<button class="slick-next slick-arrow"></button>', */
          speed: 500,
          infinite: true,
          centerMode: true,
          autoplay: true,
          autoplaySpeed: 2000,
          vertical: true,
          slidesToShow: 1,
          arrows: false,
          dots: true,
          verticalSwiping: true,
          responsive: [
            {
              breakpoint: 1047,
              settings: "unslick"
            }
          ]
        });
  
      }, 500);
    }
  }


  if ($(window).width() < 1045) {
  
    setTimeout(function () {
  
      jQuery('.banners-custom__inner').slick({
        speed: 500,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        arrows: false,
        dots: true,
            responsive: [
           {
            breakpoint: 995,
             settings: {
              slidesToShow: 2,
             }
            },
            {
            breakpoint: 700,
             settings: {
              slidesToShow: 1,
              adaptiveHeight: true,
             }
            },
        ]
      });
  
    }, 500);
  }

});
