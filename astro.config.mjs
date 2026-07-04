// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
  },
  site: 'https://alexaperador.dev',

  integrations: [sitemap(), icon()],
});
