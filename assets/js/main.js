// Iran Paad — English site. Vanilla JS, no dependencies.
document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
    nav.querySelectorAll('.nav-item.has-dropdown > .nav-label').forEach(function (label) {
      label.addEventListener('click', function (e) {
        if (window.innerWidth <= 960) {
          e.preventDefault();
          label.parentElement.classList.toggle('open');
        }
      });
    });
  }

  // Hero carousel
  var slides = document.querySelectorAll('.hero-slide');
  if (slides.length > 1) {
    var current = 0;
    setInterval(function () {
      slides[current].classList.remove('active');
      current = (current + 1) % slides.length;
      slides[current].classList.add('active');
    }, 5000);
  }

  // FAQ accordion
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var q = item.querySelector('.faq-q');
    if (!q) return;
    q.addEventListener('click', function () {
      var wasOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item').forEach(function (i) { i.classList.remove('open'); });
      if (!wasOpen) item.classList.add('open');
    });
  });

  // Gallery lightbox
  var lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    var lightboxImg = lightbox.querySelector('img');
    document.querySelectorAll('.gallery-item').forEach(function (item) {
      item.addEventListener('click', function () {
        lightboxImg.src = item.getAttribute('href') || item.querySelector('img').src;
        lightbox.classList.add('open');
      });
    });
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
        lightbox.classList.remove('open');
      }
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') lightbox.classList.remove('open');
    });
  }
});
