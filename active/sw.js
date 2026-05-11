importScripts('/uv/uv.bundle.js');
importScripts('/uv/uv.config.js');
importScripts(__uv$config.sw || '/uv/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', (event) => {
    event.respondWith(sw.fetch(event));
});


const sw = new UVServiceWorker();

self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        (async () => {
            // ONLY intercept links that have the proxy prefix
            if (event.request.url.startsWith(location.origin + __uv$config.prefix)) {
                return await sw.fetch(event);
            }
            // Let all normal website files load normally
            return fetch(event.request);
        })()
    );
});

>>>>>>> 25c7933693ac9534d6e8a406bcdfdf4ac524ba31
