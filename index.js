"use strict";

const upBtn = document.querySelector('.up-button'),
 downBtn = document.querySelector('.down-button'),
 sidebar = document.querySelector('.sidebar'),
 mainSlide = document.querySelector('.main-slide'),
 slidesCount = mainSlide.querySelectorAll('div').length,
 container = document.querySelector('.container');

 let activeSlideIndex = 0;


 sidebar.style.top = `-${(slidesCount - 1) * 100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
});

downBtn.addEventListener('click', () => {
    changeSlide('down' );
});

document.addEventListener('keydown', e => {
    if(e.key === 'ArrowUp') {
        changeSlide('up');
    } else if (e.key === 'ArrowDown') {
        changeSlide('down' );
    }
});

function changeSlide(direction) {
if(direction === 'up') {
    activeSlideIndex += 1;
    if(activeSlideIndex === slidesCount) {
        activeSlideIndex = 0;
    }
} else if (direction === 'down') {
    activeSlideIndex -= 1;
    if (activeSlideIndex < 0) {
        activeSlideIndex = slidesCount - 1;
    }
}

const height = container.clientHeight;

mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;
sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}
const person = {
    firstName: 'bob',
    showName() {
      console.log(this.firstName);
    },
  };
  
  const foo = function(callback) {
    callback();
  };
  
  foo(person.showName);