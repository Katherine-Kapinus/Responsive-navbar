
const burger = document.querySelector('.navbar__burger');
const items = document.querySelector('.navbar__items');   
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    items.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});