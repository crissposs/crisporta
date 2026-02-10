(() => {
  const STORAGE_KEY = 'lang';
  const DEFAULT_LANG = 'es';
  const DISABLE_I18N = false;
  const ENABLE_ENGLISH = true;
  const WHATSAPP_DIRECT_URL = "https://wa.link/9d6xbx";
  const WHATSAPP_NUMBER = "51999999999";
  const WHATSAPP_MESSAGE = "Hola Cristian, me gustaría conversar sobre un proyecto.";

  const translations = {
    es: {
      'lang.switch.aria': 'Cambiar idioma',
      'nav.home': 'Inicio',
      'nav.about': 'Acerca de mí',
      'nav.projects': 'Proyectos',
      'nav.contact': 'Contacto',
      'nav.toggle': 'Alternar menú',

      'hero.status': 'Disponible',
      'hero.role.frontend': 'Desarrollador web',
      'hero.role.uiux': 'Diseñador UI/UX',
      'hero.role.mobile': 'Desarrollador mobile',
      'hero.role.api': 'Integración de APIs',
      'hero.role.data': 'Data engineering',
      'hero.location': 'Perú · Cajamarca',
      'hero.scroll': 'scroll',

      'home.about.title': 'Acerca de mí',
      'home.about.lead.prefix': 'El diseño bien hecho reduce fricción, mejora UX y acelera resultados..',
      'home.about.lead.name': 'Hola, soy Cristian',
      'home.about.lead.suffix': ', desarrollador con +5 años, construyendo UI rápida, integrando APIs y automatizando procesos...',
      'home.about.lead.short': 'Soy Cristian: web developer y diseñador UI/UX con +5 años construyendo productos y automatizaciones. Desarrollo interfaces con React, Next.js y Flutter; integro APIs y flujos de negocio.',
      'home.about.lead.cta': 'Ver perfil →',

      'projects.title': 'PROYECTOS',
      'home.projects.lead': 'Convierto ideas en interfaces y productos con enfoque visual y ejecución técnica. Proyectos — optimizados, consistentes y listos para producción.',
      'home.projects.cta': 'Ver proyectos →',

      'home.overview.title': 'VISTA GENERAL',
      'ascii.copy': 'Copiar',
      'ascii.copied': 'Copiado ✓',
      'ascii.error': 'Error',
      'home.overview.quote': '"Diseño con intención. Código con estándar. Entrega con calidad."',
      'home.overview.paragraph': 'Diseño y desarrollo experiencias digitales donde UI/UX y arquitectura se alinean. Integro APIs, optimizo performance y priorizo accesibilidad. El arte ASCII me inspira a escribir código con identidad y precisión.',
      'home.overview.cta': 'Contáctame →',

      'home.testimonials.title': 'LO QUE DICEN',
      'testimonial1.role': 'Diseñadora',
      'testimonial1.text': 'Trabajé con Cris en un proyecto para una concesionaria. Tiene la mentalidad y creatividad, ufff: ¡EL MEJOR EN DESARROLLO WEB!',
      'testimonial2.role': 'Administradora de P.Fresitas',
      'testimonial2.text': 'Me hizo la página web de mi pastelería 10/10, me enamoré de todos los diseños que realiza.',
      'testimonial3.role': 'Administrador de Tiendas Skate',
      'testimonial3.text': '¡UN GRANDE, HERMANO! REDISEÑÓ MI PÁGINA Y QUEDÓ HERMOSO. ESE ESTILO URBANO QUE TIENE, UFF. ¡RECOMENDADO!',
      'testimonial4.role': 'Ing. Software',
      'testimonial4.text': 'Un gran desarrollador, Cris: trabajó a tiempo y con elegancia.',

      'about.page.title': 'Sobre mí',
      'about.section.who.title': '¿Quién soy?',
      'about.section.who.text': 'Soy Cristian: web developer y diseñador UI/UX con +5 años construyendo productos y automatizaciones. Desarrollo interfaces con React, Next.js y Flutter; integro APIs, webhooks y flujos de negocio. También creo bots para WhatsApp/Telegram y aplico data engineering/análisis para tomar decisiones guiadas por métricas y mejorar la experiencia.',
      'about.section.skills.title': 'Mis habilidades',
      'about.skills.languages.title': 'Lenguajes y frameworks:',
      'about.skills.languages.list': 'HTML, CSS, JavaScript (ES6+), TypeScript, React, Next.js, Tailwind css, Node.js, Flutter',
      'about.skills.design.title': 'Diseño y prototipado:',
      'about.skills.design.list': 'Figma, Adobe XD, Framer, Photoshop, Wireframing, Design Systems',
      'about.skills.mobile.title': 'Desarrollo móvil:',
      'about.skills.mobile.list': 'Flutter, Firebase, Push Notifications, Responsive Layouts, State Management',
      'about.skills.version.title': 'Control de versiones:',
      'about.skills.version.list': 'Git, GitHub, Branching, Code Review, CI básico',
      'about.section.experience.title': 'Experiencia',

      'about.exp.bots.title': 'Desarrollador de bots (WhatsApp/Telegram)',
      'about.exp.bots.period': '2020 – Presente',
      'about.exp.bots.item1': 'Diseñé bots para soporte/ventas con flujos, menús, respuestas rápidas y handoff a humano',
      'about.exp.bots.item2': 'Modelé intents/estados, validaciones, rate-limit y plantillas para conversación estable',
      'about.exp.bots.item3': 'Conecté APIs/webhooks, pasarelas y CRM; envié alertas y automatizaciones end-to-end',
      'about.exp.bots.item4': 'Mejoré métricas: tiempo de respuesta, conversión y carga operativa con automatización',

      'about.exp.uiux.title': 'Diseñador UI/UX',
      'about.exp.uiux.period': '2024 – Presente',
      'about.exp.uiux.item1': 'Definí UI enfocada en usabilidad, legibilidad, jerarquía visual y consistencia',
      'about.exp.uiux.item2': 'Construí design systems, componentes, tokens y guidelines para escalar pantallas',
      'about.exp.uiux.item3': 'Prototipé high-fidelity, iteré con feedback y optimicé flujos orientados a conversión',

      'about.exp.freelance.title': 'Desarrollador frontend freelance',
      'about.exp.freelance.period': '2024 – Presente',
      'about.exp.freelance.item1': 'Construí sitios y landing pages con performance, SEO técnico y Core Web Vitals',
      'about.exp.freelance.item2': 'Arquitecturé componentes, consumo de APIs, formularios y estados para features reales',
      'about.exp.freelance.item3': 'Apliqué a11y, responsive, semántica y buenas prácticas para UI mantenible',
      'about.exp.freelance.item4': 'Trabajé remoto: planning, entregas por iteración y comunicación directa con cliente',

      'about.exp.mobile.title': 'Desarrollador de apps móviles',
      'about.exp.mobile.period': '2025 – Presente',
      'about.exp.mobile.item1': 'Desarrollé apps Flutter con navegación, estado, layouts adaptativos y UX consistente',
      'about.exp.mobile.item2': 'Integré Firebase/Auth/Firestore y servicios externos cuidando rendimiento y escalabilidad',
      'about.exp.mobile.item3': 'Entregué UI alineada a prototipos, componentes reutilizables y buenas prácticas',

      'projects.page.title': 'PROYECTOS',
      'projects.card.view': 'Ver',

      'contact.page.title': 'Contáctame',
      'contact.social.title': 'REDES SOCIALES',
      'contact.email.title': 'ENVIAR CORREO',
      'contact.card.title': '¡Contáctame ahora!',
      'contact.form.email': 'Correo',
      'contact.form.message': 'Mensaje',
      'contact.form.send': 'Enviar',
      'contact.social.linkedin': 'LINKEDIN',
      'contact.social.instagram': 'INSTAGRAM',
      'contact.social.github': 'GITHUB',
      'contact.social.whatsapp': 'WHATSAPP',

      'project.summary.title': 'Resumen:',
      'project.features.title': 'Características:',
      'project.tech.title': 'Tecnologías usadas:',
      'project.goal.title': 'Objetivo del proyecto:',
      'project.viewSite': 'Ver sitio completo →',

      'project.zetr.title': 'PROYECTO PASTELERIA ZARZA',
      'project.zetr.name': 'Pasteleria Zarza - Pasteleria artesanal y pedidos rapidos',
      'project.zetr.summary': 'Pasteleria Zarza es una vitrina digital para una pasteleria artesanal, con catalogo visual, pedidos rapidos y foco en conversion.',
      'project.zetr.feature1': '● Catalogo de productos con filtros por categoria',
      'project.zetr.feature2': '● Carrito y resumen de pedido en un paso',
      'project.zetr.feature3': '● Componentes UI reutilizables y animaciones suaves',
      'project.zetr.feature4': '● Diseno responsive con enfoque mobile first',
      'project.zetr.feature5': '● SEO local y tiempos de carga optimizados',
      'project.zetr.tech': 'React, Vite, Tailwind CSS',
      'project.zetr.goal': 'Crear una experiencia rapida para descubrir productos y convertir visitas en pedidos.',

      'project.roxie.title': 'PROYECTO SKATE PARK',
      'project.roxie.name': 'Skate Park - Comunidad, spots y eventos',
      'project.roxie.summary': 'Skate Park conecta riders con spots y eventos en una plataforma clara, con agenda y noticias.',
      'project.roxie.feature1': '● Agenda de eventos con registro',
      'project.roxie.feature2': '● Mapa de spots con detalle por ubicacion',
      'project.roxie.feature3': '● Panel admin para publicar noticias',
      'project.roxie.feature4': '● Autenticacion y perfiles basicos',
      'project.roxie.feature5': '● Diseno urbano con jerarquia fuerte',
      'project.roxie.tech': 'Java, Spring Boot, PostgreSQL',
      'project.roxie.goal': 'Unificar comunidad, agenda y gestion en una plataforma robusta.',

      'project.nightcamelz.title': 'PROYECTO BRAZ VELOCE',
      'project.nightcamelz.name': 'Braz Veloce - Landing automotriz de alto impacto',
      'project.nightcamelz.summary': 'Braz Veloce es una landing para performance cars con storytelling visual, secciones inmersivas y velocidad percibida.',
      'project.nightcamelz.feature1': '● Hero con motion y transicion fluida',
      'project.nightcamelz.feature2': '● Secciones modulares para modelos y specs',
      'project.nightcamelz.feature3': '● Animaciones por scroll con control preciso',
      'project.nightcamelz.feature4': '● Tipografia bold y contraste premium',
      'project.nightcamelz.feature5': '● Layout optimizado para carga rapida',
      'project.nightcamelz.tech': 'Next.js, TypeScript, Framer Motion',
      'project.nightcamelz.goal': 'Transmitir potencia de marca con una experiencia web rapida y cinematografica.',

      'project.parallava.title': 'PROYECTO SODIE DOCES',
      'project.parallava.name': 'Sodie Doces - Catalogo dulce multicanal',
      'project.parallava.summary': 'Sodie Doces presenta productos, promos y pedidos en una experiencia simple, pensada para movil y redes.',
      'project.parallava.feature1': '● Catalogo por temporadas y promociones',
      'project.parallava.feature2': '● Integracion con WhatsApp para pedidos',
      'project.parallava.feature3': '● Tarjetas de producto reutilizables',
      'project.parallava.feature4': '● Microanimaciones para destacar ofertas',
      'project.parallava.feature5': '● Flujo de pedido rapido y claro',
      'project.parallava.tech': 'Flutter, Dart, Firebase',
      'project.parallava.goal': 'Crear un catalogo rapido que convierta clicks en conversaciones.',

      'footer.contact': 'PONTE EN CONTACTO.',
      'footer.whatsapp': 'WhatsApp',
      'footer.whatsapp.cta': 'Escríbeme por WhatsApp',
      'footer.whatsapp.title': 'Abrir WhatsApp',
      'footer.location': 'Con base en Egipto',
      'footer.emailLabel': 'Correo:',
      'footer.rights': '© 2026 Cristian Ramirez. Todos los derechos reservados.'
    },

    en: {
      'lang.switch.aria': 'Change language',
      'nav.home': 'Home',
      'nav.about': 'About Me',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'nav.toggle': 'Toggle menu',

      'hero.status': 'Available',
      'hero.role.frontend': 'Web Developer',
      'hero.role.uiux': 'UI/UX Designer',
      'hero.role.mobile': 'Mobile Developer',
      'hero.role.api': 'API Integration',
      'hero.role.data': 'Data Engineering',
      'hero.location': 'Peru · Cajamarca',
      'hero.scroll': 'scroll',

      'home.about.title': 'About Me',
      'home.about.lead.prefix': "Good design reduces friction, improves UX, and accelerates outcomes..",
      'home.about.lead.name': "Hi, I'm Cristian",
      'home.about.lead.suffix': ', a developer with 5+ years building fast UI, integrating APIs, and automating workflows...',
      'home.about.lead.short': "I'm Cristian: a web developer and UI/UX designer with 5+ years building products and automation. I craft interfaces with React, Next.js, and Flutter; I integrate APIs and business flows.",
      'home.about.lead.cta': 'View profile →',

      'projects.title': 'PROJECTS',
      'home.projects.lead': 'I turn ideas into interfaces and products by blending visual craft with technical execution. Projects — optimized, consistent, and production-ready.',
      'home.projects.cta': 'View projects →',

      'home.overview.title': 'OVERVIEW',
      'ascii.copy': 'Copy',
      'ascii.copied': 'Copied ✓',
      'ascii.error': 'Error',
      'home.overview.quote': '"Design with intent. Code with standards. Ship with quality."',
      'home.overview.paragraph': "I build digital experiences where UI/UX and architecture align. I integrate APIs, optimize performance, and prioritize accessibility. ASCII art inspires me to write code with identity and precision.",
      'home.overview.cta': 'Contact me →',

      'home.testimonials.title': 'WHAT THEY SAY',
      'testimonial1.role': 'Designer',
      'testimonial1.text': 'I worked with Cris on a project for a dealership. He has the mindset and creativity — wow! The best in web development.',
      'testimonial2.role': 'P.Fresitas Manager',
      'testimonial2.text': 'He made my bakery website 10/10. I fell in love with all the designs he creates.',
      'testimonial3.role': 'Skate Shops Manager',
      'testimonial3.text': 'A great one, brother! He redesigned my page and it turned out beautiful. That urban style he has — wow. Highly recommended.',
      'testimonial4.role': 'Software Engineer',
      'testimonial4.text': 'A great developer, Cris — on-time work and elegant results.',

      'about.page.title': 'About Me',
      'about.section.who.title': 'Who am I?',
      'about.section.who.text': "I'm Cristian: a web developer and UI/UX designer with 5+ years building products and automation. I craft interfaces with React, Next.js, and Flutter; I integrate APIs, webhooks, and business flows. I also ship WhatsApp/Telegram bots and apply data engineering/analytics to make metric-informed decisions and improve user experience.",
      'about.section.skills.title': 'My skills',
      'about.skills.languages.title': 'Languages and frameworks:',
      'about.skills.languages.list': 'HTML, CSS, JavaScript (ES6+), TypeScript, React, Next.js, Tailwind CSS, Node.js, Flutter',
      'about.skills.design.title': 'Design and prototyping:',
      'about.skills.design.list': 'Figma, Adobe XD, Framer, Photoshop, Wireframing, Design Systems',
      'about.skills.mobile.title': 'Mobile development:',
      'about.skills.mobile.list': 'Flutter, Firebase, Push Notifications, Responsive layouts, State management',
      'about.skills.version.title': 'Version control:',
      'about.skills.version.list': 'Git, GitHub, Branching, Code reviews, Basic CI',
      'about.section.experience.title': 'Experience',

      'about.exp.bots.title': 'Bot Developer (WhatsApp/Telegram)',
      'about.exp.bots.period': '2020 – Present',
      'about.exp.bots.item1': 'Built support/sales bots with flows, menus, quick replies, and human handoff',
      'about.exp.bots.item2': 'Designed intents/states, validations, rate-limits, and reliable templates',
      'about.exp.bots.item3': 'Integrated APIs/webhooks, gateways, and CRMs for end-to-end workflows',
      'about.exp.bots.item4': 'Improved KPIs: response time, conversion, and workload through automation',

      'about.exp.uiux.title': 'UI/UX Designer',
      'about.exp.uiux.period': '2024 – Present',
      'about.exp.uiux.item1': 'Designed UI focused on usability, readability, hierarchy, and consistency',
      'about.exp.uiux.item2': 'Built design systems, components, tokens, and scalable guidelines',
      'about.exp.uiux.item3': 'Created high-fidelity prototypes, iterated fast, and improved conversion flows',

      'about.exp.freelance.title': 'Freelance Frontend Developer',
      'about.exp.freelance.period': '2024 – Present',
      'about.exp.freelance.item1': 'Built websites/landing pages with performance, SEO, and Core Web Vitals focus',
      'about.exp.freelance.item2': 'Architected components, API integration, forms, and state for real features',
      'about.exp.freelance.item3': 'Applied a11y, responsive patterns, semantics, and maintainable UI practices',
      'about.exp.freelance.item4': 'Worked remotely with iterative delivery, planning, and direct client comms',

      'about.exp.mobile.title': 'Mobile App Developer',
      'about.exp.mobile.period': '2025 – Present',
      'about.exp.mobile.item1': 'Built Flutter apps with navigation, state, adaptive layouts, and consistent UX',
      'about.exp.mobile.item2': 'Integrated Firebase/Auth/Firestore and external services with scalability in mind',
      'about.exp.mobile.item3': 'Delivered UI aligned with prototypes, reusable components, and best practices',

      'projects.page.title': 'PROJECTS',
      'projects.card.view': 'View',

      'contact.page.title': 'Contact Me',
      'contact.social.title': 'SOCIALS',
      'contact.email.title': 'SEND EMAIL',
      'contact.card.title': 'Contact me now!',
      'contact.form.email': 'Email',
      'contact.form.message': 'Message',
      'contact.form.send': 'Send',
      'contact.social.linkedin': 'LINKEDIN',
      'contact.social.instagram': 'INSTAGRAM',
      'contact.social.github': 'GITHUB',
      'contact.social.whatsapp': 'WHATSAPP',

      'project.summary.title': 'Summary:',
      'project.features.title': 'Features:',
      'project.tech.title': 'Technologies used:',
      'project.goal.title': 'Project goal:',
      'project.viewSite': 'View full site →',

      'project.zetr.title': 'PASTELERIA ZARZA PROJECT',
      'project.zetr.name': 'Pasteleria Zarza - Artisan bakery storefront',
      'project.zetr.summary': 'Pasteleria Zarza is a digital storefront for an artisan bakery, with a visual catalog, quick orders, and conversion focus.',
      'project.zetr.feature1': '● Product catalog with category filters',
      'project.zetr.feature2': '● Cart and one-step order summary',
      'project.zetr.feature3': '● Reusable UI components and smooth motion',
      'project.zetr.feature4': '● Responsive design with a mobile-first focus',
      'project.zetr.feature5': '● Local SEO and optimized load times',
      'project.zetr.tech': 'React, Vite, Tailwind CSS',
      'project.zetr.goal': 'Build a fast experience to discover products and turn visits into orders.',

      'project.roxie.title': 'SKATE PARK PROJECT',
      'project.roxie.name': 'Skate Park - Community, spots, and events',
      'project.roxie.summary': 'Skate Park connects riders with spots and events through a clean platform with agenda and news.',
      'project.roxie.feature1': '● Event calendar with registration',
      'project.roxie.feature2': '● Spot map with location details',
      'project.roxie.feature3': '● Admin panel for publishing news',
      'project.roxie.feature4': '● Basic authentication and profiles',
      'project.roxie.feature5': '● Urban look with strong hierarchy',
      'project.roxie.tech': 'Java, Spring Boot, PostgreSQL',
      'project.roxie.goal': 'Unify community, schedule, and management in a robust platform.',

      'project.nightcamelz.title': 'BRAZ VELOCE PROJECT',
      'project.nightcamelz.name': 'Braz Veloce - High-impact automotive landing',
      'project.nightcamelz.summary': 'Braz Veloce is a performance-car landing with visual storytelling, immersive sections, and a sense of speed.',
      'project.nightcamelz.feature1': '● Hero with motion and smooth transitions',
      'project.nightcamelz.feature2': '● Modular sections for models and specs',
      'project.nightcamelz.feature3': '● Scroll-driven animations with precise control',
      'project.nightcamelz.feature4': '● Bold typography and premium contrast',
      'project.nightcamelz.feature5': '● Layout optimized for fast loads',
      'project.nightcamelz.tech': 'Next.js, TypeScript, Framer Motion',
      'project.nightcamelz.goal': 'Deliver brand power with a fast, cinematic web experience.',

      'project.parallava.title': 'SODIE DOCES PROJECT',
      'project.parallava.name': 'Sodie Doces - Multichannel sweet catalog',
      'project.parallava.summary': 'Sodie Doces showcases products, promos, and orders in a simple experience built for mobile and social.',
      'project.parallava.feature1': '● Seasonal catalog and promotions',
      'project.parallava.feature2': '● WhatsApp ordering integration',
      'project.parallava.feature3': '● Reusable product cards',
      'project.parallava.feature4': '● Micro-animations to highlight offers',
      'project.parallava.feature5': '● Fast, clear ordering flow',
      'project.parallava.tech': 'Flutter, Dart, Firebase',
      'project.parallava.goal': 'Create a fast catalog that turns clicks into conversations.',

      'footer.contact': 'GET IN TOUCH.',
      'footer.whatsapp': 'WhatsApp',
      'footer.whatsapp.cta': 'Message me on WhatsApp',
      'footer.whatsapp.title': 'Open WhatsApp',
      'footer.location': 'Based in Egypt',
      'footer.emailLabel': 'Email:',
      'footer.rights': '© 2026 Cristian Ramirez. All rights reserved.'
    }
  };

  const translate = (lang, key) => {
    const dictionary = translations[lang] || {};
    const fallback = translations[DEFAULT_LANG] || {};
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      return dictionary[key];
    }
    if (Object.prototype.hasOwnProperty.call(fallback, key)) {
      return fallback[key];
    }
    return key;
  };

  const getKey = (el, dataAttr, attr) => {
    return el.getAttribute(dataAttr) || el.getAttribute(attr);
  };

  const applyTranslations = (lang) => {
    if (DISABLE_I18N) return;
    const normalized = lang === 'en' ? 'en' : 'es';

    document.querySelectorAll('[data-i18n], [i18n]').forEach((el) => {
      const key = getKey(el, 'data-i18n', 'i18n');
      if (!key) return;
      el.textContent = translate(normalized, key);
    });

    document.querySelectorAll('[data-i18n-placeholder], [i18n-placeholder]').forEach((el) => {
      const key = getKey(el, 'data-i18n-placeholder', 'i18n-placeholder');
      if (!key) return;
      el.setAttribute('placeholder', translate(normalized, key));
    });

    document.querySelectorAll('[data-i18n-title], [i18n-title]').forEach((el) => {
      const key = getKey(el, 'data-i18n-title', 'i18n-title');
      if (!key) return;
      el.setAttribute('title', translate(normalized, key));
    });

    document.querySelectorAll('[data-i18n-aria], [i18n-aria]').forEach((el) => {
      const key = getKey(el, 'data-i18n-aria', 'i18n-aria');
      if (!key) return;
      el.setAttribute('aria-label', translate(normalized, key));
    });

    document.documentElement.setAttribute('lang', normalized);
  };

  const buildWhatsAppUrl = (number, message) => {
    const clean = String(number || '').replace(/[^0-9]/g, '');
    if (!clean) return '#';
    const base = `https://wa.me/${clean}`;
    if (!message) return base;
    return `${base}?text=${encodeURIComponent(message)}`;
  };

  const initWhatsAppLinks = () => {
    const url = WHATSAPP_DIRECT_URL || buildWhatsAppUrl(WHATSAPP_NUMBER, WHATSAPP_MESSAGE);
    document.querySelectorAll('[data-whatsapp-link]').forEach((el) => {
      el.setAttribute('href', url);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener');
    });
  };

  const applyLanguage = (lang) => {
    applyTranslations(lang);
  };

  const setLanguage = (lang) => {
    if (DISABLE_I18N) return lang === 'en' ? 'en' : 'es';
    const normalized = ENABLE_ENGLISH ? (lang === 'en' ? 'en' : 'es') : 'es';
    localStorage.setItem(STORAGE_KEY, normalized);
    applyLanguage(normalized);

    if (typeof window.updateLanguageSwitch === 'function') {
      window.updateLanguageSwitch(normalized);
    }

    document.dispatchEvent(new CustomEvent('language:changed', { detail: { lang: normalized } }));
    return normalized;
  };

  window.translations = translations;
  window.applyTranslations = applyTranslations;
  window.applyLanguage = applyLanguage;
  window.setLanguage = setLanguage;
  window.t = (key, fallback = '') => {
    const lang = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
    const value = translate(lang === 'en' ? 'en' : 'es', key);
    if (value === key && fallback) return fallback;
    return value === key ? fallback || key : value;
  };

  const init = () => {
    if (!DISABLE_I18N) {
      const stored = localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
      setLanguage(ENABLE_ENGLISH ? stored : DEFAULT_LANG);
    }
    initWhatsAppLinks();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
