# Changelog

All notable changes to this project will be documented in this file.

## [5.2.0](https://github.com/zyfra/Prizm) (23-10-2024)

### Features

- feat(doc): update information about us #2143
- feat(doc/dropdown-host): updated example select panel added custom vars for overlay #1027 #2135
- feat(components/theme): prefer global theme if did not passed any value #1426
- feat(components/navigation-menu): padding changed from 4px to 8px between text and other el #1633 #2133
- feat(components/tabs): show right button separately #1846 #2132
- feat(components/input-layout-date-time-range): add localization for time label #2128 #2129
- feat(components/droprodown-trigger-click): new directive to trigger dropdown host and fix bug #1850 #2124
- feat(components/prizm-let): prizmLet directive declared deprecated #1880 #2119

### Bug fixes

- fix(components/multi-select): hint did not show after search #1980
- fix(chore): fix version in schematics #1987 #2122
- fix(components/switcher): switcher button markup correction #2032 #2126
- fix(components/input-control): on each update value emits two times #2087 #2089
- fix(components/input-layout): correct icon for danger status #1916 #2054
- fix(components/navigation): register icons for navigation header and example #1836
- fix(components/tabs): correct focus styles for contained tabs #1729
- fix(components/input): padding changed for inner inputs #1763
- fix(components/polymorph): remove type any for polymorph #1530
- fix(components/table): use proxy to update context #1506 #1845

## [5.1.0](https://github.com/zyfra/Prizm) (09-10-2024)

### Features

- feat(components/file-upload): added input: files && added outputs: fileAdded, fileRemoved #1832
- feat(components/file-upload): added custom actions && outputs: actionEvent, afterFilesChange #1832
- feat(components/tree-select): added new component #2069
- feat(components/tree-multi-select): added new component #2069
- feat(components/switcher): extended switcher for pass as projection children #2069
- feat(doc): add link to github issue page
- feat(components/input-select): fixed position of search input for dropdown #1981 Note, there are layout changes: if you overridden the --prizm-select-item-padding variable in the project, there may be a regression.
- feat(components/input-multiselect): fixed position of search input for dropdown #1981 Note, there are layout changes: if you overridden the --prizm-select-item-padding variable in the project, there may be a regression.
- feat(components/checkbox): add box shadow for disabled radio and checkbox #2024
- feat(doc/multiselect): add example for async items in multiselect #1754
- feat(helpers/overflow): new directives host, item to hide overflowed items
- feat(helpers/context): new directives and pipes to pass context and get context
- feat(helpers/resize-observer): new util function to get observable of resize observer
- feat(helpers/map): map with ability to get changes stream
- feat(components/input-date-time): add time restrictions for min max values #1570
- feat(components/input-date-time-range): add time restrictions for min max values #1570
- feat(components/tree): added css variable for tree item height
- feat(components/paginator): add left direction support #1154
- feat(components/input-select): added input to control auto reposition dropdown window #1688
- feat(components/input-multi-select): added input to control auto reposition dropdown window
- feat(charts/area): replace PrizmChartsAriaOptions(deprecated now) by PrizmChartsAreaOptions
- feat(charts): add color input for area, line, column, pie, radar, radial bar, scatter, treemap, waterfall #1816
- feat(doc/charts): for line and column charts added ecamples with user's colors #1817
- feat(doc/icons): example how to use custom icon #1841
- feat(components/paginator): update paginator dictionary #1840 BREAKING CHANGE in dictionary - BREAKING CHANGE in dictionaries, why we do this read here
- feat(doc/slider): add form control for slider #531
- feat(components/file-upload): add hint for browse button when its disable due max files count reached #1769 - BREAKING CHANGE in dictionaries, why we do this read [here](https://github.com/zyfra/Prizm/discussions/1617)
- feat(components/file-upload): add translations for file size unit #1789 - BREAKING CHANGE in dictionaries, why we do this read [here](https://github.com/zyfra/Prizm/discussions/1617)
- feat(chore): update mr checklist template
- feat(components/accordion): border-bottom can be dded to accordion item header #1322
- feat(components/input-dates): added native date transformation for min max properties #1315
- feat(components/input-dates): added date string transformation for min max properties #1573
- feat(components/cron): added native date transformation for min max properties in date inputs #1315
- feat(components/input-layout-date): added new provider for ISO and UTC strings transformer for input layout date #1574
- feat(doc): remove examples for deleted prizm-input-date component
- feat(nx-mv): support up version with templates

### Bug fixes

- fix(doc/version): add v5 version link to v4 version manager #2035
- fix(component/chips): chips overflows the border #1975
- fix(components/table): table sort cursor correction #1986
- fix(components/table): sorter count div should not reserve space when empty #2021
- fix(components/tabs): fix Cannot read properties of undefined (reading 'disconnect') #2013
- fix(components): added icons to peerDependencies #1989
- fix(components/button): correct outline buttons height #1399
- fix(components/navigation-menu): fix navigation item height #1964
- fix(doc): missing fix #1742 info added to 4.3.6 version in changelog
- fix(components/slider): add markForCheck for setinng position from value for form control correct work #531
- fix(components/accordion): accordion item header height should be 48px
- fix(components/tabs): view not updated for activeTabindexChage when tabs overflows #1863
- fix(components/tabs): tabindex should recalculate on close from dropdown #1948
- fix(components/listing-item): disabled items should not fire mouse events #1947

### Refactor

- refactor(components/confirm-popup): refactored directive, replaced old code to host directive

## [5.0.0](https://github.com/zyfra/Prizm) (22-08-2024)

### Features

feat(components): remove deprecated function prizmCreateDateMask BREACKING CHANGE
feat(components): remove deprecated exports #1849
feat(components): remove deprecated exports with spelling mistakes: PrizmSelectValueTransformver, GridItemComponent, GridComponent, IndicatorComponent, SwitcherItemComponent, CallFuncPipe, ToTypePipe #1849 BREACKING CHANGE

### Bug fixes

fix(components/chips): fix spelling error in css variable name for --prizm-chips-item-height BREACKING CHANGE

### [Demo Stand](https://prizm-v5.web.app/)

### Release Notes - Major Update for Prizm Libraries to 5.0.0

To allow for early use and feedback, we have released **5.0.0-rc.1** as a release candidate.

_We are excited to announce a major update for Prizm libraries! This release includes a significant number of changes, including the removal of deprecated modules and functions, as well as the introduction of standalone components and directives._

---

### Angular Support Update

With this major release, we are officially supporting Angular from 18.1.3. This version is the latest stable release at the time of our update and includes valuable new features such as the @let syntax and many more improvements. Please note that we will not be able to use new Angular updates for the next two years, so we encourage you to align your projects with this version to take advantage of its enhancements.

Certainly! Here’s a draft for your release notes in English:

---

### Need migrate from removed component PrizmIconsSvgComponent

**Component Library Update: Removal of PrizmIconsSvgComponent**

We have officially removed the deprecated `PrizmIconsSvgComponent` from our PRIZM component library.

To replace it, please use the current components:

- `PrizmIconsComponent`
- `PrizmIconsFullComponent`

