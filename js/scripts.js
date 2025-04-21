// Update year in footer
const yearSpan = document.querySelector('#year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// Toggle mobile nav menu
const ham = document.querySelector('.ham');
const pageWrapper = document.querySelector('.pageWrapper');

ham.addEventListener('click', () => {
  pageWrapper.classList.toggle('moveOver');
});

// Scroll-based wayfinding using Intersection Observer
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

const observerOptions = {
  threshold: 0.6
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, observerOptions);

sections.forEach(section => {
  observer.observe(section);
});
