module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	plugins: ["eslint-plugin-html"],
	extends: "eslint:recommended",
	parserOptions: {
		ecmaVersion: 12,
		sourceType: "module",
	},
	rules: {},
};
