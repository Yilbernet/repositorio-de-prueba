
const swiper = new Swiper('.swiper', {
   // Optional parameters
   centeredSlides: true,
   slidesPerView: 1,
   spaceBetween: 10,
 
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
    // when window width is >= 550px
    550: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
   }
 });
