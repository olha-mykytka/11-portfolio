// Set current year in footer
document.querySelector('#year').textContent = new Date().getFullYear();

// Toggle hamburger menu (if using in small layout)
const pw = document.querySelector('.pageWrapper');
const ham = document.querySelector('.ham');
if (ham) {
  ham.addEventListener('click', () => {
    pw.classList.toggle('moveOver');
  });
}

// Highlight nav based on scroll position
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('nav a');

// Use IntersectionObserver to update active link
const observerOptions = {
  threshold: 0.4
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('id');
    const navItem = document.querySelector(`nav a[href="#${id}"]`);

    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.remove('active'));
      if (navItem) {
        navItem.classList.add('active');
      }
    }
  });
}, observerOptions);

// Observe all main sections
sections.forEach(section => observer.observe(section));
