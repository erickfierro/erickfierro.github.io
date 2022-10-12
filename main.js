const btnMenu = document.querySelector(".navbar__menu");
const menuDesplegable = document.querySelector(".container-links");

btnMenu.addEventListener('click', desplegarMenu);

function desplegarMenu() {
    menuDesplegable.classList.toggle("active");
}

AOS.init();