import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// Project site at amman-v1.github.io/valourone-site
export default defineConfig({
  site: 'https://amman-v1.github.io/valourone-site',
  base: '/valourone-site',
  integrations: [tailwind(), sitemap(), mdx()],
  trailingSlash: 'never',
});
