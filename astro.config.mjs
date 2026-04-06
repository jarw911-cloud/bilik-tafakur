import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap'; // 1. TAMBAH IKI

// https://astro.build/config
export default defineConfig({
  // 2. PESHTEKAKE ALAMAT IKI BENER (Penting nggo sitemap)
  site: 'https://bilik-tafakur.vercel.app', 
  integrations: [
    tailwind(), 
    sitemap() // 3. TAMBAH IKI
  ],
});