/**
 * Gera public/images/og-default.png (1200×630) a partir de site.ts e theme.ts.
 * Uso: npm run og
 *
 * O texto é desenhado com as fontes instaladas no computador (a fonte do tema,
 * se existir, ou uma serifada/sem serifa padrão). Para um resultado sob medida,
 * substitua o arquivo gerado por uma arte própria com as mesmas dimensões.
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const { site } = await import('../src/config/site.ts');
const { theme } = await import('../src/config/theme.ts');

const c = theme.colors;
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Quebra o texto em linhas de até `max` caracteres. */
function wrap(text, max) {
  const lines = [];
  let line = '';
  for (const word of text.split(/\s+/)) {
    if ((line + ' ' + word).trim().length > max) {
      lines.push(line.trim());
      line = word;
    } else line += ' ' + word;
  }
  if (line.trim()) lines.push(line.trim());
  return lines;
}

const headingFamily = `'${theme.fonts.heading.name}', ${theme.fonts.heading.fallback === 'serif' ? 'Georgia, serif' : 'Arial, sans-serif'}`;
const bodyFamily = `'${theme.fonts.body.name}', ${theme.fonts.body.fallback === 'serif' ? 'Georgia, serif' : 'Arial, sans-serif'}`;
const desc = wrap(site.description, 52).slice(0, 3);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="${c.background}"/>
  <rect x="0" y="0" width="16" height="630" fill="${c.primary}"/>
  <text x="96" y="150" font-family="${esc(bodyFamily)}" font-size="26" letter-spacing="3" fill="${c.accent}">${esc(site.segment.toUpperCase())}</text>
  <text x="96" y="270" font-family="${esc(headingFamily)}" font-size="92" font-weight="${theme.typography.headingWeight}" fill="${c.text}">${esc(site.name)}</text>
  ${desc.map((l, i) => `<text x="96" y="${360 + i * 46}" font-family="${esc(bodyFamily)}" font-size="34" fill="${c.muted}">${esc(l)}</text>`).join('\n  ')}
  <rect x="96" y="520" width="72" height="6" fill="${c.primary}"/>
</svg>`;

await mkdir('public/images', { recursive: true });
await sharp(Buffer.from(svg)).png().toFile('public/images/og-default.png');
console.log('✔ public/images/og-default.png gerado');
