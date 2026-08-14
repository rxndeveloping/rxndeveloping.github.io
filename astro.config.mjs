import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ryzexfn750.github.io',
  integrations: [sitemap()],
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
