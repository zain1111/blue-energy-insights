(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var page = document.body.getAttribute('data-page');
    if (page) {
      document.querySelectorAll('[data-nav]').forEach(function (link) {
        if (link.getAttribute('data-nav') === page) {
          link.classList.add('active');
        }
      });
    }

    var yearEl = document.getElementById('footer-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  });
})();
