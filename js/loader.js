/**
 * Loader para manejar la inyección modular de secciones en inicio.html
 * Integración de todas las secciones del proyecto
 */

const sections = [
    { id: 'home-container', url: 'pages/home_partial.html' },
    { id: 'nosotros-container', url: 'pages/nosotros/nosotros.html' },
    { id: 'niveles-container', url: 'pages/niveles/niveles.html' },
    { id: 'noticias-container', url: 'pages/noticias/noticias.html' },
    { id: 'galeria-container', url: 'pages/galeria/galeria.html' },
    { id: 'admision-container', url: 'pages/admision/admision.html' },
    { id: 'contacto-container', url: 'pages/contacto/contacto.html' }
];

/**
 * Carga una sección individual y maneja la ejecución de scripts internos
 * @param {string} containerId - ID del contenedor
 * @param {string} url - URL del fragmento HTML
 */
async function loadSection(containerId, url) {
    const container = document.getElementById(containerId);
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Error loading ${url}`);
        const html = await response.text();
        
        // Inyectar HTML
        container.innerHTML = html;
        
        // Ejecutar scripts que vengan en el fragmento
        const scripts = container.querySelectorAll('script');
        scripts.forEach(oldScript => {
            const newScript = document.createElement('script');
            if (oldScript.src) {
                newScript.src = oldScript.src;
            } else {
                newScript.textContent = oldScript.textContent;
            }
            document.body.appendChild(newScript);
        });

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
    console.log("Iniciando carga de secciones integradas...");
    // Cargar todas las secciones en paralelo
    await Promise.all(sections.map(section => loadSection(section.id, section.url)));
    console.log("Integración completa.");

    // Manejar el desplazamiento suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href !== "#" && href.startsWith('#')) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                    window.history.pushState(null, null, href);
                }
            }
        });
    });
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);
