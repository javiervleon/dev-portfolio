// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://javiervleon.github.io/dev-portfolio/",
  vite: {
    plugins: [tailwindcss()],
  },
});
