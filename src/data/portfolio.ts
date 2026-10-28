export const profile = {
	name: 'Piero de la Cruz Palpa',
	role: 'Desarrollador de Software',
	specialty: 'Desarrollador Backend',
	linkedin: 'https://www.linkedin.com/in/piero-de-la-cruz-p/',
	linkedinLabel: 'linkedin.com/in/piero-de-la-cruz-p',
	github: 'https://github.com/',
	summary:
		'Egresado de Diseño y Desarrollo de Software en TECSUP. Con capacidad para resolver problemas, trabajar en equipo y adaptarme a entornos dinámicos. Poseo nivel intermedio de inglés y un sólido dominio de Java, Node.js y TypeScript. Enfocado en el desarrollo de servicios RESTful. Comprometido con el aprendizaje continuo y la construcción de soluciones eficientes y escalables.',
	summaryEn:
		'Graduate in Software Design and Development from TECSUP. Skilled in problem solving, teamwork, and adapting to dynamic environments. Intermediate English level with strong command of Java, Node.js, and TypeScript. Focused on RESTful services and committed to building efficient, scalable solutions.',
};

export const techStack = [
	'Java',
	'Spring Boot',
	'TypeScript',
	'Node.js',
	'NestJS',
	'FastAPI',
	'Angular',
	'PostgreSQL',
	'Redis',
	'AWS',
	'Google Gemini',
];

export const techLogos = [
	{ name: 'Java', route: 'https://svgl.app/library/java.svg' },
	{ name: 'Spring', route: 'https://svgl.app/library/spring.svg' },
	{ name: 'TypeScript', route: 'https://svgl.app/library/typescript.svg' },
	{ name: 'Node.js', route: 'https://svgl.app/library/nodejs.svg' },
	{ name: 'Python', route: 'https://svgl.app/library/python.svg' },
	{ name: 'Angular', route: 'https://svgl.app/library/angular.svg' },
	{ name: 'NestJS', route: 'https://svgl.app/library/nestjs.svg' },
	{ name: 'FastAPI', route: 'https://svgl.app/library/fastapi.svg' },
	{ name: 'PostgreSQL', route: 'https://svgl.app/library/postgresql.svg' },
	{ name: 'Redis', route: 'https://svgl.app/library/redis.svg' },
	{ name: 'AWS', route: 'https://svgl.app/library/aws_dark.svg' },
	{ name: 'Google Gemini', route: 'https://svgl.app/library/gemini.svg' },
	{ name: 'Swagger', route: 'https://svgl.app/library/swagger.svg' },
];

export const services = [
	{
		title: 'Desarrollo backend',
		titleEn: 'Backend development',
		items: ['Java, Spring Boot, NestJS y FastAPI', 'APIs RESTful con DTOs, mappers, validaciones, paginación y filtros'],
		itemsEn: ['Java, Spring Boot, NestJS, and FastAPI', 'RESTful APIs with DTOs, mappers, validation, pagination, and filters'],
	},
	{
		title: 'Desarrollo frontend',
		titleEn: 'Frontend development',
		items: ['Angular, interfaces web y dashboards para distintos perfiles', 'Componentes reutilizables, arquitectura modular e integración con APIs RESTful'],
		itemsEn: ['Angular, web interfaces, and dashboards for different profiles', 'Reusable components, modular architecture, and RESTful API integration'],
	},
	{
		title: 'Integraciones con IA',
		titleEn: 'AI integrations',
		items: ['Spring AI, Google Gemini, embeddings multimodales y búsqueda vectorial con pgvector', 'Chat, TTS y STT en tiempo real junto con integraciones AWS S3 y AWS SES'],
		itemsEn: ['Spring AI, Google Gemini, multimodal embeddings, and vector search with pgvector', 'Real-time chat, TTS, and STT with AWS S3 and AWS SES integrations'],
	},
];

