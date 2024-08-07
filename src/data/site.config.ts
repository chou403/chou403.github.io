interface SiteConfig {
	author: string;
	title: string;
	description: string;
	lang: string;
	ogLocale: string;
	shareMessage: string;
	paginationSize: number;
}

export const siteConfig: SiteConfig = {
	author: "chou403", // Site author
	title: "知道的越多,才知知道的越少", // Site title.
	description: "花易谢、雾易失、梦易逝、云易散", // Description to display in the meta tags
	lang: "en-EN",
	ogLocale: "en-EN",
	shareMessage: "Share this post", // Message to share a post on social media
	paginationSize: 6, // Number of posts per page
};
