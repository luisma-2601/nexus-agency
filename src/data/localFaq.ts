interface LocalFaqEntry {
  keys: string[];
  reply: string;
}

// Base local de respuestas — funciona como respaldo si el webhook de n8n
// aún no está configurado o no responde, para que el chat nunca se quede mudo.
export const localFAQ: LocalFaqEntry[] = [
  {
    keys: ['servicio', 'ofrecen', 'hacen', 'ofrece'],
    reply:
      'Ofrecemos dos tipos de soluciones: automatizaciones inteligentes (chatbots, integraciones, flujos con n8n) y desarrollo de páginas web profesionales. ¿Quieres saber más de alguna en particular?',
  },
  {
    keys: ['precio', 'costo', 'cuesta', 'cotiza', 'valor'],
    reply:
      'El costo depende del alcance del proyecto (complejidad del flujo, cantidad de integraciones, tamaño del sitio). Escríbenos por WhatsApp y te enviamos una cotización a la medida.',
  },
  {
    keys: ['tiempo', 'tarda', 'demora', 'cuanto tiempo'],
    reply:
      'La mayoría de proyectos toman entre 1 y 3 semanas desde que se aprueba la propuesta, dependiendo de la complejidad.',
  },
  {
    keys: ['contact', 'whatsapp', 'llamar', 'hablar con alguien', 'humano'],
    reply:
      'Claro, puedes escribirnos directo por WhatsApp o correo (los enlaces están en la sección de Contacto) y te respondemos en menos de 24 horas.',
  },
  {
    keys: ['chatbot', 'bot', 'ia', 'inteligencia artificial'],
    reply:
      'Sí, creamos chatbots con IA para WhatsApp, Instagram y páginas web, conectados a flujos de automatización en n8n para responder preguntas frecuentes y derivar casos complejos a un humano.',
  },
  {
    keys: ['web', 'pagina', 'sitio', 'landing'],
    reply:
      'Diseñamos landing pages, sitios corporativos y tiendas online, con diseño profesional, rápido y optimizado para convertir visitantes en clientes — como esta misma página.',
  },
  {
    keys: ['n8n', 'automatizacion', 'automatizar', 'flujo', 'integra'],
    reply:
      'Usamos n8n (y otras herramientas como Make o Zapier) para conectar tus apps: WhatsApp, CRM, hojas de cálculo, correo, pagos y más, todo funcionando sin que tengas que hacerlo manualmente.',
  },
  {
    keys: ['hola', 'buenas', 'hey'],
    reply: '¡Hola! Un gusto saludarte 👋 ¿En qué puedo ayudarte hoy: automatizaciones, páginas web, precios o agendar una llamada?',
  },
];

export function localReply(text: string): string {
  const lower = text.toLowerCase();
  const match = localFAQ.find((entry) => entry.keys.some((key) => lower.includes(key)));
  if (match) return match.reply;
  return 'Gracias por tu mensaje. Un miembro de nuestro equipo puede darte más detalles: escríbenos por WhatsApp y te respondemos en menos de 24 horas.';
}
