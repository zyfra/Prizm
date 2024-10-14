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

- [ ] Изменить версии в соответствующем массиве на ветке V4
  - apps/doc/src/app/version-manager/versions.constants.ts
- [ ] Изменить version на текущий в файле nxmv.json и запустив команду `npx nx generate nx-mv:apply -n v18 --var-version 5.2.0` важно передавать --var-version нужную версию
- [ ] Добавить в каждый тип ваши изменения в этом PR
- [ ] Удалите не нужные группы изменений для этого PR (Features, Bug Fixes, Breacking Changes, Refactor)
- [ ] Добавить изменения в changelog о новой версии
- [ ] Составить readMe файл с описанием изменений на русском
