let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(step) {
    slideIndex += step;
    showSlides(slideIndex);
}


function showSlides(n) {
    let slides = document.querySelectorAll(".slide");

    if (n >= slides.length) {
        slideIndex = 0;
    }

    if (n < 0) {
        slideIndex = slides.length - 1;
    }
    slides.forEach(slide => {
        slide.style.display = "none";
        slide.classList.remove("active");
    });
    slides[slideIndex].style.display = "block";
    slides[slideIndex].classList.add("active");
}
setInterval(() => {
    moveSlide(1);  
}, 3000);  

const navLinks = document.querySelectorAll('.list li a');
const currentPath = window.location.pathname.split('/').pop();
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});