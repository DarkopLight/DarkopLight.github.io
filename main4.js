const toggleMenuButton = document.getElementById('toggleMenu');
    const menu = document.querySelector('.MenuS');

    // Agregar el evento de clic
    toggleMenuButton.addEventListener('click', function() {
        // Verificar el estado actual y alternar la visibilidad
        if (menu.style.visibility === 'hidden') {
            menu.style.visibility = 'visible';
        } else {
            menu.style.visibility = 'hidden';
        }
    });

    document.getElementById('toggleClose').addEventListener('click', function() {
        const menuS = document.querySelector('.MenuS');
        if (menuS.style.visibility === 'visible') {
            menuS.style.visibility = 'hidden';
        } else {
            menuS.style.visibility = 'visible';
        }
    });
    

    const toggleLists = document.querySelectorAll('.toggle-list');

    // Agregamos un evento de clic a cada uno de los enlaces
    toggleLists.forEach(function(toggle) {
        toggle.addEventListener('click', function() {
            // Encontramos la sub-lista relacionada
            const subList = this.nextElementSibling;
    
            // Alternamos el estado de visibilidad de la sub-lista
            if (subList.style.display === 'block') {
                subList.style.display = 'none';
            } else {
                subList.style.display = 'block';
            }
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        // Seleccionamos todos los 'li' que tienen submenús
        const menuItems = document.querySelectorAll('.MenuS > ul.Menu-I > li > a');
      
        // Variable para guardar el último 'ul' abierto
        let lastOpenMenu = null;
      
        menuItems.forEach(item => {
          item.addEventListener('click', function (e) {
            e.preventDefault();
      
            // Seleccionar el 'ul' anidado dentro del 'li' clicado
            const subMenu = this.nextElementSibling;
      
            // Si hay un menú abierto previamente, lo ocultamos
            if (lastOpenMenu && lastOpenMenu !== subMenu) {
              lastOpenMenu.style.display = 'none';
            }
      
            // Mostrar u ocultar el submenú actual
            if (subMenu.style.display === 'block') {
              subMenu.style.display = 'none';
            } else {
              subMenu.style.display = 'block';
            }
      
            // Guardamos el submenú actual como el último abierto
            lastOpenMenu = subMenu;
          });
        });
      });
      