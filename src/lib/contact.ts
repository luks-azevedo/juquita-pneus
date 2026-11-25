/**
 * Links de contato gerados a partir de site.ts.
 * Todas as funções retornam `null` quando o dado não existe — nunca um link quebrado.
 */
import { site } from '../config/site';

const digits = (v: string) => v.replace(/\D/g, '');

export function whatsappUrl(message = site.contact.whatsappMessage): string | null {
  const n = digits(site.contact.whatsapp);
  if (n.length < 12) return null; // DDI + DDD + número
  return `https://wa.me/${n}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
}

export function phoneUrl(): string | null {
  const n = digits(site.contact.phone);
  return n.length >= 10 ? `tel:+55${n}` : null;
}

export function emailUrl(subject?: string, body?: string): string | null {
  const email = site.contact.email.trim();
  if (!email.includes('@')) return null;
  const params = new URLSearchParams();
  if (subject) params.set('subject', subject);
  if (body) params.set('body', body);
  const q = params.toString().replace(/\+/g, '%20');
  return `mailto:${email}${q ? `?${q}` : ''}`;
}

/** Formata telefones brasileiros: (11) 3333-4444 / (11) 99999-8888 */
export function formatPhone(raw: string): string {
  let n = digits(raw);
  if (n.length > 11 && n.startsWith('55')) n = n.slice(2);
  const m = n.match(/^(\d{2})(\d{4,5})(\d{4})$/);
  return m ? `(${m[1]}) ${m[2]}-${m[3]}` : raw;
}

export function formattedAddress(): string | null {
  const a = site.address;
  const line1 = [a.street, a.district].filter(Boolean).join(' — ');
  const line2 = [a.city, a.state].filter(Boolean).join(', ');
  const full = [line1, line2, a.zip && `CEP ${a.zip}`].filter(Boolean).join(' · ');
  return full || null;
}

export function socialLinks(): { label: string; href: string }[] {
  const labels: Record<keyof typeof site.social, string> = {
    instagram: 'Instagram',
    facebook: 'Facebook',
    linkedin: 'LinkedIn',
    youtube: 'YouTube',
  };
  return (Object.keys(labels) as (keyof typeof site.social)[])
    .filter((k) => site.social[k].startsWith('http'))
    .map((k) => ({ label: labels[k], href: site.social[k] }));
}

/** Melhor canal para um botão "Fale conosco": WhatsApp → página de contato. */
export function primaryContactHref(): string {
  return whatsappUrl() ?? '/contato';
}

/** Campos importantes ainda vazios (exibidos apenas em desenvolvimento). */
export function missingSiteFields(): string[] {
  const missing: string[] = [];
  if (!site.domain) missing.push('domain (ativa canonical e sitemap)');
  if (!whatsappUrl()) missing.push('contact.whatsapp');
  if (!emailUrl()) missing.push('contact.email');
  if (!phoneUrl()) missing.push('contact.phone');
  if (!formattedAddress()) missing.push('address');
  if (!socialLinks().length) missing.push('social');
  return missing;
}
