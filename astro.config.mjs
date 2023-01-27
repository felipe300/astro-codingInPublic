import { defineConfig } from "astro/config"

// https://astro.build/config
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://astro-awesome-blog.netlify.app/",
  integrations: [
    sitemap(),
  ],
})