export const experiences = [
	{
		company: 'TECSUP',
		role: 'Desarrollador Backend',
		period: '17 de abril de 2026 — 16 de diciembre de 2026',
		context: 'Empresa líder en el sector educación.',
		items: [
			'Diseñar e implementar el backend empresarial para el área de innovación de TECSUP, orientado a la gestión de eventos, postulaciones, proyectos, equipos, usuarios e inteligencia artificial aplicada a la evaluación de propuestas.',
			'Desarrollar una arquitectura modular basada en Clean Architecture y Arquitectura Hexagonal, separando dominio, aplicación, infraestructura y presentación para garantizar mantenibilidad, escalabilidad y bajo acoplamiento.',
			'Desarrollar autenticación segura con Spring Security, JWT, refresh tokens, OAuth2 con Google, MFA para usuarios locales, recuperación de contraseña y control de sesiones con Redis.',
			'Implementar control de acceso basado en roles y permisos mediante RBAC, incluyendo la creación, edición, asignación y gestión de roles personalizados.',
			'Integrar almacenamiento de documentos con AWS S3, organizando archivos por dominio y entidad, manteniendo en la base de datos los metadatos y las URL de referencia.',
			'Integrar el envío de correos transaccionales mediante AWS SES, aplicado a la recuperación de contraseñas, activación de cuentas y notificaciones.',
			'Implementar un módulo de inteligencia artificial con Spring AI, Google Gemini, embeddings multimodales y búsqueda vectorial con pgvector, permitiendo consultar postulaciones mediante chat en streaming basado en documentos indexados.',
			'Diseñar endpoints REST documentados con Swagger/OpenAPI, utilizando DTOs, mappers, validaciones, paginación y filtros avanzados.',
			'Gestionar el versionamiento de la base de datos con Flyway, creando migraciones para esquemas, restricciones, índices, datos iniciales, permisos y reglas de integridad.',
		],
	},
	{
		company: 'Stratedu',
		role: 'Desarrollador Frontend',
		period: '1 de marzo de 2026 — 30 de junio de 2026',
		context: 'Empresa enfocada en el área de servicios de recursos humanos.',
		items: [
			'Desarrollar interfaces web utilizando Angular, aplicando buenas prácticas de arquitectura y organización de componentes.',
			'Diseñar e implementar dashboards para los perfiles de Administrador, Profesor y Consultor, optimizando la experiencia de usuario y la visualización de información.',
			'Integrar módulos frontend con servicios RESTful del backend, garantizando una comunicación eficiente entre cliente y servidor.',
			'Implementar componentes reutilizables y estructuras modulares para facilitar la escalabilidad y el mantenimiento de la aplicación.',
			'Colaborar con el equipo de desarrollo en la definición de flujos de navegación, estructura de vistas y mejoras de usabilidad.',
		],
	},
	{
		company: 'TECSUP',
		role: 'Pasante de Desarrollo Backend',
		period: '20 de diciembre de 2025 — 1 de abril de 2026',
		context: 'Empresa líder en el sector educación.',
		items: [
			'Diseñar e implementar una arquitectura backend basada en microservicios, integrando servicios en NestJS y FastAPI, garantizando escalabilidad y alta disponibilidad.',
			'Desarrollar módulos críticos de autenticación, gestión académica, chat inteligente y procesamiento de voz en tiempo real.',
			'Integrar modelos de inteligencia artificial para chat, TTS (Text-to-Speech) y STT (Speech-to-Text), optimizando la latencia y la experiencia conversacional en tiempo real.',
			'Diseñar flujos de interacción para profesores basados en IA, dashboards administrativos y control de acceso por roles.',
		],
	},
];

