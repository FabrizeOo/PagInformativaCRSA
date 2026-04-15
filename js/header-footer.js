//Header:
const headerTemplate = `
    <header>
        <div>
            <strong>Colegio San Alfonso</strong>
        </div>
        <nav>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="pages/nosotros/index.html">Nosotros</a></li>
                <li><a href="pages/niveles/">Niveles</a></li>
                <li><a href="pages/noticias/index.html">Noticias</a></li>
                <li><a href="#galeria">Galería</a></li>
                <li><a href="pages/admision/index.html">Admisión</a></li>
                <li><a href="pages/contacto/index.html">Contacto</a></li>
            </ul>
        </nav>
    </header>
`;

//Footer:
const footerTemplate = `
    <footer id="contacto">
        <div>
            <img src="assets/images/logo-footer.png" alt="Logo San Alfonso">
            <p>Educación integral basada en valores sólidos y excelencia académica.</p>
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