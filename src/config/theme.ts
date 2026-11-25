/**
 * Identidade visual do projeto.
 *
 * Para um novo cliente: ajuste um dos presets abaixo (ou crie outro) e
 * aponte `theme` para ele. Fontes são baixadas do Fontsource no build e
 * servidas pelo próprio site (sem requisições a terceiros).
 *
 * Verifique o contraste (mínimo 4.5:1) de `text`, `muted` e `accent` sobre
 * `background`, e de `primaryContrast` sobre `primary`.
 */
import type { Theme } from './types';

/** Sóbrio e editorial — serifada nos títulos. (preset do site demonstrativo) */
const editorial: Theme = {
  name: 'editorial',
  colors: {
    primary: '#1F3B33',
    primaryContrast: '#FFFFFF',
    secondary: '#ECE8DF',
    accent: '#A84B26',
    background: '#F7F5F0',
    surface: '#FFFFFF',
    text: '#1C1D1F',
    muted: '#5C5F64',
    border: '#DFDAD0',
    inverted: '#1F3B33',
    invertedText: '#F7F5F0',
  },
  fonts: {
    heading: { name: 'Fraunces', fallback: 'serif', weights: ['400 600'] },
    body: { name: 'Inter', fallback: 'sans-serif', weights: ['400 600'] },
  },
  typography: {
    headingWeight: 500,
    headingTracking: '-0.02em',
    headingLineHeight: 1.08,
    baseSize: '1.0625rem',
  },
  radius: { control: '6px', card: '10px' },
  layout: { containerWidth: '1200px', sectionSpacing: ['4.5rem', '7.5rem'] },
};

/** Leve e acolhedor — saúde, clínicas, bem-estar. */
const clinica: Theme = {
  name: 'clinica',
  colors: {
    primary: '#0E6B68',
    primaryContrast: '#FFFFFF',
    secondary: '#EAF3F2',
    accent: '#9A4A2E',
    background: '#FFFFFF',
    surface: '#F5F9F9',
    text: '#11252B',
    muted: '#4F6268',
    border: '#DCE7E7',
    inverted: '#0F2F33',
    invertedText: '#EEF6F6',
  },
  fonts: {
    heading: { name: 'Plus Jakarta Sans', fallback: 'sans-serif', weights: ['400 700'] },
    body: { name: 'Plus Jakarta Sans', fallback: 'sans-serif', weights: ['400 700'] },
  },
  typography: {
    headingWeight: 700,
    headingTracking: '-0.025em',
    headingLineHeight: 1.1,
    baseSize: '1rem',
  },
  radius: { control: '999px', card: '20px' },
  layout: { containerWidth: '1160px', sectionSpacing: ['4rem', '6.5rem'] },
};

/** Contemporâneo e direto — serviços, tecnologia, arquitetura. */
const moderno: Theme = {
  name: 'moderno',
  colors: {
    primary: '#111214',
    primaryContrast: '#FFFFFF',
    secondary: '#F0F0EE',
    accent: '#2F4BD8',
    background: '#FAFAF9',
    surface: '#FFFFFF',
    text: '#111214',
    muted: '#56585E',
    border: '#E3E3E0',
    inverted: '#111214',
    invertedText: '#F4F4F2',
  },
  fonts: {
    heading: { name: 'Space Grotesk', fallback: 'sans-serif', weights: ['400 700'] },
    body: { name: 'Inter', fallback: 'sans-serif', weights: ['400 600'] },
  },
  typography: {
    headingWeight: 600,
    headingTracking: '-0.035em',
    headingLineHeight: 1.02,
    baseSize: '1rem',
  },
  radius: { control: '2px', card: '4px' },
  layout: { containerWidth: '1280px', sectionSpacing: ['4.5rem', '8rem'] },
};

export const themes = { editorial, clinica, moderno } as const;

/** Tema ativo. Troque para `themes.clinica`, `themes.moderno` ou um preset próprio. */
export const theme: Theme = themes.editorial;
