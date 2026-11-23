---
description: Construye portfolios web inspirados en Darkminimal con
  estética oscura y minimalista; toda la tipografía debe ser monospace.
name: darkminimal-monospace
---

# Darkminimal Monospace --- Skill de diseño e implementación

## 1. Propósito

Usa esta skill cuando el usuario solicite crear, rediseñar o ampliar un
portfolio personal o web profesional tomando como referencia visual
https://darkminimal.vercel.app/.

La referencia original es un template de portfolio oscuro construido con
Astro, React, TypeScript y Tailwind CSS. Incluye presentación personal,
tecnologías, servicios, proyectos y contacto; el repositorio también
documenta integraciones opcionales como Spotify y un formulario de
contacto con Formspree.

**Regla central:** conservar el lenguaje visual de Darkminimal y cambiar
únicamente la familia tipográfica a monospace. No conviertas el diseño
en una terminal temática, un dashboard hacker ni una interfaz retro.
Debe seguir pareciendo un portfolio moderno, refinado, oscuro y
minimalista.

## 2. Prioridad de instrucciones

1.  Respeta primero las instrucciones explícitas del usuario.
2.  Mantén el contenido, estructura y comportamiento existentes cuando
    estés editando un proyecto.
3.  Usa esta skill para completar decisiones de diseño que el usuario no
    haya especificado.
4.  No inventes datos personales, experiencia profesional, métricas,
    clientes, proyectos, testimonios ni enlaces.
5.  No afirmes que una integración funciona hasta que exista una
    implementación real y se haya verificado.

## 3. Objetivo visual

La interfaz debe comunicar: - Minimalismo oscuro, limpio y
contemporáneo. - Identidad personal con enfoque creativo y
tecnológico. - Contraste alto y jerarquía clara. - Mucho espacio
negativo y baja densidad visual. - Acentos cromáticos escasos y
deliberados. - Componentes simples, con detalles de interacción
sutiles. - Una voz visual consistente en escritorio, tablet y móvil.

### No hacer

-   No añadir gradientes intensos por defecto.
-   No aplicar glassmorphism de forma generalizada.
-   No llenar todas las secciones de tarjetas.
-   No introducir bordes gruesos, sombras grandes o efectos neón.
-   No usar emojis como sustituto de iconos de interfaz.
-   No convertir todos los textos a mayúsculas sin una razón jerárquica.
-   No usar fuentes sans-serif, serif o display en ningún componente.
-   No añadir animaciones que retrasen, distraigan o dificulten la
    navegación.

## 4. Sistema tipográfico: monospace obligatorio

Toda la interfaz usa una familia monospace. Esto incluye títulos,
párrafos, navegación, botones, inputs, placeholders, tooltips, badges,
tablas, etiquetas, estados, metadatos y contenido generado
dinámicamente.

### Stack recomendado

``` css
:root {
  --font-mono: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
}

html,
body,
button,
input,
textarea,
select,
option,
label,
a,
code,
pre,
h1,
h2,
h3,
h4,
p,
small,
strong,
em,
blockquote {
  font-family: var(--font-mono);
}
```

Si el proyecto ya incluye una fuente monospace local o una fuente de
marca aprobada, reutilízala. No dependas de una fuente remota para que
el diseño funcione. Si se decide instalar una fuente como Geist Mono o
IBM Plex Mono, debe cargarse correctamente y conservar un stack de
respaldo.

### Escala tipográfica de referencia

Ajusta los valores según el contenido real, manteniendo una jerarquía
editorial. Estos valores son una guía de implementación, no una
afirmación de medidas exactas del sitio original.

  ---------------------------------------------------------------------------
  Elemento                    Escritorio                Móvil Peso / uso
  --------------- ---------------------- -------------------- ---------------
  H1 / titular        clamp(2.5rem, 5vw,  clamp(2.1rem, 10vw, 600--700
  hero                             4rem)                3rem) 

  H2 / título de                 2.25rem              1.75rem 600
  sección                                                     

  H3 / título de                1.125rem                 1rem 500--600
  tarjeta                                                     

  Texto principal         1rem--1.125rem      0.9375rem--1rem 400

  Navegación        0.8125rem--0.9375rem             0.875rem 400--500

  Etiquetas /       0.6875rem--0.8125rem   0.6875rem--0.75rem 400--500
  metadatos                                                   

  Texto de botón    0.8125rem--0.9375rem            0.8125rem 500--600
  ---------------------------------------------------------------------------

