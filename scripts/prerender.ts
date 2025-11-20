import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

async function prerender() {
	const ssrModulePath = path.resolve(root, 'dist/server/ssr.js');
	const templatePath = path.resolve(root, 'dist/index.html');

	const ssrModule = await import(ssrModulePath);
	const { html: appHtml } = ssrModule.render();

	const template = await fs.readFile(templatePath, 'utf-8');
	const finalHtml = template.replace(`<!--ssr-outlet-->`, appHtml);

	await fs.writeFile(templatePath, finalHtml);
}

prerender().catch(console.error);
