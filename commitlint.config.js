module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'references-empty': [2, 'never'],
    'custom-rule-issue-number': [2, 'always'],
    'type-enum': [
      2,
      'always',
      ['build', 'chore', 'ci', 'fmt', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'],
    ],
    'scope-enum': [
      2,
      'always',
      [
        'chore',
        'components',
        'helpers',
        'core',
        'icons',
        'icons-loader',
        'flag-icons',
        'doc',
        'charts',
        'i18n',
        'nxmv',
        'nx-plugin',
        'schematics',
        'theme',
      ],
    ],
  },
  plugins: [
    {
      rules: {
        'custom-rule-issue-number': ({ header }) => {
          const pattern = /#\d+/;
          return [
            pattern.test(header),
            'commit message must contain an issue number like #123 or #000 if internal',
          ];
        },
      },
    },
  ],
};
