import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Niki wajib wonten kagem sitemap!
  site: 'https://bilik-tafakur.my.id',
  
  integrations: [
    tailwind(),
    sitemap() // Plugin sitemap mlebet mriki
  ]
});