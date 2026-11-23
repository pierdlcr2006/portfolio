export const defaultLang = 'es';

const es = {
	'meta.title': 'Piero - Portafolio',
	'meta.description':
		'Desarrollador de software especializado en backend, servicios RESTful y soluciones escalables.',

	'nav.skip': 'Saltar al contenido',
	'nav.aria': 'Navegación principal',
	'nav.home': 'Inicio',
	'nav.projects': 'Proyectos',
	'nav.contact': 'Contacto',
	'nav.openMenu': 'Abrir menú',
	'nav.closeMenu': 'Cerrar menú',
	'nav.switchLanguage': 'Cambiar a inglés',

	'hero.greeting': 'Hola, soy {name}',
	'hero.title1': 'Desarrollador',
	'hero.title2': 'de Software',
	'hero.photoAlt': 'Foto de {name}',
	'hero.socialAria': 'Enlaces profesionales',
	'hero.linkedinLabel': 'LinkedIn de {name}',
	'hero.githubLabel': 'GitHub de {name}',

	'logos.aria': 'Tecnologías con las que trabajo',

	'services.kicker': 'Capacidades',
	'services.title': '¿Qué hago?',
	'services.listAria': 'Lista de capacidades',

	'projects.kicker': 'Mi trabajo',
	'projects.title': 'Trayectoria profesional',

	'contact.kicker': 'Hablemos',
	'contact.title': 'Contacto',
	'contact.copy': '¿Tienes una idea, un producto o un proyecto en mente? Escríbeme y conversemos.',
	'contact.availability': 'Disponible por LinkedIn o correo electrónico.',
	'contact.email': 'Enviar un correo ↗',

	'footer.connect': 'Conecta',
} as const;

const en: Record<keyof typeof es, string> = {
	'meta.title': 'Piero - Portafolio',
	'meta.description':
		'Software developer specialized in backend, RESTful services, and scalable solutions.',

	'nav.skip': 'Skip to content',
	'nav.aria': 'Main navigation',
	'nav.home': 'Home',
	'nav.projects': 'Projects',
	'nav.contact': 'Contact',
	'nav.openMenu': 'Open menu',
	'nav.closeMenu': 'Close menu',
	'nav.switchLanguage': 'Switch to Spanish',

	'hero.greeting': "Hi, I'm {name}",
	'hero.title1': 'Software',
	'hero.title2': 'Developer',
	'hero.photoAlt': 'Photo of {name}',
	'hero.socialAria': 'Professional links',
	'hero.linkedinLabel': '{name} on LinkedIn',
	'hero.githubLabel': '{name} on GitHub',

	'logos.aria': 'Technologies I work with',

	'services.kicker': 'Capabilities',
	'services.title': 'What I do?',
	'services.listAria': 'List of capabilities',

	'projects.kicker': 'My work',
	'projects.title': 'Professional experience',

	'contact.kicker': "Let's talk",
	'contact.title': 'Contact',
	'contact.copy': "Do you have an idea, a product, or a project in mind? Write to me and let's talk.",
	'contact.availability': 'Available on LinkedIn or email.',
	'contact.email': 'Send an email ↗',

	'footer.connect': 'Connect',
};

export const ui = { es, en };

export type Lang = keyof typeof ui;
export type UiKey = keyof typeof es;
