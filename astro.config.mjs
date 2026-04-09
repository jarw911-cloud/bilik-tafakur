import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; // <--- Niki nyawane sing ilang wau!
import sitemap from '@astrojs/sitemap';
// import AstroPWA from '@vite-pwa/astro'; // PWA kita pateni riyin kersane aman

export default defineConfig({
  site: 'https://bilik-tafakur.my.id',
  
  integrations: [
    tailwind(), // <--- MESIN TAILWIND WAJIB WONTEN
    sitemap(),  // Mesin Sitemap kagem Google
  ],
});