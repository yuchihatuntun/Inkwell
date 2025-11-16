import siteConfig from "./src/utils/config";

const config = siteConfig({
	title: "Inkwell",
	prologue: "The right word, at its right depth.",
	author: {
		name: "Tuntun Uchiha",
		email: "xurlin@mail2.sysu.edu.cn",
		link: "https://www.stillpoint.cn"
	},
	description: "The ink through which we read lives twice. ",
	copyright: {
		type: "CC BY-NC-ND 4.0",
		year: "2025"
	},
	i18n: {
		locales: ["en", "zh-cn", "ja"],
		defaultLocale: "en"
	},
	feed: {
		section: "*",
		limit: 20
	},
	latest: "*"
});

export const monolocale = Number(config.i18n.locales.length) === 1;

export default config;
