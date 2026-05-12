// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },
	extends: [
		"./layers/ui",
		"./layers/regions",
		"./layers/plans",
		"./layers/catalog",
	],
	modules: ["@pinia/nuxt"],
	css: ["~/assets/styles/core.css"],
});
