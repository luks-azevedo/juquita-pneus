/**
 * Dados da empresa — único lugar com informações do cliente.
 *
 * Campos vazios ('') não aparecem no site e não geram links.
 * Em desenvolvimento (`npm run dev`), um aviso lista o que falta preencher.
 *
 * CONTEÚDO ATUAL: empresa FICTÍCIA usada no site demonstrativo do template.
 */
import type { SiteConfig } from './types';

export const site: SiteConfig = {
  demo: true,
  name: 'Viana Consultoria',
  legalName: '',
  cnpj: '',
  description:
    'Consultoria em gestão e finanças para pequenas e médias empresas que querem decidir com mais clareza.',
  segment: 'Consultoria empresarial',
  domain: '',
  logo: {
    src: '',
    alt: 'Viana Consultoria',
    width: 0,
    height: 0,
  },
  favicon: '/favicon.svg',
  contact: {
    phone: '',
    whatsapp: '',
    whatsappMessage: 'Olá! Encontrei o site da Viana Consultoria e gostaria de mais informações.',
    email: '',
    hours: '',
  },
  address: {
    street: '',
    district: '',
    city: '',
    state: '',
    zip: '',
    mapsUrl: '',
  },
  social: {
    instagram: '',
    facebook: '',
    linkedin: '',
    youtube: '',
  },
  seo: {
    titleTemplate: '%s | Viana Consultoria',
    defaultTitle: 'Viana Consultoria — Gestão e finanças para pequenas empresas',
    defaultDescription:
      'Diagnóstico, planejamento financeiro e organização de processos para pequenas e médias empresas.',
    ogImage: '/images/og-default.png',
    locale: 'pt_BR',
    language: 'pt-BR',
  },
};
