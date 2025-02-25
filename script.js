// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add fade-in-up animation on page load
window.addEventListener('load', () => {
    document.querySelectorAll('.fade-in-up').forEach(element => {
        element.classList.add('fade-in-up');
    });
});