module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'references-empty': [2, 'never'], // Это правило требует наличия ссылок на issues в коммитах
    'custom-rule-issue-number': [2, 'always'], // Настройка кастомного правила
  },
  plugins: [
    {
      rules: {
        'custom-rule-issue-number': ({ header }) => {
          const pattern = /#\d+/; // Пример паттерна, который ищет # за которым следуют цифры
          return [
            pattern.test(header),
            'commit message must contain an issue number like #123 or #000 if internal',
          ];
        },
      },
    },
  ],
};
