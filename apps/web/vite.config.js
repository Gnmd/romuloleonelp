import path from 'node:path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// URL pública do site, sem barra final. Também usada em index.html
// (canonical, og:url, og:image) — altere nos dois lugares se o domínio mudar.
const siteUrl = 'https://romuloleone.com.br';

// Token do Cloudflare Web Analytics (painel do Cloudflare → Web Analytics →
// Add a site). Defina CF_BEACON_TOKEN nas variáveis de build para ativar.
const cfBeaconToken = process.env.CF_BEACON_TOKEN;

const structuredData = {
	'@context': 'https://schema.org',
	'@type': 'Physician',
	name: 'Dr. Rômulo Leone',
	description: 'Médico residente em psiquiatria. Atendimento online (telemedicina).',
	identifier: 'CRM/SP 256.617',
	telephone: '+55-19-99721-0581',
	image: `${siteUrl}/images/romulo-leone-og.jpg`,
	url: `${siteUrl}/`,
	logo: `${siteUrl}/icon-512.png`,
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

		if (cfBeaconToken) {
			tags.push({
				tag: 'script',
				attrs: {
					defer: true,
					src: 'https://static.cloudflareinsights.com/beacon.min.js',
					'data-cf-beacon': JSON.stringify({ token: cfBeaconToken }),
				},
				injectTo: 'body',
			});
		}

		return tags;
	},
	generateBundle(options) {
		if (options.ssr || this.environment?.config?.build?.ssr) {
			return;
		}

		this.emitFile({
			type: 'asset',
			fileName: 'sitemap.xml',
			source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${siteUrl}/</loc></url>\n</urlset>\n`,
		});
		this.emitFile({ type: 'asset', fileName: 'robots.txt', source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n` });
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
