import { type CollectionEntry, getCollection } from "astro:content";
import { assignImagesToObjects } from "./file";
import useStore from "../zustand/store";

export const getCategories = async (locale: any) => {
	const currentLocale = locale || useStore.getState().locale;
	console.log("getCategories", currentLocale);

	let posts = await getCollection("blog", (entry: any) => entry.id.startsWith(`${currentLocale}/`));
	const categories = new Set(posts.map((post: any) => post.data.category));
	return Array.from(categories);
};

export const getPosts = async (locale: any, max?: number) => {
	const currentLocale = locale || useStore.getState().locale;
	let posts = await getCollection("blog", (entry: any) => entry.id.startsWith(`${currentLocale}/`));
	let blogObj = posts
		.filter((post: any) => !post.data.draft)
		.sort((a: any, b: any) => {
			const aDate = getPostSortDate(a).valueOf();
			const bDate = getPostSortDate(b).valueOf();
			return bDate - aDate;
		})
		.slice(0, max);

	assignImagesToObjects(blogObj);

	return blogObj;
};

export const getTags = async (locale: any) => {
	const currentLocale = locale || useStore.getState().locale;
	let posts = await getCollection("blog", (entry: any) => entry.id.startsWith(`${currentLocale}/`));
	const tags = new Set();
	posts.forEach((post: any) => {
		post.data.tags.forEach((tag: any) => {
			tags.add(tag.toLowerCase());
		});
	});

	return Array.from(tags);
};

export const getPostByTag = async (locale: any, tag: any) => {
	const currentLocale = locale || useStore.getState().locale;
	const posts = await getPosts(currentLocale);
	const lowercaseTag = tag.toLowerCase();
	return posts.filter((post: any) => {
		return post.data.tags.some((postTag: any) => postTag.toLowerCase() === lowercaseTag);
	});
};

export const filterPostsByCategory = async (locale: any, category: any) => {
	const currentLocale = locale || useStore.getState().locale;
	const posts = await getPosts(currentLocale);
	return posts.filter((post: any) => post.data.category.toLowerCase() === category);
};

export function getPostSortDate(post: CollectionEntry<"blog">) {
	// return post.data.updatedDate !== undefined
	// 	? new Date(post.data.updatedDate)
	// 	: new Date(post.data.publishDate);
	return new Date(post.data.publishDate);
}