### Reglas de legibilidad tipográfica

-   Usa `line-height: 1.5` a `1.75` en párrafos.
-   Usa `line-height: 1.05` a `1.2` en titulares grandes.
-   Limita el ancho de lectura de párrafos a aproximadamente
    `60ch`--`72ch`.
-   No utilices tracking muy abierto en todos los textos: monospace ya
    tiene un ritmo visual marcado.
-   Puedes usar `letter-spacing: -0.03em` con moderación en titulares
    grandes si mejora su apariencia.
-   Para metadatos en mayúsculas, usa un tracking pequeño, no exagerado.
-   Evita líneas largas y bloques densos, especialmente en pantallas
    estrechas.
-   No uses `font-synthesis` ni reglas que introduzcan otra familia para
    elementos secundarios.

### Comprobación global

Al terminar, busca en el proyecto `font-family`, clases de fuentes como
`font-sans`, `font-serif` o `font-display`, estilos inline y componentes
externos. Elimina o sustituye cualquier familia no monospace, incluidos
los estilos de bibliotecas y los estados de error o carga.

## 5. Tokens visuales

La referencia se caracteriza por un fondo oscuro, texto claro y un
acento verde lima. Una lectura externa del template describe una paleta
aproximada de fondo `#101010`, texto blanco y acento `#A9FF5B`; trátala
como punto de partida visual y no como extracción exacta del CSS en
producción.

Define los colores como variables centralizadas y evita dispersar
valores hexadecimales por los componentes.

``` css
:root {
  color-scheme: dark;

  --color-bg: #101010;
  --color-surface: #171717;
  --color-surface-raised: #1e1e1e;
  --color-text: #ffffff;
  --color-text-secondary: #dfdfdf;
  --color-text-muted: #9a9a9a;
  --color-accent: #a9ff5b;
  --color-border: #303030;
  --color-border-strong: #454545;

  --font-mono: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;

  --container-width: 1024px;
  --page-gutter: clamp(1.25rem, 5vw, 4rem);
  --section-space: clamp(4.5rem, 8vw, 7rem);

  --radius-sm: 6px;
  --radius-md: 8px;
  --radius-lg: 12px;

  --transition-fast: 160ms ease;
  --transition-standard: 240ms ease;
}
```

### Uso de color

-   `--color-bg`: fondo principal de toda la página.
-   `--color-surface`: superficies diferenciadas, formularios y tarjetas
    que necesiten separación.
-   `--color-surface-raised`: hover o superficies secundarias; no usar
    en exceso.
-   `--color-text`: títulos y contenido principal.
-   `--color-text-secondary`: texto descriptivo de lectura.
-   `--color-text-muted`: fechas, etiquetas y detalles secundarios; debe
    mantener contraste suficiente.
-   `--color-accent`: enlaces destacados, indicadores activos, foco
    visual y pequeños detalles.
-   `--color-border`: divisores y contornos discretos.
-   `--color-border-strong`: bordes en foco o controles que requieran
    mayor distinción.

El acento no debe cubrir grandes superficies sin motivo. Úsalo de forma
consistente para que sea significativo. No añadas otros colores de marca
salvo que el usuario los solicite o el contenido real los necesite.

## 6. Layout y espaciado

-   Mantén una columna principal centrada con un ancho máximo
    orientativo de `1024px`.
-   Usa gutters fluidos: `clamp(1.25rem, 5vw, 4rem)`.
-   Separa las secciones con espacio generoso; referencia orientativa:
    `72px`--`112px`.
-   Usa un sistema coherente de múltiplos de 4 u 8 px.
-   Alinea títulos, textos, tarjetas y controles a una misma retícula.
-   Conserva asimetrías sutiles cuando ayuden a la composición; evita
    desalineaciones accidentales.
-   No llenes espacios negativos con elementos decorativos innecesarios.
-   En móvil, reduce la separación vertical de forma proporcional sin
    comprimir la lectura.

