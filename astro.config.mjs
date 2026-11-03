// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://industrialairobots.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
