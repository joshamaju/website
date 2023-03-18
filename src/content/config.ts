import { z, defineCollection } from "astro:content";

const craft = defineCollection({
  schema: z.object({
    video: z.string(),
    title: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { craft };
