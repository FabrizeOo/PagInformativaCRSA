//Header:
const headerTemplate = `
    <header>
        <div class="logo-container">
            <img src="assets/images/logo.png" alt="Logo San Alfonso" class="logo-header">
            <strong>Colegio San Alfonso</strong>
        </div>
        <nav>
            <ul>
                <li><a href="#home">Inicio</a></li>
                <li><a href="#nosotros">Nosotros</a></li>
                <li>
                    <a href="#" id="btn-niveles">Niveles</a>
                    <ul id="submenu-niveles" style="display: none;">
                        <li><a href="#inicial">Inicial</a></li>
                        <li><a href="#primaria">Primaria</a></li>
                        <li><a href="#secundaria">Secundaria</a></li>
                    </ul>
                </li>
                <li><a href="#noticias">Noticias</a></li>
                <li><a href="#galeria">Galería</a></li>
                <li><a href="#admision">Admisión</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </nav>
    </header>
`;

//Footer:
const footerTemplate = `
    <footer>
        <div class="footer-info-principal">
            
            <div class="footer-brand">
                <img src="assets/images/logo.png" alt="Logo San Alfonso" class="logo-footer">
                <div class="footer-titulos">
                    <strong>Colegio San Alfonso</strong>
                    <span>30 años formando líderes</span>
                </div>
            </div>
            
            <p class="footer-descripcion">Educación integral de calidad con valores sólidos y metodología innovadora.</p>
            
            <div class="footer-sociales">
                <a href="https://www.facebook.com/crsanalfonso/?locale=es_LA">f</a>
                <a href="#">ig</a>
                <a href="#">yt</a>
            </div>

        </div>

        <div>
            <h3>Enlaces Rápidos</h3>
            <ul>
                <li><a href="#nosotros">Nosotros</a></li>
                <li><a href="#niveles">Niveles Educativos</a></li>
                <li><a href="#noticias">Noticias</a></li>
                <li><a href="#contacto">Contacto</a></li>
            </ul>
        </div>
        
        <div>
            <h3>Contacto</h3>
            <p>📍 Av. San Alfonso 123, Lima, Perú</p>
            <p>📞 (01) 234-5678</p>
            <p>✉️ info@sanalfonso.edu.pe</p>
        </div>
        
        <div>
            <h3>Horario de Atención</h3>
            <p>Lunes - Viernes: 7:30 AM - 4:00 PM</p>
        </div>
    </footer>
`;

//Para que los HTML puedan reconocerlos
document.getElementById('header-container').innerHTML = headerTemplate;
document.getElementById('footer-container').innerHTML = footerTemplate;

//Funcionamiento de "niveles"
const btnNiveles = document.getElementById('btn-niveles');
const submenuNiveles = document.getElementById('submenu-niveles');


btnNiveles.addEventListener('click', function(evento) {
    evento.preventDefault(); 
    if (submenuNiveles.style.display === 'none') {
        submenuNiveles.style.display = 'block';
    } else {
        submenuNiveles.style.display = 'none';
    }
});