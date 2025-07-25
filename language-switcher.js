// Sistema de cambio de idioma para Studio & Progetto
class LanguageSwitcher {
    constructor() {
        this.currentLanguage = localStorage.getItem("language") || "es";
        this.translations = {
            es: {
                // Navbar
                "nav-inicio": "Inicio",
                "nav-productos": "Productos",
                "nav-copias": "Copias e Impresiones",
                "nav-conocenos": "Conócenos",

                // Footer-section
                "footer-contacto": "Contacto",
                "footer-sobre-nosotros": "Sobre Nosotros",
                "footer-terminos": "Términos y Condiciones",
                "footer-politica": "Política de Privacidad",
                "footer-horario": "Horarios",
                "footer-day": "Lunes a Sábado",
                "footer-enlaces": "Enlaces rápidos",
                "footer-ofertas": "Ofertas Especiales",
                "footer-inicia-sesion": "Iniciar Sesión",
                "footer-siguenos": "Síguenos",

                // Welcome Dialog
                "welcome-dialog-title": "¡Bienvenido a Studio & Progetto!",
                "welcome-dialog-description": "Estamos aquí para ofrecerte los mejores productos y servicios de impresión y copias.",
                "welcome-dialog-close": "Cerrar",

                // Hero Slider - Index
                "hero-slider1-content": "Todo en útiles escolares, universitarios y de oficina",
                "hero-slider1-title": "Bienvenido a Studio & Progetto",
                "hero-slider1-description": "¡Explora nuestros artículos!",
                "hero-slider1-btn": "Ver Productos",
                "hero-slider2-title": "Servicios de Copias e Impresiones",
                "hero-slider2-content": "Rápidos, económicos y de alta calidad",
                "hero-slider2-btn": "Más Información",
                "hero-slider3-title": "Servicio de delivery",
                "hero-slider3-content": "Recibe tus productos donde sea que te encuentres y cuando los necesites",
                "hero-slider3-btn": "Conoce más",

                // Services Section
                "services-title": "¿Qué ofrecemos?",
                "services-description": "Conoce lo que brindamos al consumidor.",
                "services-utiles-title": "Útiles escolares",
                "services-utiles-text": "Ofrecemos una gran variedad de útiles como lapiceros, colores, plumones, clips, papelería y más.",
                "services-products-title": "Útiles universitarios",
                "services-products-text": "Entra y aprovecha los artículos especiales que tenemos para cada una de las carreras.",
                "services-copias-title": "Copias e Impresiones",
                "services-copias-text": "Servicios de impresión y copiado de alta calidad, rápidos y económicos.",
                "services-delivery-title": "Servicio de Delivery",
                "services-delivery-text": "Entregamos tus productos donde los necesites, cuando los necesites.",
                "services-atencion-title": "Atención Personalizada",
                "services-atencion-text": "Nuestro equipo está siempre dispuesto a ayudarte con tus necesidades específicas.",

                // Login Form
                "form-bienvenido": "Bienvenido de vuelta",
                "form-bienvenido-descripcion": "Inicia sesión para acceder a tu cuenta y disfrutar de nuestros servicios.",
                "form-email": "Correo electrónico",
                "form-password": "Contraseña",
                "form-login-btn": "Iniciar Sesión",
                "form-register-link": "¿No tienes cuenta? Regístrate",
                "form-forgot-password": "¿Olvidaste tu contraseña?",

                // Products Page
                "products-title": "Nuestros Productos",
                "products-description": "Descubre nuestra amplia gama de productos de oficina y escolares",
                "products-category-all": "Todos",
                "products-category-school": "Escolares",
                "products-category-office": "Oficina",
                "products-category-art": "Arte",
                "products-add-cart": "Agregar al Carrito",
                "products-view-details": "Ver Detalles",

                // Cart Page
                "cart-title": "Carrito de Compras",
                "cart-empty": "Tu carrito está vacío",
                "cart-continue-shopping": "Continuar Comprando",
                "cart-item": "Producto",
                "cart-price": "Precio",
                "cart-quantity": "Cantidad",
                "cart-total": "Total",
                "cart-subtotal": "Subtotal",
                "cart-shipping": "Envío",
                "cart-final-total": "Total Final",
                "cart-checkout": "Proceder al Pago",
                "cart-remove": "Eliminar",

                // About Us Page
                "about-title": "Conócenos",
                "about-subtitle": "Nuestra Historia",
                "about-description": "Studio & Progetto es una empresa dedicada a brindar los mejores productos y servicios de oficina, escolares y de impresión.",
                "about-mission-title": "Nuestra Misión",
                "about-mission-text": "Proporcionar productos de calidad y servicios excepcionales para satisfacer las necesidades de nuestros clientes.",
                "about-vision-title": "Nuestra Visión",
                "about-vision-text": "Ser la empresa líder en productos de oficina y servicios de impresión en nuestra región.",
                "about-values-title": "Nuestros Valores",
                "about-values-quality": "Calidad",
                "about-values-service": "Servicio",
                "about-values-innovation": "Innovación",
                "about-values-commitment": "Compromiso",

                // Copies and Printing Page
                "copies-title": "Copias e Impresiones",
                "copies-description": "Servicios profesionales de impresión y copiado",
                "copies-service-bw": "Copias en Blanco y Negro",
                "copies-service-color": "Copias a Color",
                "copies-service-binding": "Anillado y Empastado",
                "copies-service-laminating": "Plastificado",
                "copies-service-large": "Impresiones de Gran Formato",
                "copies-price-list": "Lista de Precios",
                "copies-contact": "Contáctanos para más información",

                // Delivery Page
                "delivery-title": "Servicio de Delivery",
                "delivery-description": "Recibe tus productos en la comodidad de tu hogar u oficina",
                "delivery-coverage": "Cobertura de Entrega",
                "delivery-times": "Horarios de Entrega",
                "delivery-cost": "Costo de Envío",
                "delivery-free-shipping": "Envío gratis en compras mayores a S/50",
                "delivery-order-now": "Ordenar Ahora",
                "delivery-track-order": "Rastrear Pedido",

                // Privacy Policy
                "privacy-title": "Política de Privacidad",
                "privacy-last-updated": "Última actualización",
                "privacy-intro": "En Studio & Progetto, respetamos tu privacidad y nos comprometemos a proteger tus datos personales.",
                "privacy-data-collection": "Recopilación de Datos",
                "privacy-data-use": "Uso de Datos",
                "privacy-data-protection": "Protección de Datos",
                "privacy-contact": "Contacto",

                // Terms and Conditions
                "terms-title": "Términos y Condiciones",
                "terms-acceptance": "Aceptación de Términos",
                "terms-services": "Descripción de Servicios",
                "terms-user-obligations": "Obligaciones del Usuario",
                "terms-payment": "Términos de Pago",
                "terms-delivery": "Términos de Entrega",
                "terms-returns": "Política de Devoluciones",
                "terms-liability": "Limitación de Responsabilidad",
                "terms-modifications": "Modificaciones",

                // Common Elements
                "btn-more-info": "Más Información",
                "btn-contact": "Contactar",
                "btn-buy-now": "Comprar Ahora",
                "btn-add-cart": "Agregar al Carrito",
                "btn-view-more": "Ver Más",
                "btn-back": "Volver",
                "btn-next": "Siguiente",
                "btn-previous": "Anterior",
                "btn-close": "Cerrar",
                "btn-save": "Guardar",
                "btn-cancel": "Cancelar",
                "btn-accept": "Aceptar",
                "btn-reject": "Rechazar",

                // Contact Information
                "contact-phone": "Teléfono",
                "contact-email": "Email",
                "contact-address": "Dirección",
                "contact-hours": "Horarios de Atención",
                "contact-social": "Redes Sociales",

                // Messages
                "msg-success": "Operación exitosa",
                "msg-error": "Ha ocurrido un error",
                "msg-loading": "Cargando...",
                "msg-no-results": "No se encontraron resultados",
                "msg-confirm": "¿Estás seguro?",
                "msg-item-added": "Producto agregado al carrito",
                "msg-item-removed": "Producto eliminado del carrito",

                //section products
                "section-vendidos": "Productos más vendidos",
                "section-products1": "Cuadernos universitarios",
                "section-products1-cardback-description": "Cuadernos de alta calidad con hojas lisas o rayadas, ideales para tus apuntes y trabajos universitarios. Disponibles en varios colores.",
                "section-products2": "Pack de lapiceros",
                "section-products2-cardback-description": "Set de 12 lapiceros de tinta suave y secado rápido, ergonómicos para largas sesiones de escritura.",
                "section-products3": "Carpetas A4",
                "section-products3-cardback-description": "Carpetas organizadoras con separadores y bolsillos internos, perfectas para documentos importantes y trabajos universitarios.",
                "section-products-btn": "Ver todos los productos",

                //section proveedores
                "section-proveedores": "Nuestros Proveedores",

                //section visitanos
                "section-visitanos": "Visítanos",
                "section-visitanos-directory": "Calle Las Gemas 626, Urb. Santa Inés, Trujillo, Perú",
                "section-visitanos-atencion": "Lunes a Sábado, 8am - 9pm",
                "section-visitanos-btn": "Cómo llegar",

                //frame1
                "frame1-title": "Contáctanos",
                "frame1-nombre":"Nombre completo:",
                "frame1-ip":"Dirección exacta:",
                "frame1-ref": "Referencia:",
                "frame1-zona": "Zona:",
                "frame1-entrega":"Productos a entregar:",
                "frame1-fecha":"Fecha de entrega:",
                "frame1-hora":"Hora de aproximada:",
                "frame1-pago":"Método de pago:",
                "frame1-telefono":"Teléfono",
                "frame1-mensaje":"Instruccciones adicionales:",
                "frame1-archivo":"Adjuntar archivo (opcional):",

                //Botones
                "btn-select": "Seleccionar archivo",
                "btn-enviar": "Enviar solicitud",
                "btn-info": "Obtener información de ubicación",

                //sitemap
                "sitemap-title": "Explora Studio & Progetto",
                "sitemap-1-title": "Página Principal",
                "sitemap-1-desc": "El corazón de nuestro sitio web con todas las opciones principales.",
                "sitemap-btn":"Explorar",
                "sitemap-2-title": "Nuestros Productos",
                "sitemap-2-desc": "Descubre nuestra amplia gama de productos creativos",
                "sitemap-3-title": "Copias e Impresiones",
                "sitemap-3-desc": "Servicios profesionales de impresión y reproducción",
                "sitemap-4-title": "Delivery",
                "sitemap-4-desc": "Envíos rápidos y seguros a tu ubicación",
                "sitemap-5-title": "Carrito de Compras",
                "sitemap-5-desc": "Revisa y gestiona tus productos seleccionados",
                "sitemap-6-title": "Iniciar Sesión",
                "sitemap-6-desc": "Accede a tu cuenta personal",
                "sitemap-7-title": "Términos y Condiciones",
                "sitemap-7-desc": "Consulta nuestros términos de servicio",
                "sitemap-8-title": "Política de Privacidad",
                "sitemap-8-desc": "Conoce cómo protegemos tus datos",
                "sitemap-9-title": "Gracias",
                "sitemap-9-desc": "Ten un lindo día, vuelva pronto",

                //copias
                "copias-title": "Servicios de Copias e Impresión",
                "copias-desc": "Ofrecemos servicios profesionales de copias e impresión, copiado y escaneo. Trabajamos con diversos formatos y tipos de papel",
                "copias1-title": "Impresión",
                "copias1-desc": "Imprime tus documentos con la mejor calidad.",
                "copias2-title": "Copias",
                "copias2-desc": "Copias rápidas y económicas.",
                "copias3-title": "Escaneo",
                "copias3-desc": "Digitaliza tus documentos",

                //inventario
                "inventario-title": "Catálogo de Productos",
                "buscar":"Buscar Productos",

                //delivery
                "delivery-title": "Servicio de Delivery",  
                "delivery-desc": "Llevamos tus productos hasta la puerta de tu casa, oficina o institución educativa. Rápido, seguro y confiable.",
                "delivery1":"Zonas de cobertura",
                "delivery1-desc": "Servicio disponible en todo Trujillo y distritos aledaños.",
                "delivery2":"Horarios",
                "delivery2-desc": "Lunes a Sábado de 9:00 am a 8:00 pm.",
                "delivery3":"Costos",
                "delivery3-desc": "Varían según la zona y el monto de compra.",
                "pregunta": "Cómo funciona?",
                "rpt1":"Elige tus productos y agrégales al carrito.",
                "rpt2":" Proporciona tu ubicación para calcular el costo de envío.",
                "rpt3":"Realiza el pago de forma segura.",
                "rpt4":"Recibe tu pedido en la puerta de tu casa.",
                "zona": "Zona de Delivery",
                "zona-desc":"Realizamos envíos a todas las zonas de Trujillo:",
                "urb": "Urbanizaciones Residenciales",
                "solicitar": "Solicitar Delivery",

                //Carrito de Compras
                "car-title":"Resumen de compra",
                "car-sub":"subtotal",
                "car-del":"delivery",
                "car-total":"total",
                "car-btn-del":"Necesito delivery",
                "car-btn":"Proceder al pago",
                "car-con":"Continuar comprando"

            },
            en: {
                // Navbar
                "nav-inicio": "Home",
                "nav-productos": "Products",
                "nav-copias": "Copies and Printing",
                "nav-conocenos": "About Us",

                // Footer-section
                "footer-contacto": "Contact",
                "footer-sobre-nosotros": "About Us",
                "footer-terminos": "Terms and Conditions",
                "footer-politica": "Privacy Policy",
                "footer-horario": "Hours",
                "footer-day": "Monday to Saturday",
                "footer-enlaces": "Quick Links",
                "footer-ofertas": "Special Offers",
                "footer-inicia-sesion": "Sign In",
                "footer-siguenos": "Follow Us",

                // Welcome Dialog
                "welcome-dialog-title": "Welcome to Studio & Progetto!",
                "welcome-dialog-description": "We are here to offer you the best printing and copying products and services.",
                "welcome-dialog-close": "Close",

                // Hero Slider - Index
                "hero-slider1-content": "Everything in school, university and office supplies",
                "hero-slider1-title": "Welcome to Studio & Progetto",
                "hero-slider1-description": "Explore our items!",
                "hero-slider1-btn": "View Products",
                "hero-slider2-title": "Copy and Print Services",
                "hero-slider2-content": "Fast, economical and high quality",
                "hero-slider2-btn": "More Information",
                "hero-slider3-title": "Delivery Service",
                "hero-slider3-content": "Receive your products wherever you are and whenever you need them",
                "hero-slider3-btn": "Learn More",

                // Services Section
                "services-title": "What do we offer?",
                "services-description": "Discover what we provide to consumers.",
                "services-utiles-title": "School Supplies",
                "services-utiles-text": "We offer a wide variety of supplies such as pens, colors, markers, clips, stationery and more.",
                "services-products-title": "University Supplies",
                "services-products-text": "Come in and take advantage of the special items we have for each career.",
                "services-copias-title": "Copies and Printing",
                "services-copias-text": "High quality printing and copying services, fast and economical.",
                "services-delivery-title": "Delivery Service",
                "services-delivery-text": "We deliver your products where you need them, when you need them.",
                "services-atencion-title": "Personalized Attention",
                "services-atencion-text": "Our team is always ready to help you with your specific needs.",

                // Login Form
                "form-bienvenido": "Welcome back",
                "form-bienvenido-descripcion": "Log in to access your account and enjoy our services.",
                "form-email": "Email",
                "form-password": "Password",
                "form-login-btn": "Sign In",
                "form-register-link": "Don't have an account? Sign up",
                "form-forgot-password": "Forgot your password?",

                // Products Page
                "products-title": "Our Products",
                "products-description": "Discover our wide range of office and school products",
                "products-category-all": "All",
                "products-category-school": "School",
                "products-category-office": "Office",
                "products-category-art": "Art",
                "products-add-cart": "Add to Cart",
                "products-view-details": "View Details",

                // Cart Page
                "cart-title": "Shopping Cart",
                "cart-empty": "Your cart is empty",
                "cart-continue-shopping": "Continue Shopping",
                "cart-item": "Product",
                "cart-price": "Price",
                "cart-quantity": "Quantity",
                "cart-total": "Total",
                "cart-subtotal": "Subtotal",
                "cart-shipping": "Shipping",
                "cart-final-total": "Final Total",
                "cart-checkout": "Proceed to Checkout",
                "cart-remove": "Remove",

                // About Us Page
                "about-title": "About Us",
                "about-subtitle": "Our Story",
                "about-description": "Studio & Progetto is a company dedicated to providing the best office, school and printing products and services.",
                "about-mission-title": "Our Mission",
                "about-mission-text": "To provide quality products and exceptional services to meet our customers' needs.",
                "about-vision-title": "Our Vision",
                "about-vision-text": "To be the leading company in office products and printing services in our region.",
                "about-values-title": "Our Values",
                "about-values-quality": "Quality",
                "about-values-service": "Service",
                "about-values-innovation": "Innovation",
                "about-values-commitment": "Commitment",

                // Copies and Printing Page
                "copies-title": "Copies and Printing",
                "copies-description": "Professional printing and copying services",
                "copies-service-bw": "Black and White Copies",
                "copies-service-color": "Color Copies",
                "copies-service-binding": "Binding and Bookbinding",
                "copies-service-laminating": "Laminating",
                "copies-service-large": "Large Format Printing",
                "copies-price-list": "Price List",
                "copies-contact": "Contact us for more information",

                // Delivery Page
                "delivery-title": "Delivery Service",
                "delivery-description": "Receive your products in the comfort of your home or office",
                "delivery-coverage": "Delivery Coverage",
                "delivery-times": "Delivery Times",
                "delivery-cost": "Shipping Cost",
                "delivery-free-shipping": "Free shipping on purchases over S/50",
                "delivery-order-now": "Order Now",
                "delivery-track-order": "Track Order",

                // Privacy Policy
                "privacy-title": "Privacy Policy",
                "privacy-last-updated": "Last updated",
                "privacy-intro": "At Studio & Progetto, we respect your privacy and are committed to protecting your personal data.",
                "privacy-data-collection": "Data Collection",
                "privacy-data-use": "Data Use",
                "privacy-data-protection": "Data Protection",
                "privacy-contact": "Contact",

                // Terms and Conditions
                "terms-title": "Terms and Conditions",
                "terms-acceptance": "Acceptance of Terms",
                "terms-services": "Service Description",
                "terms-user-obligations": "User Obligations",
                "terms-payment": "Payment Terms",
                "terms-delivery": "Delivery Terms",
                "terms-returns": "Return Policy",
                "terms-liability": "Limitation of Liability",
                "terms-modifications": "Modifications",

                // Common Elements
                "btn-more-info": "More Information",
                "btn-contact": "Contact",
                "btn-buy-now": "Buy Now",
                "btn-add-cart": "Add to Cart",
                "btn-view-more": "View More",
                "btn-back": "Back",
                "btn-next": "Next",
                "btn-previous": "Previous",
                "btn-close": "Close",
                "btn-save": "Save",
                "btn-cancel": "Cancel",
                "btn-accept": "Accept",
                "btn-reject": "Reject",

                // Contact Information
                "contact-phone": "Phone",
                "contact-email": "Email",
                "contact-address": "Address",
                "contact-hours": "Business Hours",
                "contact-social": "Social Media",

                // Messages
                "msg-success": "Successful operation",
                "msg-error": "An error has occurred",
                "msg-loading": "Loading...",
                "msg-no-results": "No results found",
                "msg-confirm": "Are you sure?",
                "msg-item-added": "Product added to cart",
                "msg-item-removed": "Product removed from cart",

                //section products
                "section-vendidos": "Best Selling Products",
                "section-products1": "University Notebooks",
                "section-products1-cardback-description": "High-quality notebooks with plain or ruled pages, ideal for your notes and university projects. Available in various colors.",
                "section-products2": "Pack of Pens",
                "section-products2-cardback-description": "Set of 12 pens with smooth ink and quick-drying, ergonomic for long writing sessions.",
                "section-products3": "A4 Folders",
                "section-products3-cardback-description": "Organizer folders with dividers and internal pockets, perfect for important documents and university projects.",
                "section-products-btn": "View all products",
                
                //section proveedores
                "section-proveedores": "Our Suppliers",

                //section visitanos
                "section-visitanos": "Visit Us",
                "section-visitanos-directory": "Street Las Gemas 626, Urb. Santa Inés, Trujillo, Perú",
                "section-visitanos-atencion": "Monday to Saturday, 8am - 9pm",
                "section-visitanos-btn": "How to get there",

                //frame1
                "frame1-title": "Contact Us",
                "frame1-nombre":"Full Name:",
                "frame1-ip":"Exact Address:",
                "frame1-ref": "Reference:",
                "frame1-zona": "Zone:",
                "frame1-entrega":"Products to deliver:",
                "frame1-fecha":"Delivery Date:",
                "frame1-hora":"Approximate Time:",
                "frame1-pago":"Payment Method:",
                "frame1-telefono":"Phone",
                "frame1-mensaje":"Additional Instructions:",
                "frame1-archivo":"Attach file (optional):",

                //Botones
                "btn-select": "Select file",
                "btn-enviar": "Send request",
                "btn-info": "Get location info",
                

                //sitemap
                "sitemap-title": "Explore Studio & Progetto",
                "sitemap-1-title": "Home Page",
                "sitemap-1-desc": "The heart of our website with all the main options.",
                "sitemap-btn":"Explore",
                "sitemap-2-title": "Our Products",
                "sitemap-2-desc": "Discover our wide range of creative products",
                "sitemap-3-title": "Copies and Printing",
                "sitemap-3-desc": "Professional printing and reproduction services",
                "sitemap-4-title": "Delivery",
                "sitemap-4-desc": "Fast and secure shipping to your location",
                "sitemap-5-title": "Shopping Cart",
                "sitemap-5-desc": "Review and manage your selected items",
                "sitemap-6-title": "Sign In",
                "sitemap-6-desc": "Access your personal account",
                "sitemap-7-title": "Terms and Conditions",
                "sitemap-7-desc": "Check our terms of service",
                "sitemap-8-title": "Privacy Policy",
                "sitemap-8-desc": "Learn how we protect your data",
                "sitemap-9-title": "Thank You",
                "sitemap-9-desc": "Have a nice day, come back soon",
                
                //copias
                "copias-title": "Copies and Printing Services",
                "copias-desc": "We offer professional copying and printing services, copying and scanning. We work with various formats and types of paper",
                "copias1-title": "Printing",
                "copias1-desc": "Print your documents with the best quality.", 
                "copias2-title": "Copies",
                "copias2-desc": "Fast and economical copies.",
                "copias3-title": "Scanning",
                "copias3-desc": "Digitize your documents",
                
                //inventario
                "inventario-title": "Product Catalog",
                "buscar":"Search Products",

                //delivery
                "delivery-title": "Delivery Service",
                "delivery-desc": "We deliver your products to your home, office or educational institution. Fast, safe and reliable.",
                "delivery1":"Coverage Areas",
                "delivery1-desc": "Service available throughout Trujillo and surrounding districts.",
                "delivery2":"Time Table",
                "delivery2-desc": "Monday to Saturday from 9:00 am to 8:00 pm.",
                "delivery3":"Costs",
                "delivery3-desc": "Vary by area and purchase amount.",
                "pregunta": "How does it work?",
                "rpt1":"Choose your products and add them to the cart.",
                "rpt2":"Provide your location to calculate the shipping cost.",
                "rpt3":"Make the payment securely.",
                "rpt4":"Receive your order at your doorstep.",
                "zona": "Delivery Zone",
                "zona-desc":"We deliver to all areas of Trujillo:",
                "urb": "Residential Urbanizations",
                "solicitar": "Request Delivery",

                //Carrito de Compras
                "car-title":"Purchase Summary",
                "car-sub":"subtotal",
                "car-del":"delivery",
                "car-total":"total",
                "car-btn-del":"I need delivery",
                "car-btn":"Proceed to payment", 
                "car-con":"Continue shopping"


            }
        };
        this.init();
    }

