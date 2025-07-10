document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    // Toggle mobile menu
    navToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Highlight active page in navbar
    const currentPage = window.location.pathname.split("/").pop(); // Get current page filename
    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const amenities = document.querySelectorAll(".amenity-card");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.3 }
    );

    amenities.forEach(amenity => {
        amenity.classList.add("hidden");
        observer.observe(amenity);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".choose-card");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.transform = "scale(1.05) rotate(0deg)";
                    setTimeout(() => {
                        entry.target.style.transform = "scale(1) rotate(0deg)";
                    }, 300);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.4 }
    );

    cards.forEach(card => {
        observer.observe(card);
    });
});

