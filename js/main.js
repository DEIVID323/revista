
        // main.js - Funciones de navegación y animaciones

    // Función para navegar entre páginas
    function navigateToPage(page) {
        // Crear efecto de transición
        document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';

            setTimeout(() => {
        // Simulamos la navegación (en un entorno real, usarías window.location.href)
        loadPage(page);
            }, 300);
        }

    // Función para simular la carga de páginas
    function loadPage(page) {
            const pages = {
        movies: createMoviesPage(),
    songs: createSongsPage(),
    dish: createDishPage(),
    books: createBooksPage(),
    activities: createActivitiesPage(),
    portada: createPortadaPage()
            };

    document.body.innerHTML = pages[page];
    document.body.style.opacity = '1';

            // Agregar animaciones a las cards
            setTimeout(() => {
                const cards = document.querySelectorAll('.recommendation-card');
                cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('fade-in');
        }, index * 100);
                });
            }, 100);
        }
// Inicializar animaciones al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    // Aplicar efectos de entrada suaves
    setTimeout(() => {
        const elements = document.querySelectorAll('.content-card, .recommendation-card');
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 300);
});

// Función para agregar efectos de hover dinámicos
function addHoverEffects() {
    const cards = document.querySelectorAll('.recommendation-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) rotateY(5deg)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) rotateY(0)';
        });
    });
}

// Función para mostrar información adicional (tooltip)
function initTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}// Inicializar animaciones al cargar la página
document.addEventListener('DOMContentLoaded', function () {
    // Aplicar efectos de entrada suaves
    setTimeout(() => {
        const elements = document.querySelectorAll('.content-card, .recommendation-card');
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 300);
});

// Función para agregar efectos de hover dinámicos
function addHoverEffects() {
    const cards = document.querySelectorAll('.recommendation-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) rotateY(5deg)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) rotateY(0)';
        });
    });
}

// Función para mostrar información adicional (tooltip)
function initTooltips() {
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
}