    init() {
        this.applyTranslations();
        this.setupLanguageToggle();
    }

    applyTranslations() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (this.translations[this.currentLanguage] && this.translations[this.currentLanguage][key]) {
                if (element.tagName === 'INPUT' && (element.type === 'text' || element.type === 'email' || element.type === 'password')) {
                    element.placeholder = this.translations[this.currentLanguage][key];
                } else if (element.tagName === 'INPUT' && (element.type === 'submit' || element.type === 'button')) {
                    element.value = this.translations[this.currentLanguage][key];
                } else {
                    element.textContent = this.translations[this.currentLanguage][key];
                }
            }
        });
    }

    switchLanguage(language) {
        this.currentLanguage = language;
        localStorage.setItem("language", language);
        this.applyTranslations();
        this.updateLanguageToggle();
    }

    setupLanguageToggle() {
        const toggle = document.getElementById('toggle-idiomas');
        if (toggle) {
            // Set initial state
            toggle.checked = this.currentLanguage === 'en';
            
            // Add event listener
            toggle.addEventListener('change', () => {
                const newLanguage = toggle.checked ? 'en' : 'es';
                this.switchLanguage(newLanguage);
            });
        }
    }

    updateLanguageToggle() {
        const toggle = document.getElementById('toggle-idiomas');
        if (toggle) {
            toggle.checked = this.currentLanguage === 'en';
        }
    }
}

// Initialize language switcher when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.languageSwitcher = new LanguageSwitcher();
});

