import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import pwa from "@vite-pwa/astro";

export default defineConfig({
  site: "https://mi-camino-santiago.vercel.app",
  integrations: [
    mdx(),
    pwa({
      mode: "production",
      registerType: "autoUpdate",
      includeAssets: ["favicon.ico", "icons/*.png", "fonts/*.woff2"], // cachea iconos y fuentes
      manifest: {
        name: "Camino de Santiago 2026 - Yaiza y Miguel",
        short_name: "Camino 2026",
        description: "Diario del Camino Portugués desde Tui en 6 etapas",
        theme_color: "#043915",
        background_color: "#FFFFFF",
        display: "standalone",
        scope: "/",
        start_url: "/",
        orientation: "portrait",
        icons: [
          {
            src: "/icons/favicon-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/icons/favicon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,webp,avif,woff2}"], // cachea todo lo importante
        navigateFallback: "/404.html",
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.mode === "navigate",
            handler: "NetworkFirst",
            options: {
              cacheName: "pages-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 días
              },
            },
          },
        ],
      },
    }),
  ],
});
