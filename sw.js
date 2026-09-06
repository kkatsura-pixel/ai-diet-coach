// AI Diet Coach - Service Worker
// 目的：オフライン対応ではなく、「更新の検知」のみ。キャッシュは一切制御しない。
// v50.htmlを更新するたびに、この値も必ず変更する。

const SW_VERSION = 'v50-sw-4';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  return; // キャッシュ制御は行わない。通常のネットワーク通信に任せる。
});
