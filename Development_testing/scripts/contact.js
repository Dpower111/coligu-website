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