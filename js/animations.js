// Revela as seções e os cartões conforme a página é rolada
document.addEventListener('DOMContentLoaded', function () {
  var items = document.querySelectorAll(
    '.section, .facts li, .case-card, .timeline-item, .skill-item, .contact-card'
  );

  // Sem suporte ao observador, mostra tudo de uma vez
  if (!('IntersectionObserver' in window)) {
    items.forEach(function (el) {
      el.classList.add('visible');
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  items.forEach(function (el, index) {
    el.classList.add('reveal');
    el.style.transitionDelay = (index % 4) * 0.08 + 's';
    observer.observe(el);
  });
});
