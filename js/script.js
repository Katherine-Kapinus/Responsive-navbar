//- burger icon animation
const burger = document.querySelector('.navbar__burger');
const menu = document.querySelector(".navbar__items");
burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

//- swipe for closing menu
// const burger = document.querySelector(".navbar__burger");
// const menu = document.querySelector(".navbar__items");
// that variables is above
let startX = 0;
let endX = 0;

menu.addEventListener("touchstart", (e) => {
    startX = e.changedTouches[0].clientX;
}, { passive: true });

menu.addEventListener("touchend", (e) => {
    let endX = e.changedTouches[0].clientX;
    let diffX = endX - startX;
    if (diffX > 50) {
        menu.classList.remove("active");
        burger.classList.remove("active");
        document.body.classList.remove("no-scroll");
    }
}, { passive: true });

//- close menu on link click
let menuLinks = document.querySelectorAll('.navbar__link');
console.log(menuLinks);
menuLinks.forEach((link) => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        burger.classList.remove('active');
        document.body.classList.remove('no-scroll');
    })
});     



//- tabs logic
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


//- accordion logic
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


//- popup

let buttonOpenModal = document.querySelector('.modal__button');
let buttonCloseModal = document.querySelector('.popup__button');
let popup = document.querySelector('.modal__popup');

buttonOpenModal.addEventListener('click', () => {
    popup.classList.add('active');
    document.body.classList.add('no-scroll');
})

buttonCloseModal.addEventListener('click', () => {
    popup.classList.remove('active');
    document.body.classList.remove('no-scroll');
})
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
    // клікнули саме по бекдропу
        popup.classList.remove("active");
        document.body.classList.remove('no-scroll');
    }
});


//- slider

const sliderTrack = document.querySelector('.slider__track');
const sliderImages = document.querySelectorAll('.slider__track .slider__slide');


//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = sliderImages[0].clientWidth;

sliderTrack.style.transform = `translateX(${-size * counter}px)`;

//Button Listeners
nextBtn.addEventListener('click', () => {
    if(counter >= sliderImages.length - 1) return;
    sliderTrack.style.transition = "transform 0.4s ease-in-out";
    counter++;
    sliderTrack.style.transform = `translateX(${-size * counter}px)`;
});

prevBtn.addEventListener('click', () => {
    if(counter <= 0) return;
    sliderTrack.style.transition = "transform 0.4s ease-in-out";
    counter--;
    sliderTrack.style.transform = `translateX(${-size * counter}px)`;
});

sliderTrack.addEventListener('transitionend', () => {
    if(sliderImages[counter].id === 'lastClone'){
        sliderTrack.style.transition = "none";
        counter = sliderImages.length - 2;
        sliderTrack.style.transform = `translateX(${-size * counter}px)`;
    }
    if(sliderImages[counter].id === 'firstClone'){
        sliderTrack.style.transition = "none";
        counter = sliderImages.length - counter;
        sliderTrack.style.transform = `translateX(${-size * counter}px)`;
    }
});