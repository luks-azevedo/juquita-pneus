import type { APIRoute } from 'astro';
import { site } from '../config/site';

/** robots.txt gerado no build; inclui o sitemap quando o domínio está configurado. */
export const GET: APIRoute = () => {
  const domain = site.domain.replace(/\/+$/, '');
  const lines = ['User-agent: *', 'Allow: /'];
  if (domain) lines.push('', `Sitemap: ${domain}/sitemap-index.xml`);
  return new Response(`${lines.join('\n')}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