Ejemplo:

``` css
.container {
  width: min(
    calc(100% - 2 * var(--page-gutter)),
    var(--container-width)
  );
  margin-inline: auto;
}

.section {
  padding-block: var(--section-space);
}
```

## 7. Estructura de la página

Mantén una arquitectura de portfolio de una página salvo que el usuario
solicite rutas adicionales.

### 7.1 Navegación superior

Objetivo: permitir el acceso rápido a las secciones principales sin
dominar la pantalla.

Contenido habitual: - Marca o nombre. - Enlaces a inicio, servicios,
proyectos y contacto. - Indicador de sección activa cuando sea útil. -
Navegación móvil accesible.

Comportamiento: - En escritorio, navegación horizontal, compacta y
limpia. - Puede permanecer fija o sticky si no oculta contenido. - El
estado activo debe ser reconocible con un punto, subrayado, contraste o
acento discreto. - En móvil, usa un menú compacto con control accesible
y cierre claro. - Todos los enlaces deben apuntar a destinos
existentes. - No muestres iconos decorativos que compitan con el nombre
o los enlaces.

### 7.2 Hero / presentación

Objetivo: comunicar quién es la persona, qué hace y qué tipo de trabajo
realiza.

Composición: - Saludo o etiqueta breve, opcional. - Nombre o marca
personal. - Titular profesional claro. - Descripción de una o dos
frases. - Llamada a la acción principal y, opcionalmente, una
secundaria. - Enlaces sociales relevantes. - Retrato o elemento visual
solo si el usuario dispone de un recurso adecuado o lo solicita.

Diseño: - Titular grande en monospace con contraste alto. - Párrafo de
ancho limitado. - Acento de color en una palabra o frase, no en todo el
bloque. - Botones compactos, con jerarquía clara. - Si se utiliza una
composición de dos columnas, debe apilarse limpiamente en móvil.

No inventes nombre, cargo, ubicación, años de experiencia ni
disponibilidad. Usa placeholders explícitos o solicita los datos
necesarios.

### 7.3 Stack tecnológico / pared de logos

Objetivo: mostrar herramientas relevantes sin convertir la sección en un
catálogo visual ruidoso.

Reglas: - Incluye únicamente tecnologías que la persona realmente
utiliza o que el usuario haya indicado. - Organiza los logos en una fila
flexible o una cuadrícula compacta. - Mantén alturas visuales y
espaciado coherentes. - Si no hay logos fiables, usa nombres en texto
monospace en lugar de iconos improvisados. - Añade `aria-label` cuando
un logo no tenga texto visible. - En móvil, permite el ajuste de línea;
evita scroll horizontal accidental.

### 7.4 Servicios / capacidades

Objetivo: describir cómo puede ayudar la persona.

Composición orientativa: - Título de sección. - Texto introductorio
breve. - Dos o tres servicios con título, descripción y posible
indicador expandible. - Un detalle técnico secundario, snippet o bloque
visual solo si aporta contexto real.

Interacción: - Si los servicios son expandibles, usa botones reales y
comunica el estado con `aria-expanded`. - La animación de expansión debe
ser breve y respetar `prefers-reduced-motion`. - No uses un cursor
personalizado ni efectos de terminal como requisito. - Si existe un
snippet de código, debe ser legible, estar relacionado con el servicio y
usar monospace como el resto de la página.

### 7.5 Proyectos / trabajo seleccionado

Objetivo: presentar evidencia concreta de la calidad del trabajo.

Cada proyecto puede incluir: - Nombre. - Descripción breve. - Tipo de
proyecto, categoría o estado, si es relevante. - Tecnologías
utilizadas. - Enlace al proyecto y/o al repositorio. - Imagen o captura,
si existe un recurso auténtico.

Diseño: - Usa una cuadrícula de dos columnas en escritorio si las
imágenes y el contenido lo justifican. - En pantallas pequeñas, pasa a
una columna. - Mantén las tarjetas sobrias: superficies oscuras, radios
moderados y bordes sutiles cuando sean necesarios. - Los estados y
metadatos deben ser secundarios. - Las acciones de abrir proyecto y ver
código deben distinguirse claramente. - Usa hover para aumentar
ligeramente el contraste o desplazar una flecha; no escales grandes
bloques ni cambies el layout. - Las tarjetas no deben parecer botones si
contienen múltiples enlaces independientes.

