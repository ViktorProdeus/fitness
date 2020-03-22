'use strict';

(function () {

  var sliderCoachBlock = document.querySelector('.coaches__wrapper');

  if (sliderCoachBlock) {
    sliderCoachBlock = new window.Swiper('.coaches__wrapper', {

      loop: true,
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 40,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      breakpoints: {
        767: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0
        },

        1199: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30
        }
      }
    });
  }

})();
