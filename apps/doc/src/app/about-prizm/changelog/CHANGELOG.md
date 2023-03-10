# Changelog

All notable changes to this project will be documented in this file.

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
- fix(doc/confirm-dialog): PrizmConfirmDialog, horizontal view: ???????????? ???????? ???? ????????????
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

- docs(components/table): ???????????? ?? ?????????????? c ?????????????? metakeys + fix
- feat(components/file-upload): new file upload component
- feat(components/navigation): new navigation component
- feat(doc): new doc design
- feat(components/cron): new cron component

### BUG FIXES

- fix(components/tabs) Tabs. ?????????????????????? ?????????? ?????? icon tabs
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
- feat(components/table): ???????????????? ?????????????????? ????????????
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
- fix(components/input-mask): ?????????????????? NgxMaskModule.
- fix(components/select): fix size error logging

## [1.0.0-beta.8](https://github.com/zyfra/Prizm) (03-10-2022)

### BUG FIXES

- fix(components/nav-menu): ???????? ???????? ?? ???????????????????????? ????????????, ???????? ???????? ?? ????????????????.
- fix(components/input-mask): ?????????????????? NgxMaskModule.
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
> ?????? **MR:** Konstantin Skok, Khachatur Matevosyan, Zurab Magomadov

## [1.0.0-beta.7](https://github.com/zyfra/Prizm) (16-09-2022)

### BUG FIXES

- fix(components): add testId
- fix(components/textarea) Textarea fix

### Features

- feat(components/zoom-control): ???????????????? ?????????????? zoom-control
- feat(components): shadow encapsulation for primeng wrappers

> **Special thanks**
>
> ?????? **MR:** Rustam Imaikin, Konstantin Skok, Khachatur Matevosyan, Zurab Magomadov

## [1.0.0-beta.6](https://github.com/zyfra/Prizm) (13-09-2022)

### BUG FIXES

- fix(components/icon): rebuild up poi-2 icon
- fix(components/panel, components/tabs, components/side-menu): ?????????????????????????? ?????????? ??????????????????

### Features

- feat: added new css global variables
- feat(components/paginator): ???????????????????? ?????????????????? ?? ???????????????????????? ?? ????????????????
- feat(next/dropdown): new close method, fix version in doc, and small fixes
- feat(components): shadow encapsulation for primeng wrappers
- docs(components/dropdown): dropdown hierarchy example

> **Special thanks**
>
> ?????? **MR:** Rustam Imaikin, Konstantin Skok, Khachatur Matevosyan, Zurab Magomadov

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
> ?????? **MR:** Andrey Smirnov
