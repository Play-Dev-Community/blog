const CACHE_NAME = 'my-cache-v1';
const CACHE_LIST_URL = '/cache-list.json';

// Instalando o Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    fetch(CACHE_LIST_URL)
      .then(response => response.json())
      .then(files => {
        return caches.open(CACHE_NAME).then(cache => {
          // Adicionar todas as URLs ao cache
          return cache.addAll(files);
        });
      })
      .catch(error => {
        console.error('Falha ao carregar a lista de arquivos para o cache:', error);
      })
  );
});

// Ativando o Service Worker
self.addEventListener('activate', event => {
  console.log('Service Worker ativado.');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Interceptando requisições
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
