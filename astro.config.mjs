import { defineConfig } from 'astro/config';
import { settings } from './src/data/settings';
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import lit from "@astrojs/lit";

// https://astro.build/config
export default defineConfig({
  site: settings.site,
  integrations: [sitemap(), mdx(), lit()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});