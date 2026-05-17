import eslintConfigPrettier from "eslint-config-prettier"
import pluginVue from "eslint-plugin-vue"
import tseslint from "typescript-eslint"

export default tseslint.config(
	{
		ignores: [
			"**/node_modules/**",
			"**/.nuxt/**",
			"**/.output/**",
			"**/dist/**",
		],
	},
	...tseslint.configs.recommended,
	...pluginVue.configs["flat/recommended"],
	eslintConfigPrettier,
	{
		files: ["**/*.vue"],
		languageOptions: {
			parserOptions: {
				parser: tseslint.parser,
				extraFileExtensions: [".vue"],
			},
		},
	},
	{
		rules: {
			"@typescript-eslint/no-non-null-assertion": "off",
			"@typescript-eslint/no-explicit-any": "warn",
			"@typescript-eslint/no-unused-vars": [
				"error",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
				},
			],
			"vue/multi-word-component-names": "off",
			"vue/no-v-html": "off",
		},
	},
)
