let slideIndex = 0;
showSlides(slideIndex);

// Function to move slides
function moveSlide(step) {
    slideIndex += step;
    showSlides(slideIndex);
}

// Function to show slides based on the index
function showSlides(n) {
    let slides = document.querySelectorAll(".slide");

    if (n >= slides.length) {
        slideIndex = 0;
    }

    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Hide all slides and remove 'active' class
    slides.forEach(slide => {
        slide.style.display = "none";
        slide.classList.remove("active");
    });

    // Show the current slide and add 'active' class
    slides[slideIndex].style.display = "block";
    slides[slideIndex].classList.add("active");
}

// Auto switch slides every 3 seconds
setInterval(() => {
    moveSlide(1);  // Automatically move to the next slide
}, 3000);  // 3000 milliseconds (3 seconds)
