const CACHE_NAME = "v1"; // Change this to force an update when deploying a new version

const ASSETS_TO_CACHE = [
    "/", // Cache the root route
    "/index.html",
    "/manifest.json",
    "/favicon.ico",
    "/logo192.png",
    "/logo512.png"
];

// Install event - Caches assets when the service worker is installed
self.addEventListener("install", (event) => {
    console.log("[Service Worker] Installing...");

    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("[Service Worker] Caching assets...");
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Activate event - Cleans up old caches
self.addEventListener("activate", (event) => {
    console.log("[Service Worker] Activating...");

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        console.log("[Service Worker] Deleting old cache:", cache);
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Fetch event - Serves files from cache if offline
self.addEventListener("fetch", (event) => {
    console.log("[Service Worker] Fetching:", event.request.url);

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
