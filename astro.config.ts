import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { site } from './src/config/site';
import { theme } from './src/config/theme';
import type { AstroUserConfig } from 'astro';
import type { ThemeFont } from './src/config/types';

type FontsConfig = NonNullable<AstroUserConfig['fonts']>;

const domain = site.domain.trim().replace(/\/+$/, '');

/** Converte as fontes de theme.ts para a API de fontes do Astro (self-hosted). */
function font(f: ThemeFont, cssVariable: `--${string}`) {
  return {
    provider: fontProviders.fontsource(),
    name: f.name,
    cssVariable,
    weights: f.weights as [number | string, ...(number | string)[]],
    styles: (f.styles ?? ['normal']) as ['normal' | 'italic', ...('normal' | 'italic')[]],
    subsets: ['latin', 'latin-ext'] as [string, ...string[]],
    fallbacks: [f.fallback],
  };
}

const sameFont = theme.fonts.heading.name === theme.fonts.body.name;
const headingFont = sameFont
  ? { ...theme.fonts.body, weights: [...new Set([...theme.fonts.body.weights, ...theme.fonts.heading.weights])] }
  : theme.fonts.heading;

export default defineConfig({
  // O sitemap só é gerado quando `domain` estiver preenchido em src/config/site.ts.
  site: domain || undefined,
  integrations: domain ? [sitemap()] : [],
  // Saída estática: compatível com Cloudflare Pages sem adaptador.
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  fonts: (sameFont
    ? [font(headingFont, '--ff-body')]
    : [font(theme.fonts.heading, '--ff-heading'), font(theme.fonts.body, '--ff-body')]) as FontsConfig,
  vite: {
    plugins: [tailwindcss()],
  },
});
