import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // GANTOS ALAMAT IKI NGANGGE DOMAIN ANYAR (TANPA TANDHA / ING MBURI)
  site: 'https://bilik-tafakur.my.id', 
  integrations: [
    tailwind(), 
    sitemap()
  ],
});
