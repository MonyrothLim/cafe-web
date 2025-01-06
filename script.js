let slideIndex = 0;


function showSlides() {
    let slides = document.querySelectorAll(".slide");
    

    slides.forEach(slide => slide.style.display = "none");


    slideIndex++;


    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }


    slides[slideIndex].style.display = "block";

    setTimeout(showSlides, 3000);
}


window.onload = showSlides;
