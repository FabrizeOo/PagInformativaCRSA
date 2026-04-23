/**
 * Loader para manejar la inyección modular de secciones en inicio.html
 */

const sections = [
    { id: 'home-container', url: 'pages/home_partial.html' },
    { id: 'admision-container', url: 'pages/admision/admision.html' },
    { id: 'contacto-container', url: 'pages/contacto/contacto.html' }
];

/**
 * Carga una sección individual
 * @param {string} containerId - ID del contenedor
 * @param {string} url - URL del fragmento HTML
 */
async function loadSection(containerId, url) {
    const container = document.getElementById(containerId);
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error loading ${url}`);
        const html = await response.text();
        container.innerHTML = html;
        console.log(`Sección cargada: ${containerId}`);
    } catch (error) {
        console.error(`Error al cargar ${containerId}:`, error);
        container.innerHTML = `<p style="padding: 20px; text-align: center; color: red;">Error al cargar sección: ${url}</p>`;
    }
}

/**
 * Inicializa la carga de todas las secciones
 */
async function init() {
    console.log("Iniciando carga de secciones modulares...");
    // Cargar todas las secciones en paralelo
    await Promise.all(sections.map(section => loadSection(section.id, section.url)));
    console.log("Todas las secciones han sido cargadas.");

    // Manejar el desplazamiento suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== "#") {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                    // Actualizar el hash en la URL sin recargar
                    window.history.pushState(null, null, href);
                }
            }
        });
    });
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);
