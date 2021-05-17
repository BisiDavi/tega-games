const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.querySelector('.closemenu');
const subMenu = document.querySelector('.sub-menu');

let menuState = false;

const showMenu = () => {
    subMenu.style.display = 'block';
};

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    let menuList = !menuState;
    if (menuList) subMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
    console.log('closeMenu, i was clicked');
    mobileMenu.classList.remove('active');
    subMenu.style.display = 'none';
});