Contenido: - No inventes proyectos ni resultados. - Si faltan datos,
presenta componentes claramente identificados como ejemplos editables. -
Usa imágenes optimizadas y proporciones consistentes; define `width` y
`height` o una relación de aspecto para evitar saltos de layout. - Los
enlaces externos deben ser reales y abrirse con una política segura.

### 7.6 Contacto

Objetivo: facilitar una acción de contacto clara y sin fricción.

Composición: - Título directo. - Mensaje breve invitando a conversar. -
Email o enlaces profesionales, cuando se conozcan. - Formulario con
nombre, email y mensaje si el usuario lo necesita. - Botón de envío y
estados visibles.

Comportamiento: - Etiquetas persistentes; no dependas exclusivamente del
placeholder. - Validación comprensible tanto en cliente como en servidor
cuando corresponda. - Indica los errores junto al campo relevante. -
Muestra confirmación solo si el envío se completó realmente. - Añade
estado de carga y evita envíos repetidos. - Si no hay backend
configurado, no simules que el mensaje se ha enviado. Deja el endpoint
como configuración pendiente o ofrece un enlace `mailto:` funcional. -
Mantén foco visible y navegación por teclado.

### 7.7 Footer

Incluye, según los datos disponibles: - Nombre o marca. - Enlaces
sociales. - Email o contacto. - Copyright. - Créditos técnicos si
proceden. - Integración de música o Spotify únicamente si el usuario la
desea y proporciona el recurso.

El footer debe cerrar visualmente la página sin competir con la sección
de contacto. Mantén tipografía monospace, texto secundario y divisores
discretos.

## 8. Componentes y estados

### Botones

-   Define estilos primario, secundario, enlace y deshabilitado.
-   El primario puede utilizar el color de acento con texto oscuro,
    siempre que el contraste sea suficiente.
-   El secundario debe tener fondo transparente o superficie discreta.
-   Altura orientativa: 40--48 px.
-   Área táctil recomendada: al menos 44 × 44 px.
-   Incluye estados `hover`, `active`, `focus-visible` y `disabled`.
-   No uses un elemento `div` como botón.

### Enlaces

-   Deben identificarse como interactivos sin depender solo del color.
-   Incluye una transición discreta en color, subrayado o flecha.
-   Los enlaces de navegación deben tener destino real.
-   Evita enlaces con texto ambiguo como "aquí" cuando puede usarse una
    descripción clara.

### Inputs y textarea

-   Fondo oscuro, borde de bajo contraste y texto legible.
-   En foco, utiliza un borde o outline claro y visible.
-   Mantén el mismo stack monospace en valor, placeholder, etiqueta y
    mensajes de validación.
-   No elimines el outline del navegador sin proporcionar un reemplazo
    accesible.

### Tarjetas

-   Utiliza tarjetas cuando ayuden a agrupar información; no las
    conviertas en el patrón de cada sección.
-   Radio orientativo de 8--12 px.
-   Evita sombras pesadas; el contraste de superficie y un borde sutil
    suelen ser suficientes.
-   Los estados hover no deben desplazar elementos vecinos.

### Iconos

-   Usa un único estilo de iconografía y tamaños coherentes.
-   Prefiere SVG o una biblioteca ya presente en el proyecto.
-   Añade nombre accesible a controles con solo icono.
-   Los iconos decorativos deben llevar `aria-hidden="true"`.
-   No uses emojis como iconos de acciones principales.

## 9. Motion e interacción

-   Las transiciones deben sentirse rápidas, discretas y funcionales.
-   Duración orientativa: 160--240 ms.
-   Anima principalmente `opacity`, `transform`, color y borde.
-   Evita animar dimensiones de forma continua o provocar reflow
    innecesario.
-   No añadas animaciones de entrada a cada elemento si retrasan el
    acceso al contenido.
-   Cualquier efecto de glitch es opcional y debe ser muy limitado;
    nunca debe dificultar la lectura.
