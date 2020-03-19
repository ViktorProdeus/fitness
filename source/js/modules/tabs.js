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
