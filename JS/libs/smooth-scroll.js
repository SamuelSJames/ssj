/* Smooth Scroll.js - Enables smooth scrolling for internal links */

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".smooth-scroll").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });
});