As the icon names have changed, we have created a convenient migration guide, which you can find on our [migration page](https://prizm-v5.web.app/components/icon#migrate).

For an easy transition, utilize our name conversion function: `prizmIconsProvideOldSvgNameTransformer`.

Feel free to adjust any parts as needed!

---

### New Feature: Enhanced File Update Tool @prizm-ui/nx-mv:apply

We are excited to announce the release of an enhanced version of our file update tool, `@prizm-ui/nx-mv:apply`, starting from version 5.0.0.

**Key Updates:**

- **File and Folder Extension Handling:** The tool now supports updating files and folders based on specific extensions defined in the configuration file (`extFile` for files and `extFolder` for folders).
- **Dynamic Content Rendering:** Enhanced support for EJS templating in files, allowing for dynamic content generation based on provided variables and constants.
- **Selective Project Updates:** New configuration options for selectively updating projects or applying changes across all projects in the workspace.
- **Root Directory Changes:** Ability to apply changes to files in the root directory of the project.
- **File Removal:** Support for removing specified files before applying updates.
- **Ignore File Handling:** Improved handling of files and directories to be ignored during the update process via the `nxmv.ignore` file.
- **Command Line Variables:** The tool now accepts variables from the terminal command with the `--var-` prefix, allowing for dynamic usage in templates.

**Example Command:**

```
npx nx generate @prizm-ui/nx-mv:apply -n v18 --var-version 5.0.0
```

For more detailed information and examples, please visit our documentation page at https://prizm-v5.web.app/tools/nxmv.

Upgrade to version 5.0.0 to take advantage of these new features and streamline your project update processes.

---

This summary includes the new feature that accepts variables from the terminal command with the `--var-` prefix for use in templates, along with an example command to demonstrate this capability.

#### Breaking Changes

1. **Module Removals and Standalone Replacements:**

   - **PrizmCounterModule**: Removed. Use standalone.
   - **PrizmButtonModule**: Removed. Use standalone.
   - **PrizmCheckedModule**: Removed. Use standalone `PrizmCheckedDirective`.
   - **PrizmAutoResizeModule**: Removed. Use standalone `PrizmAutoResizeDirective`.
   - **PrizmAutoFocusModule**: Removed. Use standalone `PrizmAutoFocusDirective`.
   - **PrizmStopPropagationModule**: Removed. Use standalone `PrizmStopPropagationDirective`.
   - **PrizmZoneEventModule**: Removed. Use standalone `PrizmZoneEventDirective`.
   - **PrizmCalendarSheetModule**: Removed. Use standalone `PrizmCalendarSheetPipe`.
   - **PrizmMapperModule**: Removed. Use standalone `PrizmMapperPipe`.
   - **PrizmMonthModule**: Removed. Use standalone `PrizmMonthPipe`.
   - **PrizmChartsAreaModule**: Removed. Use standalone `PrizmChartsAreaComponent`.
   - **PrizmChartsBarModule**: Removed. Use standalone `PrizmChartsBarComponent`.
   - **PrizmChartsColumnModule**: Removed. Use standalone `PrizmChartsColumnComponent`.
   - **PrizmChartsGaugeModule**: Removed. Use standalone `PrizmChartsGaugeComponent`.
   - **PrizmChartsLineModule**: Removed. Use standalone `PrizmChartsLineComponent`.
   - **PrizmChartsPieModule**: Removed. Use standalone `PrizmChartsPieComponent`.
   - **PrizmChartsRadarModule**: Removed. Use standalone `PrizmChartsRadarComponent`.
   - **PrizmChartsRadialBarModule**: Removed. Use standalone `PrizmChartsRadialBarComponent`.
   - **PrizmChartsScatterModule**: Removed. Use standalone `PrizmChartsScatterComponent`.
   - **PrizmChartsTreemapModule**: Removed. Use standalone `PrizmChartsTreemapComponent`.
   - **PrizmChartsWaterfallModule**: Removed. Use standalone `PrizmChartsWaterfallComponent`.
   - **PrizmPanelModule**: Removed. Use standalone `PrizmPanelComponent`.
   - **PrizmPrimitiveCalendarRangeModule**: Removed. Use standalone `PrizmPrimitiveCalendarRangeComponent`.
   - **PrizmPrimitiveSpinButtonModule**: Removed. Use standalone `PrizmPrimitiveSpinButtonComponent`.
   - **PrizmInputCorrectorModule**: Removed. Use standalone `PrizmInputCorrectorDirective`.
   - **PrizmInputHintModule**: Removed. Use standalone `PrizmInputHintDirective`.
   - **PrizmInputAllowedSymbolsModule**: Removed. Use standalone `PrizmInputAllowedSymbolsDirective`.
   - **PrizmErrorPageModule**: Removed. Use standalone `PrizmErrorPageComponent`.

2. **Deprecated Modules and Functions Removed:**

   - **Removed deprecated interface `PrizmTabItem`**
   - **Removed deprecated function `prizmCreateDateMask`**
   - **PrizmFlagIconsModule**
   - **PrizmCallFuncModule**
   - **PrizmPluckModule**
   - **PrizmToObservableModule**
   - **PrizmToTypeModule**
   - **PrizmOverlayModule**
   - **PrizmLetModule**
   - **prizmCreateTimeMask**
   - **prizmCreateTimePartMask**
   - **prizmExtractI18n**
   - **PRIZM_DATE_RANGE_FILLER**, **PRIZM_DATE_FILLER** (tokens)
   - **PrizmBaseColor**, **PrizmSupportColor** (enums)
   - **PrizmSkeletonModule**
   - **PrizmWrapperModule**
   - **PrizmScrollIntoViewModule**
   - **PrizmRepeatTimesModule**
   - **PrizmPreventDefaultModule**
   - **PrizmPressedModule**
   - **PrizmOverscrollModule**
   - **PrizmInputNativeValueModule**
   - **PrizmMutationObserveModule**
   - **PrizmLifecycleModule**
   - **PrizmHoveredModule**
   - **PrizmFocusedModule**
   - **PrizmFocusableModule**
   - **PrizmFocusTrapModule**
   - **PrizmDropdownZoneModule**
   - **PrizmDroppableModule**
   - **PrizmElementReadyModule**
   - **PrizmDropdownControllerModule**
   - **PrizmIconsSvgModule**
   - **PrizmShadowModule**
   - **PrizmWidgetModule**
   - **PrizmTreeButtonModule**
   - **PrizmToggleModule**
   - **PrizmSwitcherModule**
   - **PrizmSpinnerModule**
   - **PrizmRadioButtonModule**
   - **PrizmPaginatorModule**
   - **PrizmLoaderModule**
   - **PrizmLinkModule**
   - **PrizmPrimitiveCalendarModule**
   - **PrizmPrimitiveMonthPickerModule**
   - **PrizmPrimitiveYearMonthPaginationModule**
   - **PrizmPrimitiveYearPickerModule**
   - **PrizmCardModule**
   - **PrizmHintModule**
   - **PrizmIconsSvgComponent**
   - **PrizmScrollControlsModule**
   - **PrizmInputIconButtonModule**
   - **PrizmInputDateMultiModule**
   - **PrizmIndicatorModule**
   - **PrizmDialogModule**
   - **PrizmDialogConfirmModule**
   - **PrizmCronHumanReadableModule**
   - **PrizmFileUploadModule**
   - **PrizmCalendarMonthModule**
   - **PrizmCalendarRangeModule**
   - **PrizmSidebarModule**
   - **PrizmColumnSettingsModule**
   - **prizmCreateDateMask**

3. **Renamed Components:**

   - **PanelComponent** renamed to `PrizmPanelComponent`.

4. **Spelling Corrections in Exports:**
   - **ToTypePipe** (use `PrizmToTypePipe`)
   - **CallFuncPipe** (use `PrizmCallFuncPipe`)
   - **PrizmSelectValueTransformver** corrected to `PrizmSelectValueTransformer`.
   - **GridItemComponent** corrected to `PrizmGridItemComponent`.
   - **GridComponent** corrected to `PrizmGridComponent`.
   - **IndicatorComponent** corrected to `PrizmIndicatorComponent`.
   - **SwitcherItemComponent** corrected to `PrizmSwitcherItemComponent`.
   - **fix(components/chips)**: Corrected spelling error in CSS variable name for `--prizm-chips-item-height`.
   - **feat(components)**: update spelling in sidebar and confirm result enums [#1548](https://github.com/zyfra/Prizm/issues/1548) `PrizmConfirmDialogResultDefaultType.confirmed` to `PrizmConfirmDialogResultDefaultType.confirm` and `PrizmSidebarResultDefaultType.confirmed` to `PrizmSidebarResultDefaultType.confirm`
5. **Replace inner prizm-svg-icon to prizm-icons in PrizmNavigationMenuComponent**
   - **Update icon names to prizm-icons or inject our [converter](https://prizm-v5.web.app/components/icon#migrate)**

## [4.3.8](https://github.com/zyfra/Prizm) (12-08-2024)

### Bug fixes

- fix(components/multiselect): usage with transformers should cover case with selectAll option #1919
- fix(components/file-upload): emit events for clear files fix #1848
- fix(components/tabs): template usage for tabs listing #1859
- fix(components/input-month): icon button should be hidden in disabled forms #1728
- fix(components/input-password): icon button should be hidden in disabled forms #1727
- fix(chore): moved required deps to dependencies group #1861
- docs(sidebar): added logger for easy check #1933
- fix(components/style): devided styles to location and declare #1412

### Special Thanks:

- @zerodi
- @ickisIckis
- @ZurabDev
- @alexhawkins94

## [4.3.7](https://github.com/zyfra/Prizm) (25-07-2024)

### Bug fixes

- fix(chore): fixed pipelines for run from release after v4, v3 and fix linters and tests #1900 #1899 #1898
- fix(components/dropdown-host): overlay undefined error occures on destroy #1889
- fix(components/switcher): write value error fixed #1890
- fix(components/hint): fixed a bug with hiding the hint after changing the context or content #1895

## [4.3.6](https://github.com/zyfra/Prizm) (18-07-2024)

### Bug fixes

- fix(components/switcher): fix async support for selected switcher #1476
- fix(doc/chips): error with toched and dirty stated
- fix(components/input-text): error with PrizmInputComponent with NgxMaskDirective behaves incorrectly when changed from empty value
- fix(components/input-select): sync touched state https://github.com/zyfra/Prizm/issues/1694
- fix(components/input-multi-select): sync touched state
- fix(components/hint): a bug where the tooltip would not disappear in some cases
- fix(components/input-number): bug where empty state was not toggled when clearing https://github.com/zyfra/Prizm/issues/1684
- fix(components/input-text): incorrect behavior occurring in PrizmInputComponent when NgxMaskDirective is applied and the value changes from an empty state. https://github.com/zyfra/Prizm/issues/1190
- fix(components/tab): add correct icon name to registry for right arrow #1860
- fix(components/tree): incorrect markup fix #1742 Note: markup is update can affect tree component in project

### Refactor

- refactor(components/input-text): refactored

## [4.3.5](https://github.com/zyfra/Prizm) (08-07-2024)

### Bug fixes

- fix(component/overlay): fix bug with memory leak #1637 #1403
- fix(component/dropdown-host): fix bug with destroy overlay #1637 #1403
- fix(component/hint): fix bug with destroy overlay #1637 #1403

## [4.3.4](https://github.com/zyfra/Prizm) (20-06-2024)

### Bug fixes

- fix(components/input-icon-button): disabled button should not fire events #1823
- fix(components/inputs): fix markup for input icon button #1529, #1672
- fix(doc/textarea): missing border property added for textarea livedemo #1803

## [4.3.3](https://github.com/zyfra/Prizm) (18-06-2024)

### Bug fixes

- fix(icons): incorrect icons source path fixed.

## [4.3.2](https://github.com/zyfra/Prizm) (17-06-2024)

### Bug fixes

- fix(icons): restored icon selection-checkbox-marked-circle #1735
- fix(components/chips): update chips on async changes #1754
- fix(components/input-date-range): default time is set only after focus is removed #1762
- fix(components/input-date-relative): active items not updated when value set by formControl #1685
- fix(components/panel): set default border radius as 0px to panel #1767
- fix(doc): version detection on doc.zyfra or prizm.site #1133
- fix(components/input-date-time): display time 00:00 when a date is selected #1575
- fix(components/hint): safe update overlay only when changes dependencies #1719 #716
- fix(docs/tab): remove $any from basic example #841
- fix(components/input-date-range): added corrector if from is more than to #1628
- fix(components/panel): add prefix prizm to panel component #1665
- fix(components/panel): converted panel component to standalone #1665
- fix(components/file-upload): newly uploaded files should not overwrte existing files array #1662
- fix(components/file-upload): multiply false paramenter works incorrect with uploading by drop #1770
- fix(components/file-upload): file size text small fixes
- fix(doc/tab): improve live demo example for counter options
- fix(components/chips): hint appears in multiselect after deletion #1815
- fix(doc/icons): pagination on search icon #1701
- fix(charts/line): add missing seriesField input to Line chart #1811
- fix(doc/line): smooth line exaple source code link fix

## [4.3.1](https://github.com/zyfra/Prizm) (04-06-2024)

### Bug fixes

- fix(components/input-date-range): default time is set only after focus is removed #1565
- fix(components/paginator): fixed PrizmPaginatorComponent instance was incompatible with PrizmTableDataSource.paginator property
- fix(doc/icons): added info about lazy loader #1692
- fix(components/chips): dots overflows chip list container #1713
- fix(components/input-multiselect): chevron outline removed
- fix(components/input-select): chevron outline removed
- fix(components/dialog): some values from defaultOptions not applied to final config #1602
- fix(components/calendar): change calendar resrtictions ux #1674
- fix(components/input-layout): add margin bottom for label in outer inputs #1659
- fix(components/chips): deletable chips xmark font icon replaced by base icon #1698

### Refactor

- refactor(components/chips): move multiply subscriptions to prizmLet

## [4.3.0](https://github.com/zyfra/Prizm) (22-05-2024)

### Features

- feat(doc): add support for get inputs and outputs from hostDirectives #1710
- feat(helpers): new method prizmInvertObject to invert keys and values for json object
- feat(doc/icons): added info about enum name to copied values #1648
- feat(chore/commitlint): support slash in checker commit messages scope
- feat(doc/paginator): added example with i18n to change texts and tests #1605
- feat(i18n): added access to public api internal dictionaries
- feat(chore): improved checker for commit message with our scopes, types, and issues number #1622
- feat(components/input-layput): add hint for input clear button #1515
- feat(documentation/input-number): update input type for step, min, max values in input number live demo #1500
- feat(documentation/slider): update input type for step, min, max values in slider live demo #1500
- feat(component/navigation-menu): added scroll to navigation menu #1585
- feat(components/table): add table size xl #1651
- feat(components/table): add five lines support for table head
- feat(components/chips): css variable for chips height added #1641
- feat(component/cron): added english localization. #1480, attention, PrizmLanguageCron interface has been changed. Why we do this in ADR: #1617
- feat(components/tooltip): tooltip close on click in showed dropdown #1704
- feat(doc/dialog): add examples how to use custom dialog #1602
- feat(helpers): new func prizmHasChanges to check changes in SimpleChanges
- feat(ci): added skip library if they does not have any test

### Refactor

- refactor(components/tooltip): migrate to composition api instead of extend
- refactor(components/dialog): removed injection from constructor and now defaultOptions is exported #1602

### Bug fixes

- fix(components/hint): switcher extra empty hint shown #1682
- fix(doc/dialog): add dismissable prop to live demo #1551
- fix(icons/icons-full): added skipped provider for PrizmDestroyService #1652
- fix(components/cron): cron selected working with specified tabs #1494
- fix(components/cron): cron months blinks on hover #1642
- fix(components/input-select): incorrect focus work when opened by chevron click
- fix(components/chips): default chips height changed to match the mockups #1641
- fix(components/multiselect): correct paddings in outer multiselect #1640
- fix(documentation/input-multi-select): page title correction for input multi-select
- fix(component/table): sort icon replaced with button. #1486 #1720
- fix(component/table): header width doesn't change when sorted #1561
- fix(components/table): table head height should be 32px on each table size #1643
- fix(component/table): table default cursour style changed
- fix(documentation/table): filter and edit action buttons in examples replaced with buttons. #1486
- fix(documentation/table): table track by and sort-pagination examples improvement #1655
- fix(components/accordion): accordion hint not shown if title changed #1415
- fix(component/dropdown-host): add initialization \_autoReposition and \_placement in input in dropdown #1596
- fix(components/hint): switcher extra empty hint shown #1682 #1686
- fix: add initialization \_autoReposition and \_placement in input in dropdown#1596 #1681
- fix(components/input-number): right style on disabled mode #1644 #1645
- fix(components/panel): panel instruments cut focus styles #1625
- fix(components/input\*): ng100 error for input and hint #461 #1471 #1272
- fix(components): tests with errors for resize observer #1631
- fix(components/input-layout-date-range): fix error with ng100 #492
- fix(components/hint): ng100 error on first time appear #1091
- fix(components/hint): hint sometimes does not hide #1658
- fix(components/scrollbar): theme switching in scrollbar works incorrect #1657
- fix: changed content width in toast #1433
- fix(icons-loader): fix loader for lazy load #1691

## [4.2.0](https://github.com/zyfra/Prizm) (17-04-2024)

### Features

- feat: checklist for release 4x version #1610
- feat: checklist for release 3x version #1613
- feat(component/cron): added custom title #1431
- feat(charts): update colors for charts to new schema #1196
- feat(documentation): add decimal input type to live demo documentation

### Bug fixes

- fix(components/input-number): manual input works incorrect when min set for input number #1580
- fix(components/input-number) remove default title for input number #1599
- fix(components/inputs): hint status text for required input not shown after force clear #1598
- fix: auto deploy doc #1592
- fix(documentation): changed filesValidationErrors type in examples and live demo #1371
- fix(component/cron): selected working with specified tabs #1494
- fix(documentation): typography page changed #1497 #1498
- fix(documentation/sticky): fix scroll in sticky example #670
- fix(component/navigation): hidden overflow for navigation titles. added hints #1510
- fix(component/header): hidden overflow for header. added hints #1510
- fix(component/file-upload): if the name is long it doesn't overlap upload bar. name becomes truncated. expansion remains #1541
- fix(component/toggle): removed hover and focus if loading #1485
- fix(documentation/card): removed shadow variant duplicate #1434
- fix(components/paginator): fixed width of rows selector #1466
- fix(documentation): changelog headers formatting #1499
- fix(documentation): removed first empty string in ast code examples #1501
- fix(documentation/checkbox): fixed description of checkbox module import #1527
- fix(documentation/colors): remove 'v3' prefix in documentation theme colors #1496
- fix(components/column-settings): incorrect display of one unhidden column in column settings #1036
- fix(documentation/table): search for server sort example fixed #1107
- fix(charts): charts tolltip background color error #1488
- fix(charts/bar): bar chart changing postion on theme chage #1492
- fix(charts/bar): bar chart x axis shpould be shown for both themes #1490
- fix(charts): not all charts ascept theming #1489
- fix(charts/pie/waterfall/radial-bar): wrong stroke color on hover in pie, waterfall and radial bar charts #1508
- fix(documentation/scatter): points on the scatter are not completely hidden when it's hidden in legend #1493
- fix(charts/pie): pie line style update for dark theme
- fix(documentation/bar): incorrect examples for bar stacked and bar groupd charts #1507
- fix(theme): remove redundant token from default theme
- fix(charts): incorrect data colors displayed in charts #1505
- fix(documentation/bar): correction of sctacked example code
- fix(documentation/pie): removed extra properties from pie live demo tab
- fix(documentation/gauge): change percent input type for live demo

### Refactor

- refactor(charts): replace chart base options from theming to separate object

## [4.1.2](https://github.com/zyfra/Prizm) (08-04-2024)

- fix(ci): remove nx cloud token

## [4.1.1](https://github.com/zyfra/Prizm) (05-04-2024)

### Bug fixes

- fix(components/cron): switcher in cron returns incorrect value https://github.com/zyfra/Prizm/issues/1519
- fix(components/navigation-menu): add icons, remove transformer from doc https://github.com/zyfra/Prizm/issues/1525
- fix(components/icons): replace icons lazy loading for prizm components with targeting registry (breaking change) (our ADR: https://github.com/zyfra/Prizm/discussions/1564)
- fix(documentation/setup): correct information about icons setup https://github.com/zyfra/Prizm/issues/1558
- fix(components/link): removed circular dependency from prizmLink. https://github.com/zyfra/Prizm/issues/1535

## [4.1.0](https://github.com/zyfra/Prizm) (25-03-2024)

### Bug fixes

- fix(components/navigation-menu): hint icon margins added for navigation menu https://github.com/zyfra/Prizm/issues/1329
- fix(components/calendar): replace default 'title' attribute by prizm hint in calendar year pagination buttons https://github.com/zyfra/Prizm/issues/1457
- fix(components/calendar-range): incorrect markup for year and month screens fix https://github.com/zyfra/Prizm/issues/1445
- fix(components/input-layout-date-time): incorrect control markup fix https://github.com/zyfra/Prizm/issues/1242
- fix(components/input-layout-date-time-range): incorrect control markup fix https://github.com/zyfra/Prizm/issues/1242
- fix(components/calendar-month): incorrect control markup fix https://github.com/zyfra/Prizm/issues/1242
- fix(components/calendar-range): single year should be highlighted in calendar range https://github.com/zyfra/Prizm/issues/1465
- fix(components/calendar-range): single month should be highlighted in calendar range https://github.com/zyfra/Prizm/issues/1464
- fix(components/calendar): index marker color blends with the background of the selected date https://github.com/zyfra/Prizm/issues/1461
- fix(components/file-upload) fileupload buttons incorrect gap https://github.com/zyfra/Prizm/issues/1482
- fix(ci): increase max memory for gitlab ci pipelines
- fix(ci): increase max memory for github actions pipelines
- fix(ci): fix pipelines for 4.x version to build demo doc after created pr

### Features

- feat(doc): stackblitz for v4 version now available https://stackblitz.com/edit/prizm-v4-demo
- feat(icons): migrate lazy load icons functions to icons-loader
  now you can use lazy load function separately if you don't want to load all icons to your build
  but remember you need to inject our provider to active this mode
  you can find [example](http://localhost:4200/components/icons#lazy) on our doc
- feat(icons): now you can load all icons at once, we update doc
- feat(doc/icons): added more information easy to understand
- feat(components/breadcrumbs): change the focus to focus-visible for breadcrumbs https://github.com/zyfra/Prizm/issues/1297
- feat(components/checkbox): change the focus to focus-visible for checkbox https://github.com/zyfra/Prizm/issues/1297
- feat(components/radio-button): change the focus to focus-visible for radio-button https://github.com/zyfra/Prizm/issues/1297
- feat(components/chips): change the focus to focus-visible for chips https://github.com/zyfra/Prizm/issues/1297
- feat(components/input-icon-button): change the focus to focus-visible for input-icon-button https://github.com/zyfra/Prizm/issues/1297
- feat(components/slider): change the focus to focus-visible for slider cnob https://github.com/zyfra/Prizm/issues/1297
- feat(components/stepper): change the focus to focus-visible for stepper button https://github.com/zyfra/Prizm/issues/1297
- feat(components/input-icon-button): change the focus to focus-visible for toggle https://github.com/zyfra/Prizm/issues/1297
- feat(components/input-icon-button): change the focus to focus-visible for button https://github.com/zyfra/Prizm/issues/1297

## [4.0.0](https://github.com/zyfra/Prizm) (11-03-2024)

### Bug fixes

- fix(doc/input-date-time): set static default time
- fix(chore): stackblitz import style error #1209 #1410
  @alexhawkins94 for check
  https://stackblitz.com/edit/prizm-v3-demo-s2pfqz?file=src%2Fapp%2Fapp.component.ts
- fix(components/date-time): time validation does not always affect control display #1419
- fix(doc): when a hint appears, some storefront elements change theme #1407
- fix(doc/input-date-multi): update currentIdx on changes on api page
- fix(components/checkbox): removed unnecessary right margin for label-less checkboxes
- fix(components/table): added hover and focus styles for cells containing `prizmInput` and `prizmInputLayout`
- fix(components/panel): adjusted margins in `PrizmPanel` component
- fix(components/inputs): layout update for Input Chips eliminates the need for additional margins
- fix(components/inputs): removed default label from PrizmSelectOptions and PrizmMultiSelectOptions
- fix(components/file-upload): `PrizmFileUploadOptions` interface updated, status names to be added via translations
- fix(components/file-upload): added fields for file upload status translations in `PrizmLanguageFileUpload`
- fix(i18n): added `search` field to `PrizmLanguageKit` for InputSelect and InputMultiSelect search translations
- fix(components/input-date-time-range): afte clear time values in calendar got error #1368
- fix(components/input-date-time): min/max does not work correctly in InputLayoutDateTime #1421

### Features

- feat: update tags for npm delpoy ci pipelines for v3 version (updated tags instead of latest, beta, next)
- feat: update angular to 17 version
- feat: update icons set
- feat: i18n support for base input text of validation #1354 #1402
- feat(ci): new action to deploy doc for angular with 17 version
- feat(components/hint): add passing context as $implicit to templates #291
- feat(components/tooltip): add passing context as $implicit to templates #291
- feat(components/table): discuss extending hover and focus styles to other controls
- feat(i18n): enhanced search translation support for InputSelect and InputMultiSelect

### Breacking Changes

#### Removed components

- `input-date-time`
- `input-date-time-range`
- `input-time`
- `input-date`
- `input-month`
- `input-month-range`
- `input-date-range`
- `input-date-relative`
- `select`
- `multi-select`
- `carousel`

These components will no longer be supported and a replacement must be found to find alternative components with input-layout.

#### Theme

- Legacy color tokens (v1, v2) have been completely removed. Mapping for new colors will be provided where possible. Colors without direct analogues in the new color scheme will require manual redefinition in projects.
- Tokens with the prizm-v3 prefix have been replaced with prizm-

#### Icons

The `prizm-icon` component has been removed. Instead, a new set of icons has been introduced in the `prizm-icons` component, where the icons have new names. For each of the old icons, alternative names are provided. You can find a complete table of correspondence between old and new icon names at the link: https://prizm.site/components/icons/Old_Icons.

The following components used the legacy icon component:

- accordion
- table
- breadcrumbs
- tabs
- button
- icon-button
- split-button
- primitive-spin-button
- primitive-year-month-pagination
- calendar-range
- column-settings
- toggle
- input-select
- input-multi-select
  -file-upload
- navigation-menu
- indicator
- input-icon-button
- dropdown-host
- tree
- stepper
- checkbox
- tooltip
  -paginator

This means that when using the above components in your projects, you will need to either manually update the icon names to new ones, or use our service, which will automatically update the icon names to their new versions. Instructions for using this service are available at: https://prizm.site/components/icons#migrate-from-old-name.

## [4.0.0-next.2](https://github.com/zyfra/Prizm) (17-01-2024)

### Features

- feat(doc): added ability to change current theme tokens
- feat(theme): added export all token list with palette and base
- feat(ci): update ci for previous versions v1-v3

## [1.14.0, 2.11.0, 3.10.0](https://github.com/zyfra/Prizm) (19-01-2023)

### Features

- feat(doc): save current theme in local storage on change

### Bug fixes

- fix(theme/service): recognize current theme #1287 #1292
- fix(components/tabs): set stacking context to isolate #1291
- fix(components/input-text): show status on clear required fields #1284

## [4.0.0-rc.1](https://github.com/zyfra/Prizm) (15-01-2024)

### Features

- feat(components): remove deprecation from complex modules #1271
- feat(doc): language changer was added #1265
- feat(doc): search by status (new|preview|deprecated) #1257

### Bug fixes

- fix: check box extra margin #1189 #1193

### Deprecations

- chore(flag-icons): deprecated flag-icons #1267
- chore(icons): deprecated prizm-icons-svg #1266

### Breacking Changes

- bc(components): carousel deleted #1258
- bc(components): remove old themes and remove v3 prefix from new theme tokens #1270
- bc(components): removed input-month-range #1256
- bc(components): removed input-month #1255
- bc(components): removed input-date-time #1254
- bc(components): removed input-date-relative #1252
- bc(components): removed input-date-range input-date-time-range #1251
- bc(components): removed input date #1250
- bc(components): removed select, multiselect #1247
- feat: add styling for table cell with prizmInput (breaking change) #1226

## [1.15.1, 2.12.1, 3.11.1](https://github.com/zyfra/Prizm) (19-02-2023)

### Bug fixes

- fix(components/input-select) search label translation added #1323
- fix(components/input-multiselect) search label translation added #1323
- fix(components/input-select): extra title in input select #1286
- fix(components/input-layout-date-time): custom error not shown for inputLayoutDateTime #185
- fix(components/input-layout): clear button in inputs with position=center has incorrect placement #1385
- fix(doc/inputStatusText): inputStatusText examples fixed
- fix(components/switcher): switcher active item disabled statate colors changed #1348
- fix(components/navigation-menu): navigation menu search error #1344
- fix(components/navigation): navigation menu active item setter error #1213
- fix(components/breadcrumbs): breadcrumbs force update for content projection usage #1282
- fix(components/input-number): incorrect height of InputNumberDefaultControlsComponent #1308, #1383
- fix(components/inputs): incorrect controls height #1179
- fix(components/input-button): input button size set to 100% height of container
- fix(components/input-date-time-range): incorrect injection token for date time value transformer #1364
- fix(components/tabs): issue with close tabs logic #1360
- fix(doc/input-mask): input mask demo placeholder property added
- fix(doc/dropdown-host): select panel example styles fix #1283
- fix(components/shadow): shadow enum values fix
- fix(components/paginator): updated i18n #1390 #1391
  !!! if you use custom i18n dictionary you can get bc (our [ADR](https://jira.zyfra.com/wiki/x/crs6Dw))
- fix(component/tabs): error with double emitted index on close tabs #1392 #1003 #1389

## [1.15.0, 2.12.0, 3.11.0](https://github.com/zyfra/Prizm) (30-01-2023)

### Features

- feat(components/navigation-menu): add hint to navigation menu items and titles when text overflows #1216, #1312
- feat(components/accordion): add hint to accordion title when text overflows #1216, #1312

### Bug fixes

- fix(components/listing-item): listing item selected item hover #1280
- fix(components/input-dat-relative): selected item hover #1280
- fix(components/accordion): accordion focus shadow overlaps on hover #1116,
- fix(components/accordion): accordion incorrect background color #1236,
- fix(components/accordion): nested accordion button incorect behavior #1285
- fix(components/accordion): custom title accordion example fix #1240

## [1.14.0, 2.11.0, 3.10.0](https://github.com/zyfra/Prizm) (19-01-2023)

### Features

- feat(doc): save current theme in local storage on change

### Bug fixes

- fix(theme/service): recognize current theme #1287 #1292
- fix(components/tabs): set stacking context to isolate #1291
- fix(components/input-text): show status on clear required fields #1284

## [1.13.0, 2.10.0, 3.9.0](https://github.com/zyfra/Prizm) (29-12-2023)

### Features

- feat(components/sticky): update on changes #1085
- feat(component/event-zone): directive to standalone #1260 #1276
- feat(components/input-zone): add hook on update value and fix bug #1092 #1274
- feat: update toggle styles #1169 #1268
- feat: navigation v3 colors #1186 #1262
- feat(components/tab): added css variable for tab max-width #1244 #1249
- feat(components/sidebar): added ability to control scrollbar visibility #780 #1233
- feat(documentation): update documentation colors (use only v3) #1195 #1232
- feat(components/textarea): show placeholder #357 #1230
  feat(components/navigation): search lower case #1214 #1227
- feat: update colors for shadow #1199 #1200

### Bug fixes

- fix: input number min/max should apply for manual input values #1237
- fix(components/input-date-time): min max limit on first update #1263 #1273
- fix(components/input-date-time): min max limit on first update #488 #1275
- fix: none-status tokens updated for dark theme #1253
- fix: artifact download folder in beta release #1229
- fix: artifact dowload folder in next release #1228

## [1.12.1, 2.9.1, 3.8.1](https://github.com/zyfra/Prizm) (27-12-2023)

### Bug fixes

- fix(components/navigation): extra exclamation point in navigation removed

## [1.12.0, 2.9.0, 3.8.0](https://github.com/zyfra/Prizm) (20-12-2023)

### Features

- feat: update pipeline (cache moves to artifacts) #1217 #1201
- feat(components/stepper): update colors for stepper #1153
- feat(components/widget): widget colors update #1150
- feat: (components/splitter): splitter colors update #1155
- feat(documentation/splitter): splitter examples update #1155
- feat(components/error-page): error page colors update #1138
- feat(components/dialog): dialog colors update to v3 #1129
- feat(components/confirm-dialog): dialog colors update to v3 #1129
- feat(components/cron): colors update for cron #1124
- feat(components/column-settings): columns settings v3 colors #1104
- feat(components/dropdown-host): dropdownhost colors update #1137
- feat(components/calendar): colors update to v3 #987
- feat(components/calendar-month): colors update to v3 #987
- feat(components/calendar-range): colors update to v3 #987
- feat(components/InputMultiSelect): colors update to v3 #1064
- feat(components/InputLayoutDateTime): colors update to v3 #1064
- feat(components/InputSelect): colors update to v3 #1064
- feat(components/InputLayoutDateTimeRange): colors update to v3 #1064
- feat(components/InputLayoutTime): colors update to v3 #1064
- feat(components/InputLayoutDate): colors update to v3 #1064
- feat(components/InputLayoutMonth): colors update to v3 #1064
- feat(components/InputLayoutMonthRange): colors update to v3 #1064
- feat(components/InputLayoutDateRange): colors update to v3 #1064
- feat(components/InputLayoutDateRelative): colors update to v3 #1064
- feat(components/InputDateMulti): colors update to v3 #1064
- feat(components/Input): colors update to v3 #1064
- feat(components/Textarea): colors update to v3 #1064
- feat(components/InputChips): colors update to v3 #1064
- feat(components/InputNumber): colors update to v3 #1064
- feat(components/InputMask): colors update to v3 #1064
- feat(components/InputPassword): colors update to v3 #1064
- feat(components/InputCarousel): colors update to v3 #1064
- feat(components/data-list): v3 colors for data list component #1098
- feat(components/table): table colors update to v3 #1093
- feat(components/table): SearchableContentComponent became deprecated #1093
- feat: update ci beta deploy tages #1197
- feat(components): added empty initializer for all query list #1191
- feat(components/toast): toast v3 colors #1177
- feat(components/toast): toast none status appearance type added #1177
- feat(doc/toast): toast none status example added #1177
- feat(components/navigation-menu): navigation-menu colors update #1151

### Bug fixes

- fix(components/input-layout-date-time): after clear set state #1076 #1208
- fix(components/carousel): carousel disabled buttons incorrect behavior #1146
- fix(components/inputs): focus state not shown on inputs #1077
- fix(components/table): fix error in DI #1141 #1207
- fix(components/input-multi-select): fix rendered blink #1048
- fix(components/input-select): fix but with style #946
- fix(demo/input-date): update example #952
- fix(components/calendar): scroll in to view in year/month pickers #760 #1198
- fix: hide breaking in table till 4.0 #1194
- fix(components/input-select): show placeholder #1187 #1038 #1192

## [1.12.0-next.1, 2.9.0-next.1, 3.8.0-next.1](https://github.com/zyfra/Prizm) (12-12-2023)

### Features

- feat(components/stepper): update colors for stepper #1153
- feat(components/widget): widget colors update #1150
- feat: (components/splitter): splitter colors update #1155
- feat(documentation/splitter): splitter examples update #1155
- feat(components/error-page): error page colors update #1138
- feat(components/dialog): dialog colors update to v3 #1129
- feat(components/confirm-dialog): dialog colors update to v3 #1129
- feat(components/cron): colors update for cron #1124
- feat(components/column-settings): columns settings v3 colors #1104
- feat(components/dropdown-host): dropdownhost colors update #1137
- feat(components/calendar): colors update to v3 #987
- feat(components/calendar-month): colors update to v3 #987
- feat(components/calendar-range): colors update to v3 #987
- feat(components/InputMultiSelect): colors update to v3 #1064
- feat(components/InputLayoutDateTime): colors update to v3 #1064
- feat(components/InputSelect): colors update to v3 #1064
- feat(components/InputLayoutDateTimeRange): colors update to v3 #1064
- feat(components/InputLayoutTime): colors update to v3 #1064
- feat(components/InputLayoutDate): colors update to v3 #1064
- feat(components/InputLayoutMonth): colors update to v3 #1064
- feat(components/InputLayoutMonthRange): colors update to v3 #1064
- feat(components/InputLayoutDateRange): colors update to v3 #1064
- feat(components/InputLayoutDateRelative): colors update to v3 #1064
- feat(components/InputDateMulti): colors update to v3 #1064
- feat(components/Input): colors update to v3 #1064
- feat(components/Textarea): colors update to v3 #1064
- feat(components/InputChips): colors update to v3 #1064
- feat(components/InputNumber): colors update to v3 #1064
- feat(components/InputMask): colors update to v3 #1064
- feat(components/InputPassword): colors update to v3 #1064
- feat(components/InputCarousel): colors update to v3 #1064
- feat(components/data-list): v3 colors for data list component #1098
- feat(components/table): table colors update to v3 #1093
- feat(components/table): SearchableContentComponent became deprecated #1093

### Bug fixes

- fix(components/carousel): carousel disabled buttons incorrect behavior #1146
- fix(components/inputs): focus state not shown on inputs #1077

## [1.11.0, 2.8.0, 3.7.0](https://github.com/zyfra/Prizm) (04-12-2023)

### Features

- feat(components/input-multi-select): added transformer support #938 [MR](https://github.com/zyfra/Prizm/pull/1113)
- feat(icons): divided location and less #1047 [MR](https://github.com/zyfra/Prizm/pull/1114)
- feat(components/switcher): ability to change appearance #978 [MR](https://github.com/zyfra/Prizm/pull/1097)
- feat(documentation/theme-guide): theme guide for developers #979 [MR](https://github.com/zyfra/Prizm/pull/1060)

### Bug fixes

- fix(doc/dropdown-host): example with range components #893 [MR](https://github.com/zyfra/Prizm/pull/1096)
- fix(components/file-upload): progress status translations for file upload #931 [MR](https://github.com/zyfra/Prizm/pull/1032)
- fix(components/dropdown-host): fix close logic #1074 [MR](https://github.com/zyfra/Prizm/pull/1090)
- fix(components/table): fix error when pass not observable value #1068 #1084 [MR](https://github.com/zyfra/Prizm/pull/1094)
- fix(doc/input-chips): fix doc with print chips value #572 [MR](https://github.com/zyfra/Prizm/pull/1095)
- fix(doc/dropdown-host): example with range components #893 [MR](https://github.com/zyfra/Prizm/pull/1096)

### Refactor

- refactor(components/file-upload): functions for file size and uploading status are moved to pipes #931 [MR](https://github.com/zyfra/Prizm/pull/1032)
- refactor(components/file-upload): deprecated modules replaced by standalones i File Upload Component #931 [MR](https://github.com/zyfra/Prizm/pull/1032)
- refactor(components/file-upload): translations for uploading status added [MR](https://github.com/zyfra/Prizm/pull/1032)
- refactor(components/input-chips): changed dependencies to actual standalone

## [1.10.0, 2.7.0, 3.6.0](https://github.com/zyfra/Prizm) (27-11-2023)

### Features

- feat: colors v3 for hint, tooltip and confirm #1035 [MR](https://github.com/zyfra/Prizm/pull/1037)
- feat(components/listing-item): new component added [MR](https://github.com/zyfra/Prizm/pull/953)
- feat(components/chip-item): v3 colors ans selected state for single chips [MR](https://github.com/zyfra/Prizm/pull/953)

### Bug fixes

- fix(components/paginator): infinite paginator page count #661 [MR](https://github.com/zyfra/Prizm/pull/914)
- fix(components/tabs): contained tab dropdown shown incorrectly #844 [MR](https://github.com/zyfra/Prizm/pull/953)
- fix(components/tabs): In dropdown with a list of tabs, there is no alignment to the close button #843 [MR](https://github.com/zyfra/Prizm/pull/953)
- fix: confirm popup live demo property works incorrect #570 [MR](https://github.com/zyfra/Prizm/pull/1034)
- chore: replaced fixed versions on patch relative #1043 [MR](https://github.com/zyfra/Prizm/pull/1043)
- fix: invalid icon name can be set in accordion live demo #947 [MR](https://github.com/zyfra/Prizm/pull/1071)
- fix(components/tabs): unsubscribe error #1079 #842 #1023 [MR](https://github.com/zyfra/Prizm/pull/1083)
- fix(components/navigation): navigation extra notification for active item change #571 [MR](https://github.com/zyfra/Prizm/pull/1080)
- fix(documentation/toggle): toggle extra notification in live demo #530 [MR](https://github.com/zyfra/Prizm/pull/1072)

## [1.9.1, 2.6.1, 3.5.1](https://github.com/zyfra/Prizm) (17-11-2023)

### Bug fixes

- fix(components): fixed changes that caused the api to crash #1061
- fix(components/switcher): no provider for DestroyService in switcher hint #983 #1031
- fix(components/table): inner input without parent input-layout #1059

## [1.9.0, 2.6.0, 3.5.0](https://github.com/zyfra/Prizm) (16-11-2023)

### Features

- feat(components/input-select): added hint support for inner input #984
- feat(components/cron): to standalone
- feat(components/column-settings): to standalone
- feat(components/accordion/breadcrumbs): accordion and breadcrumbs v3 colors
- feat(components/paginator): to standalone
- feat(components/navigation-menu): to standalone
- feat(components/navigation-menu): to standalone
- feat(components/loader): to standalone
- feat(components/input-layout-time): to standalone
- feat(components/input-text): to standalone
- feat(components/input-number): to standalone
- feat(components/input-layout-month-range): to standalone
- feat(components/input-layout-month-standalone): to standalone
- feat(components/input-layout-date-time-range): to standalone
- feat(components/input-layout-date-time): to standalone
- feat(components/input-layout-date-relative): to standalone
- feat(components/input-layout-date-range-standalone): to standalone
- feat(components/input-date-multi-standalone): to standalone
- feat(components/input-layout-date-standalone): to standalone
- feat(components/input-carousel): to standalone
- feat(components/indicator): to standalone
- feat(components/progress): to standalone
- feat(components/scrollbar): to standalone
- feat(components/scrollbar): to standalone
- feat(components/slider): to standalone
- feat(components/spinner): to standalone
- feat(components/splitter): to standalone
- feat(components/stepper): to standalone
- feat(components/switcher): to standalone
- feat(components/tabs): to standalone
- feat(components/toggle): to standalone
- feat(components/widget): to standalone
- feat(components/icon): to standalone
- feat(components/grid): to standalone
- feat(components/file-upload): to standalone
- feat(components/expand): to standalone
- feat(components/select): to standalone
- feat(components/multi-select): to standalone
- feat(components/cron-hr): to standalone
- feat(components/counter): to standalone
- feat(components/chips): to standalone
- feat(components/checkbox): to standalone #963
- feat(components/card): to standalone #962
- feat(components/calendar-range): to standalone #961
- feat(components/calendar-month): to standalone #960
- feat(components/calendar): to standalone #959
- feat(components/button): to standalone #958
- feat(components/accordion): to standalone #956
- feat: paginator v3 colors #933 ready #943
- feat: colors and theme documentation #765 #936
- feat: slider update colors to v3 #930 #932
- feat: colors v3 for radio-button #926 #927

### Bug fixes

- fix(components/input-layout-date-range): empty detector #950
- fix(components/input-layout-date): empty detector #951
- fix(components/input-layout): clear with validator #1053
- fix(components/input-layout): hide clear button when forceClear == true in disabled state #1025 #1024 #1028
- fix:(components/input-date-multi): incorrect date set after manual input #887
- fix: hidden splitter filtering #923 #928
- fix: added lodash-es to peerDependencies #1001 #982
- fix: add more space for chips in multiselect #892
- fix(components/stepper): icon with the step number is not displayed if the status for this step "Not selected" #655 #916
- fix: build error #1033
- fix(components/input-layout): clear button position when we didn't pass template #1022 #1029
- fix(components/input-date-time-range): calendar button overlaps input when validation error present #1051

## [1.8.0, 2.5.0, 3.4.0](https://github.com/zyfra/Prizm) (01-11-2023)

### Features

- feat(components/input-select): virtual scroll support #617
- feat(components): to new colors #862
- feat(components/input): empty label mode for iner #384 [MR](https://github.com/zyfra/Prizm/pull/920)
- feat(components/overlay): context example and to standalone #813
- feat: updated v1 stackblitz demos with style #877
- feat: updated v2 stackblitz demos with style #878
- feat: updated v3 stackblitz demos with style #879
- feat(components/indicator): v3 colors for indicator #867
- feat(components/checkbox): v3 colors for checkbox #871
- feat(components/spinner): v3 colors for spinner #870
- feat(components/loader): v3 colors for loader #870
- feat(components/toggle): update toggle colors to v3 #876
- feat(components/switcher): add hint to switcher #856
- feat(components/scrollbar): scrollbar colors update to v3 #895
- feat(components/card): colors v3 for card #897
- feat(components/panel): colors v3 for panel #897
- feat(components/tabs): add prizm counter to tabs #863
- feat: update progress colors to v3 #902
- feat(components/dropdown-control): new directive control for dropdown #881
- feat(components): create own calendar exports #880
- feat(components): add boolean compatible with async #714
- feat(components/input): empty label mode for inner #384
- feat(components/hint): standalone directives [MR](https://github.com/zyfra/Prizm/pull/905)

### Bug fixes

- fix(components/old-icon): fixed broken icons #102
- fix(components/input-layout-date-time): dropdown size #741
- fix(components/buttons): fix emit hover on disabled for icon-button and buttons #948
- fix(doc/input-date-multi): inputDateMulti incorrect label text #753
- fix(components/file-upload): file upload button type #837
- fix(docs/table): description for 'open' property for table body added to docs #654
- fix(components/toast): double toast error and scrollbar #481 #734
- fix(components/tree): active item style and update doc #708 #654
- fix(components/input): update on blur #736 [MR](https://github.com/zyfra/Prizm/pull/917)

### Closed

- request(components/combobox): new component 'combobox' applied to next iteration #629
- question(components/table): answered new demo #748

## [1.7.0, 2.4.0, 3.3.0](https://github.com/zyfra/Prizm) (25-10-2023)

### Features

- feat(components/cron): cron year limit #824 [MR](https://github.com/zyfra/Prizm/pull/817)
- feat(components/confirm-dialog): add polymorph template support for confirm-dialog component #799 [MR](https://github.com/zyfra/Prizm/pull/827)
- feat(components/panel): add variable for panel height #811 [MR](https://github.com/zyfra/Prizm/pull/828)
- feat(components/hint): white-space: pre-line added #781 [MR](https://github.com/zyfra/Prizm/pull/831)
- feat(components/tooltip): white-space: pre-line added #781 [MR](https://github.com/zyfra/Prizm/pull/831)
- feat(components/confirm-popup): white-space: pre-line added for title and description #781 [MR](https://github.com/zyfra/Prizm/pull/831)
- feat(components/confirm-dialog): white-space: pre-line added for title and description #768 [MR](https://github.com/zyfra/Prizm/pull/831)
- feat(components/input): added new param with control (resolved #762) [MR](https://github.com/zyfra/Prizm/pull/832)
- feat(components/overlay): new close logic #798 [MR](https://github.com/zyfra/Prizm/pull/833)
- feat(doc): remove redundant page 'technology list' from docs [MR](https://github.com/zyfra/Prizm/pull/840)
- feat(components): added exports for custom dropdown #783 [MR](https://github.com/zyfra/Prizm/pull/847)
- feat(components/input-date-time): new transformer for work with base date format #410 [MR](https://github.com/zyfra/Prizm/pull/851)
- feat(components/counter): counter component and directive added [MR](https://github.com/zyfra/Prizm/pull/859)
- feat(components/dialog): added outer-header with example #854 [MR](https://github.com/zyfra/Prizm/pull/860)

### Bug fixes

- fix(components/cron): fixed week day names #784 [MR](https://github.com/zyfra/Prizm/pull/825)
- fix(components/widget): widget header shrinks #273 [MR](https://github.com/zyfra/Prizm/pull/838)
- fix:(components/splitter) splitter area collapsed after display changed #737 [MR](https://github.com/zyfra/Prizm/pull/839)
- fix(components/input-select): lazy get items #836 #812 [MR](https://github.com/zyfra/Prizm/pull/846)
- fix(components/cron): cron buttons width #848 [MR](https://github.com/zyfra/Prizm/pull/850)
- fix(components/tab): active tab coor and border #401 [MR](https://github.com/zyfra/Prizm/pull/850)
- fix(components/input-select): open dropdown by click when passed primitive polymorph template #853 [MR](https://github.com/zyfra/Prizm/pull/858)
- fix(doc/button): buttons pseudo state documentation update #809 [MR](https://github.com/zyfra/Prizm/pull/864)
- fix(doc/icon-button): icon-buttons pseudo state documentation update #809 [MR](https://github.com/zyfra/Prizm/pull/864)
- fix(components/table): table row group column borders disappear when filtering #230 [MR](https://github.com/zyfra/Prizm/pull/866)
- fix(components/table): re render on update context #816 [MR](https://github.com/zyfra/Prizm/pull/884)

## [1.6.0, 2.3.0, 3.2.0](https://github.com/zyfra/Prizm) (18-10-2023)

### Features

- feat(chore): changed lodash to lodash-es #886
- feat(components/input-layout): custom clear button #855
- feat(components/input-select): added wrap model for simple content #793 [MR](https://github.com/zyfra/Prizm/pull/810)
- feat(doc/table): initial table sort example #126 [MR](https://github.com/zyfra/Prizm/pull/805)
- feat(components/table): initial table sorter added if not set #126 [MR](https://github.com/zyfra/Prizm/pull/805)
- feat(components/paginator): translations tokens has been added for paginator module [MR](https://github.com/zyfra/Prizm/pull/802)
- feat: sync on touched change with parent layout #353 [MR](https://github.com/zyfra/Prizm/pull/795)
- feat(doc): mirror links to showcase added to docs [MR](https://github.com/zyfra/Prizm/pull/794)
- feat(components/switcher): colors version to v3 update for switcher IDPPRIZM-1878 [MR](https://github.com/zyfra/Prizm/pull/801)
- feat(components/tabs): colors version update to v3 and redesign for tabs: BREAKING CHANGE #401 [MR](https://github.com/zyfra/Prizm/pull/801)
- feat(components/buttons): colors version update to v3 for buttons IDPPRIZM-1853 [MR](https://github.com/zyfra/Prizm/pull/801)
- feat(components/input-number): convert directive to component #649
- feat(components/number): add inputs to control precision and decimal #814

### Bug fixes

- fix(components/input-layout): input layout outer label incorrect display #788 [MR](https://github.com/zyfra/Prizm/pull/804)
- fix(components/paginator): deprecated select component has been changed for new one for paginator #792 [MR](https://github.com/zyfra/Prizm/pull/802)
- fix: new theme default palette colors fix [MR](https://github.com/zyfra/Prizm/pull/796)
- fix: disabled sync between layout in in put #771 [MR](https://github.com/zyfra/Prizm/pull/795)
- fix(components/input-control): update layout flow #691 [MR](https://github.com/zyfra/Prizm/pull/795)
- fix(components/input-layout): clear button with status message #766 [MR](https://github.com/zyfra/Prizm/pull/795)
- fix(icons): fix name cansel to cancel [MR](https://github.com/zyfra/Prizm/pull/795)
- fix(components/input): update empty state #723 [MR](https://github.com/zyfra/Prizm/pull/795)
- fix(components/tabs): update tab #759 [MR](https://github.com/zyfra/Prizm/pull/808)
- fix(components/polymorph): build error #738 #806 [MR](https://github.com/zyfra/Prizm/pull/797)
- fix(components/tabs): tab disable active state #703 [MR](https://github.com/zyfra/Prizm/pull/801)
- fix(components/switcher): switcher disable active state #703 [MR](https://github.com/zyfra/Prizm/pull/801)
- fix(components/input-number): fix validator #818
- fix(components/input-number): empty state #267

## [1.3.0.next.2, 2.3.0.next.2, 3.2.0.next.2](https://github.com/zyfra/Prizm) (13-10-2023)

### Bug fixes

- fix(components/tabs): update tab #759 [MR](https://github.com/zyfra/Prizm/pull/808)

## [1.3.0.next.1, 2.3.0.next.1, 3.2.0.next.1](https://github.com/zyfra/Prizm) (13-10-2023)

### Features

- feat(components/input-select): added wrap model for simple content #793 [MR](https://github.com/zyfra/Prizm/pull/810)
- feat(doc/table): initial table sort example #126 [MR](https://github.com/zyfra/Prizm/pull/805)
- feat(components/table): initial table sorter added if not set #126 [MR](https://github.com/zyfra/Prizm/pull/805)
- feat(components/paginator): translations tokens has been added for paginator module [MR](https://github.com/zyfra/Prizm/pull/802)
- feat: sync on touched change with parent layout #353 [MR](https://github.com/zyfra/Prizm/pull/795)
- feat(doc): mirror links to showcase added to docs [MR](https://github.com/zyfra/Prizm/pull/794)

### Bug fixes

- fix(components/input-layout): input layout outer label incorrect display #788 [MR](https://github.com/zyfra/Prizm/pull/804)
- fix(components/paginator): deprecated select component has been changed for new one for paginator #792 [MR](https://github.com/zyfra/Prizm/pull/802)
- fix: new theme default palette colors fix [MR](https://github.com/zyfra/Prizm/pull/796)
- fix: disabled sync between layout in in put #771 [MR](https://github.com/zyfra/Prizm/pull/795)
- fix(components/input-control): update layout flow #691 [MR](https://github.com/zyfra/Prizm/pull/795)
- fix(components/input-layout): clear button with status message #766 [MR](https://github.com/zyfra/Prizm/pull/795)
- fix(icons): fix name cansel to cancel [MR](https://github.com/zyfra/Prizm/pull/795)
- fix(components/input): update empty state #723 [MR](https://github.com/zyfra/Prizm/pull/795)

## [1.5.0, 2.2.0, 3.1.0](https://github.com/zyfra/Prizm) (06-10-2023)

### Features

- feat(components/column-settings): add new component #82
- feat(components/column-settings): add show, hide and reoder, add-all, reset settings features #82
- feat(components/column-settings): add localization to new component #82
- feat(components/column-settings): add sticky columns settings and example #82
- feat(components/column-settings): add header settings and example #82
- feat(ci): splitted steps
- feat(theme): add new themes v3
- feat(doc/dialog): dialog result handling demo IDPPRIZM-915
- refactor(doc/dialog): dialog docs file name and selector for page has been changed
- feat(theme): new inveted-theme-values directive IDPPRIZM-1817
- feat(components/hint): new input to set theme for modal window if need specific IDPPRIZM-1817
- feat(doc/hint/tooltip/cinfirm-popup): example for new input for modal window IDPPRIZM-1817
- feat(doc/confirm-popup): refactor files names for doc example IDPPRIZM-1817
- feat(theme): add input to inverted-theme

### Bug fixes

- fix(doc/live-demo): litle dark theme color fix #758
- fix(doc/repo): outdated links removed #732
- fix(components/column-settings): last shown column checking #82

## [1.4.6, 2.1.8, 3.0.3](https://github.com/zyfra/Prizm) (25-09-2023)

### Features

- feat(components/table): it was added support string for getRowId #692
- feat(components/navigation-menu): it was added group support #711

### Bug fixes

- fix(components/widget): widget header height #251
- fix(components/toast): toast styles #305
- fix(doc/dropdown): color for example with context small style fix
- fix(components/confirm-popup/tooltip/hint) styles for tooltip and hint with other components #340
- refactor(doc/tooltip/hint) file names for tooltip and hint example has been changed #340
- fix(components/confirm-popup/tooltip/hint) outline on focuse removed #658
- fix(components/paginator): custom buttons replaced by prizm ones #743
- fix(components/tree): tree expand all feature has been changed #739
- fix(components/input-layout-date-relative): relative date input validation #566
- fix(components/navigation-menu): emit expandedItemsMapChanged on "class all" #709
- fix(components/overlay): clear cache cached inputs #697

## [1.4.5-next.2, 2.1.7-next.2, 3.0.2-next.2](https://github.com/zyfra/Prizm) (07-09-2023)

### Features

- feat(doc/example): open example in stackblitz in v1 #700
- feat(doc/example): open example in stackblitz in v2 #701
- feat(doc/example): open example in stackblitz in v3 #702
- feat(doc/example): open base demo from list #675 #676 #677
- feat(components/input-select): it was added observable support for stringify input #682

### Bug fixes

- fix(docs/input-mask): description for inputMask hint options added to documentation #253
- fix(docs/carousel): description for carousel updated in documentation #253
- fix(doc/version-manager): fix colors for version manager in dark mode #683
- fix(icons): class names for font usage icons logistics was changed #650
- fix(doc): contributing page markup changed #651
- fix(doc): codestyle page markup changed #651
- fix(components/dialog): default text styles for footer in dialog changed, #626

## [1.4.5-next.1, 2.1.7-next.1, 3.0.2-next.1](https://github.com/zyfra/Prizm) (07-09-2023)

### Features

- feat(doc/input-number): it was added new api params #615
- feat(doc/input): it was added new api params #615
- feat(components/input-number): it was added new api to control hint #615
- feat(components/input): it was added new api to control hint #615

## [1.4.4, 2.1.6, 3.0.1](https://github.com/zyfra/Prizm) (31-08-2023)

### Features

- feat(doc/sidebar): example was added with only confirm button #630
- chore: small fixes and moved all projects to full strict mode #377 #554
- feat(doc): add stackblitz switcher #665
- feat(doc): a ability to accept multiple hosts for tracker was add #657

### Bug fixes

- fix(components/widget): fix error with template #660
- fix(components/scrollbar): thumb color #664
- fix(doc/chips): add testId to api page #657
- fix(doc/tree): in modal style for dark theme #624
- fix(component/input-layout-date-time): fix on manual time change #594
- fix(doc/slider): property name #656

## [1.4.3, 2.1.5, 3.0.0](https://github.com/zyfra/Prizm) (22-08-2023)

### Features

- feat(components/table): added row idx and example #598
- feat(components/cron-human-readable): new independent module #577
- feat(components/dialog): added new css vars #616
- feat(components/input-layout-date-time-range): example with formGroup was added #565'
- feat(nxmv): published new library to support multiple dependencies (ng) #595
- feat(components/sidebar): overlay with parent #576

### Bug fixes

- fix(doc/table): last element does not render in sticky footer #596
- fix(components/cron): fix error with changes in day zone #579
- fix(components/dropdown): control with public methods #586
- fix(components/sidebar): var name #587
- fix(components/checkbox): indeterminate state #608
- fix(components/tabs): opening a dropdown with tabs, it switches back to a tab that was not selected through the dropdown.
- fix(components/icon): icon name doesn't show in test id #589

## [1.4.3-next.2, 2.1.5-next.2, 3.0.0-next.2](https://github.com/zyfra/Prizm) (17-08-2023)

### Bug fixes

- fix(components/tabs): opening a dropdown with tabs, it switches back to a tab that was not selected through the dropdown.
- fix(components/icon): icon name doesn't show in test id #589

## [1.4.3-next.1, 2.1.5-next.1, 3.0.0-next.1](https://github.com/zyfra/Prizm) (17-08-2023)

### Features

- feat(nxmv): published new library to support multiple dependencies (ng) #595
- feat(components/sidebar): overlay with parent #576

## [1.4.2](https://github.com/zyfra/Prizm) (14-08-2023)

### Features

- feat(components/table): add new input to control detect unique row id #584
- feat(components/table): ability to sort children was added #583
- feat(doc/dialog): dismissible option was added to example #582
- feat(doc/accordion): update example #575
- feat(components/input-select): add new input listItemTemplate to control template in item from dropdown #564
- feat(components/table): add support dynamic amount of columns in group #259
- feat(components/input-select): update doc example and now we passed transformed value to template #564
- feat(components/textarea): resizable was added #559
- feat(components/polymorph): added new input to add custom injector [demo](https://prizm.site/tools/polymorph#injector)
- feat(components/dropdown-host): now we pass injector to overlay
- feat(theme): use DI to pass parent theme #478

### Bug fixes

- fix(components/table): order of [columns] not inherited from table #359
- fix(components/table): change order after rendered #359
- fix(components/navigation): select current item #477
- fix(doc): anchor links do not work on pages that have not loaded #560

### Closed

- #268
- #533

## [2.1.4](https://github.com/zyfra/Prizm) (14-08-2023)

### Features

- feat(components/table): add new input to control detect unique row id #584
- feat(components/table): ability to sort children was added #583
- feat(doc/dialog): dismissible option was added to example #582
- feat(doc/accordion): update example #575
- feat(components/input-select): add new input listItemTemplate to control template in item from dropdown #564
- feat(components/table): add support dynamic amount of columns in group #259
- feat(components/input-select): update doc example and now we passed transformed value to template #564
- feat(components/textarea): resizable was added #559
- feat(components/polymorph): added new input to add custom injector [demo](https://prizm.site/tools/polymorph#injector)
- feat(components/dropdown-host): now we pass injector to overlay
- feat(theme): use DI to pass parent theme #478

### Bug fixes

- fix(components/table): order of [columns] not inherited from table #359
- fix(components/table): change order after rendered #359
- fix(components/navigation): select current item #477
- fix(doc): anchor links do not work on pages that have not loaded #560

### Closed

- #268
- #533

## [2.1.4-next.4](https://github.com/zyfra/Prizm) (11-08-2023)

### Features

- feat(components/table): add new input to control detect unique row id #584
- feat(components/table): ability to sort children was added #583
- feat(doc/dialog): dismissible option was added to example #582
- feat(doc/accordion): update example #575

### Bug fixes

- fix(components/table): change order after rendered #359

## [2.1.4-next.3](https://github.com/zyfra/Prizm) (11-08-2023)

### Features

- feat(components/input-select): add new input listItemTemplate to control template in item from dropdown #564

## [2.1.4-next.2](https://github.com/zyfra/Prizm) (03-08-2023)

### Features

- feat(components/table): add support dynamic amount of columns in group #259
- feat(components/input-select): update doc example and now we passed transformed value to template #564

### Bug fixes

- fix(components/table): order of [columns] not inherited from table #359

## [2.1.4-next.1](https://github.com/zyfra/Prizm) (02-08-2023)

### Features

- feat(components/textarea): resizable was added #559
- feat(components/polymorph): added new input to add custom injector [demo](https://prizm.site/tools/polymorph#injector)
- feat(components/dropdown-host): now we pass injector to overlay
- feat(theme): use DI to pass parent theme #478

### Bugfixes

- fix(components/navigation): select current item #477
- fix(doc): anchor links do not work on pages that have not loaded #560

### Closed

- #268
- #533

## [1.4.1](https://github.com/zyfra/Prizm) (31-07-2023)

### Features

- feat(components/autoresize): added directive and example how to use in textarea #544
- feat(components/sidebar): ability was added to control styles of wrapper elements #541
- feat(components/table): ability was added to control tree rows #366
- feat(components/dropdown-host): ability was added to control classes for dropdown #536
- feat(components/input-select): ability was added to control classes and styles for dropdown #536
- feat(components/input-multi-select): ability was added to control classes and styles for dropdown #536
- feat(components/breadcrumbs): added ability to work with projections #464
- feat(components/overlay): added new logic for detecting events from dynamic elements #411
- feat(helpers/rxjs): 'raceEmit' operator was added to detect first emit in the transmitted time interval between source streams
- feat(components/tabs): add full width underline #539

### Bug fixes

- fix(components/input-layout): problems with layout in outer #537
- fix(components/table): prizmThGroup throws an error together with structure directives #510
- fix(components/table): prizmThGroup throws an error together with structure directives #510
- fix(components/tabs): after build the color changes #543
- fix(components/overlay): the initial positioning of the window does not take right place #387
- fix(components/dropdown-host): wrong position of dropdown #394
- fix(components/dropdown-host): flickering on scroll #495
- fix(components/tabs): automatically close after select from menu #482
- fix(components/input-number): block not number symbols #486
- fix(components/widget): fixed the height in component prizm-widget-base-example #484
- fix(components/skeleton): styles are not removed when the skeleton is disabled #304
- fix(doc): font fixes #280 #302 #303 #460

## [2.1.3](https://github.com/zyfra/Prizm) (31-07-2023)

### Features

- feat(components/autoresize): added directive and example how to use in textarea #544
- feat(components/sidebar): ability was added to control styles of wrapper elements #541
- feat(components/table): ability was added to control tree rows #366
- feat(components/dropdown-host): ability was added to control classes for dropdown #536
- feat(components/input-select): ability was added to control classes and styles for dropdown #536
- feat(components/input-multi-select): ability was added to control classes and styles for dropdown #536
- feat(components/breadcrumbs): added ability to work with projections #464
- feat(components/overlay): added new logic for detecting events from dynamic elements #411
- feat(helpers/rxjs): 'raceEmit' operator was added to detect first emit in the transmitted time interval between source streams
- feat(components/tabs): add full width underline #539

### Bug fixes

- fix(components/input-layout): problems with layout in outer #537
- fix(components/table): prizmThGroup throws an error together with structure directives #510
- fix(components/table): prizmThGroup throws an error together with structure directives #510
- fix(components/tabs): after build the color changes #543
- fix(components/overlay): the initial positioning of the window does not take right place #387
- fix(components/dropdown-host): wrong position of dropdown #394
- fix(components/dropdown-host): flickering on scroll #495
- fix(components/tabs): automatically close after select from menu #482
- fix(components/input-number): block not number symbols #486
- fix(components/widget): fixed the height in component prizm-widget-base-example #484
- fix(components/skeleton): styles are not removed when the skeleton is disabled #304
- fix(doc): font fixes #280 #302 #303 #460

## [2.1.3-next.3](https://github.com/zyfra/Prizm) (28-07-2023)

### Features

- feat(components/autoresize): added directive and example how to use in textarea #544

### Bug fixes

- fix(components/dropdown-host): wrong position of dropdown #394
- fix(components/dropdown-host): flickering on scroll #495
- fix(components/tabs): automatically close after select from menu #482
- fix(components/input-number): block not number symbols #486

## [2.1.3-next.2](https://github.com/zyfra/Prizm) (27-07-2023)

### Features

- feat(components/sidebar): ability was added to control styles of wrapper elements #541
- feat(components/table): ability was added to control tree rows #366
- feat(components/dropdown-host): ability was added to control classes for dropdown #536
- feat(components/input-select): ability was added to control classes and styles for dropdown #536
- feat(components/input-multi-select): ability was added to control classes and styles for dropdown #536

### Bug fixes

- fix(components/tabs): after build the color changes #543
- fix(components/overlay): the initial positioning of the window does not take right place #387

## [2.1.3-next.1](https://github.com/zyfra/Prizm) (26-07-2023)

### Features

- feat(components/breadcrumbs): added ability to work with projections #464
- feat(components/overlay): added new logic for detecting events from dynamic elements #411
- feat(helpers/rxjs): 'raceEmit' operator was added to detect first emit in the transmitted time interval between source streams
- feat(components/tabs): add full width underline #539

### Bug fixes

- fix(components/input-layout): problems with layout in outer #537
- fix(components/table): prizmThGroup throws an error together with structure directives #510
- fix(components/table): prizmThGroup throws an error together with structure directives #510
- fix(doc/select): set default value in example with transformer

### For testers

- !!! need check all overlay elements (sidebars, dialogs, confirms and so on) and overlay in tools. We changed core logic

## [1.4.0](https://github.com/zyfra/Prizm) (24-07-2023)

### Features

- feat(components/file-upload): test-id was added with ability to change post fix
- feat(components/error-page): test-id was added with ability to change post fix
- feat(components/input-select): added new input transformer to transform value #514
- feat(components/switcher): added support form controllers #508
- feat(components/tooltip): added ability to close on esc pressed #307
- feat(charts/area): test-id was added with ability to change postfix
- feat(charts/bar): test-id was added with ability to change postfix
- feat(charts/column): test-id was added with ability to change postfix
- feat(charts/line): test-id was added with ability to change postfix
- feat(charts/gauge): test-id was added with ability to change postfix
- feat(charts/pie): test-id was added with ability to change postfix
- feat(charts/radar): test-id was added with ability to change postfix
- feat(charts/radial-bar): test-id was added with ability to change postfix
- feat(charts/scatter): test-id was added with ability to change postfix
- feat(charts/treemap): test-id was added with ability to change postfix
- feat(charts/waterfall): test-id was added with ability to change postfix
- chore: update CONTRIBUTING.md file
- feat(doc): ability was added to automatically test-id was added to apiPage
- feat(components/icon): add input ot control color #524
- feat(components/tabs): ability was added to edit testId postfix
- feat(components/accordion): ability was added to edit testId postfix
- feat(components/grid-item): ability was added to edit testId postfix
- feat(components/calendar-range): ability was added to edit testId postfix
- feat(components/calendar): ability was added to edit testId postfix
- feat(components/card): ability was added to edit testId postfix
- feat(components/data-list): ability was added to edit testId postfix
- feat(components/confirm-dialog): ability was added to edit testId postfix
- feat(components/dialog): ability was added to edit testId postfix
- feat(components/sidebar): ability was added to edit testId postfix
- feat(components/dropdown-host): ability was added to edit testId postfix
- feat(components/expand): ability was added to edit testId postfix
- feat(components/grid): ability was added to edit testId postfix
- feat(components/indicator): ability was added to edit testId postfix
- feat(components/input-icon-button): ability was added to edit testId postfix
- feat(components/primitive-calendar-range): ability was added to edit testId postfix
- feat(components/primitive-calendar): ability was added to edit testId postfix
- feat(components/primitive-month-picker): ability was added to edit testId postfix
- feat(components/primitive-year-month-pagination): ability was added to edit testId postfix
- feat(components/primitive-year-picker): ability was added to edit testId postfix
- feat(components/link): ability was added to edit testId postfix
- feat(components/loader): ability was added to edit testId postfix
- feat(components/paginator): ability was added to edit testId postfix
- feat(components/panel): ability was added to edit testId postfix
- feat(components/radio-button): ability was added to edit testId postfix
- feat(components/scroll-controls): ability was added to edit testId postfix
- feat(components/scrollbar): ability was added to edit testId postfix
- feat(components/spinner): ability was added to edit testId postfix
- feat(components/switcher-item): ability was added to edit testId postfix
- feat(components/switcher): ability was added to edit testId postfix
- feat(components/tab): ability was added to edit testId postfix
- feat(components/toast-container): ability was added to edit testId postfix
- feat(components/toast-single): ability was added to edit testId postfix
- feat(components/toast-wrapper): ability was added to edit testId postfix
- feat(components/tree-item-content): ability was added to edit testId postfix
- feat(components/tree-item): ability was added to edit testId postfix
- feat(components/tree): ability was added to edit testId postfix
- feat(components/widget): ability was added to edit testId postfix
- feat(components/sticky): class was added with direction #470
- feat(components/i18n): new way to init was added to components with time
- feat(components/i18n): new way to init was added to components with month
- feat(components/i18n): new way to init was added to components with calendar
- feat(components/i18n): new way to init was added to components with weeks

### Bug fixes

- fix(components/dropdown-host): when the component was destroyed, the extra method was called #532
- fix(components/input-layout): set empty value to input with default label #527
- fix(components/input-select): select most relevant when you passed object
- fix(components/tooltip): color of arrows on dark theme #479
- fix(components/breadcrumbs): color of dots on dark theme #480
- fix(components/input-layout): too long header overlap the "asterisk" #493
- fix(components/sticky): component becomes sticky even if it has all positions false #470

### BREAKING CHANGES

- fix(components/confirm-popup): prizmHintContext was renamed to prizmConfirmPopupContext
- fix(components/confirm-popup): prizmHintCanShow was renamed to prizmConfirmPopupCanShow
- fix(components/tree): testId was corrected to standart prizm_tree > ui_tree
- fix(components/toast): testId was corrected to standart prizm_toast_single > ui_toast_single
- fix(components/paginator): testId was corrected to standart prizm_paginator > ui_paginator
- fix(components/indicator): testId was corrected to standart prizm_paginator > ui_paginator
- fix(components/dropdown-host): testId was corrected to standart prizm_dropdown_host > ui_dropdown_host
- fix(components/data-list): testId was corrected to standart prizm_data_list > ui_data_list
- fix(components/calendar-range): testId was corrected to standart prizm_calendar_range > ui_calendar_range
- fix(components/breadcrumbs): testId was corrected to standart prizm_breadcrumbs > ui_breadcrumbs
- fix(components/scroll-controls): testId was corrected to standart prizm_scroll_controls > ui_scroll_controls
- fix(components/scrollbar): testId was corrected to standart prizm_scrollbar > ui_scrollbar
- fix(components/spinner): testId was corrected to standart prizm_loader > ui_spinner
- fix(components/switcher): testId was corrected to standart prizm_switcher > ui_switcher
- fix(components/toast-single): testId was corrected to standart prizm_toast_single > ui_toast_single
- fix(components/tree-item-content): testId was corrected to standart prizm_tree_item_content > ui_tree_item_content
- fix(components/tree-item): testId was corrected to standart prizm_tree_item > ui_tree--item
- fix(components/tree): testId was corrected to standart prizm_tree > ui_tree
- fix(components/cron): testId was corrected to standart prizm_cron > ui_cron
- fix(components/input-date): testId was corrected to standart prizm_input_date > ui_input_date
- fix(components/input-layout-date): testId was corrected to standart prizm_input_date > ui_input_date

## [2.1.2](https://github.com/zyfra/Prizm) (24-07-2023)

### Features

- feat(components/file-upload): test-id was added with ability to change post fix
- feat(components/error-page): test-id was added with ability to change post fix
- feat(components/input-select): added new input transformer to transform value #514
- feat(components/switcher): added support form controllers #508
- feat(components/tooltip): added ability to close on esc pressed #307
- feat(charts/area): test-id was added with ability to change postfix
- feat(charts/bar): test-id was added with ability to change postfix
- feat(charts/column): test-id was added with ability to change postfix
- feat(charts/line): test-id was added with ability to change postfix
- feat(charts/gauge): test-id was added with ability to change postfix
- feat(charts/pie): test-id was added with ability to change postfix
- feat(charts/radar): test-id was added with ability to change postfix
- feat(charts/radial-bar): test-id was added with ability to change postfix
- feat(charts/scatter): test-id was added with ability to change postfix
- feat(charts/treemap): test-id was added with ability to change postfix
- feat(charts/waterfall): test-id was added with ability to change postfix
- chore: update CONTRIBUTING.md file
- feat(doc): ability was added to automatically test-id was added to apiPage
- feat(components/icon): add input ot control color #524
- feat(components/tabs): ability was added to edit testId postfix
- feat(components/accordion): ability was added to edit testId postfix
- feat(components/grid-item): ability was added to edit testId postfix
- feat(components/calendar-range): ability was added to edit testId postfix
- feat(components/calendar): ability was added to edit testId postfix
- feat(components/card): ability was added to edit testId postfix
- feat(components/data-list): ability was added to edit testId postfix
- feat(components/confirm-dialog): ability was added to edit testId postfix
- feat(components/dialog): ability was added to edit testId postfix
- feat(components/sidebar): ability was added to edit testId postfix
- feat(components/dropdown-host): ability was added to edit testId postfix
- feat(components/expand): ability was added to edit testId postfix
- feat(components/grid): ability was added to edit testId postfix
- feat(components/indicator): ability was added to edit testId postfix
- feat(components/input-icon-button): ability was added to edit testId postfix
- feat(components/primitive-calendar-range): ability was added to edit testId postfix
- feat(components/primitive-calendar): ability was added to edit testId postfix
- feat(components/primitive-month-picker): ability was added to edit testId postfix
- feat(components/primitive-year-month-pagination): ability was added to edit testId postfix
- feat(components/primitive-year-picker): ability was added to edit testId postfix
- feat(components/link): ability was added to edit testId postfix
- feat(components/loader): ability was added to edit testId postfix
- feat(components/paginator): ability was added to edit testId postfix
- feat(components/panel): ability was added to edit testId postfix
- feat(components/radio-button): ability was added to edit testId postfix
- feat(components/scroll-controls): ability was added to edit testId postfix
- feat(components/scrollbar): ability was added to edit testId postfix
- feat(components/spinner): ability was added to edit testId postfix
- feat(components/switcher-item): ability was added to edit testId postfix
- feat(components/switcher): ability was added to edit testId postfix
- feat(components/tab): ability was added to edit testId postfix
- feat(components/toast-container): ability was added to edit testId postfix
- feat(components/toast-single): ability was added to edit testId postfix
- feat(components/toast-wrapper): ability was added to edit testId postfix
- feat(components/tree-item-content): ability was added to edit testId postfix
- feat(components/tree-item): ability was added to edit testId postfix
- feat(components/tree): ability was added to edit testId postfix
- feat(components/widget): ability was added to edit testId postfix
- feat(components/sticky): class was added with direction #470
- feat(components/i18n): new way to init was added to components with time
- feat(components/i18n): new way to init was added to components with month
- feat(components/i18n): new way to init was added to components with calendar
- feat(components/i18n): new way to init was added to components with weeks

### Bug fixes

- fix(components/dropdown-host): when the component was destroyed, the extra method was called #532
- fix(components/input-layout): set empty value to input with default label #527
- fix(components/input-select): select most relevant when you passed object
- fix(components/tooltip): color of arrows on dark theme #479
- fix(components/breadcrumbs): color of dots on dark theme #480
- fix(components/input-layout): too long header overlap the "asterisk" #493
- fix(components/sticky): component becomes sticky even if it has all positions false #470

### BREAKING CHANGES

- fix(components/confirm-popup): prizmHintContext was renamed to prizmConfirmPopupContext
- fix(components/confirm-popup): prizmHintCanShow was renamed to prizmConfirmPopupCanShow
- fix(components/tree): testId was corrected to standart prizm_tree > ui_tree
- fix(components/toast): testId was corrected to standart prizm_toast_single > ui_toast_single
- fix(components/paginator): testId was corrected to standart prizm_paginator > ui_paginator
- fix(components/indicator): testId was corrected to standart prizm_paginator > ui_paginator
- fix(components/dropdown-host): testId was corrected to standart prizm_dropdown_host > ui_dropdown_host
- fix(components/data-list): testId was corrected to standart prizm_data_list > ui_data_list
- fix(components/calendar-range): testId was corrected to standart prizm_calendar_range > ui_calendar_range
- fix(components/breadcrumbs): testId was corrected to standart prizm_breadcrumbs > ui_breadcrumbs
- fix(components/scroll-controls): testId was corrected to standart prizm_scroll_controls > ui_scroll_controls
- fix(components/scrollbar): testId was corrected to standart prizm_scrollbar > ui_scrollbar
- fix(components/spinner): testId was corrected to standart prizm_loader > ui_spinner
- fix(components/switcher): testId was corrected to standart prizm_switcher > ui_switcher
- fix(components/toast-single): testId was corrected to standart prizm_toast_single > ui_toast_single
- fix(components/tree-item-content): testId was corrected to standart prizm_tree_item_content > ui_tree_item_content
- fix(components/tree-item): testId was corrected to standart prizm_tree_item > ui_tree--item
- fix(components/tree): testId was corrected to standart prizm_tree > ui_tree
- fix(components/cron): testId was corrected to standart prizm_cron > ui_cron
- fix(components/input-date): testId was corrected to standart prizm_input_date > ui_input_date
- fix(components/input-layout-date): testId was corrected to standart prizm_input_date > ui_input_date

## [2.1.2.next-3](https://github.com/zyfra/Prizm) (24-07-2023)

### Features

- feat(components/input-select): added new input transformer to transform value #514
- feat(components/switcher): added support form controllers #508
- feat(components/tooltip): added ability to close on esc pressed #307

### Bug fixes

- fix(components/input-layout): set empty value to input with default label #527
- fix(components/input-select): select most relevant when you passed object
- fix(components/tooltip): color of arrows on dark theme #479
- fix(components/breadcrumbs): color of dots on dark theme #480

## [2.1.2.next-2](https://github.com/zyfra/Prizm) (21-07-2023)

### Features

- feat(charts/area): test-id was added with ability to change postfix
- feat(charts/bar): test-id was added with ability to change postfix
- feat(charts/column): test-id was added with ability to change postfix
- feat(charts/line): test-id was added with ability to change postfix
- feat(charts/gauge): test-id was added with ability to change postfix
- feat(charts/pie): test-id was added with ability to change postfix
- feat(charts/radar): test-id was added with ability to change postfix
- feat(charts/radial-bar): test-id was added with ability to change postfix
- feat(charts/scatter): test-id was added with ability to change postfix
- feat(charts/treemap): test-id was added with ability to change postfix
- feat(charts/waterfall): test-id was added with ability to change postfix

- chore: update CONTRIBUTING.md file
- feat(doc): ability was added to automatically test-id was added to apiPage
- feat(components/icon): add input ot control color #524
- feat(components/tabs): ability was added to edit testId postfix
- feat(components/accordion): ability was added to edit testId postfix
- feat(components/grid-item): ability was added to edit testId postfix
- feat(components/calendar-range): ability was added to edit testId postfix
- feat(components/calendar): ability was added to edit testId postfix
- feat(components/card): ability was added to edit testId postfix
- feat(components/data-list): ability was added to edit testId postfix
- feat(components/confirm-dialog): ability was added to edit testId postfix
- feat(components/dialog): ability was added to edit testId postfix
- feat(components/sidebar): ability was added to edit testId postfix
- feat(components/dropdown-host): ability was added to edit testId postfix
- feat(components/expand): ability was added to edit testId postfix
- feat(components/grid): ability was added to edit testId postfix
- feat(components/indicator): ability was added to edit testId postfix
- feat(components/input-icon-button): ability was added to edit testId postfix
- feat(components/primitive-calendar-range): ability was added to edit testId postfix
- feat(components/primitive-calendar): ability was added to edit testId postfix
- feat(components/primitive-month-picker): ability was added to edit testId postfix
- feat(components/primitive-year-month-pagination): ability was added to edit testId postfix
- feat(components/primitive-year-picker): ability was added to edit testId postfix
- feat(components/link): ability was added to edit testId postfix
- feat(components/loader): ability was added to edit testId postfix
- feat(components/paginator): ability was added to edit testId postfix
- feat(components/panel): ability was added to edit testId postfix
- feat(components/radio-button): ability was added to edit testId postfix
- feat(components/scroll-controls): ability was added to edit testId postfix
- feat(components/scrollbar): ability was added to edit testId postfix
- feat(components/spinner): ability was added to edit testId postfix
- feat(components/switcher-item): ability was added to edit testId postfix
- feat(components/switcher): ability was added to edit testId postfix
- feat(components/tab): ability was added to edit testId postfix
- feat(components/toast-container): ability was added to edit testId postfix
- feat(components/toast-single): ability was added to edit testId postfix
- feat(components/toast-wrapper): ability was added to edit testId postfix
- feat(components/tree-item-content): ability was added to edit testId postfix
- feat(components/tree-item): ability was added to edit testId postfix
- feat(components/tree): ability was added to edit testId postfix
- feat(components/widget): ability was added to edit testId postfix

### Bug fixes

- fix(components/input-layout): too long header overlap the "asterisk" #493

### BREAKING CHANGES

- fix(components/tree): testId was corrected to standart prizm_tree > ui_tree
- fix(components/toast): testId was corrected to standart prizm_toast_single > ui_toast_single
- fix(components/paginator): testId was corrected to standart prizm_paginator > ui_paginator
- fix(components/indicator): testId was corrected to standart prizm_paginator > ui_paginator
- fix(components/dropdown-host): testId was corrected to standart prizm_dropdown_host > ui_dropdown_host
- fix(components/data-list): testId was corrected to standart prizm_data_list > ui_data_list
- fix(components/calendar-range): testId was corrected to standart prizm_calendar_range > ui_calendar_range
- fix(components/breadcrumbs): testId was corrected to standart prizm_breadcrumbs > ui_breadcrumbs
- fix(components/scroll-controls): testId was corrected to standart prizm_scroll_controls > ui_scroll_controls
- fix(components/scrollbar): testId was corrected to standart prizm_scrollbar > ui_scrollbar
- fix(components/spinner): testId was corrected to standart prizm_loader > ui_spinner
- fix(components/switcher): testId was corrected to standart prizm_switcher > ui_switcher
- fix(components/toast-single): testId was corrected to standart prizm_toast_single > ui_toast_single
- fix(components/tree-item-content): testId was corrected to standart prizm_tree_item_content > ui_tree_item_content
- fix(components/tree-item): testId was corrected to standart prizm_tree_item > ui_tree--item
- fix(components/tree): testId was corrected to standart prizm_tree > ui_tree
- fix(components/cron): testId was corrected to standart prizm_cron > ui_cron
- fix(components/input-date): testId was corrected to standart prizm_input_date > ui_input_date
- fix(components/input-layout-date): testId was corrected to standart prizm_input_date > ui_input_date

## [2.1.2.next-1](https://github.com/zyfra/Prizm) (19-07-2023)

### Features

- feat(components/sticky): class was added with direction #470
- feat(components/i18n): new way to init was added to components with time
- feat(components/i18n): new way to init was added to components with month
- feat(components/i18n): new way to init was added to components with calendar
- feat(components/i18n): new way to init was added to components with weeks

### BUG FIXES

- fix(components/sticky): component becomes sticky even if it has all positions false #470

## [1.3.0](https://github.com/zyfra/Prizm) (19-07-2023)

### Features

- feat(components/paginator): added abilite to change text on page [404](https://github.com/zyfra/Prizm/issues/404)
- feat(nx-plugin/migration): add info how to use migrator to remove deprecated versions
- feat(components/accordion): added ability to pass context for title, icon [397](https://github.com/zyfra/Prizm/issues/397)
- feat(components/input-select): set touched state only after choose or clear [507](https://github.com/zyfra/Prizm/issues/507)
- feat(components/input-multi-select): set touched state only after choose or clear
- feat(components/input-select): added ability to visibility control of scrollbar thumb for select components [491](https://github.com/zyfra/Prizm/issues/491)
- feat(ast): update only when has changes in file for templates
- feat(doc): now input/output getter can distinguish altered properties
- feat(components/button): ability was added to set postfix for test-id for button, toggle components [465](https://github.com/zyfra/Prizm/issues/465)
- feat(components/select): ability was added to set postfix for test-id for select components [465](https://github.com/zyfra/Prizm/issues/465)
- feat(components/input-\*): ability was added to set postfix for test-id for input components [465](https://github.com/zyfra/Prizm/issues/465)
- feat(doc): add example with passing innerHTML/customData [516](https://github.com/zyfra/Prizm/issues/516)
- feat(components/sidebar): ability was added pass observable for buttons to control disabled, showLoader [497](https://github.com/zyfra/Prizm/issues/497)
- feat(components/confirm-dialog): ability was added pass observable for buttons to control disabled, showLoader [497](https://github.com/zyfra/Prizm/issues/497)
- feat(components/confirm-popup): ability was added pass observable for buttons to control disabled, showLoader
- feat(doc): now deprecated/new names in navigation stand out nicely

### BUG FIXES

- fix(components/input-layout-date-range): error when initial select date range [489](https://github.com/zyfra/Prizm/issues/489)
- fix(components/input-layout-date-range): error when manual input only start date [485](https://github.com/zyfra/Prizm/issues/485)
- fix(components/input-number): style on disabled [502](https://github.com/zyfra/Prizm/issues/502)
- fix(doc/tooltip): corrected api page
- fix(doc/hint): corrected api page
- fix(components/hint): long string without hyphenation is truncated [414](https://github.com/zyfra/Prizm/issues/414)
- fix(components/switcher): remove border for active item [279](https://github.com/zyfra/Prizm/issues/279)
- fix(doc/confirm-dialog): removed unused property 'header' [338](https://github.com/zyfra/Prizm/issues/338)
- fix(doc/confirm-dialog): removed unused property 'content' [336](https://github.com/zyfra/Prizm/issues/336)
- fix(doc/confirm-dialog): removed unused property 'closeword' [310](https://github.com/zyfra/Prizm/issues/310)
- fix(doc/multi-select): does not work right in modal window [462](https://github.com/zyfra/Prizm/issues/462)
- fix(components/cron): small test errors [469](https://github.com/zyfra/Prizm/issues/469)
- fix(components/input-layout-date-range): sometimes date text is truncated in the period input area [467](https://github.com/zyfra/Prizm/issues/467)
- fix(components/cron): fix error when click last day of month
- fix(components/panel): style variable is not set [498](https://github.com/zyfra/Prizm/issues/498)
- fix(doc/navigation): change info on api page [476](https://github.com/zyfra/Prizm/issues/476)
- fix(doc/sticky): remove empty class [250](https://github.com/zyfra/Prizm/issues/250)
- fix(components/input-date-time-range): disabled state did not work [269](https://github.com/zyfra/Prizm/issues/269)
- fix(icons): wrong selectors for icons [487](https://github.com/zyfra/Prizm/issues/487) [501](https://github.com/zyfra/Prizm/issues/501)
- fix(components/tabs): close tab from manu [518](https://github.com/zyfra/Prizm/issues/487)

### Breaking changes

- BC(components/hint): remove input prizmHintShow
- BC(components/tooltip): remove input prizmHintShow
- BC(components/hint): rename output prizmHoverChange > prizmHintShowed
- BC(components/tooltip): rename output prizmHoverChange > prizmTooltipShowed
- BC: remove prizm-ui/deprecated [474](https://github.com/zyfra/Prizm/issues/474) [339](https://github.com/zyfra/Prizm/issues/339)

#### Our migrator support auto breaking changes [read](https://prizm.site/forZIIoT/migration)

## [2.1.1](https://github.com/zyfra/Prizm) (18-07-2023)

### Features

- feat(components/paginator): added abilite to change text on page [404](https://github.com/zyfra/Prizm/issues/404)
- feat(nx-plugin/migration): add info how to use migrator to remove deprecated versions
- feat(components/accordion): added ability to pass context for title, icon [397](https://github.com/zyfra/Prizm/issues/397)
- feat(components/input-select): set touched state only after choose or clear [507](https://github.com/zyfra/Prizm/issues/507)
- feat(components/input-multi-select): set touched state only after choose or clear
- feat(components/input-select): added ability to visibility control of scrollbar thumb for select components [491](https://github.com/zyfra/Prizm/issues/491)
- feat(ast): update only when has changes in file for templates
- feat(doc): now input/output getter can distinguish altered properties
- feat(components/button): ability was added to set postfix for test-id for button, toggle components [465](https://github.com/zyfra/Prizm/issues/465)
- feat(components/select): ability was added to set postfix for test-id for select components [465](https://github.com/zyfra/Prizm/issues/465)
- feat(components/input-\*): ability was added to set postfix for test-id for input components [465](https://github.com/zyfra/Prizm/issues/465)
- feat(doc): add example with passing innerHTML/customData [516](https://github.com/zyfra/Prizm/issues/516)
- feat(components/sidebar): ability was added pass observable for buttons to control disabled, showLoader [497](https://github.com/zyfra/Prizm/issues/497)
- feat(components/confirm-dialog): ability was added pass observable for buttons to control disabled, showLoader [497](https://github.com/zyfra/Prizm/issues/497)
- feat(components/confirm-popup): ability was added pass observable for buttons to control disabled, showLoader
- feat(doc): now deprecated/new names in navigation stand out nicely

### BUG FIXES

- fix(components/input-layout-date-range): error when initial select date range [489](https://github.com/zyfra/Prizm/issues/489)
- fix(components/input-layout-date-range): error when manual input only start date [485](https://github.com/zyfra/Prizm/issues/485)
- fix(components/input-number): style on disabled [502](https://github.com/zyfra/Prizm/issues/502)
- fix(doc/tooltip): corrected api page
- fix(doc/hint): corrected api page
- fix(components/hint): long string without hyphenation is truncated [414](https://github.com/zyfra/Prizm/issues/414)
- fix(components/switcher): remove border for active item [279](https://github.com/zyfra/Prizm/issues/279)
- fix(doc/confirm-dialog): removed unused property 'header' [338](https://github.com/zyfra/Prizm/issues/338)
- fix(doc/confirm-dialog): removed unused property 'content' [336](https://github.com/zyfra/Prizm/issues/336)
- fix(doc/confirm-dialog): removed unused property 'closeword' [310](https://github.com/zyfra/Prizm/issues/310)
- fix(doc/multi-select): does not work right in modal window [462](https://github.com/zyfra/Prizm/issues/462)
- fix(components/cron): small test errors [469](https://github.com/zyfra/Prizm/issues/469)
- fix(components/input-layout-date-range): sometimes date text is truncated in the period input area [467](https://github.com/zyfra/Prizm/issues/467)
- fix(components/cron): fix error when click last day of month
- fix(components/panel): style variable is not set [498](https://github.com/zyfra/Prizm/issues/498)
- fix(doc/navigation): change info on api page [476](https://github.com/zyfra/Prizm/issues/476)
- fix(doc/sticky): remove empty class [250](https://github.com/zyfra/Prizm/issues/250)
- fix(components/input-date-time-range): disabled state did not work [269](https://github.com/zyfra/Prizm/issues/269)
- fix(icons): wrong selectors for icons [487](https://github.com/zyfra/Prizm/issues/487) [501](https://github.com/zyfra/Prizm/issues/501)
- fix(components/tabs): close tab from manu [518](https://github.com/zyfra/Prizm/issues/487)

### Breaking changes

- BC(components/hint): remove input prizmHintShow
- BC(components/tooltip): remove input prizmHintShow
- BC(components/hint): rename output prizmHoverChange > prizmHintShowed
- BC(components/tooltip): rename output prizmHoverChange > prizmTooltipShowed
- BC: remove prizm-ui/deprecated [474](https://github.com/zyfra/Prizm/issues/474) [339](https://github.com/zyfra/Prizm/issues/339)

#### Our migrator support auto apply breaking changes [read](https://prizm.site/forZIIoT/migration)

## [2.1.1](https://github.com/zyfra/Prizm) (18-07-2023)

### Features

- feat(components/paginator): added abilite to change text on page #404
- feat(nx-plugin/migration): add info how to use migrator to remove deprecated versions
- feat(components/accordion): added ability to pass context for title, icon #397
- feat(components/input-select): set touched state only after choose or clear #507
- feat(components/input-multi-select): set touched state only after choose or clear
- feat(components/input-select): added ability to visibility control of scrollbar thumb for select components #491
- feat(ast): update only when has changes in file for templates
- feat(doc): now input/output getter can distinguish altered properties
- feat(components/button): ability was added to set postfix for test-id for button, toggle components #465
- feat(components/select): ability was added to set postfix for test-id for select components #465
- feat(components/input-\*): ability was added to set postfix for test-id for input components #465
- feat(doc): add example with passing innerHTML/customData [516](https://github.com/zyfra/Prizm/issues/516)
- feat(components/sidebar): ability was added pass observable for buttons to control disabled, showLoader #497
- feat(components/confirm-dialog): ability was added pass observable for buttons to control disabled, showLoader #497
- feat(components/confirm-popup): ability was added pass observable for buttons to control disabled, showLoader
- feat(doc): now deprecated/new names in navigation stand out nicely

### BUG FIXES

- fix(components/input-layout-date-range): error when initial select date range #489
- fix(components/input-layout-date-range): error when manual input only start date #485
- fix(components/input-number): style on disabled #502
- fix(doc/tooltip): corrected api page
- fix(doc/hint): corrected api page
- fix(components/hint): long string without hyphenation is truncated #414
- fix(components/switcher): remove border for active item [279](https://github.com/zyfra/Prizm/issues/279)
- fix(doc/confirm-dialog): removed unused property 'header' [338](https://github.com/zyfra/Prizm/issues/338)
- fix(doc/confirm-dialog): removed unused property 'content' [336](https://github.com/zyfra/Prizm/issues/336)
- fix(doc/confirm-dialog): removed unused property 'closeword' [310](https://github.com/zyfra/Prizm/issues/310)
- fix(doc/multi-select): does not work right in modal window [462](https://github.com/zyfra/Prizm/issues/462)
- fix(components/cron): small test errors [469](https://github.com/zyfra/Prizm/issues/469)
- fix(components/input-layout-date-range): sometimes date text is truncated in the period input area [467](https://github.com/zyfra/Prizm/issues/467)
- fix(components/cron): fix error when click last day of month
- fix(components/panel): style variable is not set [498](https://github.com/zyfra/Prizm/issues/498)
- fix(doc/navigation): change info on api page [476](https://github.com/zyfra/Prizm/issues/476)
- fix(doc/sticky): remove empty class [250](https://github.com/zyfra/Prizm/issues/250)
- fix(components/input-date-time-range): disabled state did not work [269](https://github.com/zyfra/Prizm/issues/269)
- fix(icons): wrong selectors for icons [487](https://github.com/zyfra/Prizm/issues/487) [501](https://github.com/zyfra/Prizm/issues/501)
- fix(components/tabs): close tab from manu [518](https://github.com/zyfra/Prizm/issues/487)

### Breaking changes

- BC(components/hint): remove input prizmHintShow
- BC(components/tooltip): remove input prizmHintShow
- BC(components/hint): rename output prizmHoverChange > prizmHintShowed
- BC(components/tooltip): rename output prizmHoverChange > prizmTooltipShowed
- BC: remove prizm-ui/deprecated [474](https://github.com/zyfra/Prizm/issues/474) [339](https://github.com/zyfra/Prizm/issues/339)

#### Our migrator support auto apply breaking changes [read](https://prizm.site/forZIIoT/migration)

## [2.1.0-next.4](https://github.com/zyfra/Prizm) (18-07-2023)

### Features

- feat(components/paginator): added abilite to change text on page #404
- feat(nx-plugin/migration): add info how to use migrator to remove deprecated versions
- feat(components/accordion): added ability to pass context for title, icon #397
- feat(components/input-select): set touched state only after choose or clear #507
- feat(components/input-multi-select): set touched state only after choose or clear
- feat(ast): update only when has changes in file for templates

### BUG FIXES

- fix(components/input-layout-date-range): error when initial select date range #489
- fix(components/input-layout-date-range): error when manual input only start date #485
- fix(components/input-number): style on disabled #502

## [2.1.0-next.3](https://github.com/zyfra/Prizm) (13-07-2023)

### Breaking changes

- BC(components/hint): remove input prizmHintShow
- BC(components/tooltip): remove input prizmHintShow
- BC(components/hint): rename output prizmHoverChange > prizmHintShowed
- BC(components/tooltip): raname output prizmHoverChange > prizmTooltipShowed

### BUG FIXES

- fix(doc/tooltip): corrected api page
- fix(doc/hint): corrected api page
- fix(components/hint): long string without hyphenation is truncated #414

### Features

- feat(doc): now input/output getter can distinguish altered properties

## [2.1.0-next.2](https://github.com/zyfra/Prizm) (13-07-2023)

### BUG FIXES

- fix(components/switcher): remove border for active item [279](https://github.com/zyfra/Prizm/issues/279)
- fix(doc/confirm-dialog): removed unused property 'header' [338](https://github.com/zyfra/Prizm/issues/338)
- fix(doc/confirm-dialog): removed unused property 'content' [336](https://github.com/zyfra/Prizm/issues/336)
- fix(doc/confirm-dialog): removed unused property 'closeword' [310](https://github.com/zyfra/Prizm/issues/310)
- fix(doc/multi-select): does not work right in modal window [462](https://github.com/zyfra/Prizm/issues/462)
- fix(components/cron): small test errors [469](https://github.com/zyfra/Prizm/issues/469)
- fix(components/input-layout-date-range): sometimes date text is truncated in the period input area [467](https://github.com/zyfra/Prizm/issues/467)
- fix(components/cron): fix error when click last day of month
- fix(components/panel): style variable is not set [498](https://github.com/zyfra/Prizm/issues/498)

## [1.2.5-next.1](https://github.com/zyfra/Prizm) (13-07-2023)

### BUG FIXES

- fix(doc/navigation): change info on api page [476](https://github.com/zyfra/Prizm/issues/476)
- fix(doc/sticky): remove empty class [250](https://github.com/zyfra/Prizm/issues/250)
- fix(components/input-date-time-range): disabled state did not work [269](https://github.com/zyfra/Prizm/issues/269)

### Breaking changes

- BC: remove prizm-ui/deprecated [474](https://github.com/zyfra/Prizm/issues/474) [339](https://github.com/zyfra/Prizm/issues/339)

## [2.1.0-next.1](https://github.com/zyfra/Prizm) (10-07-2023)

### BUG FIXES

- fix(doc/navigation): change info on api page [476](https://github.com/zyfra/Prizm/issues/476)
- fix(doc/sticky): remove empty class [250](https://github.com/zyfra/Prizm/issues/250)
- fix(components/input-date-time-range): disabled state did not work [269](https://github.com/zyfra/Prizm/issues/269)

### Breaking changes

- BC: remove prizm-ui/deprecated [474](https://github.com/zyfra/Prizm/issues/474) [339](https://github.com/zyfra/Prizm/issues/339)

### Closed

- [483](https://github.com/zyfra/Prizm/issues/483)

## [2.0.0](https://github.com/zyfra/Prizm) (26-06-2023)

### FEATURES

- chore: update to angular 15

## [1.2.4](https://github.com/zyfra/Prizm) (26-06-2023)

### FEATURES

- feat(components/input-layout-date-time): filling in data if at least one date or time field is completely filled [452](https://github.com/zyfra/Prizm/issues/452)
- feat(components/input-layout-date): filling in data if at least one date or time field is completely filled [453](https://github.com/zyfra/Prizm/issues/453)

### BUG FIXES

- fix(components/navigation): in the navigation in the dropdown, it is not displayed which section is selected. [451](https://github.com/zyfra/Prizm/issues/451)
- fix(components/cron): cron in days error in "last day before the end of the month" [455](https://github.com/zyfra/Prizm/issues/455)
- fix(doc/tree): tree jumps when checkbox [457](https://github.com/zyfra/Prizm/issues/457)

## [1.2.4.next-2](https://github.com/zyfra/Prizm) (26-06-2023)

### BUG FIXES

- fix(components/cron): cron in days error in "last day before the end of the month" [455](https://github.com/zyfra/Prizm/issues/455)
- fix(doc/tree): tree jumps when checkbox [457](https://github.com/zyfra/Prizm/issues/457)

## [1.2.4.next-1](https://github.com/zyfra/Prizm) (26-06-2023)

### FEATURES

- feat(components/input-layout-date-time): filling in data if at least one date or time field is completely filled [452](https://github.com/zyfra/Prizm/issues/452)
- feat(components/input-layout-date): filling in data if at least one date or time field is completely filled [453](https://github.com/zyfra/Prizm/issues/453)

### BUG FIXES

- fix(components/navigation): in the navigation in the dropdown, it is not displayed which section is selected. [451](https://github.com/zyfra/Prizm/issues/451)

## [1.2.3](https://github.com/zyfra/Prizm) (25-06-2023)

### BUG FIXES

- fix(components/icon): wrong data-testid [443](https://github.com/zyfra/Prizm/issues/443)
- fix(chore): added updateBuildableProjectDepsInPackageJson to project configs [448](https://github.com/zyfra/Prizm/issues/448)
- fix(doc/input-layout-date-time): ngModel cannot be used to register form [445](https://github.com/zyfra/Prizm/issues/445)

## [1.2.3-next.2](https://github.com/zyfra/Prizm) (25-06-2023)

### BUG FIXES

- fix(components/icon): wrong data-testid [443](https://github.com/zyfra/Prizm/issues/443)
- fix(chore): added updateBuildableProjectDepsInPackageJson to project configs [448](https://github.com/zyfra/Prizm/issues/448)

## [1.2.3-next.1](https://github.com/zyfra/Prizm) (25-06-2023)

### BUG FIXES

- fix(doc/input-layout-date-time): ngModel cannot be used to register form [445](https://github.com/zyfra/Prizm/issues/445)

## [1.2.2](https://github.com/zyfra/Prizm) (25-06-2023)

### FEATURES

- feat(components/overlay): add auto adaptive modal window size on scroll, change [374](https://github.com/zyfra/Prizm/issues/374)

### BUG FIXES

- fix(doc/sidebar): delete closeWork from doc, add example with confirmButton [352](https://github.com/zyfra/Prizm/issues/352)
- fix(components/table): sorting does not work [424](https://github.com/zyfra/Prizm/issues/424)
- fix(doc/zoom-control): stopped work some element from modal view [421](https://github.com/zyfra/Prizm/issues/421)

## [1.2.2-next.4](https://github.com/zyfra/Prizm) (25-06-2023)

### FEATURES

- feat(components/overlay): add auto adaptive modal window size on scroll, change [374](https://github.com/zyfra/Prizm/issues/374)

## [1.2.2-next.3](https://github.com/zyfra/Prizm) (25-06-2023)

### FEATURES

- feat(components/overlay): add auto adaptive modal window size on scroll, change [374](https://github.com/zyfra/Prizm/issues/374)

## [1.2.2-next.2](https://github.com/zyfra/Prizm) (25-06-2023)

### BUG FIXES

- fix(doc/zoom-control): stopped work some element from modal view [421](https://github.com/zyfra/Prizm/issues/421)

## [1.2.2](https://github.com/zyfra/Prizm) (25-06-2023)

### BUG FIXES

- fix(components/table): sorting does not work [424](https://github.com/zyfra/Prizm/issues/424)

## [1.2.2-next.1](https://github.com/zyfra/Prizm) (21-06-2023)

### BUG FIXES

- fix(components/table): sorting does not work [424](https://github.com/zyfra/Prizm/issues/424)

## [1.2.1](https://github.com/zyfra/Prizm) (23-06-2023)

### BUG FIXES

- fix(chore): cannot run project [429](https://github.com/zyfra/Prizm/issues/429)
- fix(components/toast): in the "template in the header" example, the content does not fit in the toast [422](https://github.com/zyfra/Prizm/issues/422)
- fix(doc/dropdown-host): items may not be displayed in the list after filtering and calling the panel again [426](https://github.com/zyfra/Prizm/issues/426)

## [1.2.0](https://github.com/zyfra/Prizm) (21-06-2023)

### Features

- feat(components/input-zone): added new module for combine multiple inputs to one
- feat(components/input-native-value): added new module to correct native values of input if they differences
- feat(components/input-carousel): added component input-carousel which work with input-layout and unnecessarily added left-right buttons [391](https://github.com/zyfra/Prizm/issues/391)
- deprecated(components/carousel): instead of this you can use input-carousel
- ci: added publishing draft deploys to draft demo site [379](https://github.com/zyfra/Prizm/issues/379)
- ci: added publishing draft deploys to next demo site [378](https://github.com/zyfra/Prizm/issues/378)
- feat(components/input-layout-date-time): devided to seperate components
- feat(components/input-layout-date-time-range): added time output and seperato to multiple inputs [293](https://github.com/zyfra/Prizm/issues/293)
- feat(components/input-date-multi): no switch event between absolute and relative modes prizm-input-date-multi [[393](https://github.com/zyfra/Prizm/issues/393)](https://github.com/zyfra/Prizm/issues/393)
- feat(components/overlay): added ability to control backdrop color and opacity [[373](https://github.com/zyfra/Prizm/issues/373)](https://github.com/zyfra/Prizm/issues/373)
- feat(components/dropdown): added pass current global theme to dropdown [[342](https://github.com/zyfra/Prizm/issues/342)](https://github.com/zyfra/Prizm/issues/342)
- feat(components/tab): added ability to prevent tab open [195]((https://github.com/zyfra/Prizm/issues/195)
- feat(components/navigation): added the ability to hide the "hierarchical" view button [358](https://github.com/zyfra/Prizm/issues/358)
- feat(components/cron): added ability to show human readable value in cron #365
- feat(helpers/let): added ability to get current context from export via template ref

### BUG FIXES

- fix(components/cron): cannot write date to start date input [380](https://github.com/zyfra/Prizm/issues/380)
- fix(components/cron): show not full date in day tab [381](https://github.com/zyfra/Prizm/issues/381)
- fix(components/dropdown-host): cannot be used to register form controls with a parent formGroup directive [390](https://github.com/zyfra/Prizm/issues/390) [389](https://github.com/zyfra/Prizm/issues/390)
- fix(components/mask): in live demo, it is not possible to enter text into an input with a mask [[281](https://github.com/zyfra/Prizm/issues/281)](https://github.com/zyfra/Prizm/issues/281)
- fix(components/navigation): changes the navigation color when the side menu is hidden [[278](https://github.com/zyfra/Prizm/issues/278)](https://github.com/zyfra/Prizm/issues/278)
- fix(components/polymorph): does not work component template without context [265](https://github.com/zyfra/Prizm/issues/265)
- fix(components/table): pass does not right index [[260](https://github.com/zyfra/Prizm/issues/260)](https://github.com/zyfra/Prizm/issues/260)
- fix(components/select): fix hover and selected item colors in datepicker dropdowns [388](https://github.com/zyfra/Prizm/issues/388) [403](https://github.com/zyfra/Prizm/issues/403) [341](https://github.com/zyfra/Prizm/issues/341)
- fix(components/calendar-month): no hover when hovering over a month [301](https://github.com/zyfra/Prizm/issues/301)
- fix(helpers/to-observable): fix error when destroying not created instances
- fix(components/theme): fix error when we get current theme from root element
- fix(components/\*): small fixes for found bugs in 1.2.0-rc,1

## [1.2.0-rc,1](https://github.com/zyfra/Prizm) (19-06-2023)

### Features

- feat(components/input-carousel): added component input-carousel which work with input-layout and unnecessarily added left-right buttons [391](https://github.com/zyfra/Prizm/issues/391)
- deprecated(components/carousel): instead of this you can use input-carousel
- ci: added publishing draft deploys to draft demo site [379](https://github.com/zyfra/Prizm/issues/379)
- ci: added publishing draft deploys to next demo site [378](https://github.com/zyfra/Prizm/issues/378)
- feat(components/input-layout-date-time): devided to seperate components
- feat(components/input-layout-date-time-range): added time output and seperato to multiple inputs [293](https://github.com/zyfra/Prizm/issues/293)
- feat(components/input-date-multi): no switch event between absolute and relative modes prizm-input-date-multi [[393](https://github.com/zyfra/Prizm/issues/393)](https://github.com/zyfra/Prizm/issues/393)
- feat(components/overlay): added ability to control backdrop color and opacity [[373](https://github.com/zyfra/Prizm/issues/373)](https://github.com/zyfra/Prizm/issues/373)
- feat(components/dropdown): added pass current global theme to dropdown [[342](https://github.com/zyfra/Prizm/issues/342)](https://github.com/zyfra/Prizm/issues/342)
- feat(components/tab): added ability to prevent tab open [195]((https://github.com/zyfra/Prizm/issues/195)
- feat(components/navigation): added the ability to hide the "hierarchical" view button [358](https://github.com/zyfra/Prizm/issues/358)
- feat(components/cron): added ability to show human readable value in cron #365
- feat(helpers/let): added ability to get current context from export via template ref

### BUG FIXES

- fix(components/cron): cannot write date to start date input [380](https://github.com/zyfra/Prizm/issues/380)
- fix(components/cron): show not full date in day tab [381](https://github.com/zyfra/Prizm/issues/381)
- fix(components/dropdown-host): cannot be used to register form controls with a parent formGroup directive [390](https://github.com/zyfra/Prizm/issues/390) [389](https://github.com/zyfra/Prizm/issues/390)
- fix(components/mask): in live demo, it is not possible to enter text into an input with a mask [[281](https://github.com/zyfra/Prizm/issues/281)](https://github.com/zyfra/Prizm/issues/281)
- fix(components/navigation): changes the navigation color when the side menu is hidden [[278](https://github.com/zyfra/Prizm/issues/278)](https://github.com/zyfra/Prizm/issues/278)
- fix(components/polymorph): does not work component template without context [265](https://github.com/zyfra/Prizm/issues/265)
- fix(components/table): pass does not right index [[260](https://github.com/zyfra/Prizm/issues/260)](https://github.com/zyfra/Prizm/issues/260)
- fix(components/select): fix hover and selected item colors in datepicker dropdowns [388](https://github.com/zyfra/Prizm/issues/388) [403](https://github.com/zyfra/Prizm/issues/403) [341](https://github.com/zyfra/Prizm/issues/341)
- fix(components/calendar-month): no hover when hovering over a month [301](https://github.com/zyfra/Prizm/issues/301)
- fix(helpers/to-observable): fix error when destroying not created instances
- fix(components/theme): fix error when we get current theme from root element

## [1.0.1](https://github.com/zyfra/Prizm) (31-05-2023)

### Features

- feat(plugin/update-version): added ability to update dependencies for changed version [MR](https://github.com/zyfra/Prizm/pull/367)
- feat(ci): added support to update full dependencies when we publish pre/draft release [MR](https://github.com/zyfra/Prizm/pull/367)
- feat(components/cron): add min/max validators for start and end date [364](https://github.com/zyfra/Prizm/issues/364) [MR](https://github.com/zyfra/Prizm/pull/362)
- feat(components/select): clear search value after close modal [MR](https://github.com/zyfra/Prizm/pull/362)
- feat(doc): add pristine, dirty, touched controls to api page for form control components
- feat(components/input-layout): clear button does not show on focus with keyboard [356](https://github.com/zyfra/Prizm/issues/356) [MR](https://github.com/zyfra/Prizm/pull/362)
- feat(components/inputs): add ngModelOptions to inner inputs [345](https://github.com/zyfra/Prizm/issues/345) [360](https://github.com/zyfra/Prizm/issues/360) [MR](https://github.com/zyfra/Prizm/pull/351)
- feat(doc/zone-event): add page with examples to doc [MR](https://github.com/zyfra/Prizm/pull/351)
- feat(components/charts): add example with update color callback [292](https://github.com/zyfra/Prizm/issues/292) [MR](https://github.com/zyfra/Prizm/pull/368)

### BUG FIXES

- fix(components/input-text): set only dirty afte clear value [354](https://github.com/zyfra/Prizm/issues/354) [MR](https://github.com/zyfra/Prizm/pull/362)
- fix(ci): fix prereleased-released actions [MR](https://github.com/zyfra/Prizm/pull/367)
- fix(components/cron): fix end date label [362](https://github.com/zyfra/Prizm/pull/362) [MR](https://github.com/zyfra/Prizm/pull/362)
- fix(components/input-select): falsy values does not display in dropdown [331](https://github.com/zyfra/Prizm/issues/331) [MR](https://github.com/zyfra/Prizm/pull/362)
- fix(components/input-layout): now show status text [346](https://github.com/zyfra/Prizm/issues/346) [MR](https://github.com/zyfra/Prizm/pull/347)
- fix(components/input-multi-select): not display date after write value [332](https://github.com/zyfra/Prizm/issues/332) [MR](https://github.com/zyfra/Prizm/pull/370)
- fix(components/input-select): update inner template after disable/enable [335](https://github.com/zyfra/Prizm/issues/335) [MR](https://github.com/zyfra/Prizm/pull/370)
- fix(components/input-date-time): add auto correction time [66](https://github.com/zyfra/Prizm/issues/66) [MR](https://github.com/zyfra/Prizm/pull/369)
- fix(componets/ouside): flickering event emits inside/outside [366](https://github.com/zyfra/Prizm/issues/355) [MR](https://github.com/zyfra/Prizm/pull/351)

## [1.0.0](https://github.com/zyfra/Prizm) (24-05-2023)

### Features

- feat(chore): add linter to sort html attr   [MR](https://github.com/zyfra/Prizm/pull/311)
- feat(ast): remove angular from peer dependencies
- feat(ast): added utils to manipulate with semver version
- feat(nx-plugin): added new generator for manipulate publishable versions and examples to doc

### BUG FIXES

- fix(components/table): in a table with a tree-like data structure, \*ngIf does not work correctly for nested elements [235](https://github.com/zyfra/Prizm/issues/235)
- fix(components/input-layout): no prompt text for Input, InputSelect containing validation errors is displayed [315](https://github.com/zyfra/Prizm/issues/315)
- fix(components/input-select): value in the InputSelect field is displayed incorrectly [314](https://github.com/zyfra/Prizm/issues/314)
- fix(components/dropdown-host): does not react to [isOpen] changes [316](https://github.com/zyfra/Prizm/issues/316)

## [1.0.0-rc.2](https://github.com/zyfra/Prizm) (19-05-2023)

### Features

- feat(input-layout): ability was added to show status messages from controls
- chore: splitted angular file to seperated project
- feat(components/dropdown-host): ability was added to control auto close on outside click
- feat(components/select-input): we deprecated old prizm-select, and created new prizm-select-input which you can use with our layout
- feat(components/input-layout): add support directives from control to support components with dropdown
- feat(doc/select-input): update api page
- feat(components/dropdown-host): added new input for add another host instead of default element
- feat(components/input-layout): change logic appear layers on disabled'
- feat(components/input-date-time): added new component which supports input layout with new page in docs [160](https://github.com/zyfra/Prizm/issues/160) [185](https://github.com/zyfra/Prizm/issues/185) [66](https://github.com/zyfra/Prizm/issues/66) [155](https://github.com/zyfra/Prizm/issues/155)
- feat(components/input-date): added new component which supports input layout with new page in docs
- feat(components/input-multi-select): added new component which supports input layout with new page in docs [115](https://github.com/zyfra/Prizm/issues/115) [159](https://github.com/zyfra/Prizm/issues/159) [184](https://github.com/zyfra/Prizm/issues/184) [243](https://github.com/zyfra/Prizm/issues/243) [202](https://github.com/zyfra/Prizm/issues/202) [161](https://github.com/zyfra/Prizm/issues/161)
- feat(components/input-time): added new component which supports input layout with new page in docs
- feat(components/input-date): added new component which supports input layout with new page in docs
- feat(components/input-month): added new component which supports input layout with new page in docs
- feat(components/input-month-range): added new component which supports input layout with new page in docs
- feat(components/input-date-range): added new component which supports input layout with new page in docs
- feat(docs/input-date-multi): page in doc updated
- feat(components/input-select): added new component which supports input layout with new page in docs [184](https://github.com/zyfra/Prizm/issues/184) [205](https://github.com/zyfra/Prizm/issues/205) [245](https://github.com/zyfra/Prizm/issues/245) [29](https://github.com/zyfra/Prizm/issues/29)
- feat(components/input-layout-date-time-range): the overlay window is now closed by clicking in the non-modal window only not when selecting date or time
- feat(doc/live-demo): added controller to live demo for add/delete required validator
- feat(components/accordion): dded ability to override padding in prizm-accordion [MR](https://github.com/zyfra/Prizm/pull/271) [262](https://github.com/zyfra/Prizm/issues/262)
- feat(components/input-layout-\*): added fully sypport input-layout features for new input-layout-\_ components [63](https://github.com/zyfra/Prizm/issues/63) [231](https://github.com/zyfra/Prizm/issues/231)

### BUG FIXES

- fix(components/splitter): there was an error with the gutter at runtime [MR](https://github.com/zyfra/Prizm/pull/271) [266](https://github.com/zyfra/Prizm/issues/266)
- fix(components/sidebar): deprecated field header was required in PrizmSidebarOptions [MR](https://github.com/zyfra/Prizm/pull/271) [272](https://github.com/zyfra/Prizm/issues/272)
- fix(components/sidebar): PrizmSidebarService buttons could not be set to disabled state [MR](https://github.com/zyfra/Prizm/pull/271) [261](https://github.com/zyfra/Prizm/issues/261)
- fix(chore): fixed versions that interfered with the installation of our packages
- fix(components/input-password): when disabled is true, the "show password" button does not disable.
- fix(doc/input-text): fix error in api page
- fix(components/input-layout-date-time): the old flicker time selection bug has been fixed

## [1.0.0-rc.1](https://github.com/zyfra/Prizm) (11-05-2023)

### BUG FIXES

- fix(components/dropdown): fix placement error [218](https://github.com/zyfra/Prizm/issues/215) [MR](https://github.com/zyfra/Prizm/pull/236)
- fix(doc/getting-started): corrected path for connecting icons [193](https://github.com/zyfra/Prizm/issues/190) [244](https://github.com/zyfra/Prizm/issues/244)
- fix(components/select): stringify did not work for falsy values [229](https://github.com/zyfra/Prizm/issues/228) [MR](https://github.com/zyfra/Prizm/pull/237)
- fix(chore): fix tests and linters [MR](https://github.com/zyfra/Prizm/pull/232)
- fix(chore): fix husky check-brench-name checker [MR](https://github.com/zyfra/Prizm/pull/232)
- fix(components/dropdown-host): remove first emit isOpenChange
- fix(components/widget): card does not stretch to full height inside prizm-widget [256](https://github.com/zyfra/Prizm/issues/256) [MR](https://github.com/zyfra/Prizm/pull/254)

### Features

- feat(chore): update ngxmask library to 14 version [MR](https://github.com/zyfra/Prizm/pull/254)
- feat(components/dropdown): added ability to control dropdown styles [224](https://github.com/zyfra/Prizm/issues/224) [MR](https://github.com/zyfra/Prizm/pull/236)
- feat(components/cron): added button to reset to last submitted or initial value [188](https://github.com/zyfra/Prizm/issues/188) [MR](https://github.com/zyfra/Prizm/pull/238)
- feat(components/sidebar): added outerContent input to pass full content for example with your scrollbar [199](https://github.com/zyfra/Prizm/issues/199) [MR](https://github.com/zyfra/Prizm/pull/239)
- feat(components/sidebar): added headerTemplate input to pass your header with close button [131](https://github.com/zyfra/Prizm/issues/131) [MR](https://github.com/zyfra/Prizm/pull/239)
- feat(components/sidebar): content container is not stretching to full height [130](https://github.com/zyfra/Prizm/issues/130) [MR](https://github.com/zyfra/Prizm/pull/239)
- feat(components/sidebar): add input to control overlay zIndex [223](https://github.com/zyfra/Prizm/issues/223) [MR](https://github.com/zyfra/Prizm/pull/239)
- feat(doc/toggle): update content of example to show current value [234](https://github.com/zyfra/Prizm/issues/234) [MR](https://github.com/zyfra/Prizm/pull/240)
- feat(doc/table): added the possibility of controlling the display of the column [235](https://github.com/zyfra/Prizm/issues/235) [MR](https://github.com/zyfra/Prizm/pull/241)
- feat(components/splitter): added ability to more flexibly style PrizmSplitterComponent gutter [70](https://github.com/zyfra/Prizm/issues/70) [MR](https://github.com/zyfra/Prizm/pull/252)
- feat(chore): update angular to 14 version [MR](https://github.com/zyfra/Prizm/pull/232)
- feat(chore): update nx to 14 version [MR](https://github.com/zyfra/Prizm/pull/232)
- feat(components/polymorph): add passing injector to template [MR](https://github.com/zyfra/Prizm/pull/232)

### Breaking changes

- BC(components/dropdown-host): remove parentZone input [MR](https://github.com/zyfra/Prizm/pull/232)

## [1.0.0-beta.35](https://github.com/zyfra/Prizm) (28-04-2023)

### Features

- feat(doc): now our api page checker supports work with directives [MR](https://github.com/zyfra/Prizm/pull/226)
- feat(components/sidebar): add new optional parameter for control can we close sidebar or not [194](https://github.com/zyfra/Prizm/issues/194) [MR](https://github.com/zyfra/Prizm/pull/226)
- feat(components/navigation-menu): added ability to provide childrenHandler via token or view input parameter [220](https://github.com/zyfra/Prizm/pull/220)

### Bug fixes

- fix(components/hint): fixed hint may overlap its target [200](https://github.com/zyfra/Prizm/issues/200) [86](https://github.com/zyfra/Prizm/issues/86) [149](https://github.com/zyfra/Prizm/issues/149)
- fix(components/navigation): Fixed message, added borders. [MR](https://github.com/zyfra/Prizm/pull/221)
- fix(components/breadcrumbs): added option to show only icon in breadcrumb, removing 8px gap and empty text padding. [MR](https://github.com/zyfra/Prizm/pull/222)
- fix(components/navigation-menu): removed duplicate template outlet for headerExtraTemplate [MR](https://github.com/zyfra/Prizm/pull/225)

### Breaking changes

- BREAKING CHANGE(components/splitter): refactored splitter component, removed setAreasSize method, instead of it add new inputs size, minSize to control size [MR](https://github.com/zyfra/Prizm/pull/210) [69](https://github.com/zyfra/Prizm/issues/69)

## [1.0.0-beta.34](https://github.com/zyfra/Prizm) (27-04-2023)

### Features

- feat(plugin): new @prizm-ui/nx-plugin with all our generators and executors for manipulate code
- feat(doc): new page with info how to use our migrator
- feat(ast): now our code manipulator support changing in new ts version >4.7

### Breaking changes

- feat(testid): update data-testid attributes by RFC [MR](https://github.com/zyfra/Prizm/pull/206)
- feat(cb3-to-prizm): remove @prizm-ui/cb3-to-prizm lib, move to @prizm-ui/nx-plugin

## [1.0.0-beta.33](https://github.com/zyfra/Prizm) (24-04-2023)

### Features

- feat(cb3-to-prizm): add textarea support to migrate
- feat(doc/ast): add example with migration of textarea

### BUG FIXES

- fix(chore): fix error for template to create issues [201](https://github.com/zyfra/Prizm/issues/201)
- fix(doc/indicator): fix import module name in example [203](https://github.com/zyfra/Prizm/issues/203)
- fix(components/select): remove unnecessary hint [186](https://github.com/zyfra/Prizm/issues/186)
- fix(ci): github error with memory leak

## [1.0.0-beta.32](https://github.com/zyfra/Prizm) (23-04-2023)

### Features

- feat(doc): add how to change and use our i18 library info [141](https://github.com/zyfra/Prizm/issues/141)
- feat(components/spinner): new spinner component
- feat(doc/spinner): add doc page about spinner component
- feat(components/hint): add input to pass context
- feat(components/hint): add show input
- feat(doc/hint): update doc for hint
- feat(helpers/log): new decorator **PrizmLogExecution** and unit tests for its
- feat(ast): new template tasks, task to change typescript code with unit tests for its
- feat(cb3-to-prizm): add unit tests to stable our migrator
- feat(doc/cb3-to-prizm): add info how to use our migrator
- feat(doc/ast): add info how to use our ast library

### BUG FIXES

- fix(components/select): fix error with disable when searchable is false

## [1.0.0-beta.31](https://github.com/zyfra/Prizm) (17-04-2023)

### BUG FIXES

- fix(chore): fix es5-ext, fix es6-set version
- fix(chore): removed cli-color library
- fix(chore): removed fantasticon

## [1.0.0-beta.30](https://github.com/zyfra/Prizm) (14-04-2023)

### Features

- feat(ci): automatically create comments in issue after PR were updated, created, or closed [143](https://github.com/zyfra/Prizm/issues/143)
- feat(ci): automatically create comments in issue after PR was released 143[https://github.com/zyfra/Prizm/issues/143]
- feat(components/chips): new chips-item added to lib [162](https://github.com/zyfra/Prizm/issues/162)
- feat(doc/chips): new chips-item added to doc [162](https://github.com/zyfra/Prizm/issues/162)
- feat(components/cron): added new input to hide cron result [166](https://github.com/zyfra/Prizm/issues/166)
- feat(components/cron): added new input to filter items from every tab [163](https://github.com/zyfra/Prizm/issues/163)
- feat(doc/input-date-time): add example with required [124](https://github.com/zyfra/Prizm/issues/124)
- feat(doc/icons): now on click icon name will be copied to clipboard [150](https://github.com/zyfra/Prizm/issues/150)
- feat(doc/old-icons): now on click old icon name will be copied to clipboard [150](https://github.com/zyfra/Prizm/issues/150)
- feat(components/navigation-menu): replace deprecated menu
- feat(components/button): now you can pass polymorph content as icon to use any icon set [151](https://github.com/zyfra/Prizm/issues/151)
- feat(doc/icon-button): add example with you custom icon [151](https://github.com/zyfra/Prizm/issues/151)
- feat(components/sidebar): ability was added to hide footer [153](https://github.com/zyfra/Prizm/issues/153)

### BUG FIXES

- fix(components/input-date-time): required did not set [124](https://github.com/zyfra/Prizm/issues/124)
- fix(components/input): reset touched state on control.reset() [114](https://github.com/zyfra/Prizm/issues/114)
- fix(components/sidebar): scrollbar content now exanded to all view [130](https://github.com/zyfra/Prizm/issues/130)
- fix(components/tabs): remove title on tab with idx [152](https://github.com/zyfra/Prizm/issues/152)
- fix(components/multi-select): fix bug with red border on required [161](https://github.com/zyfra/Prizm/issues/161)
- fix(components/multi-select): chips can be deleted on disabled multi-selected [159](https://github.com/zyfra/Prizm/issues/159)
- fix(chore): prettier gets different result on different os

## [1.0.0-beta.29](https://github.com/zyfra/Prizm) (07-04-2023)

### Features

- feat(ast): new library for help to write you migrator and code updater
- feat(cb3-to-prizm): new migrator for help to migrate to prizm from pervious component base 3
- feat(ci): ability was added for work with forked pull requests
- feat(doc/dialog): add example with close in template buttons [123](https://github.com/zyfra/Prizm/issues/123)
- feat(components/table): added example with new `PrizmTableDataSource`  [133](https://github.com/zyfra/Prizm/issues/133)
- feat(components/table): added  `PrizmTableDataSource` class [133](https://github.com/zyfra/Prizm/issues/133)
- feat(components/table): added example with new `PrizmTableDataSource`  [133](https://github.com/zyfra/Prizm/issues/133)

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
- fix(components/select): emit val change event with same value [91](https://github.com/zyfra/Prizm/issues/91)
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
- feat(components/navigation): now theme does not switch when theme was changed'
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
- fix(components/text-arrea,input-chips): fix checking NgControl
- fix(components/overlay): fix disabled/enabled state

### Breaking changes

- BREAKING CHANGE: Migrate PrizmThemeModule to prizm/theme library
- fix(components/radio)!: remove formControl input
- ref(components/table-old): move to deprecated library
- ref(components/navigation): move to deprecated library

## [1.0.0-beta.22](https://github.com/zyfra/Prizm) (27-01-2023)

### Features

- feat(components/paginator) add new output paginatorChange
- feat(components/paginator): add showMoreDisabled input
- feat(doc/polymorph): add documentation with examples
- feat(doc/split-button): add example with dropdown

### BUG FIXES

- fix(components/paginator) fix pageChange output logic
- fix(components/paginator): corrected multiple output trigger
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
- fix(components/date): open time picker when open date picker
- fix(doc/tabs): second tab content in api page
- fix(doc/confirm-dialog): PrizmConfirmDialog, horizontal view: пример кода не верный
- fix(components/table): fix tests
- fix(components/splitter): resize events. bug fix with classes
- fix(components/stepper): fix a bug with the order of steps

### Breaking changes

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

### Breaking changes

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

### Breaking changes

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

- fix(components): test-id was added
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
