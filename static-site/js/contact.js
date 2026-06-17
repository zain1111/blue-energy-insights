(function () {
  'use strict';

  var weekHours = [
    { label: 'Monday', hours: '09:00 am – 05:00 pm', dayIndex: 1 },
    { label: 'Tuesday', hours: '09:00 am – 05:00 pm', dayIndex: 2 },
    { label: 'Wednesday', hours: '09:00 am – 05:00 pm', dayIndex: 3 },
    { label: 'Thursday', hours: '09:00 am – 05:00 pm', dayIndex: 4 },
    { label: 'Friday', hours: '09:00 am – 05:00 pm', dayIndex: 5 },
    { label: 'Saturday', hours: 'Closed', dayIndex: 6 },
    { label: 'Sunday', hours: 'Closed', dayIndex: 0 },
  ];

  function showToast(title, description) {
    var container = document.getElementById('toast-container');
    if (!container) return;
    var toast = document.createElement('div');
    toast.className = 'toast-custom success';
    toast.innerHTML =
      '<div class="toast-title">' + title + '</div>' +
      '<div class="toast-desc">' + description + '</div>';
    container.appendChild(toast);
    setTimeout(function () {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s';
      setTimeout(function () { toast.remove(); }, 300);
    }, 4000);
  }

  function highlightToday() {
    var today = new Date().getDay();
    document.querySelectorAll('.hours-row').forEach(function (row) {
      var dayIndex = parseInt(row.getAttribute('data-day'), 10);
      if (dayIndex === today) {
        row.classList.add('active');
      }
    });
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function clearErrors() {
    document.querySelectorAll('.form-error').forEach(function (el) {
      el.textContent = '';
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    highlightToday();

    var form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      clearErrors();
      var valid = true;

      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var phone = form.phone.value.trim();

      if (!name) {
        document.getElementById('error-name').textContent = 'Name is required';
        valid = false;
      }
      if (!email) {
        document.getElementById('error-email').textContent = 'Email is required';
        valid = false;
      } else if (!validateEmail(email)) {
        document.getElementById('error-email').textContent = 'Enter a valid email';
        valid = false;
      }
      if (!phone) {
        document.getElementById('error-phone').textContent = 'Phone is required';
        valid = false;
      }

      if (!valid) return;

      showToast(
        'Thank you — we will respond shortly.',
        name + ', your message has been received.'
      );
      form.reset();
    });
  });
})();
