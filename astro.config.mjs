// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ricsiw.github.io',
  base: '/ble-product-page',
  vite: {
    plugins: [tailwindcss()]
  }
});
