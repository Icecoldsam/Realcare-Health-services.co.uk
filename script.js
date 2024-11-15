// Smooth Scroll Function for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in on Scroll for Different Sections
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            appearOnScroll.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// script.js
document.addEventListener('DOMContentLoaded', function() {
    const aboutButton = document.getElementById('aboutButton');
    const aboutCard = document.getElementById('aboutCard');
    const closeButton = document.querySelector('.close-button');

    // Open the card
    aboutButton.addEventListener('click', function() {
        aboutCard.classList.remove('hidden');
        aboutCard.style.display = 'block'; // Show the card
    });

    // Close the card
    closeButton.addEventListener('click', function() {
        aboutCard.style.display = 'none'; // Hide the card
    });
});
document.getElementById('hamburger').addEventListener('click', function () {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active'); // This should toggle the display of nav links
});
document.addEventListener('DOMContentLoaded', () => {
    const aboutLink = document.querySelector('a[href="#about"]'); // Select the About Us link
    const aboutCard = document.querySelector('.about-card'); // Your card element

    // Show the card when the link is clicked
    aboutLink.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default anchor behavior
        aboutCard.style.display = 'block'; // Show the card
    });

    // If you have a close button inside your about card
    const closeButton = document.querySelector('.close-button');
    if (closeButton) {
        closeButton.addEventListener('click', () => {
            aboutCard.style.display = 'none'; // Hide card on close
        });
    }
});
let currentSlide = 0; // Keep track of the current slide
const slides = document.querySelectorAll('.slide'); // Select all slides
const totalSlides = slides.length;

// Function to show the current slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.opacity = (i === index) ? '1' : '0'; // Show current slide, hide others
    });
}

// Function to change the slide every 10 seconds
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides; // Increment the slide index
    showSlide(currentSlide); // Show the new slide
}

// Show the first slide initially
showSlide(currentSlide);

// Set an interval to change slides every 10 seconds
setInterval(nextSlide, 10000);
