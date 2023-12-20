import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	author: "Gujintao",
	title: "今朝博客",
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
		title: "最近更新",
		path: "/",
	},
	{
		title: "全部文章",
		path: "/posts/",
	},
];
