## Docs

- Настроить линтер по общим правилам
- import-module.md переименовать в setup-module.md
- Вынести инфу из figma/wiki в доки компонентов

### Button

- Examples - необходим naming, разделить на base, custom
- Zurab - проверить настройки prettier
- Добавить public/private...

### Spit Button

- Вынести отдельно
- Добавить dropdown host в примеры 

### Dropdown-host

- template.html -> my.component.html
- exampleModule -> setupModule

### Checkbox

- example-checkbox-component - checkbox
- Добавить public/private...

### Example-component

- Удалить

### Indicators

- example-indicators -> indicators

### Radio

- example-radio-component -> radio-button
- radio-button-example-base -> radio-button-basic-example
- сделать radio-button-example-base c одним свойством
- и остальные твои компоненты так же.

### Hint

- Добавить public/private для readonly
- template.html -> my.component.html
- examples -> hint-basic-example и тд

### Icon

- 1 -> icon-basic-example
- template.html -> my.component.html
- readonly -> public readonly

### Input

- input-example -> input-outer-example
- input/_.component._ -> /_.component._

### Loader

- template.html -> my.component.html
- Добавить public/private...

### Paginator

- paginator-example-base -> paginator-basic-example

### Toggle

- template.html -> my.component.html
- Добавить public/private...

### Tooltip

- template.html -> my.component.html
- Добавить public/private...
- basic -> tooltip-basic-example

## SDK

- Добавить либу для:
- DestroyService
- вынести все(?) ищ libs/components/src/lib/decorators

## Next

### Indicator

- сделать компоенентом

### Icon

- Добавить в примечание (icon-font-builder) что эти файлы автогенерируемые

### @Core

- Избавиться от этого, перейти на AbstractPrizmControl
- Избавиться от PrizmWrappedFormComponent

### Radio-button

- перейти на AbstractPrizmControl

### Button

- Вынести отдельно Split Button
- Добавить public/private...

### PrizmDroppableDirective

- убрать?

### polymorpheus

- посмотреть naming
- libs/components/src/lib/directives/polymorpheus/classes/component.ts -> polymorpheus-component.class.ts
