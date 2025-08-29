import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';
import stylistic from '@stylistic/eslint-plugin';
import prettierPlugin from 'eslint-plugin-prettier';

export default tseslint.config(
	{
		// prettier-ignore
		ignores: [
			'**/node_modules/**',
			'**/dist/**', 
			'**/build/**', 
			'coverage/**',
			'**/*.d.ts', 
			'**/*.js'
		]
	},
	{
		files: ['**/*.{js,mjs,cjs,ts,tsx}'],
		// prettier-ignore
		extends: [
			js.configs.recommended, 
			...tseslint.configs.strict, 
			...tseslint.configs.strictTypeChecked,
			prettierConfig
		],
		languageOptions: {
			globals: {
				...globals.node,
				...globals.es2022
			},
			ecmaVersion: 2022,
			sourceType: 'module',
			parser: tseslint.parser,
			parserOptions: {
				project: './tsconfig.json',
				tsconfigRootDir: import.meta.dirname
			}
		},
		plugins: {
			'@typescript-eslint': tseslint.plugin,
			'@stylistic': stylistic,
			prettier: prettierPlugin
		},
		rules: {
			'@typescript-eslint/restrict-template-expressions': 'off',
			'@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
			'no-console': 'off',
			'arrow-parens': ['error', 'as-needed'],
			'@stylistic/newline-per-chained-call': ['error', { ignoreChainWithDepth: 2 }]
		}
	},
	{
		files: ['**/*.test.ts', '**/*.spec.ts'],
		languageOptions: {
			parserOptions: {
				project: './tsconfig.json',
				tsconfigRootDir: import.meta.dirname
			}
		},
		rules: {
			'@typescript-eslint/restrict-template-expressions': 'off',
			'@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }]
		}
	}
);
