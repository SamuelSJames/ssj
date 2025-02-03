/* Navbar.js - Handles navbar interactions, including scroll effects and mobile toggle */

document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector("header");
    const menuToggle = document.querySelector(".menu-toggle");
    const navbarMenu = document.querySelector(".navbar ul");

    // Scroll Effect: Change navbar background on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Mobile Menu Toggle
    if (menuToggle && navbarMenu) {
        menuToggle.addEventListener("click", function () {
            navbarMenu.classList.toggle("active");
        });
    }

    // Close menu when a link is clicked (for mobile usability)
    document.querySelectorAll(".navbar ul li a").forEach(link => {
        link.addEventListener("click", function () {
            navbarMenu.classList.remove("active");
        });
    });
});
