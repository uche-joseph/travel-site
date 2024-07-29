document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".mobile-menu-icon");
    const mobileNav = document.getElementById("mobile-nav");
    const closeMenu = document.getElementById("close-menu");
    const header = document.getElementById("header-5");
    const embedForm = document.getElementById("question-container");
    const iframe = document.getElementById("iframe-id");  // Make sure your iframe has an ID in the HTML
    iframe.src = '';

    // Define urlParams
    const urlParams = new URLSearchParams(window.location.search);
    const packageId = urlParams.get('id');
    
    console.log('Package ID:', packageId);
    
    // Check if packageId is '1' and set the iframe src and text content of embedForm
    if (packageId === '1') {
        iframe.src = "https://docs.google.com/forms/d/e/1FAIpQLScs-O7IQdzohWcGk7W-RRyem-cg2-gclyXpeFBBys8SNA5nag/viewform?embedded=true";
    } else if (packageId === '2') {
        iframe.src = "https://docs.google.com/forms/d/e/1FAIpQLSfnhwDUsTqmq5tuH0EDZbsYIFsoDKRCR-w1auKhcnjCf4mK1g/viewform?embedded=true";
    } else if (packageId === '3') {
        iframe.src = "https://docs.google.com/forms/d/e/1FAIpQLSeIweCKxYv2pMX_qUJ-XxGA9NP66k8wBP1Lto8gM2mr5wlkOQ/viewform?embedded=true";
    } else {
        console.log('Package ID not found');
    }
    
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
    
    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            header.style.top = "0";
        } else {
            header.style.top = "-100px";
        }
    });
});
