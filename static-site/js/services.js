(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var sidebarLinks = document.querySelectorAll('.services-sidebar .nav-link-custom');
    var sections = document.querySelectorAll('.service-panel');
    if (!sections.length) return;

    function setActive(id) {
      sidebarLinks.forEach(function (link) {
        link.classList.toggle('active', link.getAttribute('data-target') === id);
      });
    }

    function scrollToSection(id) {
      var el = document.getElementById(id);
      if (el) {
        setActive(id);
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    sidebarLinks.forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection(link.getAttribute('data-target'));
      });
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px' }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });

    var hash = window.location.hash.slice(1);
    if (hash && document.getElementById(hash)) {
      setTimeout(function () {
        scrollToSection(hash);
      }, 300);
    }
  });
})();
