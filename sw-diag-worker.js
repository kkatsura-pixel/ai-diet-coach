// sw-diag.html 専用のテスト用Service Worker（本番のsw.jsとは完全に別ファイル）
// このファイルのバージョンを変えても、本番アプリには一切影響しません。

const SW_DIAG_VERSION = 'diag-1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  return;
});
