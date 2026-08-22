/**
 * SurBeat — Service Worker
 * PWA Asset Caching & Offline App Shell
 */

const CACHE_NAME = 'surbeat-v2.2.0';
const STATIC_ASSETS = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './songsDatabaseCatalog.js',
  './workoutCatalog.js',
  './manifest.webmanifest',
  './icons/icon.svg'
];

// Install Event — cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('[SurBeat SW] Pre-caching asset warning:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate Event — cleanup old caches and claim clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((name) => {
          if (name !== CACHE_NAME) {
            return caches.delete(name);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event — stale-while-revalidate for local static assets
self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip chrome extensions, analytics, or external audio/video streams
  if (!url.protocol.startsWith('http')) return;
  if (url.hostname.includes('youtube.com') || url.hostname.includes('googlevideo.com') || url.hostname.includes('ytimg.com')) {
    return; // Let browser directly stream media & YouTube thumbnails
  }

  // Handle local assets and fonts with Stale-While-Revalidate
  if (url.origin === self.location.origin || url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(request).then((cachedResponse) => {
          const fetchPromise = fetch(request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(request, networkResponse.clone()).catch(() => {});
            }
            return networkResponse;
          }).catch(() => cachedResponse);

          return cachedResponse || fetchPromise;
        });
      })
    );
  }
});
