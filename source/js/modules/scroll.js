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
