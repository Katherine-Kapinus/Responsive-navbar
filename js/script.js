
const burger = document.querySelector('.navbar__burger');
const items = document.querySelector('.navbar__items');   
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    items.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

let tabs = document.querySelectorAll('.item-tabs__title');
let tabsContents = document.querySelectorAll('.tabs-content__body');
console.log(tabs, tabsContents);
tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabsContents.forEach((content) => {
            content.classList.remove('active');
        })
        tabs.forEach((tab) => {
            tab.classList.remove('active');
        })
        tabsContents[index].classList.add('active');
        tabs[index].classList.add('active');
    })
})