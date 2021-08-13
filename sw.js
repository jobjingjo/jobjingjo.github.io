if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('/sw.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
}

const CACHE_NAME = "offline";
self.addEventListener('install', function(event) {

  event.waitUntil(
    (async () => {
      await caches.open(CACHE_NAME).then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/images/icons-192.png',
          '/images/icons-512.png',
          '/sw.js'
        ]);
      })
    })()
  );
  // Force the waiting service worker to become the active service worker.
  self.skipWaiting();
 });