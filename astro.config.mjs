// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// Production: DNS ha www → apex villagefregene.it; canonical su www per meta/URL assoluti. Override: ASTRO_SITE / ASTRO_BASE.
const site = process.env.ASTRO_SITE?.trim() || 'https://www.villagefregene.it';
const base = process.env.ASTRO_BASE?.trim() || '/';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	site,
	base,
});
