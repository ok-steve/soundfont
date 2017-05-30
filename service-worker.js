'use strict';

var config = {
  version: '0.1.0',
  staticCacheItems: [
    '/dist/app-build.js',
    '/dist/aurelia.js',
    '/jspm_packages/system-csp-production.js',
    '/jspm_packages/system-polyfills.js',
    '/jspm_packages/system.js',
    '/styles/styles.css',
    'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700',
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    '/config.js',
    '/'
  ],
  cachePathPattern: /^\/(.+)\/midi-js-soundfonts\/(.+)$/
};

function cacheName(key, version) {
  return `${version}-${key}`;
}

function addToCache(key, request, response) {
  var copy;

  if (response.ok) {
    copy = response.clone();

    caches.open(key).then(cache => {
      cache.put(request, copy);
    });
  }
  return response;
}

function fetchFromCache(e) {
  return caches.match(e.request).then(response => {
    if (!response) {
      throw Error(`${e.request.url} not found in cache`);
    }
    return response;
  });
}

self.addEventListener('install', e => {
  function onInstall(e, opts) {
    var cacheKey = cacheName('static', opts.version);

    return caches.open(cacheKey)
      .then(cache => cache.addAll(opts.staticCacheItems));
  }

  e.waitUntil(onInstall(e, config).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  function onActivate(e, opts) {
    return caches.keys().then(keys => Promise.all(
      keys.filter(key => key.indexOf(opts.version) !== 0)
        .map(key => caches.delete(key))
    ));
  }

  e.waitUntil(onActivate(e, config).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {

  function shouldHandleFetch(e, opts) {
    var request = e.request,
      url = new URL(request.url),
      criteria = {
        matchesPathPattern: opts.cachePathPattern.test(url.pathname),
        isGETRequest: request.method === 'GET',
        //isFromMyOrigin: url.origin === self.location.origin
      },
      failingCriteria = Object.keys(criteria)
        .filter(criteriaKey => !criteria[criteriaKey]);

    return !failingCriteria.length;
  }

  function onFetch(e, opts) {
    var request = e.request,
      acceptHeader = request.headers.get('Accept'),
      resourceType = 'static',
      cacheKey;

    if (acceptHeader.indexOf('text/html') !== -1) {
      resourceType = 'content';
    } else if (acceptHeader.indexOf('image') !== -1) {
      resourceType = 'image';
    }

    cacheKey = cacheName(resourceType, opts.version);

    e.respondWith(
      fetchFromCache(e)
        .catch(() => fetch(request))
        .then(response => addToCache(cacheKey, request, response))
    );
  }

  if (shouldHandleFetch(e, config)) {
    onFetch(e, config);
  }
});
