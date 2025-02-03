/* Dark Mode.js - Toggles between light and dark mode */

document.addEventListener("DOMContentLoaded", function () {
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const body = document.body;
    
    // Check for stored user preference
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
    }
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", function () {
            body.classList.toggle("dark-mode");
            
            // Store user preference
            if (body.classList.contains("dark-mode")) {
                localStorage.setItem("dark-mode", "enabled");
            } else {
                localStorage.setItem("dark-mode", "disabled");
            }
        });
    }
});
