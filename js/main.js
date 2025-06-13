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

// Mobile menu toggle
const mobileMenuToggle = () => {
    const nav = document.querySelector('nav ul');
    const menuBtn = document.createElement('button');
    menuBtn.classList.add('mobile-menu-btn');
    menuBtn.innerHTML = '☰';
    menuBtn.setAttribute('aria-label', 'Toggle navigation menu');
    
    if (window.innerWidth <= 768) {
        if (!document.querySelector('.mobile-menu-btn')) {
            document.querySelector('nav').appendChild(menuBtn);
        }
        
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('mobile-menu-open');
            menuBtn.innerHTML = nav.classList.contains('mobile-menu-open') ? '✕' : '☰';
        });
    } else {
        const existingBtn = document.querySelector('.mobile-menu-btn');
        if (existingBtn) {
            existingBtn.remove();
        }
        nav.classList.remove('mobile-menu-open');
    }
};

// Initialize mobile menu on load and resize
window.addEventListener('DOMContentLoaded', mobileMenuToggle);
window.addEventListener('resize', mobileMenuToggle);

// Form submission handler (if needed)
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Form will be handled by FormSubmit service
        // This is just for any additional client-side validation if needed
    });
}