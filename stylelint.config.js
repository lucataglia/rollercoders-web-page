module.exports = {
  extends: [
    'stylelint-config-standard',
  ],
  customSyntax: 'postcss-scss',
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'extends',
        'tailwind',
      ],
    }],
    'selector-class-pattern': null,
    'max-line-length': null,
    indentation: 4,
  },
};
