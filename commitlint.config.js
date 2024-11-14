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
    'scope-enum': [0], // Отключаем стандартное правило
    'custom-scope-enum': [2, 'always'], // Включаем наше правило
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
        'custom-scope-enum': ({ scope }) => {
          const scopes = [
            'chore',
            'components',
            'helpers',
            'core',
            'icons',
            'addons',
            'icons-loader',
            'flag-icons',
            'doc',
            'charts',
            'i18n',
            'nxmv',
            'nx-plugin',
            'schematics',
            'theme',
          ];
          const scopePattern = new RegExp(`^(${scopes.join('|')})(/[a-zA-Z0-9-]+)?$`);
          return [
            scopePattern.test(scope),
            `scope must be one of ${scopes.join(', ')} or a subscope like component/input-number`,
          ];
        },
      },
    },
  ],
};
