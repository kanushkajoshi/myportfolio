// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 100) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section, .hero');
  const navLinks = document.querySelectorAll('.nav-link');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
});

// Mobile menu toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
contactForm.addEventListener('submit', function(e) {
  const button = this.querySelector('button[type="submit"]');
  const originalText = button.innerHTML;
  button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
  button.disabled = true;
  setTimeout(() => {
    button.innerHTML = originalText;
    button.disabled = false;
  }, 3000);
});

// Typing effect in hero section
const tagline = document.querySelector('.hero .tagline');
const text = tagline.textContent;
tagline.textContent = '';
let i = 0;
const typeWriter = () => {
  if (i < text.length) {
    tagline.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
};
window.addEventListener('load', () => {
  setTimeout(typeWriter, 1000);
});

// Particle effect
function createParticle() {
  const particle = document.createElement('div');
  particle.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    background: var(--accent);
    border-radius: 50%;
    pointer-events: none;
    opacity: 0.6;
    animation: float 6s linear infinite;
  `;
  particle.style.left = Math.random() * 100 + '%';
  particle.style.animationDelay = Math.random() * 6 + 's';
  document.querySelector('.hero').appendChild(particle);
  setTimeout(() => {
    particle.remove();
  }, 6000);
}
setInterval(createParticle, 2000);

// Skills animation
const skillTags = document.querySelectorAll('.skill-tag');
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const tags = entry.target.querySelectorAll('.skill-tag');
      tags.forEach((tag, index) => {
        setTimeout(() => {
          tag.style.transform = 'scale(1.05)';
          setTimeout(() => {
            tag.style.transform = 'scale(1)';
          }, 200);
        }, index * 100);
      });
    }
  });
});
document.querySelectorAll('.skill-category').forEach(category => {
  skillObserver.observe(category);
});

// Project card hover effect
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mouseenter', function() {
    this.style.transform = 'translateY(-10px) scale(1.02)';
  });
  card.addEventListener('mouseleave', function() {
    this.style.transform = 'translateY(0) scale(1)';
  });
});
