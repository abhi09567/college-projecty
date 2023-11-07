// Mobile Navigation Menu
const navToggle = document.querySelector('.fa-bars');
const navLinks = document.querySelector('.nav-links ul');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Form Validation
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#submit-button');

submitButton.addEventListener('click', () => {
  const email = emailInput.value;
  if (!isValidEmail(email)) {
    alert('Please enter a valid email address.');
  }
});

function isValidEmail(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

// Image Slideshow
const images = document.querySelectorAll('.campus-col-img');
let currentImageIndex = 0;

function showImage(index) {
  images[currentImageIndex].style.display = 'none';
  currentImageIndex = (index + images.length) % images.length;
  images[currentImageIndex].style display = 'block';
}

showImage(currentImageIndex);

setInterval(() => {
  showImage(currentImageIndex + 1);
}, 5000); // Change image every 5 seconds

// Interactive Button
const heroBtn = document.querySelector('.hero-btn');

heroBtn.addEventListener('click', () => {
  heroBtn.textContent = 'Thanks for Visiting!';
});
