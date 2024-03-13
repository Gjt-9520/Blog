import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	author: "Gujintao",
	title: "博客",
	description: "blog",
	lang: "zh-CN",
	ogLocale: "zh-CN",
	date: {
		locale: "zh-CN",
		options: {
			day: "numeric",
			month: "numeric",
			year: "numeric",
		},
	},
	webmentions: {
		link: "https://webmention.io/astro-cactus.chriswilliams.dev/webmention",
	},
};

export const menuLinks: Array<{ title: string; path: string }> = [
	{
		title: "首页",
		path: "/posts/",
	},
	{
		title: "文章",
		path: "/",
	},
	{
		title: "标签",
		path: "/tags/",
	},
	{
		title: "图床",
		path: "https://image-resources.vercel.app/",
	},
];
