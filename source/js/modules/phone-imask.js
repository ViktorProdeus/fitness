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
