document.querySelector('.dropdown-menu').addEventListener('click', slider)
let slideInMenu =  document.querySelector('.header-links');
let closeMenu = document.querySelector('.x-menu');
function slider(){
    
    slideInMenu.classList.toggle('hidden');
    closeMenu.classList.toggle('x-menu-display')
}

document.querySelector('.x-menu').addEventListener('click', closeSlider);

function closeSlider(){
    slideInMenu.classList.toggle('hidden');
    closeMenu.classList.toggle('x-menu-display')
}