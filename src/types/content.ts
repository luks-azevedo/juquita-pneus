/** Tipos de conteúdo aceitos pelas seções. */
import type { ImageMetadata } from 'astro';

export interface CTA {
  label: string;
  href: string;
}

export interface ContentImage {
  src: ImageMetadata;
  alt: string;
  caption?: string;
}

export interface ServiceItem {
  /** Âncora (ex.: 'diagnostico' → /servicos#diagnostico). */
  id?: string;
  icon?: any;
  title: string;
  description: string;
  /** Itens incluídos (exibidos na variante 'list'). */
  details?: string[];
  href?: string;
}

export interface FeatureItem {
  icon?: any;
  title: string;
  description: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role?: string;
}

export interface PortfolioItem {
  title: string;
  category: string;
  description: string;
  image: ContentImage;
  href?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
