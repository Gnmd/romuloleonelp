# Dr. Rômulo Leone — Landing page

Site institucional do Dr. Rômulo Leone (médico residente em psiquiatria, CRM/SP 256.617).

Stack: React 18 + Vite 7 + Tailwind CSS 3 + shadcn/ui (Radix) + Framer Motion. A página é pré-renderizada no build (o HTML já sai com o conteúdo) e depois hidratada pelo React.

## Desenvolvimento

```bash
npm install      # Node 20+ (veja .nvmrc)
npm run dev      # http://localhost:3000
npm run lint
npm run build    # gera dist/
```

- Conteúdo da página: `apps/web/src/App.jsx`
- Cabeçalho: `apps/web/src/components/layout/Header.jsx`
- Telefone, link do WhatsApp, logo e foto: `apps/web/src/config/site.js`
- Metatags (título, descrição, Open Graph): `apps/web/index.html`
- Página de links para a bio do Instagram (`romuloleone.com.br/links`): `apps/web/links/index.html`

## Publicação no Cloudflare (Workers com arquivos estáticos)

| Configuração | Valor |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Variável `NODE_VERSION` | `22` |

O `wrangler.jsonc` na raiz publica a pasta `dist` no Worker `romuloleonelp`. Se o nome do Worker no painel for outro, ajuste o campo `name`.

### Métricas

- **Cloudflare Web Analytics** (sem cookies): no painel do Cloudflare, em *Web Analytics → Add a site*, copie o token e crie a variável de build `CF_BEACON_TOKEN`. O próximo deploy passa a incluir o script.
- **Cliques no WhatsApp**: todos os botões usam `WhatsAppLink` (`apps/web/src/components/WhatsAppLink.jsx`) com uma origem (`hero`, `menu`, `menu-mobile`, `final`, `flutuante`, `rodape` e `links` na página de links). Se Google Analytics/Tag Manager ou Meta Pixel forem instalados, cada clique dispara `whatsapp_click` (GA/GTM) e `Contact` (Pixel) com a origem.

O domínio (`https://romuloleone.com.br`) está em `apps/web/vite.config.js` (JSON-LD, `sitemap.xml`, `robots.txt`) e em `apps/web/index.html` (canonical, Open Graph). Imagens ficam em `apps/web/public/images/`. Os cabeçalhos de segurança e de cache ficam em `apps/web/public/_headers`.
