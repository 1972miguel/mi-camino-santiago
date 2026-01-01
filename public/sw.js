const CACHE_NAME = "camino-2026-v1";

const ASSETS_TO_CACHE = [
  "/",
  "/main",
  "/blog",
  "/gallery",
  "/vblog",
  "/styles/global.css",
  "/icons/concha.png",
  "/icons/logo.svg",
  "/images/0-tui.jpg",
  "/images/1-porrino.jpg",
  "/images/2-redondela.webp",
  "/images/3-pontevedra.jpg",
  "/images/4-caldas.jpg",
  "/images/5-padron.jpg",
  "/images/6-santiago.jpg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
