// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ricsiw.github.io',
  base: process.env.GITHUB_ACTIONS ? '/ble-wildlife-telemetry' : '/',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    icon(),
  ],
});
