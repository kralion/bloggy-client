import { defineCollection, z } from "astro:content";

const product = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    name: z.string(),
    stock: z.number(),
    cover: z.string(),
  }),
});

export const collections = { product };
