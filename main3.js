const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

// Cierra el menú hamburguesa cuando se hace clic en un enlace del menú
const menuItems = document.querySelectorAll("#nav a");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        nav.classList.remove("visible");
    });
});
