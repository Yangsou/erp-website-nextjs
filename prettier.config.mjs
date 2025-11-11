/** @type {import('prettier').Config} */
export default {
  plugins: ['prettier-plugin-tailwindcss'],
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 100,
  tabWidth: 2,
  arrowParens: 'always',
  singleAttributePerLine: true,
  overrides: [
    {
      files: ['*.json', '*.jsonc'],
      options: { printWidth: 200, trailingComma: 'none' },
    },
    {
      files: '*.md',
      options: { proseWrap: 'always', printWidth: 80 },
    },
  ],
}
