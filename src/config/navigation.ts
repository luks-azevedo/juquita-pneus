/**
 * Menus do site. Cada `href` deve apontar para uma página existente em src/pages
 * (ou para uma âncora, ex.: '/#faq').
 */
import type { NavigationConfig } from './types';

export const navigation: NavigationConfig = {
  main: [
    { label: 'Início', href: '/' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Contato', href: '/contato' },
  ],
  cta: { label: 'Agendar conversa', href: '/contato' },
  footer: [
    {
      title: 'Navegação',
      links: [
        { label: 'Início', href: '/' },
        { label: 'Sobre', href: '/sobre' },
        { label: 'Serviços', href: '/servicos' },
        { label: 'Contato', href: '/contato' },
      ],
    },
    {
      title: 'Serviços',
      links: [
        { label: 'Diagnóstico empresarial', href: '/servicos#diagnostico' },
        { label: 'Planejamento financeiro', href: '/servicos#planejamento' },
        { label: 'Gestão de processos', href: '/servicos#processos' },
      ],
    },
  ],
};
