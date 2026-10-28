export const profile = {
	name: 'Piero de la Cruz Palpa',
	role: 'Desarrollador de Software',
	specialty: 'Desarrollador Backend',
	linkedin: 'https://www.linkedin.com/in/piero-de-la-cruz-p/',
	linkedinLabel: 'linkedin.com/in/piero-de-la-cruz-p',
	github: 'https://github.com/',
	email: 'piero.delacruz.p.06@gmail.com',
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
	{ name: 'Angular', route: 'https://svgl.app/library/angular.svg' },
	{ name: 'NestJS', route: 'https://svgl.app/library/nestjs.svg' },
	{ name: 'AWS', route: 'https://svgl.app/library/aws_dark.svg' },
];

export const services = [
	{
		title: 'Desarrollo backend',
		titleEn: 'Backend development',
	},
	{
		title: 'Desarrollo frontend',
		titleEn: 'Frontend development',
	},
	{
		title: 'Integraciones con IA',
		titleEn: 'AI integrations',
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
		title: 'Desarrollador Backend – Spring Boot | AWS | Spring AI',
		titleEn: 'Backend Developer – Spring Boot | AWS | Spring AI',
		company: 'TECSUP',
		role: 'Desarrollador Backend',
		roleEn: 'Backend Developer',
		startDate: '2026-04-17',
		period: '17 de abril de 2026 — 16 de diciembre de 2026',
		periodEn: 'April 17, 2026 — December 16, 2026',
		description: `Implementé el backend empresarial del área de innovación de TECSUP para gestionar eventos, postulaciones, proyectos, equipos y usuarios, incorporando inteligencia artificial para evaluar propuestas.

Diseñé una arquitectura modular basada en Clean Architecture y Arquitectura Hexagonal, separando dominio, aplicación, infraestructura y presentación para facilitar el mantenimiento y la escalabilidad.

Implementé autenticación y control de acceso con Spring Security, JWT, refresh tokens, OAuth2 con Google, MFA, RBAC y sesiones administradas con Redis.

Integré AWS S3 y AWS SES para gestionar documentos y notificaciones, y desarrollé consultas con Spring AI, Google Gemini, embeddings multimodales y pgvector mediante chat con streaming.

Documenté endpoints REST con Swagger/OpenAPI y gestioné migraciones, restricciones e índices de base de datos con Flyway.`,
		descriptionEn: `I implemented the enterprise backend for TECSUP's innovation area to manage events, applications, projects, teams, and users, adding artificial intelligence capabilities for proposal evaluation.

I designed a modular architecture based on Clean Architecture and Hexagonal Architecture, separating domain, application, infrastructure, and presentation to improve maintainability and scalability.

I implemented authentication and access control with Spring Security, JWT, refresh tokens, Google OAuth2, MFA, RBAC, and Redis-managed sessions.

I integrated AWS S3 and AWS SES to manage documents and notifications, and built queries with Spring AI, Google Gemini, multimodal embeddings, and pgvector through streaming chat.

I documented REST endpoints with Swagger/OpenAPI and managed database migrations, constraints, and indexes with Flyway.`,
		tags: ['Spring Boot', 'Arquitectura Hexagonal', 'AWS', 'Spring AI'],
	},
	{
		title: 'Pasante Backend – NestJS | FastAPI | IA',
		titleEn: 'Backend Developer Intern – NestJS | FastAPI | AI',
		company: 'TECSUP',
		role: 'Pasante de Desarrollo Backend',
		roleEn: 'Backend Developer Intern',
		startDate: '2025-12-20',
		period: '20 de diciembre de 2025 — 1 de abril de 2026',
		periodEn: 'December 20, 2025 — April 1, 2026',
		description: `Diseñé e implementé una arquitectura backend basada en microservicios con NestJS y FastAPI, orientada a una operación escalable y de alta disponibilidad.

Desarrollé módulos de autenticación, gestión académica, chat inteligente y control de acceso por roles.

Integré modelos de inteligencia artificial para chat, TTS y STT, optimizando la latencia y la experiencia de interacción por voz en tiempo real.

Diseñé flujos de interacción para profesores y dashboards administrativos, conectando las capacidades de IA con los procesos académicos.`,
		descriptionEn: `I designed and implemented a microservices-based backend architecture with NestJS and FastAPI, aimed at scalable and highly available operation.

I developed authentication, academic management, intelligent chat, and role-based access control modules.

I integrated artificial intelligence models for chat, TTS, and STT, optimizing latency and the real-time voice interaction experience.

I designed interaction flows for teachers and administrative dashboards, connecting AI capabilities with academic processes.`,
		tags: ['NestJS', 'FastAPI', 'TTS', 'STT'],
	},
	{
		title: 'Desarrollador Frontend – Angular | RESTful | UI',
		titleEn: 'Frontend Developer – Angular | RESTful | UI',
		company: 'Stratedu',
		role: 'Desarrollador Frontend',
		roleEn: 'Frontend Developer',
		startDate: '2026-03-01',
		period: '1 de marzo de 2026 — 30 de junio de 2026',
		periodEn: 'March 1, 2026 — June 30, 2026',
		description: `Desarrollé interfaces web y dashboards en Angular para los perfiles de Administrador, Profesor y Consultor.

Integré las vistas con servicios RESTful del backend, asegurando una comunicación clara entre cliente y servidor.

Construí componentes reutilizables y estructuras modulares para facilitar la escalabilidad y el mantenimiento.

Colaboré en la definición de flujos de navegación, estructura de vistas y mejoras de usabilidad.`,
		descriptionEn: `I developed web interfaces and Angular dashboards for Administrator, Professor, and Consultant profiles.

I integrated the views with RESTful backend services, ensuring clear communication between client and server.

I built reusable components and modular structures to support scalability and maintainability.

I collaborated on navigation flows, view structure, and usability improvements.`,
		tags: ['Angular', 'RESTful', 'Componentes reutilizables'],
	},
];
