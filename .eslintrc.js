module.exports = {
	root: true,
	env: {
		node: true,
		browser: true
	},
	extends: ['plugin:vue/essential', '@vue/standard'],
	parserOptions: {
		parser: 'babel-eslint'
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-tabs': 'off',
		'indent': 'off',
    'space-before-function-paren': 'off',
    'prefer-const': 0
	}
}
