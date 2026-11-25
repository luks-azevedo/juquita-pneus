/**
 * Conteúdo das páginas da Juquita Pneus.
 *
 * Fonte: briefing do cliente. O briefing não detalhou os serviços; a pedido do
 * APRESENTA Studio, a lista abaixo reúne os serviços usuais de um centro automotivo
 * completo em pneus, freios, suspensão e mecânica. CONFIRMAR COM O CLIENTE e remover
 * o que a oficina não fizer.
 */
import CircleDot from '@lucide/astro/icons/circle-dot';
import Disc3 from '@lucide/astro/icons/disc-3';
import Settings2 from '@lucide/astro/icons/settings-2';
import Wrench from '@lucide/astro/icons/wrench';
import CalendarCheck from '@lucide/astro/icons/calendar-check';
import Car from '@lucide/astro/icons/car';
import ClipboardCheck from '@lucide/astro/icons/clipboard-check';
import KeyRound from '@lucide/astro/icons/key-round';

import oficina from '../assets/images/oficina-elevador.jpg';
import fachada from '../assets/images/fachada.jpg';
import mecanico from '../assets/images/mecanico-motor.jpg';
import equipe from '../assets/images/equipe-carro.jpg';
import estoque from '../assets/images/estoque-pecas.jpg';
import type { ContentImage, FAQItem, FeatureItem, ServiceItem } from '../types/content';

export const photos = {
  hero: { src: oficina, alt: 'Picape no elevador da oficina da Juquita Pneus' } satisfies ContentImage,
  fachada: { src: fachada, alt: 'Fachada da Juquita Pneus, em Conselheiro Lafaiete' } satisfies ContentImage,
  mecanico: { src: mecanico, alt: 'Mecânico fazendo diagnóstico no motor de um carro' } satisfies ContentImage,
  equipe: { src: equipe, alt: 'Equipe trabalhando no motor de um carro na oficina' } satisfies ContentImage,
  estoque: { src: estoque, alt: 'Prateleiras com óleos e peças na loja' } satisfies ContentImage,
};

export const gallery: ContentImage[] = [photos.hero, photos.mecanico, photos.equipe, photos.fachada, photos.estoque];

export const services: ServiceItem[] = [
  {
    id: 'pneus',
    icon: CircleDot,
    title: 'Pneus e rodas',
    description: 'Venda de pneus e todos os serviços para rodar com segurança e economia.',
    details: [
      'Venda de pneus',
      'Montagem e desmontagem',
      'Alinhamento',
      'Balanceamento',
      'Cambagem e caster',
      'Rodízio de pneus',
      'Conserto de furos',
      'Calibragem e troca de válvulas',
    ],
  },
  {
    id: 'freios',
    icon: Disc3,
    title: 'Freios',
    description: 'Revisão e troca de componentes para frear com segurança.',
    details: [
      'Pastilhas de freio',
      'Discos de freio',
      'Lonas e tambores',
      'Troca do fluido de freio',
      'Cilindros e flexíveis',
      'Regulagem do freio de mão',
      'Revisão completa do sistema',
    ],
  },
  {
    id: 'suspensao',
    icon: Settings2,
    title: 'Suspensão e direção',
    description: 'Mais estabilidade, conforto e controle do veículo.',
    details: [
      'Amortecedores',
      'Molas',
      'Bandejas e buchas',
      'Pivôs',
      'Terminais e barras de direção',
      'Bieletas e coxins',
      'Batentes e coifas',
      'Revisão da direção',
    ],
  },
  {
    id: 'mecanica',
    icon: Wrench,
    title: 'Mecânica',
    description: 'Manutenção preventiva e corretiva do motor e dos principais sistemas.',
    details: [
      'Troca de óleo e filtros',
      'Revisão preventiva',
      'Diagnóstico com scanner',
      'Injeção eletrônica',
      'Correia dentada e acessórios',
      'Embreagem',
      'Arrefecimento: radiador e bomba d’água',
      'Velas e cabos de ignição',
    ],
  },
];

export const steps: FeatureItem[] = [
  { icon: CalendarCheck, title: 'Agende pelo WhatsApp', description: 'Conte o que o carro precisa e escolha o melhor horário.' },
  { icon: Car, title: 'Traga o veículo', description: 'Atendimento de segunda a sexta, das 7h45 às 18h.' },
  { icon: ClipboardCheck, title: 'Avaliação e orçamento', description: 'O veículo é avaliado e você recebe o orçamento do serviço.' },
  { icon: KeyRound, title: 'Retirada', description: 'Serviço concluído, é só buscar o carro.' },
];

export const faq: FAQItem[] = [
  {
    question: 'Preciso agendar?',
    answer: 'Sim. Os serviços são agendados pelo WhatsApp (31) 99510-1570.',
  },
  {
    question: 'Qual o horário de funcionamento?',
    answer: 'De segunda a sexta, das 7h45 às 18h. Aos sábados e domingos a oficina fica fechada.',
  },
  {
    question: 'Como faço um orçamento de pneus?',
    answer: 'Envie pelo WhatsApp o modelo do carro ou a medida do pneu (escrita na lateral, ex.: 175/65 R14).',
  },
  {
    question: 'Onde fica a Juquita Pneus?',
    answer: 'Na R. Alfredo Elías Mafuz, 1000, bairro Santa Matilde, em Conselheiro Lafaiete – MG.',
  },
];
