const hamburgerMenu = document.querySelector(".mobile-icon");
const closeMenu = document.querySelector(".mobile-x");
const menu = document.querySelector(".mobile-menu");

hamburgerMenu.addEventListener("click", () => {
    menu.classList.toggle("mobile-menu-active");
});

closeMenu.addEventListener("click", () => {
    menu.classList.toggle("mobile-menu-active");
});
