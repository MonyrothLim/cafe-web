const navLinks = document.querySelectorAll('.list li a');
const currentPath = window.location.href;
navLinks.forEach(link => {
    if (currentPath.includes(link.getAttribute('href'))) {
        link.classList.add('active');
    }
});
