'use strict';

(function () {
  var form = document.querySelector('.free-lesson__wrapper form');
  var nameInput = document.querySelector('.free-lesson__name input');
  var phoneInput = document.querySelector('.free-lesson__phone input');
  var submitBtn = document.querySelector('.js-submit');

  nameInput.addEventListener('focus', function () {
    nameInput.classList.add('active');
  });

  nameInput.addEventListener('blur', function () {
    nameInput.classList.remove('active');
  });

  phoneInput.addEventListener('focus', function () {
    phoneInput.classList.add('active');
  });

  phoneInput.addEventListener('blur', function () {
    phoneInput.classList.remove('active');
  });

  var removeStyle = function (evt) {
    evt.target.classList.remove('error');
  };

  var nameInputChangeHandler = function (evt) {
    removeStyle(evt);
  };

  var phoneInputChangeHandler = function (evt) {
    removeStyle(evt);
  };

  var addInputListener = function () {
    nameInput.addEventListener('input', nameInputChangeHandler);
    phoneInput.addEventListener('input', phoneInputChangeHandler);
  };

  var removeInputListener = function () {
    nameInput.removeEventListener('input', nameInputChangeHandler);
    phoneInput.removeEventListener('input', phoneInputChangeHandler);
  };

  var checkNameInputValidity = function () {
    var flag = true;
    if (nameInput.value === '' || nameInput.value.length < 2) {
      flag = false;
    }
    return flag;
  };

  var checkPhoneInputValidity = function () {
    var flag = true;
    if (phoneInput.value === '' || phoneInput.value.length < 16) {
      flag = false;
    }
    return flag;
  };

  var checkInputsValidity = function () {
    if (!checkNameInputValidity()) {
      nameInput.classList.add('error');
    }
    if (!checkPhoneInputValidity()) {
      phoneInput.classList.add('error');
    }
  };

  submitBtn.addEventListener('click', function (evt) {
    evt.preventDefault();
    checkInputsValidity();
    addInputListener();

    if (checkNameInputValidity() && checkPhoneInputValidity()) {
      removeInputListener();
      setTimeout(function () {
        form.reset();
      }, 500);
    }
  });

})();
