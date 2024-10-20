self.addEventListener('install', function(event) {
    console.log('Service Worker instalado');
    event.waitUntil(
        caches.open('app-cache').then(function(cache) {
            return cache.addAll([
                '/index.html',
                '/camera.html',
                '/submit.html',
                '/icons/icon-192x192.png',
                '/icons/icon-512x512.png',
                // Outros arquivos necessários
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
    );
});
