const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.querySelector('.closemenu');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

closeMenu.addEventListener('click', () => {
    console.log('closeMenu, i was clicked');
    mobileMenu.classList.remove('active');
});
