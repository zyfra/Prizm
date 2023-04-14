# Changelog

All notable changes to this project will be documented in this file.

## [1.0.0-beta.29](https://github.com/zyfra/Prizm) (07-04-2023)

### Features

- feat(ast): new library for help to write you migrator and code updater
- feat(cb3-to-prizm): new migrator for help to migrate to prizm from pervious component base 3
- feat(ci): add ability for work with forked pull requests
- feat(doc/dialog): add example with close in template buttons [123](https://github.com/zyfra/Prizm/issues/123)
- feat(component/table): added example with new `PrizmTableDataSource`  [133](https://github.com/zyfra/Prizm/issues/133)
- feat(components/table): added  `PrizmTableDataSource` class [133](https://github.com/zyfra/Prizm/issues/133)
- feat(component/table): added example with new `PrizmTableDataSource`  [133](https://github.com/zyfra/Prizm/issues/133)

### BUG FIXES

- fix(components/input-date-time): fix the time disappears when you select the same date again [125](https://github.com/zyfra/Prizm/issues/125)
- fix(components/input-date-time): sometimes after choose some time from preset we get wrong times
- fix(components/select): mark as dirty if it has initial value [132](https://github.com/zyfra/Prizm/issues/132)
- fix(components/multi-select): validation status in multiSelect is not reset [129](https://github.com/zyfra/Prizm/issues/129)

## [1.0.0-beta.28](https://github.com/zyfra/Prizm) (31-03-2023)

### Features

- feat(doc/input-date-range): add example with presets list 🎨
- feat(doc/calendar-range): add example with presets list 🎨
- feat(doc/table): add example with stick to left, to right, to bottom side 🎨 [104](https://github.com/zyfra/Prizm/issues/104)
- feat(doc/sticky): add doc for new directive prizmStick 🎨 [104](https://github.com/zyfra/Prizm/issues/104)
- feat(components/sticky): add new directive prizmStick for sticky to any side with dynamic calculations 🎨 [104](https://github.com/zyfra/Prizm/issues/104)
- feat(components/switcher): add disabled and add support template icon [117](https://github.com/zyfra/Prizm/issues/117) 🎨
- feat(components/accordion): show border on hover [100](https://github.com/zyfra/Prizm/issues/100)

### BUG FIXES

- fix(components/table): pass correct context to row [110](https://github.com/zyfra/Prizm/issues/110)
- fix(components/input-date-period): fix export [107](https://github.com/zyfra/Prizm/issues/107)
- fix(components/dialog): fix error with more than context size [108](https://github.com/zyfra/Prizm/issues/108)
- fix(components/confirm-dialog): fix error with more than context size [108](https://github.com/zyfra/Prizm/issues/108)
- fix(components/sidebar): error with double height set [101](https://github.com/zyfra/Prizm/issues/101)
- feat(components/select): null content does not show [116](https://github.com/zyfra/Prizm/issues/116)
- fix(components/toast): toasts overlap each other [118](https://github.com/zyfra/Prizm/issues/118)
- fix(components/sidebar): can not pass footer template [94](https://github.com/zyfra/Prizm/issues/94)
- fix(components/select): fix full width [120](https://github.com/zyfra/Prizm/issues/120)
- fix(components/select): validator required does not work [119](https://github.com/zyfra/Prizm/issues/119)
- fix(components/accordion): problem with nested accordion [96](https://github.com/zyfra/Prizm/issues/96)
- fix(components/accordion): fix bug with big title in hint [99](https://github.com/zyfra/Prizm/issues/99)
- fix(components/input-text): fix bug with error on clear [92](https://github.com/zyfra/Prizm/issues/92)

## [1.0.0-beta.27](https://github.com/zyfra/Prizm) (24-03-2023)

### Features

- feat(doc/auto-emit): add new page with auto-emit to tools
- feat(doc/observable): add new page with observable to tools
- feat(core/observable): add symbol support and property attributes to prizmObservable decorator [81](https://github.com/zyfra/Prizm/issues/81)
- feat(core/auto-emit): add symbol support and set dynamic values to prizmAutoEmit decorator
- feat(theme): update theme v2, add new palete and value for light and dark themes
- feat(doc/input): add input-layout to api page (components/input)
- feat(components/input-date-time): add forceClear control input
- feat(components/input-date-time-range): add forceClear control input [76](https://github.com/zyfra/Prizm/issues/76)
- feat(components/input-time): add forceClear control input
- feat(components/input-date): add forceClear control input
- feat(components/input-month): add forceClear control input
- feat(components/input-month-range): add forceClear control input
- feat(components/input-date-range): add forceClear control input
- feat(components/input-date-relative): add forceClear control input
- feat(components/sidebar): add dismissible option to close on outside click [98](https://github.com/zyfra/Prizm/issues/98)
- feat(helpers/to-observable): new to-observable pipe
- feat(doc/to-observable): new page with to-observable examples
- feat(i18n): new i18n to library
- feat(doc/internalization): new page with info how to work with i18n
- feat(components/file-upload): support i18n to file-upload component (79)[https://github.com/zyfra/Prizm/issues/79]

### BUG FIXES

- fix(doc): set title on change page [72](https://github.com/zyfra/Prizm/issues/72)
- fix(component/select): emit val change event with same value [91](https://github.com/zyfra/Prizm/issues/91)
- fix(components/select): update value on emitEvent false [90](https://github.com/zyfra/Prizm/issues/90) [36](https://github.com/zyfra/Prizm/issues/36)
- fix(components/sidebar): fix scrollbar overflow [97](https://github.com/zyfra/Prizm/issues/97)
- fix(components/input-date-time): fix time format error [66](https://github.com/zyfra/Prizm/issues/66)
- fix(components/paginator): fix disabled error [67](https://github.com/zyfra/Prizm/issues/67)
- fix(components/input): fix input clear behavior [92](https://github.com/zyfra/Prizm/issues/92)
- fix(doc): fixed paddings and margins for showcase inputText

## [1.0.0-beta.26](https://github.com/zyfra/Prizm) (17-03-2023)

### Features

- feat(components/table): add tree support for table [78](https://github.com/zyfra/Prizm/issues/78)
- feat(components/table): add empty table directive to table [71](https://github.com/zyfra/Prizm/issues/71)
- feat(components/tree-button): add tree button component
- feat(doc/table): add tree example
- feat(doc/table): add empty table example
- feat(doc): add new pages and small fixes

## [1.0.0-beta.25](https://github.com/zyfra/Prizm) (10-03-2023)

### BUG FIXES

- fix(components/tooltip): recalc on left and right position [#34](https://github.com/zyfra/Prizm/issues/34)
- chore: correct old helper issues templates
- fix(components/overlay): fix case with not correct display overlay [#4](https://github.com/zyfra/Prizm/issues/4)
- fix(components/confirm): fix console errors [#31](https://github.com/zyfra/Prizm/issues/31)
- feat(components/dialogs): invert theme inside dialog and confirm dialog [#74](https://github.com/zyfra/Prizm/issues/74)

### Features

- feat(theme): new inverted theme directive
- feat(doc/theme): examples how to use theme and inverted theme directive

## [1.0.0-beta.24](https://github.com/zyfra/Prizm) (03-03-2023)

### BUG FIXES

- fix(components/icon-button): incorrect calculation of IconButton height in DropdownHost
- fix(doc/dropdown-host): the nested dropdown did not open
- fix(components/input-icon-button): changing the default type of input-icon-button to button
- fix(components/table): fix font-weight for table header
- fix(components/input-number): add default value type number
- fix(components/pagination): changing totalRecords does not redraw buttons with page numbers

### Features

- feat(doc): add sla info to contact page

## [1.0.0-beta.23](https://github.com/zyfra/Prizm) (16-02-2023)

### Features

Migrate PrizmThemeModule > prizm/theme

- feat(components/prizmObservable): new decorator prizmObservable
- feat(components/prizmAutoEmit): new decorator prizmAutoEmit
- feat(component/navigation): now theme does not switch when theme was changed'
- feat(components/stop-propagation): new directive for stop propagation
- feat(doc): change vcs logo to github
- feat(components/table): multiple sorting
- feat(components/table): add server sorting
- feat(doc/table): add examples with new sorting
- chore: add pre commit checks branch name and commit message
- chore: add pre push check ci
- feat(doc): add a page with SLA
- feat(components/paginator): add moreButtonLabel input
- feat(doc/input): input as carousel example

### BUG FIXES

- fix(components): remove primeng
- fix(components/splitter): nested style bug
- fix(theme): init variable in root
- fix(doc/theme): change theme on local change
- fix(doc/tree): change lazy tree source documentation
- fix(doc/shadow): fix console errors
- fix (components/overlay): falling out of the window borders during the
- fix(component/text-arrea,input-chips): fix checking NgControl
- fix(component/overlay): fix disabled/enabled state

### BREAKING CHANGES

- BREAKING CHANGE: Migrate PrizmThemeModule to prizm/theme library
- fix(components/radio)!: remove formControl input
- ref(component/table-old): move to deprecated library
- ref(component/navigation): move to deprecated library

## [1.0.0-beta.2](https://github.com/zyfra/Prizm) (27-01-2023)

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
