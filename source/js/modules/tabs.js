'use strict';

(function () {

  var tabs = document.querySelectorAll('.subscription__data-link');
  var activeTab = 'subscription__data-link--active';
  var lists = document.querySelectorAll('.subscription__list');
  var activeClass = 'subscription__list--active';

  tabs.forEach(function (tab, item) {
    tab.addEventListener('click', function (evt) {
      evt.preventDefault();

      tabs.forEach(function (tab) {
        tab.classList.remove(activeTab);
      });

      tab.classList.add(activeTab);

      lists.forEach(function (list) {
        list.classList.remove(activeClass);
      });
      lists[item].classList.add(activeClass);
    });
  });
})();
