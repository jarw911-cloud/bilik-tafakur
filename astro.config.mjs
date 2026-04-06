import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // PESHTEKAKE IKI PERSIS ALAMAT VERCEL-MU
  site: 'https://bilik-tafakur.vercel.app', 
  integrations: [tailwind(), sitemap()],
});