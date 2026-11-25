/**
 * Tipos das configurações do projeto.
 * Mantêm site.ts, theme.ts, navigation.ts e forms.ts consistentes entre clientes.
 */

/* ------------------------------------------------------------------ */
/* site.ts                                                            */
/* ------------------------------------------------------------------ */

export interface SiteLogo {
  /** Caminho de um arquivo em /public (SVG ou PNG). Vazio = logotipo em texto (nome da empresa). */
  src: string;
  alt: string;
  /** Dimensões intrínsecas do arquivo (evitam layout shift). */
  width: number;
  height: number;
  /** Versão para fundos escuros (opcional). */
  srcInverted?: string;
  /** Logotipo tipográfico (usado quando `src` está vazio). Ex.: 'CASTRO' */
  wordmark?: string;
  /** Linha complementar do logotipo tipográfico. Ex.: 'Advocacia Especializada' */
  tagline?: string;
}

/** Dia da semana no padrão schema.org (Mo, Tu, We, Th, Fr, Sa, Su). */
export type WeekDay = 'Mo' | 'Tu' | 'We' | 'Th' | 'Fr' | 'Sa' | 'Su';

export interface OpeningHoursDay {
  day: WeekDay;
  /** Nome exibido. Ex.: 'Terça' */
  label: string;
  /** ['17:00', '00:00'] — ou `null` para fechado. Fechamento após meia-noite é aceito. */
  hours: [string, string] | null;
}

export interface SiteConfig {
  /** Exibe a faixa "site demonstrativo". Use `false` em projetos de clientes. */
  demo: boolean;
  name: string;
  /** Razão social (opcional, rodapé). */
  legalName: string;
  /** CNPJ (opcional, rodapé). */
  cnpj: string;
  description: string;
  segment: string;
  /** Domínio com protocolo e sem barra final. Ex.: 'https://www.cliente.com.br' */
  domain: string;
  logo: SiteLogo;
  favicon: string;
  contact: {
    /** Telefone com DDD, apenas dígitos. Ex.: '1133334444' */
    phone: string;
    /** WhatsApp com DDI + DDD, apenas dígitos. Ex.: '5511999998888' */
    whatsapp: string;
    /** Mensagem inicial padrão do WhatsApp. */
    whatsappMessage: string;
    email: string;
    /** Horário de atendimento. Ex.: 'Seg. a sex., 9h às 18h' */
    hours: string;
  };
  address: {
    street: string;
    district: string;
    city: string;
    state: string;
    zip: string;
    /** Link do Google Maps (opcional). */
    mapsUrl: string;
  };
  /** URLs completas. Vazio = não exibe. */
  social: {
    instagram: string;
    facebook: string;
    linkedin: string;
    youtube: string;
  };
  /** Tipo schema.org do negócio. Ex.: 'LocalBusiness', 'BarOrPub', 'Restaurant', 'Dentist'. */
  schemaType?: string;
  /** Cidades/regiões atendidas (dados estruturados). */
  areaServed?: string[];
  /** Coordenadas (opcional, melhora o SEO local). */
  geo?: { lat: number; lng: number };
  /** Horário estruturado (opcional). Usado na seção de horários e nos dados estruturados. */
  openingHours?: OpeningHoursDay[];
  seo: {
    /** `%s` é substituído pelo título da página. */
    titleTemplate: string;
    defaultTitle: string;
    defaultDescription: string;
    /** Imagem de compartilhamento (1200×630) em /public. */
    ogImage: string;
    locale: string;
    language: string;
  };
}

/* ------------------------------------------------------------------ */
/* theme.ts                                                           */
/* ------------------------------------------------------------------ */

export interface ThemeFont {
  /** Nome da família no Fontsource (fontsource.org). Ex.: 'Inter', 'Fraunces' */
  name: string;
  fallback: 'serif' | 'sans-serif';
  /**
   * Pesos. Prefira uma faixa variável ('400 700'): um único arquivo por idioma,
   * carregamento mais rápido. Para fontes sem versão variável, liste os pesos: [400, 600].
   */
  weights: (number | string)[];
  styles?: ('normal' | 'italic')[];
}

export interface Theme {
  name: string;
  colors: {
    /** Cor principal: botões, links, destaques. */
    primary: string;
    /** Texto sobre a cor principal. */
    primaryContrast: string;
    /** Cor de apoio: fundos de seções alternadas, superfícies. */
    secondary: string;
    /** Destaque pontual: rótulos, detalhes. Precisa ter contraste AA sobre `background`. */
    accent: string;
    background: string;
    /** Cards e blocos sobre o fundo. */
    surface: string;
    text: string;
    /** Texto secundário. Precisa ter contraste AA sobre `background`. */
    muted: string;
    border: string;
    /** Fundo de seções escuras (CTA, rodapé). */
    inverted: string;
    invertedText: string;
  };
  fonts: {
    heading: ThemeFont;
    body: ThemeFont;
  };
  typography: {
    headingWeight: number;
    /** Ex.: '-0.02em' */
    headingTracking: string;
    headingLineHeight: number;
    /** Caixa dos títulos (opcional). Use 'uppercase' para fontes de display condensadas. */
    headingTransform?: 'none' | 'uppercase';
    /** Estilo dos títulos (opcional). A fonte precisa incluir o estilo em `styles`. */
    headingStyle?: 'normal' | 'italic';
    /** Tamanho base do texto. Ex.: '1rem' */
    baseSize: string;
  };
  radius: {
    /** Botões e campos. Use '999px' para botões em pílula. */
    control: string;
    /** Cards, imagens e blocos. */
    card: string;
  };
  layout: {
    /** Largura máxima do conteúdo. Ex.: '1200px' */
    containerWidth: string;
    /** Espaço vertical entre seções: [mobile, desktop]. */
    sectionSpacing: [string, string];
  };
}

/* ------------------------------------------------------------------ */
/* navigation.ts                                                      */
/* ------------------------------------------------------------------ */

export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  main: NavLink[];
  /** Botão de destaque no header. */
  cta: NavLink | null;
  footer: { title: string; links: NavLink[] }[];
}

/* ------------------------------------------------------------------ */
/* forms.ts                                                           */
/* ------------------------------------------------------------------ */

export type FormProvider = 'none' | 'formspree' | 'web3forms' | 'custom';

export interface FormConfig {
  /**
   * - 'none'      → sem serviço conectado: o formulário valida e oferece envio por WhatsApp/e-mail.
   * - 'formspree' → `endpoint` = URL do formulário (https://formspree.io/f/xxxx)
   * - 'web3forms' → `accessKey` = chave de acesso pública do Web3Forms
   * - 'custom'    → `endpoint` = URL própria que recebe JSON via POST
   */
  provider: FormProvider;
  endpoint: string;
  accessKey: string;
  subject: string;
  messages: {
    success: string;
    error: string;
    notConnected: string;
  };
}
