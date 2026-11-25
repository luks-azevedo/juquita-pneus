/**
 * CONTEÚDO DEMONSTRATIVO — empresa fictícia "Viana Consultoria".
 *
 * Nada aqui representa clientes, resultados ou depoimentos reais.
 * Em um projeto de cliente, substitua este arquivo pelo conteúdo real
 * (ou crie arquivos separados, ex.: data/services.ts, data/faq.ts).
 */
import ClipboardList from '@lucide/astro/icons/clipboard-list';
import LineChart from '@lucide/astro/icons/chart-line';
import Workflow from '@lucide/astro/icons/workflow';
import Gauge from '@lucide/astro/icons/gauge';
import Users from '@lucide/astro/icons/users';
import MessagesSquare from '@lucide/astro/icons/messages-square';
import ShieldCheck from '@lucide/astro/icons/shield-check';
import Compass from '@lucide/astro/icons/compass';

import hero from '../assets/images/demo/hero.jpg';
import about from '../assets/images/demo/about.jpg';
import g1 from '../assets/images/demo/gallery-1.jpg';
import g2 from '../assets/images/demo/gallery-2.jpg';
import g3 from '../assets/images/demo/gallery-3.jpg';
import g4 from '../assets/images/demo/gallery-4.jpg';
import g5 from '../assets/images/demo/gallery-5.jpg';
import g6 from '../assets/images/demo/gallery-6.jpg';
import p1 from '../assets/images/demo/project-1.jpg';
import p2 from '../assets/images/demo/project-2.jpg';
import p3 from '../assets/images/demo/project-3.jpg';

import type {
  ContentImage,
  FAQItem,
  FeatureItem,
  PortfolioItem,
  ServiceItem,
  TestimonialItem,
} from '../types/content';

export const images = {
  hero: { src: hero, alt: 'Ilustração abstrata em tons de verde e terracota' } satisfies ContentImage,
  about: { src: about, alt: 'Composição abstrata representando um ambiente de trabalho' } satisfies ContentImage,
};

export const services: ServiceItem[] = [
  {
    id: 'diagnostico',
    icon: ClipboardList,
    title: 'Diagnóstico empresarial',
    description: 'Uma leitura organizada de como a empresa funciona hoje: finanças, rotinas e pontos de atenção.',
    details: ['Entrevistas com sócios e equipe', 'Levantamento de números e processos', 'Relatório com prioridades'],
  },
  {
    id: 'planejamento',
    icon: LineChart,
    title: 'Planejamento financeiro',
    description: 'Fluxo de caixa, orçamento e metas definidos de forma que a gestão consiga acompanhar.',
    details: ['Estrutura de fluxo de caixa', 'Orçamento anual', 'Rotina mensal de acompanhamento'],
  },
  {
    id: 'processos',
    icon: Workflow,
    title: 'Gestão de processos',
    description: 'Rotinas documentadas e responsabilidades claras para reduzir retrabalho no dia a dia.',
    details: ['Mapeamento das rotinas principais', 'Documentação simples', 'Treinamento da equipe'],
  },
  {
    id: 'indicadores',
    icon: Gauge,
    title: 'Indicadores de gestão',
    description: 'Poucos indicadores, bem escolhidos, para acompanhar o que realmente importa.',
    details: ['Definição de indicadores', 'Painel de acompanhamento', 'Reunião mensal de análise'],
  },
  {
    id: 'mentoria',
    icon: Users,
    title: 'Mentoria para gestores',
    description: 'Encontros periódicos para apoiar decisões e desenvolver a liderança.',
    details: ['Encontros quinzenais ou mensais', 'Pauta definida em conjunto', 'Registro das decisões'],
  },
];

export const benefits: FeatureItem[] = [
  {
    icon: Compass,
    title: 'Clareza antes de ação',
    description: 'Cada trabalho começa entendendo o momento da empresa, não com uma solução pronta.',
  },
  {
    icon: MessagesSquare,
    title: 'Linguagem simples',
    description: 'Relatórios e reuniões sem jargão, para que todos consigam acompanhar.',
  },
  {
    icon: ShieldCheck,
    title: 'Sigilo e cuidado',
    description: 'Informações da empresa tratadas com confidencialidade em todas as etapas.',
  },
];

export const process: FeatureItem[] = [
  { title: 'Conversa inicial', description: 'Entendemos o contexto da empresa e o que motivou o contato.' },
  { title: 'Proposta', description: 'Apresentamos escopo, etapas e prazos de forma objetiva.' },
  { title: 'Execução', description: 'Trabalho conduzido junto com a equipe, com entregas parciais.' },
  { title: 'Acompanhamento', description: 'Revisões periódicas para ajustar o que for necessário.' },
];

/** Exemplos ILUSTRATIVOS de tipos de projeto — sem resultados atribuídos. */
export const portfolio: PortfolioItem[] = [
  {
    title: 'Organização do fluxo de caixa',
    category: 'Planejamento financeiro',
    description: 'Exemplo de projeto: estruturar entradas e saídas e criar uma rotina semanal de conferência.',
    image: { src: p1, alt: 'Ilustração de painel financeiro' },
  },
  {
    title: 'Mapeamento de rotinas comerciais',
    category: 'Gestão de processos',
    description: 'Exemplo de projeto: documentar o atendimento, do primeiro contato ao pós-venda.',
    image: { src: p2, alt: 'Ilustração de documento de processos' },
  },
  {
    title: 'Painel de indicadores',
    category: 'Indicadores de gestão',
    description: 'Exemplo de projeto: definir indicadores e montar um painel mensal simples.',
    image: { src: p3, alt: 'Ilustração de gráfico de barras' },
  },
];

/** Depoimentos ILUSTRATIVOS — substitua por depoimentos reais e autorizados. */
export const testimonials: TestimonialItem[] = [
  {
    quote: 'Espaço reservado para um depoimento real de cliente, com autorização para publicação.',
    name: 'Nome do cliente',
    role: 'Cargo · Empresa',
  },
  {
    quote: 'Depoimentos funcionam melhor quando são curtos, específicos e contam o que mudou na rotina.',
    name: 'Nome do cliente',
    role: 'Cargo · Empresa',
  },
];

export const gallery: ContentImage[] = [
  { src: g1, alt: 'Composição abstrata com arco verde' },
  { src: g2, alt: 'Composição abstrata com retângulos' },
  { src: g3, alt: 'Composição abstrata com círculos' },
  { src: g4, alt: 'Composição abstrata com arco e luz' },
  { src: g5, alt: 'Composição abstrata em tons neutros' },
  { src: g6, alt: 'Composição abstrata com formas sobrepostas' },
];

export const faq: FAQItem[] = [
  {
    question: 'Para que tipo de empresa a consultoria é indicada?',
    answer: 'Para pequenas e médias empresas que querem organizar finanças e rotinas antes de crescer.',
  },
  {
    question: 'Como funciona o primeiro contato?',
    answer: 'Uma conversa sem compromisso para entender o momento da empresa e indicar o melhor formato de trabalho.',
  },
  {
    question: 'O atendimento é presencial ou online?',
    answer: 'Os dois formatos são possíveis, de acordo com a necessidade de cada projeto.',
  },
  {
    question: 'Quanto tempo dura um projeto?',
    answer: 'Depende do escopo. O prazo é definido na proposta, com etapas e entregas claras.',
  },
];
