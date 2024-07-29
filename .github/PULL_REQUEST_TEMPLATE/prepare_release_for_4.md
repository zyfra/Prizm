## [NEW_VERSION](https://github.com/zyfra/Prizm) (CURRENT_DATE)

### Features

- List of new features, example:
- feat(component/cron): added custom title #1431

### Bug Fixes

- List of new fixes, example:
- fix(components/input-number) remove default title for input number #1599

### Refactor

- List of new refactors, example:
- refactor(charts): replace chart base options from theming to separate object #1000

### Breacking Changes

- List of bc, example:
- bc(charts): removed function #1000

## Следует обратить внимание на ревью

### Checklist:

- [ ] Изменить версии в соответствующем массиве на ветке V3
  - apps/doc/src/app/version-manager/versions.constants.ts
- [ ] Замените NEW_VERSION на новую версию в этом PR
- [ ] Замените CURRENT_DATE на текущую дату в этом PR
- [ ] Добавить в каждый тип ваши изменения в этом PR
- [ ] Удалите не нужные группы изменений для этого PR (Features, Bug Fixes, Breacking Changes, Refactor)
- [ ] Добавить изменения в changelog о новой версии
- [ ] Изменить версии в CI для деплоя (пока не автоматизировали)
  - [ ] .github/workflows/beta-publish-ng17.yml
  - [ ] .github/workflows/main-publish-ng17.yml
  - [ ] .github/workflows/pre-release-publish-ng17.yml
- [ ] Изменить версии в доке на новую
  - [ ] apps/doc/src/app/version-manager/current.const.ts
- [ ] Изменить версии в соответствующем массиве
  - apps/doc/src/app/version-manager/versions.constants.ts
- [ ] Изменить версию в root package файле
  - [ ] package.json
- [ ] Изменить версию package файлов в каждой библиотеке (на данный момент это 13 библиотек)
  - [ ] libs/ast/package.json
  - [ ] libs/charts/base/package.json
  - [ ] libs/components/package.json
  - [ ] libs/core/package.json
  - [ ] libs/helpers/package.json
  - [ ] libs/i18n/package.json
  - [ ] libs/icons/base/package.json
  - [ ] libs/icons/flags/package.json
  - [ ] libs/icons/loader/package.json
  - [ ] libs/nxmv/package.json
  - [ ] libs/plugin/package.json
  - [ ] libs/schematics/package.json
  - [ ] libs/theme/package.json
- [ ] Составить readMe файл с описанием изменений на русском
