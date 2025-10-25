// Función para cargar noticias desde la base de datos
function cargarNoticias() {
    // Por ahora, simular que no hay noticias
    var noticias = []; // Cambiar por datos reales de la API
    mostrarNoticias(noticias);
}

function mostrarNoticias(noticias) {
    var container = document.getElementById('noticias-container');
    var noNoticias = document.getElementById('no-noticias');
    
    if (!container) return; // Si no existe el contenedor, salir
    
    if (noticias.length === 0) {
        // Mostrar mensaje genérico
        if (noNoticias) noNoticias.style.display = 'block';
    } else {
        // Ocultar mensaje genérico y mostrar noticias
        if (noNoticias) noNoticias.style.display = 'none';
        
        // Limpiar noticias anteriores
        var noticiasItems = container.querySelectorAll('.noticia-item');
        for (var i = 0; i < noticiasItems.length; i++) {
            noticiasItems[i].remove();
        }
        
        // Agregar nuevas noticias
        var noticiasLimitadas = noticias.slice(0, 3);
        for (var j = 0; j < noticiasLimitadas.length; j++) {
            var noticia = noticiasLimitadas[j];
            var noticiaHTML = 
                '<div class="col-md-4 noticia-item">' +
                    '<div class="card">' +
                        '<img src="' + noticia.imagen + '" class="card-img-top" alt="' + noticia.titulo + '">' +
                        '<div class="card-body">' +
                            '<h5 class="card-title">' + noticia.titulo + '</h5>' +
                            '<p class="card-text">' + noticia.resumen + '</p>' +
                            '<small class="text-muted">' + noticia.fecha + '</small>' +
                        '</div>' +
                    '</div>' +
                '</div>';
            container.insertAdjacentHTML('beforeend', noticiaHTML);
        }
    }
}

// Funcionalidad del navbar móvil
function toggleNavbar() {
    var navbarNav = document.querySelector('.navbar-nav');
    navbarNav.classList.toggle('active');
}

// Cerrar menú al hacer clic en un enlace (móvil)
function closeNavbar() {
    var navbarNav = document.querySelector('.navbar-nav');
    if (window.innerWidth <= 768) {
        navbarNav.classList.remove('active');
    }
}

// Marcar página activa
function setActivePage() {
    var currentPage = window.location.pathname.split('/').pop() || 'index.html';
    var navLinks = document.querySelectorAll('.nav-link');
    
    for (var i = 0; i < navLinks.length; i++) {
        var link = navLinks[i];
        var href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    }
}

// Inicializar cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    cargarNoticias();
    setActivePage();
    
    // Event listeners para navbar
    var navbarToggle = document.querySelector('.navbar-toggle');
    if (navbarToggle) {
        navbarToggle.addEventListener('click', toggleNavbar);
    }
    
    var navLinks = document.querySelectorAll('.nav-link');
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', closeNavbar);
    }
});