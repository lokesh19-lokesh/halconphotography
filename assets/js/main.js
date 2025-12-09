document.addEventListener("DOMContentLoaded", function () {

    // Video Audio Toggle
    const video = document.getElementById('heroVideo');
    const toggleBtn = document.getElementById('audioToggle');
    const icon = document.getElementById('audioIcon');

    if (video && toggleBtn) {
        toggleBtn.addEventListener('click', function () {
            if (video.muted) {
                video.muted = false;
                icon.classList.remove('fa-volume-mute');
                icon.classList.add('fa-volume-up');
            } else {
                video.muted = true;
                icon.classList.remove('fa-volume-up');
                icon.classList.add('fa-volume-mute');
            }
        });
    }

    // Navbar Scroll Effect
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("shadow-sm");
            navbar.style.backgroundColor = "rgba(255, 248, 231, 1)"; // Solid cream
            navbar.style.paddingTop = "10px";
            navbar.style.paddingBottom = "10px";
        } else {
            navbar.classList.remove("shadow-sm");
            navbar.style.backgroundColor = "rgba(255, 248, 231, 0.95)"; // Semi-transparent
            navbar.style.paddingTop = "15px";
            navbar.style.paddingBottom = "15px";
        }
    });

    // Simple Intersection Observer for Animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-up');
                entry.target.style.opacity = "1";
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Target elements to animate
    const animatedElements = document.querySelectorAll('.section-title, .service-card, .portfolio-item, .lead');
    animatedElements.forEach(el => {
        el.style.opacity = "0"; // Initially hide
        el.classList.add('animate-up'); // Ensure class exists for keyframes
        el.style.animationPlayState = "paused"; // Pause until observed (optional refinement)
        observer.observe(el);
    });

    // Fix for animation conflict with CSS class
    // We already have .animate-up in CSS with animation. 
    // Let's refine:

    const scrollElements = document.querySelectorAll(".section-title, .service-card, .lead");

    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.animation = "fadeInUp 1s ease-out forwards";
            }
        });
    });


    scrollElements.forEach((el) => scrollObserver.observe(el));


    // Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    if (lightbox && lightboxImg && closeBtn) {
        portfolioItems.forEach(item => {
            item.addEventListener('click', function () {
                const img = this.querySelector('img');
                if (img) {
                    lightboxImg.src = img.src;
                    lightbox.classList.add('active');
                }
            });
        });

        closeBtn.addEventListener('click', function () {
            lightbox.classList.remove('active');
        });

        lightbox.addEventListener('click', function (e) {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });
    }
});
