/* Tabs.js - Enables tabbed navigation in sections */

document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    if (tabButtons.length > 0 && tabContents.length > 0) {
        tabButtons.forEach(button => {
            button.addEventListener("click", function () {
                const targetTab = this.getAttribute("data-tab");
                
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove("active"));
                tabContents.forEach(content => content.classList.remove("active"));
                
                // Add active class to selected button and content
                this.classList.add("active");
                document.getElementById(targetTab).classList.add("active");
            });
        });
    }
});
