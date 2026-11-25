# Juquita Pneus — notas do projeto

Site da Juquita Pneus | Centro Automotivo (Conselheiro Lafaiete – MG), criado a partir do `apresenta-template`.
Instruções gerais de uso, build e publicação: ver `README.md`.

## Onde está cada coisa

| O quê | Arquivo |
| --- | --- |
| Dados (endereço, WhatsApp, horários, Instagram, coordenadas) | `src/config/site.ts` |
| Cores e fontes (tema `juquita`, escuro) | `src/config/theme.ts` |
| Serviços, etapas, FAQ, fotos | `src/data/juquita.ts` |
| Mensagens prontas do WhatsApp (agendar, orçamento de pneus) | `whatsappMessages` em `src/config/site.ts` |
| Logotipo (recorte do arquivo enviado, em placa branca) | `public/images/logo-juquita.png` |
| Fotos (recortadas dos posts/reels, sem legendas) | `src/assets/images/*.jpg` |
| Favicon, ícone iOS, imagem de compartilhamento | `public/favicon.png`, `public/icons/`, `public/images/og-default.png` |

## Identidade

Do logotipo e do Instagram @juquitapneus_: verde-petróleo (`#19856D` no logo; `#20A884` no site,
mais claro para contraste no fundo escuro), grafite/preto e bandeira quadriculada.
Estilo inspirado na referência enviada (hightorque.com.br): fundo escuro, foto em tela cheia no topo,
títulos em caixa alta itálica (Barlow Condensed) e uma cor de destaque.

## Pendências com o cliente

- [ ] **Confirmar a lista de serviços** (`src/data/juquita.ts`). O briefing não detalhou; foram listados os
      serviços usuais de um centro automotivo completo em pneus, freios, suspensão e mecânica.
      Remover o que a oficina não faz e acrescentar o que faltar (ex.: ar-condicionado, elétrica, bateria).
- [ ] **Pneus**: quais veículos atende (carros, SUVs, motos, utilitários) e marcas trabalhadas.
- [ ] **Fotos**: as atuais são frames de vídeos do Instagram. Fotos próprias em boa resolução
      (fachada, oficina, estoque de pneus) melhoram muito o site. Confirmar a autorização de quem aparece.
- [ ] **Logotipo em alta** (SVG ou PNG com fundo transparente) — o atual é um recorte do JPG enviado.
- [ ] **"Desde 1957"**: usado como slogan, conforme o briefing.
- [ ] Formas de pagamento, e-mail, telefone fixo (opcionais).
- [ ] **Domínio/URL final** → preencher `domain` em `site.ts`.
