module.exports = {
	useTabs: true,
	singleQuote: false,
	trailingComma: "all",
	printWidth: 100,
	tailwindConfig: "./tailwind.config.cjs",
	plugins: [require("prettier-plugin-svelte"), require("prettier-plugin-tailwindcss")],
	pluginSearchDirs: false,
	overrides: [{ files: "*.svelte", options: { parser: "svelte" } }],
};
