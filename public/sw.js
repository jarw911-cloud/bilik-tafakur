// public/sw.js
const CACHE_NAME = 'bilik-tafakur-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Kodingan standar kagem nerusake request tanpa cache rumiyin
    event.respondWith(fetch(event.request));
});