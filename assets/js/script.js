// TOGGLE MENU
function toggleMenu() {
    document.getElementById("mobile-menu").classList.toggle("active");
}

// CLOSE MENU WHEN CLICKING A LINK
function closeMenu() {
    document.getElementById("mobile-menu").classList.remove("active");
}

// AUTO-SLIDESHOW
let slideIndex = 0;
const slides = document.querySelectorAll(".image-gallery img");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

// START SLIDESHOW
document.addEventListener("DOMContentLoaded", showSlides);

// VIDEO PLAY ONLY WHEN SCROLLED INTO VIEW
const video = document.getElementById("danceVideo");

function checkVideoInView() {
    const rect = video.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        video.play();
    } else {
        video.pause();
    }
}

// LISTEN FOR SCROLL EVENTS
document.addEventListener("scroll", checkVideoInView);
document.addEventListener("DOMContentLoaded", checkVideoInView);
