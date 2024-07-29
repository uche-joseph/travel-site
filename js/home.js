document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");
    const mobileNav = document.getElementById("mobile-nav");
    const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
    const closeMenuIcon = document.getElementById("close-menu");
    const backgroundContainer = document.getElementById("background-container");
    const quoteElement = document.getElementById("quote");
    const faqItems = document.querySelectorAll(".faq-item");

    const images = [
        '../images/image1.jpg',
        '../images/image8.jpeg',
        '../images/image6.jpeg',
        '../images/image4.jpeg',
        '../images/image7.jpeg'
    ];

    const quotes = [
        "Travel is the only thing you buy that makes you richer - Danny Kaye",
        "We travel not to escape life, but for life not to escape us - Ibn Battuta",
        "The world is a book and those who do not travel read only one page. – Saint Augustine",
        "Travel far, travel wide, travel deep. Let the journey educate you beyond the classroom walls.– Chief Seattle",
        "The best education you will ever get is traveling. Nothing teaches you more than exploring the world and accumulating experiences.– Mark Paterson"
    ];
    
    document.getElementById('dropdown-display').addEventListener('click', function(event) {
      event.stopPropagation();
      this.classList.toggle('show');
    });
    
    document.querySelectorAll('.dropdown-menu li').forEach(function(item) {
      item.addEventListener('click', function(event) {
        event.stopPropagation();
        var selectedText = this.textContent;
        var selectedLink = this.getAttribute('data-link');
    
        document.getElementById('selected-option').textContent = selectedText;
        document.getElementById('get-started-btn').parentElement.href = selectedLink;
    
        document.getElementById('dropdown-display').classList.remove('show');
      });
    });
    
    // Close the dropdown if the user clicks outside of it
    document.addEventListener('click', function() {
      var dropdown = document.getElementById('dropdown-display');
      if (dropdown.classList.contains('show')) {
        dropdown.classList.remove('show');
      }
    });
    


    let currentIndex = 0;

    function updateBackgroundAndQuote() {
        backgroundContainer.style.backgroundImage = `url(${images[currentIndex]})`;
        quoteElement.innerText = quotes[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }

    // Initialize with the first image and quote
    updateBackgroundAndQuote();

    // Change image and quote every 5 seconds
    setInterval(updateBackgroundAndQuote, 5000);

    // Header visibility on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            header.style.top = "0";
        } else {
            header.style.top = "-100px";
        }
    });

    // Mobile menu toggle
    mobileMenuIcon.addEventListener("click", function () {
        mobileNav.style.display = mobileNav.style.display === "block" ? "none" : "block";
    });
    
    closeMenuIcon.addEventListener("click", () => {
      mobileNav.style.display = "none";
    })
    
    let slideIndex = 0;
    showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("testimonials");
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function currentSlide(n) {
  showSlide(slideIndex = n + 1);
}

function showSlide(n) {
  let slides = document.getElementsByClassName("testimonials");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

faqItems.forEach(item => {
    item.querySelector(".faq-question").addEventListener("click", function() {
      const answer = item.querySelector(".faq-answer");
      answer.style.display = (answer.style.display === "block") ? "none" : "block";
    });
  });

});
