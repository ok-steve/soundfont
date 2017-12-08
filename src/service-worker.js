/* eslint-disable compat/compat, no-restricted-globals */
const CACHE_VERSION = 'v6';
const CACHE_NAME = 'soundfont';
const CACHE = `${CACHE_VERSION}-${CACHE_NAME}`;

const CRITICAL_ASSETS = [
  './styles/main.css',
  './scripts/main.js',
  './index.html',
  './',
];

const OPTIONAL_ASSETS = [
  './assets/favicon-16.png',
  './assets/favicon-32.png',
  './assets/favicon-150.png',
  './assets/favicon-180.png',
  './assets/favicon-192.png',
  './assets/favicon-512.png',
  './assets/favicon.svg',
  './favicon.ico',
];

const CACHE_PATH_PATTERN = /\/(?:(assets|scripts|styles)\/(.+)?)?$/;

/**
 * Utility functions
 */

const shouldHandleFetch = (request) => {
  const url = new URL(request.url);

  const criteria = {
    matchesPathPattern: !!(CACHE_PATH_PATTERN).exec(url.pathname),
    isGETRequest: request.method === 'GET',
    isSameOrigin: url.origin === self.location.origin,
  };

  return Object.keys(criteria).map(key => criteria[key])
    .reduce((prev, curr) => prev && curr);
};

const staleWhileRevalidate = request => caches.open(CACHE)
  .then(cache => cache.match(request).then((cachedResponse) => {
    const fetchPromise = fetch(request).then((networkResponse) => {
      cache.put(request, networkResponse.clone());

      return networkResponse;
    });

    return cachedResponse || fetchPromise;
  }));

/**
 * Install event
 */

const onInstall = () => caches.open(CACHE).then((cache) => {
  cache.addAll(OPTIONAL_ASSETS);

  return cache.addAll(CRITICAL_ASSETS);
});

/**
 * Activate event
 */

const onActivate = () => caches.keys()
  .then(keys => Promise.all(keys.filter(key => key.indexOf(CACHE_VERSION) !== 0)
    .map(key => caches.delete(key))));

/**
 * Fetch event
 */

const onFetch = e => staleWhileRevalidate(e.request);

/**
 * Event listeners
 */

self.addEventListener('install', (e) => {
  e.waitUntil(onInstall(e));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(onActivate(e).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  if (shouldHandleFetch(e.request)) {
    e.respondWith(onFetch(e));
  }
});
/* eslint-enable */
