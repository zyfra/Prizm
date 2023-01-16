# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0-beta.20](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk) (11-01-2022)

### Features
- doc(update): update doc for many components and small fixes [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/417)
- docs (components/table): update table api page [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/418)
- docs (components/table): update widget api page [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/419)
- feat(charts): update doc pages and api for components [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/420)
- feat(doc): new error detector in api page [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/420)
- feat(doc): sorting params in api page [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/420)
- feat(components/cron): adaptive width [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/423)
- feat(components/cron): new autoSubmit param [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/423)
- feat(components/cron): new hidePeriod param [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/423)
- feat(components/panel): add css variable for change radius  [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/423)
- feat(doc/getting-started): update page [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/423)
- feat(theme/switcher): change only in local zone [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/423)
- feat(helpers/let): add context service [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/423)

### BUG FIXES
- fix(components/date): data relative component [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/215)
- fix(components/cron): day count and bug with submit logic [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/423)
- fix(components/date): display in dark mode [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/423)
- fix(theme/switcher): error in global change [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/423)

### BREAKING CHANGES
- feat(theme): themes removed from the package @prizm-ui/components to @prizm-ui/theme library (PLEASE UPDATE as in doc documentation) [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/423)
- feat(components/tabs): change api (PLEASE UPDATE as in doc documentation) [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/423)

## [1.0.0-beta.19](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk) (27-12-2022)

### Features
- docs(components/table): Пример с выбором c помощью metakeys + fix [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/411)
- feat(components/file-upload): new file upload component [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/407)
- feat(components/navigation): new navigation component
- feat(doc): new doc design [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/402/edit)
- feat(components/cron): new cron component [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/415)

### BUG FIXES

- fix(components/tabs) Tabs. Отсутствует ховер для icon tabs [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/414)
- fix(doc):  link to figma in menu [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/412)
- fix(doc): sections and pages; colors in license and colors; fix size in typography and grid (https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/410/edit)
- fix(components/slider): cnob active color [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/406)
- fix(components/*): small fixes [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/415)

## [1.0.0-beta.18](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk) (9-12-2022)

### BUG FIXES

- fix(icons/base): Fix publish error in base icon set [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/401)
- fix(icons/flags): Fix publish error in flag icon set [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/401)

## [1.0.0-beta.16](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk) (6-12-2022)

### Features

- feat(icons): Added new library with svg and fonts icons [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/395)
- feat(flag-icons): Added new library with flags svg icons [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/395)
- feat(components/splitter): Added new component splitter [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/381)
- feat(components/input): Added the ability to display error parameters in PrizmInputValidationTexts [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/398)

### BUG FIXES

- fix(components/table): sort [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/395)
- fix(docs): fixes install info [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/397)

## [1.0.0-beta.15](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk) (5-12-2022)

### BUG FIXES

- fix: peer dependencies [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/396)

## [1.0.0-beta.14](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk) (5-12-2022)

### Features

- feat(components/table): Added new color themes for Table [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/383)
- feat(components/theme): Added new color themes [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/388)

## [1.0.0-beta.13](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk) (28-11-2022)

### Features

- feat(core): update doc [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/387)

## [1.0.0-beta.12](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk) (28-11-2022)

### BUG FIXES

- fix(core): add core to publish [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/386)

## [1.0.0-beta.11](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk) (21-11-2022)

### Features

- feat(components/stepper): IDPPRIZM-152 Stepper [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/355)
- feat(components/table): Добавлен компонент таблиц [MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/376)
- feat(components/charts): Charts stage 1 [MR]([MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/375)

### BREAKING CHANGES

- feat(components): rename selectors, prefix for all project ( pzm, zui to prizm ) 1 [MR]([MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/375)
- feat(components): rename selectors, prefix for all project ( pzm, zui to prizm ) 2 [MR]([MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/358)
- packages names to @prizm-ui/\* [MR]([MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/375)
- change git repo [MR]([MR](https://gitlab.idp.yc.ziiot.ru/public-group/zui-sdk/-/merge_requests/375)

## [1.0.0-beta.10](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk) (18-10-2022)

### Features

- feat(next/icon): add poi svg icons [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/333)
- feat(next/multi-select): add single line chips multi-select [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/353)
- feat(next/chips): add single line for chips [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/353)

### BUG FIXES

- feat(next/chips): fix select border [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/353)

## [1.0.0-beta.9](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk) (14-10-2022)

### Features

- fix(components/calendar): add day with status [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/346)
- fix(components/multi-select): add select-all button [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/346)
- docs: add forceClear option to doc [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/346)

### BUG FIXES

- fix(components/checkbox): fix checkbox, input-search, input-chips
  [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/348)
- fix(components/select): fix less output [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/milestones/29#tab-issues)
- fix(components/input-mask): Настройки NgxMaskModule. [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/341)
- fix(components/select): fix size error logging [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/346)

## [1.0.0-beta.8](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk) (03-10-2022)

### BUG FIXES

- fix(components/nav-menu): Фикс бага с отображением иконок, фикс бага с границей.
  [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/343)
- fix(components/input-mask): Настройки NgxMaskModule. [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/341)
- fix(components/select): show initial value from control [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/346)
- docs: fix less output [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/342)

### Features

- feat(doc): add webpack build [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/342)
- feat(components/tree): increase font-weigt [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/342)
- feat(components/widget): change header, body background color [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/342)
- feat(components/hint): add prizmHintCanShow [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/342)
- feat(components): add themes mixins [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/342)
- feat(components/select): add isChipsDeletable, forceClear for multi-select [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/346)
- feat(components/multi-select): add forceClear for select [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/346)
- docs(components/carousel): Example of select year and month. [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/339)

> **Special thanks**
>
> ✏️ **MR:** Konstantin Skok, Khachatur Matevosyan, Zurab Magomadov

## [1.0.0-beta.7](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk) (16-09-2022)

### BUG FIXES

- fix(components): add testId [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/336)
- fix(components/textarea) Textarea fix [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/329)

### Features

- feat(components/zoom-control): Добавлен паттерн zoom-control [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/328)
- feat(components): shadow encapsulation for primeng wrappers [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/324)

> **Special thanks**
>
> ✏️ **MR:** Rustam Imaikin, Konstantin Skok, Khachatur Matevosyan, Zurab Magomadov

## [1.0.0-beta.6](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk) (13-09-2022)

### BUG FIXES

- fix(components/icon): rebuild up poi-2 icon [323](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/323)
- fix(components/panel, components/tabs, components/side-menu): Косметические фиксы компонент [326](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/326)

### Features

- feat: added new css global variables [320](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/320)
- feat(components/paginator): Компонента приведена в соответствие с дизайном [325](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/325)
- feat(next/dropdown): new close method, fix version in doc, and small fixes [327](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/327)
- feat(components): shadow encapsulation for primeng wrappers [324](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/324)
- docs(components/dropdown): dropdown hierarchy example [321](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/321)

> **Special thanks**
>
> ✏️ **MR:** Rustam Imaikin, Konstantin Skok, Khachatur Matevosyan, Zurab Magomadov

## [1.0.0-beta.5](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk) (08-09-2022)

### BUG FIXES

- feat: new global variables [320](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/320)

### Features

- fix(components/icon): rebuild up poi-2 icon [323](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/323)

## [1.0.0-beta.4](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk) (06-09-2022)

### Features

- feat(components/tab): add closable ability for each tab [MR](https://gitdp.zyfra.com/digital-plant/ziiot/ui-platform/frontend/zui-sdk/-/merge_requests/302)

> **Special thanks**
>
> ✏️ **MR:** Andrey Smirnov
