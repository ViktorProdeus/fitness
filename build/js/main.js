'use strict';

(function () {

  var sliderCoachBlock = document.querySelector('.coaches__wrapper');

  if (sliderCoachBlock) {
    sliderCoachBlock = new window.Swiper('.coaches__wrapper', {

      loop: true,

      navigation: {
        nextEl: '.coaches__button--next',
        prevEl: '.coaches__button--prev',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 0
        },

        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30
        },

        1200: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          spaceBetween: 40
        }
      }
    });
  }

})();

'use strict';

(function () {
  var userPhoneInput = document.querySelector('.free-lesson__phone input');

  if (userPhoneInput) {
    var maskOptions = {
      mask: '+{7}(000)000-00-00'
    };

    window.mask = new window.IMask(userPhoneInput, maskOptions);

  }

})();

'use strict';

(function () {

  var sliderReviewsBlock = document.querySelector('.reviews__slider');

  if (sliderReviewsBlock) {
    sliderReviewsBlock = new window.Swiper('.reviews__slider', {

      loop: true,

      navigation: {
        nextEl: '.reviews__btn--next',
        prevEl: '.reviews__btn--prev',
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 25
        },

        768: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 65
        }
      }
    });
  }

})();

'use strict';

(function () {
  var headerButton = document.querySelector('.main-header__btn');

  var footerLogo = document.querySelector('.main-footer__logo');

  var subscriptionBlock = document.querySelector('.subscription');

  var headerBlock = document.querySelector('.main-header');

  var moveTo = new window.MoveTo();

  if (headerButton) {
    headerButton.addEventListener('click', function () {
      moveTo.move(subscriptionBlock);
    });
  }

  if (footerLogo) {
    footerLogo.addEventListener('click', function () {
      moveTo.move(headerBlock);
    });
  }

})();

'use strict';

(function () {

  var tabs = document.querySelectorAll('.subscription__data-link');
  var activeTab = 'subscription__data-link--active';
  var lists = document.querySelectorAll('.subscription__list');
  var activeClass = 'subscription__list--active';

  var removeClass = function (elem, className) {
    Array.prototype.forEach.call(elem, function (i) {
      i.classList.remove(className);
    });
  };

  Array.prototype.forEach.call(tabs, function (tab, i) {
    tab.addEventListener('click', function (evt) {
      evt.preventDefault();

      if (tabs) {
        removeClass(tabs, activeTab);
        tab.classList.add(activeTab);
      }

      if (lists) {
        removeClass(lists, activeClass);
        lists[i].classList.add(activeClass);
      }
    });
  });

})();
