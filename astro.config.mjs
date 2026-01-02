import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://gzecheru.github.io',
  base: '/always-the-facts.com',
  integrations: [
    mdx(),
    sitemap()
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark'
    }
  }
});
