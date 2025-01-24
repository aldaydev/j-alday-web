const openToggle = document.getElementById('toggle__open');
const closeToggle = document.getElementById('toggle__close');
const headerNav = document.querySelector('.header__nav');
const header = document.getElementById('header');

openToggle.addEventListener('click', (e)=>{
    openToggle.classList.toggle('hidden');
    closeToggle.classList.toggle('hidden');
    headerNav.classList.add('visible');

    header.classList.remove('header--black-trans');
    header.classList.add('header--black');
    headerNav.classList.add('header__nav--black');
})

closeToggle.addEventListener('click', (e)=>{
    openToggle.classList.toggle('hidden');
    closeToggle.classList.toggle('hidden');
    headerNav.classList.remove('visible');

    if(window.scrollY === 0){
        header.classList.remove('header--black');
        header.classList.add('header--black-trans');
        headerNav.classList.remove('header__nav--black');
    }
})

window.addEventListener('resize', ()=>{

    const isVisible = document.querySelector('.visible');

    if(isVisible){
        headerNav.classList.remove('visible');
        openToggle.classList.remove('hidden');
        closeToggle.classList.add('hidden');
    }

})

window.addEventListener('scroll', ()=>{

    const isVisible = document.querySelector('.visible');
    if(isVisible){
        headerNav.classList.remove('visible');
        openToggle.classList.remove('hidden');
        closeToggle.classList.add('hidden');
    }

    if(window.scrollY > 0){
        header.classList.remove('header--black-trans');
        header.classList.add('header--black');
        headerNav.classList.add('header__nav--black');
    }else{
        header.classList.remove('header--black');
        header.classList.add('header--black-trans');
        headerNav.classList.remove('header__nav--black');
    }
})