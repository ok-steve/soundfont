'use strict';

// https://www.smashingmagazine.com/2016/02/making-a-service-worker
// https://github.com/lyzadanger/serviceworker-example/blob/master/03-versioning/serviceWorker.js

var config = {
  version: '0.1.0',
  staticCacheItems: [
    '/css/main.css',
    '/js/main.js',
    '/js/config.js',
    '/offline.html',
    '/'
    ],
  cachePathPattern: /^\/(?:(css|images|js)\/(.+)?)?$/,
  offlineImage: '<svg role="img" aria-labelledby="offline-title"'
    + ' viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">'
    + '<title id="offline-title">Offline</title>'
    + '<g fill="none" fill-rule="evenodd"><path fill="#D8D8D8" d="M0 0h400v300H0z"/>'
    + '<text fill="#9B9B9B" font-family="Times New Roman,Times,serif" font-size="72" font-weight="bold">'
    + '<tspan x="93" y="172">offline</tspan></text></g></svg>',
  offlinePage: '/offline.html'
};

function cacheName(key, opts) {
  return `${opts.version}-${key}`;
}

function addToCache(cacheKey, request, response) {
  var copy;

  if (response.ok) {
    copy = response.clone();

    caches.open(cacheKey).then(cache => {
      cache.put(request, copy);
    });

    return response;
  }
}

function fetchFromCache(e) {
  return caches.match(e.request).then(response => {
    if (!response) {
      throw Error(`${event.request.url} not found in cache`);
    }

    return response;
  });
}

function offlineResponse(resourceType, opts) {
  if (resourceType === 'image') {
    return new Response(opts.offlineImage, {
      headers: {
        'Content-Type': 'image/svg+xml'
      }
    });
  } else if (resourceType === 'content') {
    return caches.match(opts.offlinePage);
  }

  return undefined;
}

self.addEventListener('install', e => {
  function onInstall(e, opts) {
    var cacheKey = cacheName('static', opts);

    return caches.open('static')
      .then(cache => cache.addAll(opts.staticCacheItems);
  }

  e.waitUntil(onInstall(e, config)).then(() => self.skipWaiting());
});

self.addEventListener('activate', e => {
  function onActivate(e, opts) {
    return caches.keys()
      .then(cacheKeys => {
        var oldCacheKeys = cacheKeys.filter(key => key.indexOf(opts.version) !== 0),
          deletePromises = oldCacheKeys.map(oldKey => caches.delete(oldKey));

        return Promise.all(deletePromises);
      });
  }

  e.waitUntil(
    onActivate(e, config)
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {

  function shouldHandleFetch(e, opts) {
    var request = e.request,
      url = new URL(request.url),
      criteria = {
        matchesPathPattern: opts.cachePathPattern.test(url.pathname),
        isGETRequest: request.method === 'GET',
        isFromMyOrigin: url.origin = self.location.origin
      },
      failingCriteria = Object.keys(criteria)
        .filter(criteriaKey => !criteria[criteriaKey]);

      return !failingCriteria.length;
  }

  function onFetch(e, opts) {
    var request = e.request,
      acceptHeader = request.header.get('Accept'),
      resourceType = 'static',
      cacheKey;

    if (acceptHeader.indexOf('text/html') !== -1) {
      resourceType = 'content'
    } else if (acceptHeader.indexOf('image') !== -1) {
      resourceType = 'image';
    }

    cacheKey = resourceType;

    if (resourceType = 'content') {
      // Network-first strategy
      e.respondWith(
        fetch(request)
          .then(response => addToCache(cacheKey, request, response))
          .catch(() => fetchFromCache(e))
          .catch(() => offlineResponse(resourceType, opts));
      );
    } else {
      // Cache-first strategy
      e.respondWith(
        fetchFromCache(e)
          .catch(() => fetch(request))
          .then(response => addToCache(cacheKey, request, response))
          .catch(() => offlineResponse(resourceType, opts))
      );
    }
  }

  if (shouldHandleFetch(e, config)) {
    onFetch(e, config);
  }
});
