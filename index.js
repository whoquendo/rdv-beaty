const menuIconMobil = document.querySelector('.menu');
const listMenuMobil = document.querySelector('.menu-mobil');

menuIconMobil.addEventListener('click', toggleMobilMenu);

function toggleMobilMenu() {
    listMenuMobil.classList.toggle('innactive');
}
