/* Menu Toggle.js - Controls the mobile navigation menu */

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbarMenu = document.querySelector(".navbar ul");

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
