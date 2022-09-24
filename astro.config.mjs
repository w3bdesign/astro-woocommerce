import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'

import vercel from '@astrojs/vercel/serverless'

// https://astro.build/config
export default defineConfig({
  integrations: [vue(), tailwind(), sitemap()],
  output: 'server',
  adapter: vercel()
})
