const CACHE_NAME = 'emis-manager-v43-update-ready-2';
const CORE_ASSETS = ['./', './index.html', './manifest.webmanifest', './icons/icon-180.png', './icons/icon-192.png', './icons/icon-512.png'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key.startsWith('emis-manager-') && key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;

  // HTML/navigation: prefer the newest server copy, but fall back to cache offline.
  if (req.mode === 'navigate' || url.pathname.endsWith('/index.html') || url.pathname === new URL('./index.html', self.location).pathname) {
    event.respondWith((async () => {
      try {
        const fresh = await fetch(req, { cache: 'no-store' });
        if (fresh && fresh.ok) {
          const cache = await caches.open(CACHE_NAME);
          await cache.put('./index.html', fresh.clone());
          return fresh;
        }
      } catch (_) {}
      return (await caches.match(req)) || (await caches.match('./index.html')) || Response.error();
    })());
    return;
  }

  // Icons and manifest: cache-first with a network fallback.
  event.respondWith((async () => {
    const cached = await caches.match(req);
    if (cached) return cached;
    try {
      const response = await fetch(req);
      if (response && response.ok) (await caches.open(CACHE_NAME)).put(req, response.clone());
      return response;
    } catch (_) {
      return Response.error();
    }
  })());
});
