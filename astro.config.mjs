// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";

import mdx from "@astrojs/mdx";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [sitemap(), mdx(), tailwind()],

  output: "server",
  adapter: vercel(),
});