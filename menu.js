const navLinks = document.querySelectorAll('.list li a');
const currentPath = window.location.pathname.split('/').pop();
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
        link.classList.add('active');
    }
});
    
document.addEventListener('DOMContentLoaded', () => {
    const categoryImages = document.querySelectorAll('.menubox .category');
    const drinkSections = document.querySelectorAll('.drink-images');

    categoryImages.forEach((category) => {
        category.addEventListener('click', () => {
            drinkSections.forEach((section) => section.style.display = 'none');
            const categoryId = category.getAttribute('data-category');
            const drinkSection = document.getElementById(categoryId);
            if (drinkSection) {
                drinkSection.style.display = 'flex';
            }
        });
    });
});