-   Respeta `prefers-reduced-motion: reduce`.
-   La página debe ser completamente utilizable con animaciones
    desactivadas.
-   No bloquees el scroll ni introduzcas cursores personalizados sin una
    necesidad demostrable.

## 10. Responsive design

Implementa mobile-first y adapta la composición al contenido real. Los
breakpoints siguientes son orientativos:

``` css
/* Base: móviles */
.container { /* una columna y gutters fluidos */ }

/* Tablet */
@media (min-width: 640px) {
  /* ampliar el grid cuando el contenido lo permita */
}

/* Escritorio */
@media (min-width: 1024px) {
  /* navegación horizontal y columnas de proyectos/servicios */
}

/* Pantallas grandes */
@media (min-width: 1280px) {
  /* conservar ancho de lectura; no estirar indefinidamente */
}
```

Criterios: - No debe haber scroll horizontal a 320 px de ancho. - El
titular debe hacer wrap de forma natural y no cortar palabras
esenciales. - Los botones y enlaces deben poder tocarse cómodamente. -
La navegación móvil debe ser operable con teclado y lector de
pantalla. - Las cuadrículas deben pasar a una columna cuando la anchura
sea insuficiente. - Las imágenes deben adaptarse al contenedor sin
deformarse. - No reduzcas el texto hasta hacerlo ilegible para conservar
una composición de escritorio. - Comprueba orientación vertical y
horizontal cuando corresponda.

## 11. Accesibilidad

Cumple, como mínimo: - HTML semántico: `header`, `nav`, `main`,
`section`, `footer`. - Un solo H1 principal y una jerarquía de
encabezados coherente. - Contraste suficiente entre texto y fondo. -
Foco visible en todos los controles interactivos. - Operación completa
por teclado. - Etiquetas accesibles en formularios. - Texto alternativo
descriptivo para imágenes informativas. - `aria-label` en controles de
icono sin texto. - Estados expandido, seleccionado, ocupado y error
comunicados cuando aplique. - No usar solo color para transmitir un
estado. - Respeto por `prefers-reduced-motion`. - Enlaces descriptivos y
botones con propósito claro.

La tipografía monospace no debe utilizarse como excusa para reducir el
tamaño del texto o el contraste.

## 12. SEO y metadatos

Personaliza según la información confirmada: - `title` único y
descriptivo. - Meta description. - URL canónica si existe dominio
definitivo. - Open Graph y metadatos sociales. - Favicon e iconos de
aplicación si se han proporcionado. - Datos estructurados solo cuando
representen información real. - Texto alternativo en imágenes. - URLs
legibles y títulos de página coherentes.

No inventes dominio, email, perfiles sociales, ubicación ni datos
estructurados de la persona.

## 13. Stack técnico y arquitectura

### Si el proyecto parte de cero

Si el usuario no impone un stack, Astro es una opción adecuada para un
portfolio con contenido mayormente estático. React puede añadirse para
interacciones que lo justifiquen. Tailwind CSS es aceptable si ya está
configurado o si mejora el flujo de trabajo.

No impongas una migración tecnológica si el proyecto ya funciona con
otro stack.

### Reglas de implementación

-   Revisa primero la estructura, dependencias y convenciones
    existentes.
-   Reutiliza componentes y tokens antes de crear duplicados.
-   Mantén los componentes pequeños y con responsabilidades claras.
-   Separa contenido, presentación y lógica de interacción.
-   Evita dependencias nuevas para comportamientos que pueden resolverse
    de forma simple.
-   No añadas librerías de animación, iconos o formularios sin
    necesidad.
-   Usa TypeScript si el proyecto ya lo utiliza.
-   Mantén los componentes reutilizables para navegación, botones,
    tarjetas, etiquetas y campos.
-   No reemplaces una aplicación funcional con una maqueta estática si
    el usuario pide funcionalidad.

### Posible estructura en Astro

``` text
src/
  components/
    Nav.astro
    Hero.astro
    TechStack.astro
    Services.astro
    Projects.astro
    Contact.astro
    Footer.astro
    ui/
      Button.astro
      SectionHeading.astro
      ProjectCard.astro
  layouts/
    Layout.astro
  pages/
    index.astro
  styles/
    global.css
public/
  images/
  icons/
```

