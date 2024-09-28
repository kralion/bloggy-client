// @ts-check
import { defineConfig, envField } from "astro/config";
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [mdx(), sitemap(), tailwind()],

  env: {
    schema: {
      STRAPI_URL: envField.string({
        context: "server",
        access: "public",
      }),
    },
  },

  output: "server",
  adapter: vercel(),
});