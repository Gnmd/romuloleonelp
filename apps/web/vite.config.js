import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// URL pública do site, sem barra final (ex.: https://www.seudominio.com.br).
// Defina SITE_URL nas variáveis de build do Cloudflare Pages para gerar
// canonical, og:url, og:image e sitemap.xml com URLs absolutas.
const siteUrl = (process.env.SITE_URL || '').replace(/\/+$/, '');

const PHOTO_URL = 'https://lh3.googleusercontent.com/d/1ZyRDWo9IihsjJaoGs6fpK2t5_cgaV2pH';

const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'Physician',
	name: 'Dr. Rômulo Leone',
	description: 'Médico residente em psiquiatria. Atendimento online (telemedicina).',
	identifier: 'CRM/SP 256.617',
	telephone: '+55-19-99721-0581',
	image: PHOTO_URL,
	...(siteUrl && { url: `${siteUrl}/` }),
};

const seoPlugin = {
	name: 'site-seo',
	transformIndexHtml() {
		const tags = [
			{
				tag: 'script',
				attrs: { type: 'application/ld+json' },
				children: JSON.stringify(structuredData),
				injectTo: 'head',
			},
		];

		if (siteUrl) {
			tags.push(
				{ tag: 'link', attrs: { rel: 'canonical', href: `${siteUrl}/` }, injectTo: 'head' },
				{ tag: 'meta', attrs: { property: 'og:url', content: `${siteUrl}/` }, injectTo: 'head' },
			);
		}

		return tags;
	},
	generateBundle(options) {
		if (options.ssr || this.environment?.config?.build?.ssr) {
			return;
		}

		const robots = ['User-agent: *', 'Allow: /'];
		if (siteUrl) {
			robots.push('', `Sitemap: ${siteUrl}/sitemap.xml`);
			this.emitFile({
				type: 'asset',
				fileName: 'sitemap.xml',
				source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${siteUrl}/</loc></url>\n</urlset>\n`,
			});
		}
		this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `${robots.join('\n')}\n` });
	},
};

export default defineConfig({
	plugins: [react(), seoPlugin],
	server: {
		port: 3000,
	},
	resolve: {
		extensions: ['.jsx', '.js', '.json'],
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	build: {
		outDir: '../../dist',
		emptyOutDir: true,
	},
});