Adapta nombres y organización a la estructura real del proyecto; no
reorganices todo innecesariamente.

## 14. Rendimiento

-   Prioriza HTML estático para contenido que no necesita JavaScript.
-   Hidrata componentes interactivos solo cuando sea necesario.
-   Optimiza imágenes y evita archivos multimedia pesados.
-   Usa carga diferida para imágenes fuera de la primera vista.
-   Reserva dimensiones para imágenes y embeds.
-   Evita scripts de terceros innecesarios.
-   No cargues fuentes remotas si el stack local es suficiente.
-   Evita cambios de layout al cargar.
-   Comprueba errores de consola y solicitudes fallidas si existe un
    entorno de navegador.

## 15. Integraciones opcionales

### Formulario

Puede conectarse a Formspree u otro servicio solo si el usuario lo elige
y proporciona la configuración necesaria. Nunca publiques secretos ni
claves privadas en código de cliente.

### Spotify

Solo incorporar un embed si el usuario lo solicita y proporciona el
álbum o playlist adecuado. Asegura que el embed sea responsive y no
desborde en móvil.

### Like counter u otras acciones persistentes

No simules persistencia con un contador puramente visual. Implementa
almacenamiento real solo si el usuario lo pide y el entorno lo permite;
documenta cualquier requisito externo.

## 16. Procedimiento de trabajo

Cuando recibas una tarea de creación o modificación:

1.  Inspecciona el proyecto actual y determina el stack.
2.  Identifica las secciones existentes y los datos que deben
    conservarse.
3.  Define o reutiliza los tokens visuales.
4.  Aplica monospace globalmente antes de ajustar detalles tipográficos.
5.  Construye la estructura semántica de la página.
6.  Implementa componentes y estados funcionales.
7.  Adapta el layout a móvil, tablet y escritorio.
8.  Comprueba contraste, foco, etiquetas y teclado.
9.  Comprueba enlaces, formularios, imágenes y errores.
10. Busca fuentes no monospace, overflow horizontal y estilos
    inconsistentes.
11. Resume de forma breve qué se cambió y qué integraciones siguen
    pendientes.

Si una decisión depende de información que falta, usa un placeholder
claramente editable o haz una pregunta concreta. No inventes datos para
rellenar el diseño.

## 17. Checklist de aceptación

Antes de considerar el trabajo terminado, comprueba todos estos puntos:

-   [ ] La estética general sigue siendo oscura, minimalista y
    profesional.
-   [ ] Toda la tipografía visible e interactiva es monospace.
-   [ ] No quedan clases o estilos `sans`, `serif` o `display` activos.
-   [ ] Los colores se gestionan mediante tokens centralizados.
-   [ ] El acento se usa con moderación y coherencia.
-   [ ] Las secciones tienen espaciado y alineación consistentes.
-   [ ] La navegación apunta a destinos existentes y funciona en móvil.
-   [ ] Los proyectos no contienen datos inventados.
-   [ ] Los botones, enlaces, acordeones y formularios son funcionales.
-   [ ] Los estados de hover, foco, error, carga y deshabilitado están
    cubiertos cuando corresponda.
-   [ ] No hay scroll horizontal accidental a 320 px.
-   [ ] El foco es visible y se puede usar la página con teclado.
-   [ ] Las imágenes tienen proporciones estables y texto alternativo
    cuando procede.
-   [ ] Se respeta `prefers-reduced-motion`.
-   [ ] Los metadatos SEO no contienen placeholders publicados.
-   [ ] No se afirma que una integración funciona si no se ha
    verificado.
-   [ ] Se revisaron los errores de consola cuando había herramientas
    disponibles.

## 18. Instrucción final para el agente

Crea una experiencia inspirada en Darkminimal: oscura, sobria,
espaciosa, enfocada en el trabajo y con acentos mínimos. **La única
desviación de estilo autorizada por defecto es usar monospace en
absolutamente toda la tipografía.** Conserva el contenido real, evita
adornos innecesarios y prioriza legibilidad, accesibilidad, rendimiento
y funcionamiento real sobre efectos visuales.
