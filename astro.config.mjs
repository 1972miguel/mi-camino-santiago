import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import pwa from "@vite-pwa/astro";

export default defineConfig({
  site: "https://mi-camino-santiago.vercel.app",
  vite: {}, // ← Esto fuerza que el plugin PWA se active correctamente
  integrations: [
    mdx(),
    pwa({
      registerType: "autoUpdate",
      manifest: {
        name: "Camino de Santiago 2026 - Yaiza y Miguel",
        short_name: "Camino 2026",
        description: "Diario del Camino Portugués desde Tui",
        theme_color: "#043915",
        background_color: "#FFFFFF",
        display: "standalone",
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
    }),
  ],
});
