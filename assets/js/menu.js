const openToggle = document.querySelector('.toggle__open');
const closeToggle = document.querySelector('.toggle__close');
const headerNav = document.querySelector('.header__nav');

openToggle.addEventListener('click', (e)=>{
    headerNav.classList.add('.header__nav--opened');
})