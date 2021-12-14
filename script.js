'use strict';

const upBtn = document.querySelector('.up-button'),
        downBtn = document.querySelector('.down-button'),
        sidebar = document.querySelector('.sidebar'),
        picture = document.querySelector('.main-slide'), 
        slideLength = picture.querySelectorAll('div').length,
        container = document.querySelector('.container');

sidebar.style.top = `-${(slideLength - 1) * 100}vh`;


let activeSlide = 0;

downBtn.addEventListener('click', (e) => {
    changeSlide('down');
});


upBtn.addEventListener('click', (e) => {
    changeSlide('up');
});


function changeSlide(btn) {
    if (btn === 'up') {
        activeSlide++;
        if (activeSlide === slideLength){
            activeSlide = 0;
        }
    } else if (btn === 'down') {
        activeSlide--;
        if (activeSlide < 0) {
            activeSlide = slideLength - 1;
        }
    }
    console.log(activeSlide);
    const height = container.clientHeight;

    picture.style.transform = `translateY(-${activeSlide * height}px)`;

    sidebar.style.transform = `translateY(${activeSlide * height}px)`;
}



