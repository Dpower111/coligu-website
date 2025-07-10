document.addEventListener("DOMContentLoaded", function () {
    const navToggle = document.querySelector(".nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    // Toggle mobile menu
    navToggle.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Highlight active page in navbar
    let currentPage = window.location.pathname.split("/").pop(); // Get current page filename

    // Handle homepage cases (when URL is just domain)
    if (currentPage === "" || currentPage === "index.html") {
        currentPage = "index"; // Treat as 'home'
    }

    const navLinks = document.querySelectorAll(".nav-menu a");

    navLinks.forEach(link => {
        const linkHref = link.getAttribute("href");

        if (
            (currentPage === "index" && (linkHref === "/" || linkHref === "index.html")) || 
            linkHref === currentPage
        ) {
            link.classList.add("active");
        }
    });
});


const images = [
    'images/office_pic1.jpg',
    'images/office3.jpg',
    'images/office1.jpg',
    'images/office4.jpg',
    'images/office5.jpg',
    'images/office6.jpg',
];

let currentIndex = 0;
const bg1 = document.querySelector(".bg1");
const bg2 = document.querySelector(".bg2");

// Function to change background smoothly
function changeBackground() {
    bg2.style.backgroundImage = `url('${images[currentIndex]}')`;
    bg2.style.opacity = 1;

    setTimeout(() => {
        bg1.style.backgroundImage = `url('${images[currentIndex]}')`;
        bg2.style.opacity = 0;
        currentIndex = (currentIndex + 1) % images.length;
    }, 1000); // Transition duration
}

// Set initial background
bg1.style.backgroundImage = `url('${images[0]}')`;
setInterval(changeBackground, 4000);
