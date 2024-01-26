const cacheName = 'Kiama-Beauty-Clinic';
const filesToCache = [
  '/',
  '/index.html',
  '/css/style.css', 
  '/js/script.js',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName)
      .then((cache) => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
