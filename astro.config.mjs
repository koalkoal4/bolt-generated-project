import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap'; // Import the sitemap integration

export default defineConfig({
  site: 'https://trainedtails.com', // This is required for the sitemap
  integrations: [
    tailwind(),
    sitemap() // Add the sitemap integration
  ]
});