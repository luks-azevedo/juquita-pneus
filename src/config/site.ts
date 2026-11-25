/**
 * Dados da Juquita Pneus | Centro Automotivo.
 * Fonte: briefing preenchido pelo cliente (nov/2026) e Google Maps.
 */
import type { SiteConfig } from './types';

export const site: SiteConfig = {
  demo: false,
  name: 'Juquita Pneus',
  legalName: '',
  cnpj: '',
  description:
    'Centro automotivo em Conselheiro Lafaiete desde 1957: pneus, freios, suspensão e mecânica. Agende pelo WhatsApp.',
  segment: 'Centro automotivo',
  domain: '',
  logo: {
    src: '/images/logo-juquita.png',
    srcInverted: '/images/logo-juquita.png',
    alt: 'Juquita Pneus',
    width: 770,
    height: 208,
  },
  favicon: '/favicon.png',
  contact: {
    phone: '',
    whatsapp: '5531995101570',
    whatsappMessage: 'Olá! Vim pelo site da Juquita Pneus e gostaria de agendar um serviço.',
    email: '',
    hours: 'Segunda a sexta, das 7h45 às 18h',
  },
  address: {
    street: 'R. Alfredo Elías Mafuz, 1000',
    district: 'Santa Matilde',
    city: 'Conselheiro Lafaiete',
    state: 'MG',
    zip: '36400-000',
    mapsUrl:
      'https://www.google.com/maps/place/Juquita+Pneus+%7C+Oficina+Mec%C3%A2nica+em+Conselheiro+Lafaiete/@-20.6777142,-43.7867456,17z/data=!3m1!4b1!4m6!3m5!1s0xa3df7ed24fb081:0xb9eba0c329428319!8m2!3d-20.6777142!4d-43.7867456!16s%2Fg%2F1tdd1x_3',
  },
  social: {
    instagram: 'https://www.instagram.com/juquitapneus_/',
    facebook: '',
    linkedin: '',
    youtube: '',
  },
  schemaType: 'AutoRepair',
  geo: { lat: -20.6777142, lng: -43.7867456 },
  openingHours: [
    { day: 'Mo', label: 'Segunda', hours: ['07:45', '18:00'] },
    { day: 'Tu', label: 'Terça', hours: ['07:45', '18:00'] },
    { day: 'We', label: 'Quarta', hours: ['07:45', '18:00'] },
    { day: 'Th', label: 'Quinta', hours: ['07:45', '18:00'] },
    { day: 'Fr', label: 'Sexta', hours: ['07:45', '18:00'] },
    { day: 'Sa', label: 'Sábado', hours: null },
    { day: 'Su', label: 'Domingo', hours: null },
  ],
  seo: {
    titleTemplate: '%s | Juquita Pneus',
    defaultTitle: 'Juquita Pneus — Centro automotivo em Conselheiro Lafaiete desde 1957',
    defaultDescription:
      'Pneus, alinhamento, balanceamento, freios, suspensão e mecânica em Conselheiro Lafaiete. Agende pelo WhatsApp (31) 99510-1570.',
    ogImage: '/images/og-default.png',
    locale: 'pt_BR',
    language: 'pt-BR',
  },
};

/** Mensagem pronta para pedir orçamento de pneus. */
export const whatsappMessages = {
  agendar: 'Olá! Vim pelo site da Juquita Pneus e gostaria de agendar um serviço.',
  pneus: 'Olá! Gostaria de um orçamento de pneus. Meu carro é: ',
};
