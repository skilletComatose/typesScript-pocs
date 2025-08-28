const typescriptEslint = require('@typescript-eslint/eslint-plugin')
const typescriptParser = require('@typescript-eslint/parser')

module.exports = [
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'coverage/**',
      '*/.d.ts',
      '*/.js',
    ],
  },
  {
    files: ['*/.ts', '*/.tsx'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      'no-unused-vars': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-inferrable-types': 'error',
      'no-console': 'off',
    },
  },
  {
    files: ['*/.test.ts', '*/.spec.ts'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': typescriptEslint,
    },
    rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-inferrable-types': 'error',
      'no-console': 'off',
    },
  },
];