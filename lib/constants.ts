export const navLinks = [
  { name: "Inicio", path: "/" },
  { name: "Quiénes Somos", path: "/about" },
  { name: "Servicios", path: "/services" },
  { name: "Admisiones", path: "/admissions" },
  { name: "Contacto", path: "/contact" },
];

export const reviews = [
  {
    name: "Ana Pérez",
    comment:
      "¡Mis hijos adoran iKids! El personal es increíblemente cariñoso y las instalaciones son perfectas para que jueguen y aprendan.",
    rating: 5,
  },
  {
    name: "Carlos González",
    comment:
      "La mejor decisión que hemos tomado. Nuestro hijo ha desarrollado muchísimas habilidades sociales y cognitivas. ¡Totalmente recomendado!",
    rating: 5,
  },
  {
    name: "Luisa Martinez",
    comment:
      "Un ambiente seguro, divertido y educativo. El equipo de iKids realmente se preocupa por el bienestar de cada niño.",
    rating: 5,
  },
];

export const courses = [
  {
    name: "SALA CUNA",
    description:
      " 3 A 12 MESES",
    imageUrl: "/salas/SALACUNA.JPG",
  },
  {
    name: "MATERNAL",
    description:
      " 1 A 2 AÑOS",
    imageUrl: "/salas/MATERNALii.JPG",
  },
  {
    name: "NURSERY",
    description:
      "2 A 3 AÑOS",
    imageUrl: "/salas/NURSERY.jpg",
  },
  {
    name: "INICIAL I",
    description:
      "3 A 4 AÑOS",
    imageUrl: "/salas/INICIALI.jpg",
  },
  {
    name: "INICIAL II",
    description:
      " 4 A 5 AÑOS",
    imageUrl: "/salas/INICIALII.jpg",
  },
 
   ];

export const playAreas = [
  {
    name: "GIMNASIO",
    description:
      " Espacio diseñado para estimular el desarrollo motor grueso, donde los niños fortalecen su coordinación, equilibrio y confianza a través del movimiento.",
    imageUrl: "/rincones/GINASIO.JPG",
  },
  {
    name: "ARENERO",
    description:
      " Zona sensorial que promueve la exploración táctil, la creatividad y el juego libre, favoreciendo la concentración y el trabajo en equipo.",
    imageUrl: "/rincones/ARENERO.JPG",
  },
  {
    name: "CASA DEL ÁRBOL",
    description:
      "Refugio lúdico que invita a imaginar, crear historias y desarrollar habilidades sociales en un entorno que despierta la curiosidad.",
    imageUrl: "/rincones/CASAARBOL.jpg",
  },
  {
    name: "CONSTRUCCIÓN",
    description:
      "Área que fomenta el pensamiento lógico, la planificación y la resolución de problemas mediante juegos de ensamblaje y estructuras.",
    imageUrl: "/rincones/CONSTRUCCION.jpg",
  },
  {
    name: "JUEGOS",
    description:
      "A través del juego libre y guiado, los niños estimulan su creatividad, fortalecen su confianza y aprenden a relacionarse, todo en un ambiente seguro y diseñado especialmente para ellos.",
    imageUrl: "/rincones/JUEGOS.jpg",
  },
];

export const services = [
  {
    title: "FULL TIME",
    description: "Horarios flexibles que se ajustan a tus necesitadades.",
    features: ["Planes desde 7:30 am- 18:30pm", "Informes diarios"],
    emoji: "⏰"
  },
  {
    title: "INSTALACIONES",
    description:
      "Diseñadas para estimular el juego, la seguridad y el aprendizaje en cada rincón de IKIDS.",
    emoji: "🏢"
  },
  {
    title: "PERSONAL",
    description: " Docentes y profesionales apasionados, con vocación y formación especializada en desarrollo infantil.",
    emoji: "👪"
  },
  {
    title: "IDIOMAS",
    description:
      " Desde pequeños aprenden inglés y francés de forma lúdica, estimulando el desarrollo cognitivo y cultural.",
      emoji: "🌐"
  },
  {
    title: "CÁMARAS",
    description:
      " Accede desde tu celular y observa cada momento de tu peque con total tranquilidad y confianza.",
      emoji: "📷"
  },
  {
    title: "CONTROLES MÉDICOS",
    description:
      " Contamos con controles médicos y psicológicos periódicos para asegurar el bienestar integral de cada niño.",
      emoji: "🩺"
  },
  
];

export const admissionSteps = [
  {
    step: 1,
    title: "Agenda una Visita",
    description:
      "Completa nuestro formulario para conocer nuestras instalaciones y a nuestro equipo.",
  },
  {
    step: 2,
    title: "Entrevista Familiar",
    description:
      "Una charla para conocernos mejor y resolver todas tus dudas sobre nuestra metodología.",
  },
  {
    step: 3,
    title: "Entrega de Documentos",
    description:
      "Reunir y entregar la documentación necesaria para formalizar la inscripción.",
  },
  {
    step: 4,
    title: "¡Bienvenido a iKids!",
    description:
      "Una vez completado el proceso, ¡tu pequeño ya es parte de nuestra gran familia!",
  },
];

