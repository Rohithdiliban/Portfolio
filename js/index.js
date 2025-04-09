// ========== MOBILE MENU TOGGLE ==========
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.querySelector('.mobileMenu');
const closeMenu = document.querySelector('.close');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});

// Close mobile menu on clicking any nav link
document.querySelectorAll('.m-menu-text').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
  });
});

// ========== FORM VALIDATION ==========
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const msgError = document.getElementById('msg-error');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', function (e) {
  let valid = true;

  // Clear errors
  nameError.textContent = '';
  emailError.textContent = '';
  msgError.textContent = '';
  formStatus.textContent = '';

  // Validate Name
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Please enter your name.';
    valid = false;
  }

  // Validate Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = 'Enter a valid email.';
    valid = false;
  }

  // Validate Message
  if (messageInput.value.trim().length < 10) {
    msgError.textContent = 'Message should be at least 10 characters.';
    valid = false;
  }

  // Prevent submission if invalid
  if (!valid) {
    e.preventDefault();
    formStatus.textContent = 'Please fix the errors above and try again.';
    formStatus.style.color = '#e63946';
  } else {
    formStatus.textContent = 'Sending...';
    formStatus.style.color = '#1d3557';
  }
});

// ========== SMOOTH SCROLL (Optional Enhancement) ==========
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
