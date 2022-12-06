# Flag icons
Библиотека иконок с флагами.
Генерируется двух форматах
- шрифты (В процессе)
- svg файлы 

## TODO
[ ] написать билдер что бы не приходилось вручную делать изменения описанные ниже
[ ] написать схематику для ng-add что бы добавляли пути к css в проект

## Важно
### Неправилльные файлы
Дизайнеры должны также передать файлы svg которые подходят для генерации шрифтов

### Неправилльные названия
Дизайнеры передают только файлы флагов в формате svg с полным навазние типа "AD - Andorra.svg"
Мы предварительно должны их очистить оставив только абривиатуру, что бы названия файла было типа "AD.svg"
Только после этого проверить запуск

### Отрицательные значения
Если атрибуты rx в svg элементах отрицательны то шрифты не будут генеряться, пока устанавливаем 0 в ручную

### После генерации svg-to-ts
#### 1. После генерации svg-to-ts, необходимо вручную изменить name у PrizmIconFlag добавив туда prizmIconFlag my-icons.ts
```typescript
export interface PrizmIconFlag {
  name: PrizmIconFlagEnum | prizmIconFlag;
  data: string;
}
```

#### 2. также важно изменить названия константы competeSet на PRIZM_ICON_FLAGS_SET в файле my-icons.ts


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
