import { type CollectionEntry, getCollection } from "astro:content";
import { assignImagesToObjects } from "./file";

export const getCategories = async () => {
	const posts = await getCollection("blog");
	const categories = new Set(posts.map((post) => post.data.category));
	return Array.from(categories);
};

export const getPosts = async (max?: number) => {
	let blogObj = (await getCollection("blog"))
		.filter((post) => !post.data.draft)
		.sort((a, b) => {
			const aDate = getPostSortDate(a).valueOf();
			const bDate = getPostSortDate(b).valueOf();
			return bDate - aDate;
		})
		.slice(0, max);
	assignImagesToObjects(blogObj);
	return blogObj;
};

export const getTags = async () => {
	const posts = await getCollection("blog");
	const tags = new Set();
	posts.forEach((post) => {
		post.data.tags.forEach((tag) => {
			tags.add(tag.toLowerCase());
		});
	});

	return Array.from(tags);
};

export const getPostByTag = async (tag: string) => {
	const posts = await getPosts();
	const lowercaseTag = tag.toLowerCase();
	return posts.filter((post) => {
		return post.data.tags.some((postTag) => postTag.toLowerCase() === lowercaseTag);
	});
};

export const filterPostsByCategory = async (category: string) => {
	const posts = await getPosts();
	return posts.filter((post) => post.data.category.toLowerCase() === category);
};

export function getPostSortDate(post: CollectionEntry<"blog">) {
	return post.data.updatedDate !== undefined
		? new Date(post.data.updatedDate)
		: new Date(post.data.publishDate);
}
