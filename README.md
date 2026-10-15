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

## Publicação no Cloudflare Pages

| Configuração | Valor |
| --- | --- |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Variável `NODE_VERSION` | `22` |
| Variável `SITE_URL` | URL final, ex. `https://www.seudominio.com.br` |

Com `SITE_URL` definida, o build gera `canonical`, `og:url`, `sitemap.xml` e aponta o `robots.txt` para o sitemap. Os cabeçalhos de segurança e de cache ficam em `apps/web/public/_headers`.
