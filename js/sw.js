var CACHE_NAME = 'pwa-todo-caches';
var urlsToCache = [
    '/',
    '/index.html',
    '/js/index.js',
    '/css/normalize.css',
    '/css/index.css'
];

self.addEventListener('install', function (ev) {
    ev.waitUntil(caches.open(CACHE_NAME).then(function (cache) {
        return cache.addAll(urlsToCache);
    }));
});

self.addEventListener('fetch', function (ev) {
    ev.respondWith(caches.match(ev.request).then(function (resp) {
        return resp ? resp : fetch(ev.request);
    }));
});
