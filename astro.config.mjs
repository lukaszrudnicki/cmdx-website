// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  site: 'https://cmdx.pl',
  adapter: vercel(),

  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
  ],
});