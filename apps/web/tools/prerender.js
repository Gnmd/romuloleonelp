// Gera o HTML estático da página a partir do build SSR, para que o conteúdo
// apareça sem JavaScript (buscadores, prévias de link, carregamento inicial).
import { readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const htmlPath = path.join(root, 'dist/index.html');
const ssrDir = path.join(root, '.ssr');

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

const template = await readFile(htmlPath, 'utf-8');
const placeholder = '<div id="root"></div>';

if (!template.includes(placeholder)) {
	throw new Error(`Marcador ${placeholder} não encontrado em dist/index.html`);
}

await writeFile(htmlPath, template.replace(placeholder, `<div id="root">${render()}</div>`));
await rm(ssrDir, { recursive: true, force: true });

console.log('Página pré-renderizada em dist/index.html');
