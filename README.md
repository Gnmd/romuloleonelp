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

## Publicação no Cloudflare (Workers com arquivos estáticos)

| Configuração | Valor |
| --- | --- |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Variável `NODE_VERSION` | `22` |

O `wrangler.jsonc` na raiz publica a pasta `dist` no Worker `romuloleonelp`. Se o nome do Worker no painel for outro, ajuste o campo `name`.

O domínio (`https://romuloleone.com.br`) está em `apps/web/vite.config.js` (JSON-LD, `sitemap.xml`, `robots.txt`) e em `apps/web/index.html` (canonical, Open Graph). Imagens ficam em `apps/web/public/images/`. Os cabeçalhos de segurança e de cache ficam em `apps/web/public/_headers`.
