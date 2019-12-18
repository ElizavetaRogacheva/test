const menuBtn = document.querySelector('.menu');
const menuBlock = document.querySelector('.main-nav');

menuBtn.addEventListener('click', () => {
    menuBlock.classList.toggle('vision');
})