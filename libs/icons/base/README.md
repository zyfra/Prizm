# ICONS

Библиотека иконок с флагами.
Генерируется двух форматах

- шрифты
- svg файлы

## TODO

[ ] написать билдер что бы не приходилось вручную делать изменения описанные ниже
[ ] написать схематику для ng-add что бы добавляли пути к css в проект

## Важно

### Убрать цвет

В файлах которые передают дизайнеры указан цвет, надо попросить что бы передавали без заливки, а пока заменить вручну цвет на currentColor
что бы svg работало правильно

### Неправилльные названия

Важно получить файлы без вложенных папок с уникальными названиями

### После генерации svg-to-ts

#### 1. После генерации svg-to-ts, необходимо вручную изменить name у PrizmIconSvg добавив туда prizmIconSvg | string my-icons.ts

```typescript
export interface PrizmIconSvg {
  name: PrizmIconSvgEnum | prizmIconSvg | string;
  data: string;
}
```

#### 2. также важно изменить названия константы competeSet на PRIZM_ICON_SET в файле my-icons.ts

## Как сгенерить svg иконки

1. Открыть папку конфига (./configs)
2. Проверить наличие файла ".svg-to-tsrc.js"
3. Запустить комманду "svg-to-ts-constants"

## Как сгенерить шрифты иконки

1. Открыть папку конфига (./configs)
2. Проверить наличие файла ".fantsticiconrc.js"
3. Запустить комманду "fantasticon"

## Что используем

- Для файлов svg: [svg-to-ts-constants](https://www.npmjs.com/package/svg-to-ts)
- Для шрифтов: [fantasticon](https://github.com/tancredi/fantasticon)
- Figma plugin для экспорта [Advanced-SVG-Export](https://www.figma.com/community/plugin/782713260363070260/Advanced-SVG-Export)
