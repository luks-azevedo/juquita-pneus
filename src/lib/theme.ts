import type { Theme } from '../config/types';

/** Gera as variáveis CSS do tema ativo (consumidas pelo Tailwind em global.css). */
export function themeToCss(t: Theme): string {
  const c = t.colors;
  const sameFont = t.fonts.heading.name === t.fonts.body.name;
  const vars: Record<string, string | number> = {
    '--c-primary': c.primary,
    '--c-primary-contrast': c.primaryContrast,
    '--c-secondary': c.secondary,
    '--c-accent': c.accent,
    '--c-background': c.background,
    '--c-surface': c.surface,
    '--c-text': c.text,
    '--c-muted': c.muted,
    '--c-border': c.border,
    '--c-inverted': c.inverted,
    '--c-inverted-text': c.invertedText,
    '--heading-weight': t.typography.headingWeight,
    '--heading-tracking': t.typography.headingTracking,
    '--heading-leading': t.typography.headingLineHeight,
    '--heading-transform': t.typography.headingTransform ?? 'none',
    '--heading-style': t.typography.headingStyle ?? 'normal',
    '--base-size': t.typography.baseSize,
    '--r-control': t.radius.control,
    '--r-card': t.radius.card,
    '--container-width': t.layout.containerWidth,
    '--section-y-sm': t.layout.sectionSpacing[0],
    '--section-y-lg': t.layout.sectionSpacing[1],
  };
  const body = Object.entries(vars)
    .map(([k, v]) => `${k}:${v};`)
    .join('');
  // Quando título e corpo usam a mesma família, só uma é registrada.
  const headingAlias = sameFont ? '--ff-heading:var(--ff-body);' : '';
  return `:root{${body}${headingAlias}}`;
}
