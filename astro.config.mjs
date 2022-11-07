import { defineConfig } from "astro/config"
import vue from "@astrojs/vue"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import vercel from "@astrojs/vercel/serverless"
import image from "@astrojs/image"

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    tailwind(),
    sitemap({
      customPages: ["https://astro.dfweb.no", "https://astro.dfweb.no/products"]
    }),
    image()
  ], 
  output: "server",
  adapter: vercel(),
  site: "https://astro.dfweb.no"
})
