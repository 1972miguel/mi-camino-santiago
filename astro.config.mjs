import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Cambia esto cuando tengas tu dominio o deja así por ahora
  site: 'https://mi-camino-santiago.vercel.app',

  integrations: [mdx()]
});