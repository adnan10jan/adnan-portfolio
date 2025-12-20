document.addEventListener('DOMContentLoaded', () => {

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.service-card, .project-card');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Toggle icon
            const icon = mobileMenuBtn.querySelector('ion-icon');
            if (navLinks.classList.contains('active')) {
                icon.setAttribute('name', 'close-outline');
            } else {
                icon.setAttribute('name', 'menu-outline');
            }
        });
    }

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('ion-icon');
                icon.setAttribute('name', 'menu-outline');
            }
        });
    });

    // Handle animation class
    document.addEventListener('scroll', () => {
        animatedElements.forEach(el => {
            if (el.classList.contains('visible')) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    });

    // Resume Modal Logic
    const modal = document.getElementById("resume-modal");
    const btn = document.getElementById("view-resume-btn");
    const span = document.querySelector(".close-modal");

    if (btn && modal && span) {
        btn.onclick = function () {
            modal.style.display = "block";
            // Small delay to allow display:block to apply before adding show class for transition
            setTimeout(() => {
                modal.classList.add("show");
            }, 10);
        }

        span.onclick = function () {
            modal.classList.remove("show");
            setTimeout(() => {
                modal.style.display = "none";
            }, 300); // Wait for transition
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.classList.remove("show");
                setTimeout(() => {
                    modal.style.display = "none";
                }, 300);
            }
        }
    }
});


