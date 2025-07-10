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

const values = [
    { title: "Your Success is Our Success", text: "We celebrate every milestone—big or small." },
    { title: "Collaboration Over Competition", text: "We create an environment that encourages teamwork and knowledge-sharing." },
    { title: "Flexibility & Freedom", text: "Coligu offers the freedom to work on your own terms." },
    { title: "Well-being Matters", text: "A healthy mind fuels creativity, so we prioritize balance and growth." },
    { title: "Integrity in Every Interaction", text: "Trust is our foundation—honesty and transparency lead the way." },
    { title: "Innovate with Purpose", text: "We encourage bold ideas that make an impact." },
    { title: "A Heart-Centered Approach", text: "Inspired by Ligu, we combine intellect and passion." },
    { title: "Diversity Drives Excellence", text: "Great ideas come from different perspectives and backgrounds." },
    { title: "Empathy First", text: "We foster a culture where everyone feels valued, supported, and heard." }
    
];

const container = document.getElementById("values-container");

values.forEach(value => {
    const card = document.createElement("div");
    card.classList.add("value-card");
    card.innerHTML = `<h3>${value.title}</h3><p>${value.text}</p>`;
    container.appendChild(card);
});