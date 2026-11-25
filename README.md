# APRESENTA Studio — Template Base

Estrutura padrão para sites institucionais e landing pages de clientes do APRESENTA Studio.

- **Astro 7** + **TypeScript** + **Tailwind CSS 4** + **Lucide Icons**
- Site 100% estático: publica no **Cloudflare Pages** sem adaptador
- Toda a identidade (cores, fontes, raios, espaçamentos) vem de **um arquivo**: `src/config/theme.ts`
- Todos os dados da empresa vêm de **um arquivo**: `src/config/site.ts`
- Sem frameworks JavaScript; scripts mínimos (header, menu mobile, formulário)

> O conteúdo atual é de uma **empresa fictícia** ("Viana Consultoria") usada para demonstração.
> Uma faixa no topo do site deixa isso claro enquanto `site.demo` for `true`.

---

## Sumário

1. [Instalar dependências](#1-instalar-dependências)
2. [Executar localmente](#2-executar-localmente)
3. [Alterar os dados da empresa](#3-alterar-os-dados-da-empresa)
4. [Personalizar cores e fontes](#4-personalizar-cores-e-fontes)
5. [Adicionar e remover seções](#5-adicionar-e-remover-seções)
6. [Adicionar páginas](#6-adicionar-páginas)
7. [Imagens e logotipos](#7-imagens-e-logotipos)
8. [Build de produção](#8-build-de-produção)
9. [Publicar no Cloudflare Pages](#9-publicar-no-cloudflare-pages)
10. [Formulário de contato](#formulário-de-contato)
11. [Criando um novo projeto para um cliente](#criando-um-novo-projeto-para-um-cliente)
12. [Estrutura de pastas](#estrutura-de-pastas)
13. [Limitações conhecidas](#limitações-conhecidas)

---

## 1. Instalar dependências

Requer **Node.js 22.23 ou superior** (testado com Node 24).

```bash
npm install
```

## 2. Executar localmente

```bash
npm run dev
```

Abra `http://localhost:4321`. Em desenvolvimento, um aviso discreto no canto inferior esquerdo lista
os campos de `site.ts` ainda vazios — ele **nunca** aparece no site publicado.

> Na primeira execução, as fontes do tema são baixadas do Fontsource e passam a ser servidas
> pelo próprio site. É necessário estar conectado à internet.

## 3. Alterar os dados da empresa

Edite **`src/config/site.ts`**. Ele concentra:

| Campo | Uso |
| --- | --- |
| `demo` | `true` exibe a faixa "site demonstrativo". **Use `false` em clientes.** |
| `name`, `description`, `segment` | Nome, descrição (SEO e rodapé) e segmento |
| `legalName`, `cnpj` | Opcionais, exibidos no rodapé |
| `domain` | `https://www.cliente.com.br` — ativa canonical, Open Graph absoluto e sitemap |
| `logo`, `favicon` | Ver [Imagens e logotipos](#7-imagens-e-logotipos) |
| `contact.phone` | Só dígitos com DDD: `1133334444` |
| `contact.whatsapp` | Só dígitos com DDI + DDD: `5511999998888` |
| `contact.whatsappMessage` | Mensagem inicial padrão do WhatsApp |
| `contact.email`, `contact.hours` | E-mail e horário de atendimento |
| `address.*` | Endereço, cidade, estado, CEP e link do Google Maps |
| `social.*` | URLs completas de Instagram, Facebook, LinkedIn e YouTube |
| `seo.*` | Modelo de título (`%s \| Empresa`), título/descrição padrão, imagem OG, idioma |

**Regra de ouro:** campo vazio (`''`) não aparece e não gera link. Nada de dados inventados.

Os menus ficam em **`src/config/navigation.ts`** (menu principal, botão de destaque e colunas do rodapé).

O **botão flutuante de WhatsApp** aparece automaticamente quando `contact.whatsapp` está preenchido.
Para uma mensagem diferente em um ponto específico:

```astro
<WhatsAppButton message="Olá! Quero agendar uma avaliação." label="Agendar pelo WhatsApp" />
```

## 4. Personalizar cores e fontes

Edite **`src/config/theme.ts`**. Há três presets prontos — troque a última linha para alternar:

```ts
export const theme: Theme = themes.editorial; // ou themes.clinica, themes.moderno
```

| Preset | Caráter | Fontes |
| --- | --- | --- |
| `editorial` | sóbrio, serifado | Fraunces + Inter |
| `clinica` | leve, arredondado | Plus Jakarta Sans |
| `moderno` | contemporâneo, anguloso | Space Grotesk + Inter |

Cada preset define:

- **colors**: `primary`, `primaryContrast`, `secondary`, `accent`, `background`, `surface`, `text`, `muted`, `border`, `inverted`, `invertedText`
- **fonts**: qualquer família do [Fontsource](https://fontsource.org) pelo nome (`'Lora'`, `'DM Sans'`...).
  Prefira faixas variáveis (`weights: ['400 700']`): um arquivo por idioma, carregamento mais rápido.
- **typography**: peso, espaçamento e altura de linha dos títulos; tamanho base do texto
- **radius**: `control` (botões/campos — use `'999px'` para pílula) e `card`
- **layout**: largura máxima do conteúdo e espaçamento entre seções `[mobile, desktop]`

Para um cliente, copie um preset, renomeie e ajuste. Confira o contraste (mínimo **4.5:1**) de
`text`, `muted` e `accent` sobre `background`, e de `primaryContrast` sobre `primary`
(ex.: [webaim.org/resources/contrastchecker](https://webaim.org/resources/contrastchecker/)).

Nos componentes, use os utilitários gerados a partir do tema: `bg-primary`, `text-muted`,
`border-line`, `bg-inverted`, `font-heading`, `rounded-card`, `rounded-control`...
**Não escreva cores fixas nos componentes.**

## 5. Adicionar e remover seções

As páginas são montadas com seções independentes. Para remover, apague o componente da página;
para reordenar, mova-o. Todas aceitam props — o conteúdo nunca fica dentro do componente.

| Seção | Variantes / opções principais |
| --- | --- |
| `Hero` | `variant`: `split` (texto + imagem), `centered`, `page` (páginas internas) |
| `AboutSection` | imagem opcional (`imagePosition`), `highlights` |
| `ServicesSection` | `variant`: `grid` (cards) ou `list` (editorial, com âncoras); `limit` |
| `BenefitsSection` | `variant`: `columns` (diferenciais) ou `numbered` (etapas) |
| `TestimonialsSection` | `illustrative` exibe aviso; sem itens, não renderiza |
| `GallerySection` | 5, 9, 13... imagens = primeira em destaque; senão, grade uniforme |
| `PortfolioSection` | primeiro item em destaque; `illustrative` |
| `FAQSection` | gera dados estruturados FAQPage (`schema={false}` para desativar) |
| `ContactSection` | canais de `site.ts` + formulário (`showForm`) |
| `CTASection` | `variant`: `band` (faixa escura) ou `card` |

Quase todas aceitam `tone`: `default`, `muted`, `surface` ou `inverted`. Alternar tons entre
seções consecutivas cria ritmo visual sem precisar de novos estilos.

Exemplo:

```astro
<ServicesSection
  tone="muted"
  eyebrow="Serviços"
  title="Como podemos ajudar"
  items={services}
  variant="grid"
  limit={3}
  cta={{ label: 'Ver todos', href: '/servicos' }}
/>
```

Ícones: importe qualquer ícone do [Lucide](https://lucide.dev/icons) pelo nome do arquivo:

```ts
import Stethoscope from '@lucide/astro/icons/stethoscope';
```

> Evite caracteres especiais fora do alfabeto latino nos textos (ex.: setas `→`). Eles não existem
> nas fontes carregadas e forçam o navegador a buscar outra fonte no sistema, o que deixa a página
> mais lenta. Use ícones do Lucide.

## 6. Adicionar páginas

Crie um arquivo em `src/pages/` — o nome vira a URL (`src/pages/equipe.astro` → `/equipe`):

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import Hero from '../components/sections/Hero.astro';
import CTASection from '../components/sections/CTASection.astro';
---

<BaseLayout title="Equipe" description="Conheça quem cuida do seu atendimento.">
  <Hero variant="page" eyebrow="Equipe" title="Quem faz a empresa" />
  <!-- seções -->
  <CTASection title="Vamos conversar?" />
</BaseLayout>
```

Depois, adicione o link em `src/config/navigation.ts`. O sitemap inclui a página automaticamente.

## 7. Imagens e logotipos

**Imagens de conteúdo** ficam em `src/assets/images/` e são importadas — o Astro converte para
WebP, gera vários tamanhos e aplica lazy loading:

```ts
import fachada from '../assets/images/fachada.jpg';
const image = { src: fachada, alt: 'Fachada do escritório' };
```

- Sempre preencha `alt` com uma descrição real (ou `alt: ''` se for puramente decorativa).
- Envie fotos com pelo menos 1600 px no lado maior. Não use imagens de sites externos.
- As imagens atuais em `src/assets/images/demo/` são **ilustrações abstratas de exemplo**.
  Substitua-as e remova a prop `imageIllustrative`/`illustrative` das seções.

**Arquivos públicos** (`public/`) são servidos sem processamento:

| Arquivo | Uso |
| --- | --- |
| `public/favicon.svg` | Favicon (SVG quadrado) — referenciado em `site.favicon` |
| `public/icons/apple-touch-icon.png` | Ícone para iOS, 180×180 |
| `public/images/og-default.png` | Imagem de compartilhamento, 1200×630 |
| `public/images/logo.svg` | Logotipo (crie e aponte em `site.logo.src`) |

**Logotipo:** coloque o arquivo em `public/images/` e preencha em `site.ts`:

```ts
logo: { src: '/images/logo.svg', alt: 'Nome da Empresa', width: 160, height: 40, srcInverted: '/images/logo-branco.svg' },
```

`srcInverted` é usado no rodapé (fundo escuro). Com `src` vazio, o nome da empresa é exibido com
a fonte de títulos do tema.

**Imagem de compartilhamento (OG):** gere uma versão automática com nome, segmento e descrição:

```bash
npm run og
```

Para um resultado sob medida, substitua `public/images/og-default.png` por uma arte de 1200×630.

## 8. Build de produção

```bash
npm run build     # verificação de tipos + build em ./dist
npm run preview   # serve ./dist localmente para conferência
```

O build falha se houver erros de TypeScript. A saída em `dist/` é estática (HTML, CSS, imagens e
fontes), incluindo `404.html`, `robots.txt`, `_headers` e — com `domain` preenchido — `sitemap-index.xml`.

## 9. Publicar no Cloudflare Pages

1. Envie o projeto para um repositório no GitHub.
2. No painel da Cloudflare: **Workers & Pages → Create → Pages → Connect to Git** e escolha o repositório.
3. Configurações de build:

   | Campo | Valor |
   | --- | --- |
   | Framework preset | **Astro** |
   | Build command | `npm run build` |
   | Build output directory | `dist` |
   | Variável de ambiente (opcional) | `NODE_VERSION` = `24` |

   O arquivo `.node-version` já indica Node 24 ao Cloudflare; a variável é só um reforço.
4. **Save and Deploy**. Cada `git push` na branch principal publica uma nova versão; outras branches
   geram URLs de pré-visualização.
5. Domínio próprio: **Custom domains → Set up a custom domain**. Depois, preencha `domain` em
   `site.ts` e faça um novo push (ativa canonical e sitemap).

O arquivo `public/_headers` configura cache longo para arquivos com hash (`/_astro/*`) e
cabeçalhos básicos de segurança. A página `404.html` é servida automaticamente pelo Cloudflare.

---

## Formulário de contato

O formulário (`src/components/forms/ContactForm.astro`) tem nome, e-mail, telefone (opcional)
e mensagem, validação no navegador, mensagens de sucesso/erro e campo anti-robô.

O destino do envio é configurado em **`src/config/forms.ts`**:

| `provider` | Configuração | Observação |
| --- | --- | --- |
| `'none'` (padrão) | — | Valida e oferece enviar a mensagem pronta por **WhatsApp ou e-mail** de `site.ts`. Nada é simulado. |
| `'formspree'` | `endpoint: 'https://formspree.io/f/XXXX'` | Crie o formulário em formspree.io |
| `'web3forms'` | `accessKey: 'chave-publica'` | Gere a chave em web3forms.com |
| `'custom'` | `endpoint: 'https://...'` | Recebe `POST` JSON com `name`, `email`, `phone`, `message`, `subject` e responde 2xx |

Para `'custom'` no próprio Cloudflare, crie uma **Pages Function** em `functions/api/contato.ts`
e use `endpoint: '/api/contato'` — ela pode enviar e-mail por um serviço transacional, com as
credenciais em variáveis de ambiente do Cloudflare (nunca no código).

Textos de sucesso, erro e "não conectado" também ficam em `forms.ts`.

---

## Criando um novo projeto para um cliente

1. **Crie o repositório a partir do template.** No GitHub, marque este repositório como
   *Template repository* (Settings → General) e use **Use this template → Create a new repository**
   (ex.: `cliente-nome-site`). Alternativa sem GitHub:

   ```bash
   git clone https://github.com/SEU-USUARIO/apresenta-template.git cliente-nome-site
   cd cliente-nome-site
   rm -rf .git && git init -b main
   ```

2. **Instale e rode:** `npm install` e `npm run dev`.
3. **Dados:** preencha `src/config/site.ts` e coloque **`demo: false`**.
4. **Identidade:** crie um preset em `src/config/theme.ts` com as cores e fontes do cliente.
5. **Marca:** logotipo e favicon em `public/`, depois `npm run og` (ou arte própria).
6. **Conteúdo:** substitua `src/data/demo.ts` pelo conteúdo real (pode dividir em
   `data/services.ts`, `data/faq.ts`...). Troque as imagens de `src/assets/images/demo/`
   e remova as props `illustrative`/`imageIllustrative`.
7. **Páginas e menu:** ajuste `src/pages/` e `src/config/navigation.ts`. Remova seções sem conteúdo
   real — por exemplo, `TestimonialsSection` sem depoimentos autorizados.
8. **Formulário:** configure `src/config/forms.ts` (ou mantenha `'none'` com WhatsApp/e-mail).
9. **Valide:** `npm run build` sem erros, confira no celular e no computador, e garanta que o aviso
   de desenvolvimento não lista campos importantes.
10. **Publique** no Cloudflare Pages e preencha `domain`.

Melhorias feitas no template (correções, novas seções) não chegam sozinhas aos projetos já criados:
replique-as manualmente quando fizer sentido.

---

## Estrutura de pastas

```
public/
  _headers                 cabeçalhos HTTP para o Cloudflare Pages
  favicon.svg
  icons/apple-touch-icon.png
  images/og-default.png
scripts/
  generate-og.mjs          npm run og
src/
  assets/images/demo/      imagens ilustrativas (substituir)
  components/
    layout/                Header, MobileMenu, Footer, WhatsAppButton, Logo
    sections/              Hero, AboutSection, ServicesSection, BenefitsSection,
                           TestimonialsSection, GallerySection, PortfolioSection,
                           FAQSection, ContactSection, CTASection
    ui/                    Button, SectionHeading, Container, Section, Card, Badge
    forms/                 ContactForm
  config/
    site.ts                dados da empresa
    theme.ts               identidade visual (presets)
    navigation.ts          menus
    forms.ts               destino do formulário
    types.ts               tipos das configurações
  data/demo.ts             conteúdo demonstrativo (substituir)
  layouts/BaseLayout.astro SEO, fontes, tema, header/footer
  lib/                     contact.ts (links), theme.ts (variáveis CSS)
  pages/                   index, sobre, servicos, contato, 404, robots.txt
  styles/global.css        ponte entre theme.ts e Tailwind
  types/content.ts         tipos de conteúdo das seções
```

---

## Limitações conhecidas

- **Formulário:** não há envio funcional até configurar um serviço em `forms.ts`. Não há
  proteção anti-spam além do campo oculto; para volume maior, adicione Cloudflare Turnstile.
- **Fontes:** o build baixa as fontes do Fontsource; sem internet no build, ele falha.
- **Imagem OG automática:** usa as fontes instaladas no computador; se a fonte do tema não
  estiver instalada, usa uma fonte padrão.
- **Mapa:** não há mapa incorporado (evita scripts de terceiros); `address.mapsUrl` gera um link.
- **Conteúdo em Markdown/CMS:** o conteúdo vive em arquivos `.ts`. Para clientes que editam o
  próprio conteúdo, avaliar Content Collections do Astro ou um CMS headless.
- **Idioma:** textos de interface em português (pt-BR), sem suporte a múltiplos idiomas.
