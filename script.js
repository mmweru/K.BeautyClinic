const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('nav ul');

hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburgerMenu.classList.toggle('toggle');
});


const navLink = document.querySelectorAll('nav a[href^="#"]');

// Add smooth scrolling behavior to each link
navLink.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default jump behavior

        const targetId = link.getAttribute('href'); // Get the target section ID
        const targetElement = document.querySelector(targetId); // Get the target element

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop, // Scroll to the top of the target element
                behavior: 'smooth' // Add smooth scrolling behavior
            });
        }
    });
});


var scrollUp = document.getElementById('scroll-up');
var scrollDown = document.getElementById('scroll-down');

// Listen for click events on the arrows
scrollUp.addEventListener('click', function() {
    // Scroll up by 100px
    window.scrollBy(0, -100);
});

scrollDown.addEventListener('click', function() {
    // Scroll down by 100px
    window.scrollBy(0, 100);
});