export interface Project {
  id: string;
  num: string;
  name: string;
  category: string;
  description: string;
  imageLeft1: string;
  imageLeft2: string;
  imageRight: string;
  alt: string;
}

// Casos de ejemplo (proyectos demo, no clientes reales) con imágenes ya generadas
// para cada proyecto. Si más adelante tienes capturas reales de un cliente,
// solo reemplaza los archivos en public/media/ y ajusta el copy.
export const projects: Project[] = [
  {
    id: 'vitalis',
    num: '01',
    name: 'Clínica Vitalis',
    category: 'Chatbot + Automatización (Proyecto demo)',
    description: 'Asistente en WhatsApp que agenda citas automáticamente y reduce las llamadas al mostrador.',
    imageLeft1: 'media/project-1-left-1.jpg',
    imageLeft2: 'media/project-1-left-2.jpg',
    imageRight: 'media/project-1-right.jpg',
    alt: 'Clínica Vitalis — proyecto de ejemplo',
  },
  {
    id: 'andina',
    num: '02',
    name: 'Tienda Andina',
    category: 'E-commerce + Integraciones (Proyecto demo)',
    description: 'Tienda online conectada a CRM y pasarela de pago mediante un flujo de n8n.',
    imageLeft1: 'media/project-2-left-1.jpg',
    imageLeft2: 'media/project-2-left-2.jpg',
    imageRight: 'media/project-2-right.jpg',
    alt: 'Tienda Andina — proyecto de ejemplo',
  },
  {
    id: 'lumen',
    num: '03',
    name: 'Estudio Lumen',
    category: 'Diseño Web + Chatbot (Proyecto demo)',
    description: 'Sitio corporativo rediseñado con un chatbot de calificación de leads.',
    imageLeft1: 'media/project-3-left-1.jpg',
    imageLeft2: 'media/project-3-left-2.jpg',
    imageRight: 'media/project-3-right.jpg',
    alt: 'Estudio Lumen — proyecto de ejemplo',
  },
];
