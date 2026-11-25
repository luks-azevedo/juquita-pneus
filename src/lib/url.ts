/**
 * Caminho "limpo" da página, independente do formato de build:
 * '/cardapio.html', '/cardapio/' e '/cardapio' → '/cardapio'; '/index.html' → '/'.
 */
export function cleanPath(pathname: string): string {
  const p = pathname.replace(/(\/index)?\.html$/, '').replace(/\/+$/, '');
  return p || '/';
}
