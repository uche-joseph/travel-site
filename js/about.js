document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".mobile-menu-icon");
    const mobileNav = document.getElementById("mobile-nav");
    const closeMenu = document.getElementById("close-menu");
    const header = document.getElementById("header-3");

    // Open the mobile menu
    menuIcon.addEventListener("click", function() {
        mobileNav.style.display = "block";
    });

    // Close the mobile menu
    closeMenu.addEventListener("click", function() {
        mobileNav.style.display = "none";
    });

    // Close the mobile menu when clicking outside of it
    window.addEventListener("click", function(event) {
        if (event.target !== mobileNav && !mobileNav.contains(event.target) && event.target !== menuIcon && !menuIcon.contains(event.target)) {
            mobileNav.style.display = "none";
        }
    });
    
    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.style.top = "0";
        } else {
            header.style.top = "-100px";
        }
    });
});
