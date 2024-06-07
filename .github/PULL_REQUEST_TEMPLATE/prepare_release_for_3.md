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

- [ ] Изменить версии в соответствующем массиве на ветке MAIN
  - apps/doc/src/app/version-manager/versions.constants.ts
- [ ] Замените NEW_VERSION на новую версию в этом PR
- [ ] Замените CURRENT_DATE на текущую дату в этом PR
- [ ] Добавить в каждый тип ваши изменения в этом PR
- [ ] Удалите не нужные группы изменений для этого PR (Features, Bug Fixes, Breacking Changes, Refactor)
- [ ] Добавить изменения в changelog о новой версии
- [ ] Изменить версии в CI для деплоя (пока не автоматизировали)
  - [ ] .github/workflows/beta-publish-ng14.yml
  - [ ] .github/workflows/main-publish-ng14.yml
  - [ ] .github/workflows/pre-release-publish-ng14.yml
  - [ ] .github/workflows/beta-publish-ng15.yml
  - [ ] .github/workflows/main-publish-ng15.yml
  - [ ] .github/workflows/pre-release-publish-ng15.yml
  - [ ] .github/workflows/beta-publish-ng16.yml
  - [ ] .github/workflows/main-publish-ng16.yml
  - [ ] .github/workflows/pre-release-publish-ng16.yml
- [ ] Изменить версии в доке на новую
  - [ ] apps/doc/src/app/version-manager/current.const.ts.ng14
  - [ ] apps/doc/src/app/version-manager/current.const.ts.ng15
  - [ ] apps/doc/src/app/version-manager/current.const.ts.ng16
- [ ] Изменить версии в соответствующем массиве
  - apps/doc/src/app/version-manager/versions.constants.ts
- [ ] Изменить версию в root package файле
  - [ ] package.json.ng14
  - [ ] package.json.ng15
  - [ ] package.json.ng16
- [ ] Изменить версию package файлов в каждой библиотеке (в версиях 3x и ниже это 12 библиотек)
  - [ ] libs/ast/package.json.ng14
  - [ ] libs/ast/package.json.ng15
  - [ ] libs/ast/package.json.ng16
  - [ ] libs/charts/base/package.json.ng14
  - [ ] libs/charts/base/package.json.ng15
  - [ ] libs/charts/base/package.json.ng16
  - [ ] libs/components/package.json.ng14
  - [ ] libs/components/package.json.ng15
  - [ ] libs/components/package.json.ng16
  - [ ] libs/core/package.json.ng14
  - [ ] libs/core/package.json.ng15
  - [ ] libs/core/package.json.ng16
  - [ ] libs/helpers/package.json.ng14
  - [ ] libs/helpers/package.json.ng15
  - [ ] libs/helpers/package.json.ng16
  - [ ] libs/i18n/package.json.ng14
  - [ ] libs/i18n/package.json.ng15
  - [ ] libs/i18n/package.json.ng16
  - [ ] libs/icons/base/package.json.ng14
  - [ ] libs/icons/base/package.json.ng15
  - [ ] libs/icons/base/package.json.ng16
  - [ ] libs/icons/flags/package.json.ng14
  - [ ] libs/icons/flags/package.json.ng15
  - [ ] libs/icons/flags/package.json.ng16
  - [ ] libs/nxmv/package.json.ng14
  - [ ] libs/nxmv/package.json.ng15
  - [ ] libs/nxmv/package.json.ng16
  - [ ] libs/plugin/package.json.ng14
  - [ ] libs/plugin/package.json.ng15
  - [ ] libs/plugin/package.json.ng16
  - [ ] libs/schematics/package.json.ng14
  - [ ] libs/schematics/package.json.ng15
  - [ ] libs/schematics/package.json.ng16
  - [ ] libs/theme/package.json.ng14
  - [ ] libs/theme/package.json.ng15
  - [ ] libs/theme/package.json.ng16
- [ ] Составить readMe файл с описанием изменений на русском
