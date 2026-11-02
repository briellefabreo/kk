const CACHE_NAME = 'coral-cache-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/announcements.html',
  '/power.html',
  '/sea.html',
  '/disasters.html',
  '/details.html',
  '/install.html',
  '/about.html',
  '/offline.html',
  '/assets/css/style.css',
  '/assets/js/app.js',
  '/assets/js/db.js',
  '/assets/js/auth.js',
  '/assets/js/pwa.js',
  '/assets/js/translations.js'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request).catch(() => caches.match('/offline.html')))
  );
});