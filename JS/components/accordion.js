/* Accordion.js - Manages expandable and collapsible sections */

document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    
    if (accordionHeaders.length > 0) {
        accordionHeaders.forEach(header => {
            header.addEventListener("click", function () {
                const accordionItem = this.parentElement;
                const content = accordionItem.querySelector(".accordion-content");
                const isOpen = accordionItem.classList.contains("active");
                
                // Close all accordions (optional: auto-close other sections)
                document.querySelectorAll(".accordion-item").forEach(item => {
                    item.classList.remove("active");
                    item.querySelector(".accordion-content").style.maxHeight = null;
                });
                
                // Toggle current accordion
                if (!isOpen) {
                    accordionItem.classList.add("active");
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            });
        });
    }
});