// Datos para la galería de instalaciones
export interface GallerySlide {
  id: number;
  src: string;
  alt: string;
  label: string;
}

export const gallerySlidesSedeTelegrafo: GallerySlide[] = [
  {
    id: 1,
    src: '/sedes/telegrafo/1.jpg',
    alt: 'Instalaciones Sede Telégrafo 1',
    label: 'SEDE TELÉGRAFO'
  },
  {
    id: 2,
    src: '/sedes/telegrafo/2.jpg',
    alt: 'Instalaciones Sede Telégrafo 2',
    label: 'SEDE TELÉGRAFO'
  },
  {
    id: 3,
    src: '/sedes/telegrafo/3.jpg',
    alt: 'Instalaciones Sede Telégrafo 3',
    label: 'SEDE TELÉGRAFO'
  },
  {
    id: 4,
    src: '/sedes/telegrafo/4.jpg',
    alt: 'Instalaciones Sede Telégrafo 4',
    label: 'SEDE TELÉGRAFO'
  },
  {
    id: 5,
    src: '/sedes/telegrafo/5.jpg',
    alt: 'Instalaciones Sede Telégrafo 5',
    label: 'SEDE TELÉGRAFO'
  },
  {
    id: 6,
    src: '/sedes/telegrafo/6.jpg',
    alt: 'Instalaciones Sede Telégrafo 6',
    label: 'SEDE TELÉGRAFO'
  },
  {
    id: 7,
    src: '/sedes/telegrafo/7.jpg',
    alt: 'Instalaciones Sede Telégrafo 7',
    label: 'SEDE TELÉGRAFO'
  },
  {
    id: 8,
    src: '/sedes/telegrafo/8.jpg',
    alt: 'Instalaciones Sede Telégrafo 8',
    label: 'SEDE TELÉGRAFO'
  },
  {
    id: 9,
    src: '/sedes/telegrafo/9.jpg',
    alt: 'Instalaciones Sede Telégrafo 9',
    label: 'SEDE TELÉGRAFO'
  },
  {
    id: 10,
    src: '/sedes/telegrafo/10.jpg',
    alt: 'Instalaciones Sede Telégrafo 10',
    label: 'SEDE TELÉGRAFO'
  },{
    id: 11,
    src: '/sedes/telegrafo/11.jpg',
    alt: 'Instalaciones Sede Telégrafo 11',
    label: 'SEDE TELÉGRAFO'
  },
  {
    id: 12,
    src: '/sedes/telegrafo/12.jpg',
    alt: 'Instalaciones Sede Telégrafo 12',
    label: 'SEDE TELÉGRAFO'
  },
  {
    id: 13,
    src: '/sedes/telegrafo/13.jpg',
    alt: 'Instalaciones Sede Telégrafo 13',
    label: 'SEDE TELÉGRAFO'
  },
  {
    id: 14,
    src: '/sedes/telegrafo/14.jpg',
    alt: 'Instalaciones Sede Telégrafo 14',
    label: 'SEDE TELÉGRAFO'
  },
];

export const gallerySlidesSedeJardin: GallerySlide[] = [
 {
    id: 1,
    src: '/sedes/jardin/1.jpg',
    alt: 'Instalaciones Sede Jardin 1',
    label: 'SEDE JARDIN'
  },

  /*
{
  id: 2,
  src: '/sedes/jardin/2.jpg',
  alt: 'Instalaciones Sede Jardin 2',
  label: 'SEDE JARDIN'
},
*/
  {
    id: 3,
    src: '/sedes/jardin/3.jpg',
    alt: 'Instalaciones Sede Jardin 3',
    label: 'SEDE JARDIN'
  },
  {
    id: 4,
    src: '/sedes/jardin/4.jpg',
    alt: 'Instalaciones Sede Jardin 4',
    label: 'SEDE JARDIN'
  },
  {
    id: 5,
    src: '/sedes/jardin/5.jpg',
    alt: 'Instalaciones Sede Jardin 5',
    label: 'SEDE JARDIN'
  },
  {
    id: 6,
    src: '/sedes/jardin/6.jpg',
    alt: 'Instalaciones Sede Jardin 6',
    label: 'SEDE JARDIN'
  },
  {
    id: 7,
    src: '/sedes/jardin/7.jpg',
    alt: 'Instalaciones Sede Jardin 7',
    label: 'SEDE JARDIN'
  },
  {
    id: 8,
    src: '/sedes/jardin/8.jpg',
    alt: 'Instalaciones Sede Jardin 8',
    label: 'SEDE JARDIN'
  },
  {
    id: 9,
    src: '/sedes/jardin/9.jpg',
    alt: 'Instalaciones Sede Jardin 9',
    label: 'SEDE JARDIN'
  },
  {
    id: 10,
    src: '/sedes/jardin/10.jpg',
    alt: 'Instalaciones Sede Jardin 10',
    label: 'SEDE JARDIN'
  },
];