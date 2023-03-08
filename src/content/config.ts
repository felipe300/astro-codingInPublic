import { z, defineCollection } from "astro:content"

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    author: z.enum(["Anna Dixon", "Victoria Greenfelder", "Darnell McClure"]),
    image: z.string(),
    description: z
      .string()
      .max(
        160,
        "For best SEO results, plase keep the description unde 160 characters."
      ),
    draft: z.boolean().default(false),
    category: z.enum(["CSS", "Reference Docs", "Astro", "General"])
  }),
})

export const collections = { blog }