export const skillGroups = [
	{
		title: 'Lenguajes y tecnologías',
		items: ['Java', 'TypeScript', 'JavaScript', 'Node.js', 'Python'],
	},
	{
		title: 'Backend y arquitectura',
		items: [
			'Spring Boot / Spring Security',
			'NestJS',
			'FastAPI',
			'APIs RESTful',
			'Microservicios',
			'Clean Architecture',
			'Arquitectura Hexagonal',
			'DTOs y mappers',
			'Swagger / OpenAPI',
		],
	},
	{
		title: 'Frontend',
		items: ['Angular', 'Desarrollo de interfaces web', 'Componentes reutilizables', 'Arquitectura modular', 'Integración con servicios REST'],
	},
	{
		title: 'Seguridad y autenticación',
		items: ['JWT y refresh tokens', 'OAuth2 con Google', 'Autenticación multifactor (MFA)', 'Control de acceso basado en roles (RBAC)', 'Gestión de sesiones con Redis'],
	},
	{
		title: 'Bases de datos y almacenamiento',
		items: ['PostgreSQL', 'pgvector', 'Redis', 'Flyway', 'AWS S3'],
	},
	{
		title: 'Inteligencia artificial y servicios cloud',
		items: ['Spring AI', 'Google Gemini', 'Embeddings multimodales', 'Búsqueda vectorial', 'Chat con streaming', 'Modelos de IA para chat, TTS y STT', 'AWS SES'],
	},
	{
		title: 'Herramientas y prácticas',
		items: ['Validación de datos', 'Paginación y filtrado', 'Migraciones de base de datos', 'Documentación de APIs', 'Sistemas escalables y mantenibles'],
	},
];

export const education = {
	institution: 'Instituto de Educación Superior Privada TECSUP',
	institutionEn: 'TECSUP Institute of Higher Education',
	program: 'Diseño y Desarrollo de Software',
	language: 'Inglés — Nivel intermedio',
	programEn: 'Software Design and Development',
	languageEn: 'English — Intermediate level',
};

export const selectedWork = [
	{
		title: 'backend-developer-spring-boot',
		titleEn: 'backend-developer-spring-boot',
		company: 'TECSUP',
		role: 'Desarrollador Backend',
		roleEn: 'Backend Developer',
		startDate: '2026-04-17',
		period: '17 de abril de 2026 — 16 de diciembre de 2026',
		periodEn: 'April 17, 2026 — December 16, 2026',
		description:
			'Backend orientado a la gestión de eventos, postulaciones, proyectos, equipos, usuarios e inteligencia artificial aplicada a la evaluación de propuestas.',
		descriptionEn:
			'Backend focused on managing events, applications, projects, teams, users, and artificial intelligence applied to proposal evaluation.',
		tags: ['Spring Boot', 'Arquitectura Hexagonal', 'AWS', 'Spring AI'],
	},
	{
		title: 'backend-developer-nestjs-fastapi',
		titleEn: 'backend-developer-nestjs-fastapi',
		company: 'TECSUP',
		role: 'Pasante de Desarrollo Backend',
		roleEn: 'Backend Developer Intern',
		startDate: '2025-12-20',
		period: '20 de diciembre de 2025 — 1 de abril de 2026',
		periodEn: 'December 20, 2025 — April 1, 2026',
		description:
			'Arquitectura backend basada en microservicios con módulos de autenticación, gestión académica, chat inteligente y procesamiento de voz en tiempo real.',
		descriptionEn:
			'Microservices-based backend architecture with authentication, academic management, intelligent chat, and real-time voice processing modules.',
		tags: ['NestJS', 'FastAPI', 'TTS', 'STT'],
	},
	{
		title: 'frontend-developer-angular',
		titleEn: 'frontend-developer-angular',
		company: 'Stratedu',
		role: 'Desarrollador Frontend',
		roleEn: 'Frontend Developer',
		startDate: '2026-03-01',
		period: '1 de marzo de 2026 — 30 de junio de 2026',
		periodEn: 'March 1, 2026 — June 30, 2026',
		description:
			'Interfaces web y dashboards para los perfiles de Administrador, Profesor y Consultor, integrados con servicios RESTful del backend.',
		descriptionEn:
			'Web interfaces and dashboards for Administrator, Professor, and Consultant profiles, integrated with RESTful backend services.',
		tags: ['Angular', 'RESTful', 'Componentes reutilizables'],
	},
];
