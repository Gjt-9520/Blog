import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
	author: "Gujintao",
	title: "今朝博客",
	description: "",
	lang: "zh-CN",
	ogLocale: "zh-CN",
	date: {
		locale: "zh-CN",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	webmentions: {
		link: "https://webmention.io/astro-cactus.chriswilliams.dev/webmention",
	},
};

export const menuLinks: Array<{ title: string; path: string }> = [

	{
		title: "最新提交",
		path: "/",
	},
	{
		title: "全部文章",
		path: "/posts/",
	},
];
