const rootMain = require('../../../.storybook/main');
const path = require('path');

module.exports = {
  ...rootMain,

  core: { ...rootMain.core, builder: 'webpack5' },

  stories: [...rootMain.stories, '../src/lib/**/*.stories.mdx', '../src/lib/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [...rootMain.addons],
  webpackFinal: async (config, { configType }) => {
    // apply any global webpack configs that might have been specified in .storybook/main.js
    if (rootMain.webpackFinal) {
      config = await rootMain.webpackFinal(config, { configType });
    }

    if (configType === 'DEVELOPMENT') {
      // подключаю style map. другие способы не работают (через angular.json)
      const angularJson = require('../../../angular.json');
      const rootPath = process.cwd();
      const angularJsonStyles = angularJson.projects.sdk.architect.build.options.styles
        .filter(n => typeof n === 'string')
        .map(style => path.resolve(rootPath, style));

      // Adding default theme
      angularJsonStyles.push(path.resolve(rootPath,'libs/components/src/styles/theme/default.less'));

      const includePath = [...angularJsonStyles, path.resolve(rootPath, 'libs/components')];
      const ruleChanger = rule => {
        delete rule.rules;
        rule.include = includePath;
      };
      config.module.rules.forEach(rule => {
        const pattern = rule.test.toString();
        if (pattern === '/\\.(?:less)$/i') {
          ruleChanger(rule);
          rule.use = ['style-loader', 'css-loader', 'less-loader'];
        } else if (pattern === '/\\.(?:css)$/i') {
          // использовать этот способ только если повысим веса нашим стилям всех компонентов
          // ruleChanger(rule)
          // rule.use = ['style-loader', 'css-loader'];
          // это способ вставляет праймовые стили в код выше и у них меньший приоритет, если вес совпадает
          rule.rules[0].oneOf.forEach(subRule => {
            subRule.use.forEach(u => {
              if (typeof u === 'object' && u.options?.sourceMap === false) {
                u.options.sourceMap = true;
              }
            });
          });
        }
      });
    }

    return config;
  },
};
