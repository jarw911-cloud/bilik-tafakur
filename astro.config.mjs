import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';

export default defineConfig({
  site: 'https://bilik-tafakur.my.id',
  integrations: [
    sitemap(),
    AstroPWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Bilik Tafakur',
        short_name: 'BilikTafakur',
        description: 'Ruang renungan, Al-Quran Digital, dan doa harian.',
        theme_color: '#10b981',
        icons: [
          {
            src: 'logo-bilik.svg', // Pastikaken file niki wonten ing folder public
            sizes: '192x192',
            type: 'image/svg+xml',
          },
          {
            src: 'logo-bilik.svg',
            sizes: '512x512',
            type: 'image/svg+xml',
          }
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,jpg}'], // Supados saged diakses pas offline
      }
    })
  ],
});