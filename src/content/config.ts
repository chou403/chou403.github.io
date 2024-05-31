import { defineCollection, z } from "astro:content";
import { CATEGORIES } from "@/data/categories";

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			author: z.string().optional(),
			title: z.string().max(80),
			description: z.string().optional(),
			publishDate: z
				.date()
				.or(z.date())
				.transform((val: any) => new Date(val)),
			heroImage: image(),
			category: z.enum(CATEGORIES),
			tags: z.array(z.string()),
			draft: z.boolean().default(false),
			updatedDate: z
				.date()
				.optional()
				.transform((str: any) => (str ? new Date(str) : undefined)),
		}),
});

export const collections = { blog };
