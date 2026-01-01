import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://mi-camino-santiago.vercel.app",
  integrations: [mdx()],
});
