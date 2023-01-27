import { defineConfig } from "astro/config"

// https://astro.build/config
import sitemap from "@astrojs/sitemap"

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-awesome-blog.netlify.app/",
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap(),
  ],
})
