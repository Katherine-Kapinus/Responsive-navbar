
const burger = document.querySelector('.navbar__burger');
const items = document.querySelector('.navbar__items');   
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    items.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});


let tabs = document.querySelectorAll('.item-tabs__title');
let tabsContents = document.querySelectorAll('.tabs-content__body');
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


let accordionHeader = document.querySelectorAll('.accordion__header');
let accordionContent = document.querySelectorAll('.accordion__content');
let icon = document.querySelectorAll('.icon-plus');
accordionHeader.forEach((header, index) => {
    header.addEventListener('click', () => {

        let isActive = accordionContent[index].classList.contains('active');

        accordionContent.forEach((item) => {
            item.classList.remove('active');
        });
        icon.forEach((ic) => {
            ic.classList.remove('active');
        });

        if (!isActive) {
            accordionContent[index].classList.add('active');
            icon[index].classList.add('active');
        };
    });
});

