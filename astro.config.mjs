import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// NOTE: Using custom domain (valourone.com), so no `base` here.
export default defineConfig({
  site: 'https://valourone.com',
  integrations: [tailwind(), sitemap(), mdx()],
  trailingSlash: 'never',
});
