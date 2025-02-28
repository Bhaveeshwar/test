function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    var overlay = document.getElementById("menu-overlay");

    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
        overlay.classList.remove("active"); // Hide overlay
    } else {
        sidebar.style.left = "0px";
        overlay.classList.add("active"); // Show overlay
    }
}


// SHOW SECTIONS
function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(section => section.classList.remove("active"));
    document.getElementById(sectionId).classList.add("active");

    // Close menu after clicking a section button
    setTimeout(() => {
        document.getElementById("sidebar").style.left = "-250px";
        document.getElementById("menu-content").style.display = "none"; // Hide menu content
        startAnimation();
        playVideos();
    }, 500);
}

// CLOSE MENU WHEN CLICKING OUTSIDE
document.addEventListener("click", function (event) {
    var sidebar = document.getElementById("sidebar");
    var menuIcon = document.querySelector(".menu-icon");

    if (!sidebar.contains(event.target) && !menuIcon.contains(event.target)) {
        sidebar.style.left = "-250px";
        document.getElementById("menu-content").style.display = "none"; // Hide menu content
        startAnimation();
        playVideos();
    }
});

// IMAGE SLIDESHOW ANIMATION
let images = document.querySelectorAll(".image-gallery img");
let index = 0;
let interval;

// Function to show next image with animation
function showNextImage() {
    images.forEach((img, i) => img.classList.remove("active"));
    images[index].classList.add("active");
    index = (index + 1) % images.length;
}

// Start Image Animation
function startAnimation() {
    interval = setInterval(showNextImage, 3000);
}

// Stop Image Animation
function stopAnimation() {
    clearInterval(interval);
}

// Initial Setup
images[0].classList.add("active");
startAnimation();

// VIDEO PLAY/PAUSE HANDLING
let videos = document.querySelectorAll("video");

function pauseVideos() {
    videos.forEach(video => video.pause());
}

function playVideos() {
    videos.forEach(video => {
        if (!video.paused) {
            video.play(); // Play only if it was playing before
        }
    });
}

// PREVENT VIDEOS FROM AUTO-PLAYING WHEN MENU BUTTONS CLICKED
document.querySelectorAll("#menu-content button").forEach(button => {
    button.addEventListener("click", function () {
        videos.forEach(video => video.pause()); // Pause all videos
    });
});
