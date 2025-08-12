/** @type {import('stylelint').Config} */
module.exports = {
  overrides: [
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.html'],
      customSyntax: 'postcss-html',
    },
  ],
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-tailwindcss',
  ],
  plugins: ['stylelint-order'],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,

    'no-descending-specificity': null,

    'color-hex-length': 'short',
    'selector-class-pattern': null,
  },
};
