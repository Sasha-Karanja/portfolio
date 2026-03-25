// Hamburger menu toggle
document.addEventListener('DOMContentLoaded', function() {
  var toggle = document.querySelector('.nav-toggle');
  var navUl  = document.querySelector('nav ul');
  if (toggle && navUl) {
    toggle.addEventListener('click', function() {
      navUl.classList.toggle('open');
    });
  }
});
