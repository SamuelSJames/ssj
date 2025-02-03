/* Typed.js - Handles dynamic typing effects */

document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("typed-text")) {
        let typed = new Typed("#typed-text", {
            strings: ["Tech Enthusiast", "Public Speaker", "Musician", "IT Professional"],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true
        });
    }
});
