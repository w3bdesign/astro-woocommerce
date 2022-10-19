import { defineConfig } from "astro/config"
import vue from "@astrojs/vue"
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import vercel from "@astrojs/vercel/serverless"
import image from "@astrojs/image"

import { plugin, defaultConfig } from "@formkit/vue"

/**
 * Vuetify integration for Astro
 * @param {import('astro/config').Options} options
 * @returns {import('astro/config').AstroIntegration}
 */
function formkit(options) {
  return {
    name: "my-astro-vuetify-integration",
    hooks: {
      "astro:config:setup": ({ updateConfig }) => {
        updateConfig({
          vite: {
            ssr: {
              noExternal: ["formkit"]
            },
            plugins: [defaultConfig()]
          }
        })
      }
    }
  }
}

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    tailwind(),

    formkit(),

    sitemap({
      customPages: [
        "https://astro-woocommerce.vercel.app",
        "https://astro-woocommerce.vercel.app/products"
      ]
    }),
    image()
  ],
  output: "server",
  adapter: vercel(),
  site: "https://astro-woocommerce.vercel.app"
})
