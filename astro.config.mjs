// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // This is a GitHub *user* site (repo name === <username>.github.io),
  // so it is served from the domain root and needs no `base` value.
  site: 'https://uniruddh.github.io',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
