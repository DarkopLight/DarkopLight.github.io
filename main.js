// Seleccionar el botón "My Services" y "Projects"
const servicesButton = document.querySelector(".Services");
const projectsButton = document.querySelector(".Projects");

// Seleccionar los divs C2, C3 y C4
const skillsDiv = document.querySelector(".C2");
const servicesDiv = document.querySelector("#C3");
const projectsDiv = document.querySelector("#C4");

// Variables para rastrear el estado de los contenidos
let servicesVisible = false;
let projectsVisible = false;

// Función para alternar la visibilidad del contenedor de servicios
function toggleServicesVisibility() {
    // Alternar la visibilidad de los divs C3 y C2
    servicesDiv.style.visibility = servicesVisible ? "hidden" : "visible";
    skillsDiv.style.visibility = servicesVisible ? "visible" : "hidden";
    // Invertir el estado
    servicesVisible = !servicesVisible;
    // Ocultar el div de proyectos si estaba visible
    if (projectsVisible) {
        projectsDiv.style.visibility = "hidden";
        projectsVisible = false;
        // Cambiar la clase del botón de proyectos para desactivar el efecto hover
        projectsButton.classList.remove("hovered");
    }
    // Cambiar la clase del botón de servicios según el estado actual
    servicesButton.classList.toggle("pressed");
    // Desactivar el efecto hover del botón "Projects"
    projectsButton.classList.remove("hovered");
}

// Función para alternar la visibilidad del contenedor de proyectos
function toggleProjectsVisibility() {
    // Alternar la visibilidad del div C4
    projectsDiv.style.visibility = projectsVisible ? "hidden" : "visible";
    // Ocultar el div C2 si estaba visible
    skillsDiv.style.visibility = projectsVisible ? "visible" : "hidden";
    // Invertir el estado
    projectsVisible = !projectsVisible;
    // Ocultar el div de servicios si estaba visible
    if (servicesVisible) {
        servicesDiv.style.visibility = "hidden";
        servicesVisible = false;
        // Cambiar la clase del botón de servicios para desactivar el efecto hover
        servicesButton.classList.remove("pressed");
    }
    // Cambiar la clase del botón de proyectos para activar el efecto hover
    projectsButton.classList.toggle("hovered");
    // Remover la clase hovered si el botón de proyectos ya no está presionado
    if (!projectsVisible) {
        projectsButton.classList.remove("hovered");
    }
}

// Añadir eventos de clic a los botones
servicesButton.addEventListener("click", toggleServicesVisibility);
projectsButton.addEventListener("click", function() {
    toggleProjectsVisibility();
    // Agregar o quitar la clase "pressed" al botón "Projects"
    projectsButton.classList.toggle("pressed");
    // Desactivar el efecto hover del botón "My Services"
    servicesButton.classList.remove("hovered");
});
