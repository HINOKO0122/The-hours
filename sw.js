self.addEventListener('fetch', (event) => {
  // 常にネットワークから最新を取得し、失敗したらキャッシュを返す
  event.respondWith(
    fetch(event.request).catch(() => {
      return caches.match(event.request);
    })
  );
});
