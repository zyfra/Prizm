# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0-beta.22](https://github.com/zyfra/Prizm) (27-01-2023)

### Features

- feat(component/paginator) add new output paginatorChange
- feat(component/paginator): add showMoreDisabled input
- feat(doc/polymorph): add documentation with examples
- feat(doc/split-button): add example with dropdown

### BUG FIXES

- fix(component/paginator) fix pageChange output logic
- fix(component/paginator): corrected multiple output trigger
- fix(components/tag): fix tag select on disabled

## [1.0.0-beta.21](https://github.com/zyfra/Prizm) (23-01-2023)

### Features

- fix(doc/paginator) remove not working params in api page
- feat(doc/paginator) add new params
  feat(components/tabs): add show menu control
- feat(components/dialog/sidebar): add icons to sidebar buttons
- feat(components/tabs): add canShowMenu input
- feat(components/table): Simplify usage in a minimal amount

### BUG FIXES

- fix(components/date-relative): fix change disabled via FormControl
- fix(component/date): open time picker when open date picker
- fix(doc/tabs): second tab content in api page
- fix(doc/confirm-dialog): PrizmConfirmDialog, horizontal view: пример кода не верный
- fix(components/table): fix tests
- fix(components/splitter): resize events. bug fix with classes
- fix(components/stepper): fix a bug with the order of steps

### BREAKING CHANGES

- ref(components/paginator): change initialValue > page
- ref(components/paginator): change tabChange > pageChange
- ref(components/checkbox): remove required

## [1.0.0-beta.20](https://github.com/zyfra/Prizm) (11-01-2022)

### Features

- doc(update): update doc for many components and small fixes
- docs (components/table): update table api page
- docs (components/table): update widget api page
- feat(charts): update doc pages and api for components
- feat(doc): new error detector in api page
- feat(doc): sorting params in api page
- feat(components/cron): adaptive width
- feat(components/cron): new autoSubmit param
- feat(components/cron): new hidePeriod param
- feat(components/panel): add css variable for change radius
- feat(doc/getting-started): update page
- feat(theme/switcher): change only in local zone
- feat(helpers/let): add context service
- feat(charts/area): add component area
- feat(charts/bar): add component bar
- feat(charts/gauge): add component gauge
- feat(charts/gauge): add component gauge
- feat(charts/column): add component column
- feat(charts/line): add component line
- feat(charts/pie): add component pie
- feat(charts/radar): add component radar
- feat(charts/radial-bar): add component radio bar
- feat(charts/scatter): add component scatter
- feat(charts/treemap): add component treemap

### BUG FIXES

- fix(components/date): data relative component
- fix(components/cron): day count and bug with submit logic
- fix(components/date): display in dark mode
- fix(theme/switcher): error in global change

### BREAKING CHANGES

- feat(theme): themes moved from the package @prizm-ui/components to @prizm-ui/theme library (PLEASE UPDATE as in doc documentation)
- feat(components/tabs): change api (PLEASE UPDATE as in doc documentation)

## [1.0.0-beta.19](https://github.com/zyfra/Prizm) (27-12-2022)

### Features

- docs(components/table): Пример с выбором c помощью metakeys + fix
- feat(components/file-upload): new file upload component
- feat(components/navigation): new navigation component
- feat(doc): new doc design
- feat(components/cron): new cron component

### BUG FIXES

- fix(components/tabs) Tabs. Отсутствует ховер для icon tabs
- fix(doc): link to figma in menu
- fix(doc): sections and pages; colors in license and colors; fix size in typography and grid
- fix(components/slider): cnob active color
- fix(components/\*): small fixes

## [1.0.0-beta.18](https://github.com/zyfra/Prizm) (9-12-2022)

### BUG FIXES

- fix(icons/base): Fix publish error in base icon set
- fix(icons/flags): Fix publish error in flag icon set

## [1.0.0-beta.16](https://github.com/zyfra/Prizm) (6-12-2022)

### Features

- feat(icons): Added new library with svg and fonts icons
- feat(flag-icons): Added new library with flags svg icons
- feat(components/splitter): Added new component splitter
- feat(components/input): Added the ability to display error parameters in PrizmInputValidationTexts

### BUG FIXES

- fix(components/table): sort
- fix(docs): fixes install info

## [1.0.0-beta.15](https://github.com/zyfra/Prizm) (5-12-2022)

