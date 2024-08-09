import { defineCollection, z } from "astro:content";
import { CATEGORIES } from "@/data/categories";

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: ({ image }) =>
		z.object({
			// 编辑人员
			author: z.string().optional(),
			// 标题
			title: z.string().max(80),
			// 描述
			description: z.string().optional(),
			// 发布时间
			publishDate: z
				.date()
				.or(z.date())
				.transform((val: any) => new Date(val)),
			// 展示图
			heroImage: image(),
			// 分类
			category: z.enum(CATEGORIES),
			// 标签
			tags: z.array(z.string()),
			// 是否为草稿
			draft: z.boolean().default(false),
			// 是否固定展示图
			fixed: z.boolean().default(false),
			// 更新时间
			updatedDate: z
				.date()
				.optional()
				.transform((str: any) => (str ? new Date(str) : undefined)),
		}),
});

export const collections = { blog };
