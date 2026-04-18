
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeTypingEffect();
    initializeScrollAnimations();
    initializeCardClicks();
    initializeMobileMenu();
    initializeScrollToTop();
    initializeNavigation();
});

// Typing effect for hero heading
function initializeTypingEffect() {
    const typedTextElement = document.getElementById('typedText');

    if (!typedTextElement) return;

    const textToType = 'Aspiring web-Developer';
    let currentIndex = 0;

    function typeCharacter() {
        if (currentIndex < textToType.length) {
            typedTextElement.textContent += textToType.charAt(currentIndex);
            currentIndex++;
            setTimeout(typeCharacter, 80);
        }
    }

    // Start typing after a short delay
    setTimeout(typeCharacter, 300);
}

// Scroll animations for cards and sections
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards and timeline entries
    const elementsToAnimate = document.querySelectorAll(
        '.content-card, .timeline-entry, .project-box, .experience-item'
    );

    elementsToAnimate.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

// Handle card clicks for navigation
function initializeCardClicks() {
    const cards = document.querySelectorAll('.content-card');

    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Don't trigger if clicking on the link directly
            if (e.target.tagName === 'A') return;

            const targetPage = this.getAttribute('data-page');
            if (targetPage) {
                // Add fade out effect
                document.body.style.opacity = '0.8';
                document.body.style.transition = 'opacity 0.3s ease';

                setTimeout(() => {
                    window.location.href = targetPage;
                }, 300);
            }
        });
    });
}

// Mobile menu toggle
function initializeMobileMenu() {
    const menuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');

    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('nav-menu-open');
        this.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('nav-menu-open');
            menuToggle.classList.remove('active');
        });
    });
}

// Scroll to top button
function initializeScrollToTop() {
    const scrollBtn = document.getElementById('scrollTopBtn');

    if (!scrollBtn) return;

    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });

    // Scroll to top when clicked
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Navigation active state management
function initializeNavigation() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');

        // Check if current page matches link
        if (currentPath.includes(linkPath) || 
            (currentPath.endsWith('/') && linkPath === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Helper function to navigate back to home
function goToHome() {
    window.location.href = 'index.html';
}

// Helper function to scroll to contact section
function scrollToContact() {
    // For now, just scroll to bottom
    // You can add a contact section later
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}

// Smooth page transitions
window.addEventListener('beforeunload', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
});

// Add fade-in effect when page loads
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.5s ease';
});

// Handle skill badge interactions
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('skill-badge')) {
        e.target.style.transform = 'scale(1.1)';

        setTimeout(() => {
            e.target.style.transform = 'scale(1)';
        }, 200);
    }
});

// Console message for visitors
console.log('%cWelcome to my portfolio!', 'color: #00d4ff; font-size: 20px; font-weight: bold;');
console.log('%cFeel free to explore and reach out if you like what you see!', 'color: #ffffff; font-size: 14px;');