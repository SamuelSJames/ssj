/* Modal.js - Handles modal popups for forms, images, etc. */

document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".modal");
    const modalTrigger = document.querySelectorAll(".modal-trigger");
    const modalClose = document.querySelector(".modal-close");

    if (modal && modalTrigger.length > 0 && modalClose) {
        // Open modal
        modalTrigger.forEach(trigger => {
            trigger.addEventListener("click", function () {
                modal.classList.add("active");
            });
        });

        // Close modal
        modalClose.addEventListener("click", function () {
            modal.classList.remove("active");
        });

        // Close modal when clicking outside
        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.classList.remove("active");
            }
        });
    }
});