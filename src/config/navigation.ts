import type { NavigationConfig } from './types';

export const navigation: NavigationConfig = {
  main: [
    { label: 'Início', href: '/' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Sobre', href: '/sobre' },
    { label: 'Contato', href: '/contato' },
  ],
  cta: { label: 'Agendar pelo WhatsApp', href: '/contato' },
  footer: [
    {
      title: 'Navegação',
      links: [
        { label: 'Início', href: '/' },
        { label: 'Serviços', href: '/servicos' },
        { label: 'Sobre', href: '/sobre' },
        { label: 'Contato', href: '/contato' },
      ],
    },
    {
      title: 'Serviços',
      links: [
        { label: 'Pneus e rodas', href: '/servicos#pneus' },
        { label: 'Freios', href: '/servicos#freios' },
        { label: 'Suspensão', href: '/servicos#suspensao' },
        { label: 'Mecânica', href: '/servicos#mecanica' },
      ],
    },
  ],
};
