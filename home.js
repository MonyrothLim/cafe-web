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
    // Hide all slides
    slides.forEach(slide => slide.style.display = "none");
    // Show the current slide
    slides[slideIndex].style.display = "block";
}