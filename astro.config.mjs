import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://trainedtails.com',
  trailingSlash: 'never', // Ensure no trailing slashes in URLs
  integrations: [tailwind(), sitemap()]
});