### BUG FIXES

- fix: peer dependencies

## [1.0.0-beta.14](https://github.com/zyfra/Prizm) (5-12-2022)

### Features

- feat(components/table): Added new color themes for Table
- feat(components/theme): Added new color themes

## [1.0.0-beta.13](https://github.com/zyfra/Prizm) (28-11-2022)

### Features

- feat(core): update doc

## [1.0.0-beta.12](https://github.com/zyfra/Prizm) (28-11-2022)

### BUG FIXES

- fix(core): add core to publish

## [1.0.0-beta.11](https://github.com/zyfra/Prizm) (21-11-2022)

### Features

- feat(components/stepper): IDPPRIZM-152 Stepper
- feat(components/table): Добавлен компонент таблиц
- feat(components/charts): Charts stage 1

### BREAKING CHANGES

- feat(components): rename selectors, prefix for all project ( pzm, zui to prizm ) 1
- feat(components): rename selectors, prefix for all project ( pzm, zui to prizm ) 2
- packages names to @prizm-ui/\*
- change git repo

## [1.0.0-beta.10](https://github.com/zyfra/Prizm) (18-10-2022)

### Features

- feat(next/icon): add poi svg icons
- feat(next/multi-select): add single line chips multi-select
- feat(next/chips): add single line for chips

### BUG FIXES

- feat(next/chips): fix select border

## [1.0.0-beta.9](https://github.com/zyfra/Prizm) (14-10-2022)

### Features

- fix(components/calendar): add day with status
- fix(components/multi-select): add select-all button
- docs: add forceClear option to doc

### BUG FIXES

- fix(components/checkbox): fix checkbox, input-search, input-chips
- fix(components/select): fix less output
- fix(components/input-mask): Настройки NgxMaskModule.
- fix(components/select): fix size error logging

## [1.0.0-beta.8](https://github.com/zyfra/Prizm) (03-10-2022)

### BUG FIXES

- fix(components/nav-menu): Фикс бага с отображением иконок, фикс бага с границей.
- fix(components/input-mask): Настройки NgxMaskModule.
- fix(components/select): show initial value from control
- docs: fix less output

### Features

- feat(doc): add webpack build
- feat(components/tree): increase font-weigt
- feat(components/widget): change header, body background color
- feat(components/hint): add prizmHintCanShow
- feat(components): add themes mixins
- feat(components/select): add isChipsDeletable, forceClear for multi-select
- feat(components/multi-select): add forceClear for select
- docs(components/carousel): Example of select year and month.

> **Special thanks**
>
> ✏️ **MR:** Konstantin Skok, Khachatur Matevosyan, Zurab Magomadov

## [1.0.0-beta.7](https://github.com/zyfra/Prizm) (16-09-2022)

### BUG FIXES

- fix(components): add testId
- fix(components/textarea) Textarea fix

### Features

- feat(components/zoom-control): Добавлен паттерн zoom-control
- feat(components): shadow encapsulation for primeng wrappers

> **Special thanks**
>
> ✏️ **MR:** Rustam Imaikin, Konstantin Skok, Khachatur Matevosyan, Zurab Magomadov

## [1.0.0-beta.6](https://github.com/zyfra/Prizm) (13-09-2022)

### BUG FIXES

- fix(components/icon): rebuild up poi-2 icon
- fix(components/panel, components/tabs, components/side-menu): Косметические фиксы компонент

### Features

- feat: added new css global variables
- feat(components/paginator): Компонента приведена в соответствие с дизайном
- feat(next/dropdown): new close method, fix version in doc, and small fixes
- feat(components): shadow encapsulation for primeng wrappers
- docs(components/dropdown): dropdown hierarchy example

> **Special thanks**
>
> ✏️ **MR:** Rustam Imaikin, Konstantin Skok, Khachatur Matevosyan, Zurab Magomadov

## [1.0.0-beta.5](https://github.com/zyfra/Prizm) (08-09-2022)

### BUG FIXES

- feat: new global variables

### Features

- fix(components/icon): rebuild up poi-2 icon

## [1.0.0-beta.4](https://github.com/zyfra/Prizm) (06-09-2022)

### Features

- feat(components/tab): add closable ability for each tab

> **Special thanks**
>
> ✏️ **MR:** Andrey Smirnov
