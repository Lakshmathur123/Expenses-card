
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.toggle');
    const circle = document.querySelector('.circle');

    toggle.addEventListener('click', function () {
        if (circle.style.transform === 'translateX(25px)') {
            circle.style.transform = 'translateX(0)';
        } else {
            circle.style.transform = 'translateX(25px)';
        }
    });
});