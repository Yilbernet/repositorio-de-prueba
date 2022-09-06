
const swiper = new Swiper('.swiper', {
   // Optional parameters
   centeredSlides: true,
   slidesPerView: 3,
   spaceBetween: 5,
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },

   breakpoints: {
    // when window width is >= 480px
    550: {
      slidesPerView: 3,
      spaceBetween: 30
      // $('.swiper-wrapper').addClass( "disabled" );
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
   }
 });


//  $('.swiper-wrapper').addClass( "disabled" );



