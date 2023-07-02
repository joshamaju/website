import { z, defineCollection } from "astro:content";

const craft = defineCollection({
  schema: z.object({
    title: z.string(),
    link: z.string().optional(),
    video: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { craft };
