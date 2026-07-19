const revealItems = document.querySelectorAll('.service-grid article, .why-grid > div, .equipment-list article');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.animate([{opacity: 0, transform: 'translateY(18px)'}, {opacity: 1, transform: 'translateY(0)'}], {duration: 520, easing: 'ease-out', fill: 'both'});
      observer.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
revealItems.forEach((item) => observer.observe(item));
