document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll(".smooth-scroll").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Typed.js effect
    if (document.getElementById("typed-text")) {
        let typed = new Typed("#typed-text", {
            strings: ["Tech Enthusiast", "Public Speaker", "Musician"],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true
        });
    }

    // SVG icon animation
    document.querySelectorAll(".icon-animate").forEach(icon => {
        icon.addEventListener("mouseover", function () {
            this.querySelector("img").classList.add("animate-icon");
        });
        icon.addEventListener("mouseleave", function () {
            this.querySelector("img").classList.remove("animate-icon");
        });
    });
});
