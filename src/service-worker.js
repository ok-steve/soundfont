const CACHE_VERSION = 'v5';
const CACHE_NAME = 'soundfont';
const CACHE = `${CACHE_VERSION}-${CACHE_NAME}`;

const STATIC_ASSETS = [
  './assets/favicon-16.png',
  './assets/favicon-32.png',
  './assets/favicon-150.png',
  './assets/favicon-180.png',
  './assets/favicon-192.png',
  './assets/favicon.svg',
  './styles/main.css',
  './scripts/main.js',
  './index.html',
  './',
];

const CACHE_PATH_PATTERN = /^\/(?:(assets|scripts|styles)\/(.+)?)?$/;

/**
 * Utility functions
 */

const shouldHandleFetch = (e) => {
  const request = e.request;
  const url = new URL(request.url);

  const criteria = {
    matchesPathPattern: !!(CACHE_PATH_PATTERN).exec(url.pathname),
    isGETRequest: request.method === 'GET',
    isSameOrigin: url.origin === self.location.origin,
  };

  return Object.keys(criteria).map(key => criteria[key])
    .reduce((prev, curr) => prev && curr);
};

const addToCache = (request, response) => {
  if (response && response.ok && response.status === 200 && response.type === 'basic') {
    const req = request.clone();
    const res = response.clone();

    caches.open(CACHE).then(cache => cache.put(req, res));
  }

  return response;
};

const fetchFromNetwork = (request) => {
  const req = request.clone();

  return fetch(req).then(response => addToCache(request, response));
};

const fetchFromCache = (request) => {
  const req = request.clone();

  return caches.open(CACHE).then(cache => cache.match(req))
    .then((response) => {
      fetchFromNetwork(request);

      return response || Promise.reject('no-match');
    });
};

/**
 * Install event
 */

const onInstall = () => caches.open(CACHE).then(cache => cache.addAll(STATIC_ASSETS));

/**
 * Activate event
 */

const onActivate = () => caches.keys()
  .then(keys => Promise.all(keys.filter(key => key.indexOf(CACHE_VERSION) !== 0)
    .map(key => caches.delete(key))));

/**
 * Fetch event
 */

const onFetch = (e) => {
  const request = e.request;

  return fetchFromCache(request)
    .catch(() => fetchFromNetwork(request));
};

/**
 * Event listeners
 */

self.addEventListener('install', (e) => {
  e.waitUntil(onInstall(e).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(onActivate(e).then(() => self.clients.claim()));
});

self.addEventListener('fetch', (e) => {
  if (shouldHandleFetch(e)) {
    e.respondWith(onFetch(e));
  }
});
