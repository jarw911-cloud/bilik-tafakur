import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap'; // 1. Tambahake import niki

// https://astro.build/config
export default defineConfig({
  site: 'https://bilik-tafakur.my.id', // 2. Wajib isi domain asli web-e
  integrations: [
    tailwind(),
    sitemap() // 3. Lebetake sitemap() teng mriki
  ]
});