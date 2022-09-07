
const swiper = new Swiper('.swiper', {
   // Optional parameters
   centeredSlides: true,
   loop: true,
   slidesPerView: 1,
   spaceBetween: 20,
 
   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },

   pagination: {
    el: ".swiper-pagination",
    type: "fraction",
   },

   breakpoints: {
    // when window width is >= 600px
    600: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
   }
 });
