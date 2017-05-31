'use strict';

const CACHE_NAME = 'synthia';
const CACHE_VERSION = 'v2';
const CACHE = `${CACHE_VERSION}-${CACHE_NAME}`;

const STATIC_ASSETS = [
  './dist/app-build.js',
  './dist/aurelia.js',
  './jspm_packages/system-csp-production.js',
  './jspm_packages/system-polyfills.js',
  './jspm_packages/system.js',
  './styles/styles.css',
  'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700',
  'https://fonts.googleapis.com/icon?family=Material+Icons',
  './config.js',
  './'
];

/**
 * Install event
 */

const onInstall = e => {
  return caches.open(CACHE).then(cache => {
    return cache.addAll(STATIC_ASSETS);
  });
};

const onActivate = e => {
  return caches.keys().then(keys => Promise.all(
    keys.filter(key => key.indexOf(CACHE_VERSION) !== 0)
      .map(key => caches.delete(key))
  ));
};

const onFetch = e => {
  return caches.match(e.request).then(response => {
    if (response) {
      return response;
    }

    const req = e.request.clone();

    return fetch(req).then(response => {
      if (!response || response.status !== 200 || response.type !== 'basic') {
        return response;
      }

      const res = response.clone();

      caches.open(CACHE).then(cache => {
        return cache.put(e.request, res);
      });

      return response;
    });
  });
};

/**
 * Event listeners
 */

self.addEventListener('install', e => {
  e.waitUntil(onInstall(e).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(onActivate(e).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  e.respondWith(onFetch(e));
});
