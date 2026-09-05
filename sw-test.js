// テスト用Service Worker
const SW_VERSION = 'TEST-SW-V1'; // このファイルを更新する際、ここを変更する

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  return; // キャッシュ制御は一切行わない
});
