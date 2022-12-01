# Contributing to SDK

## Добавление нового компонента

// TODO

## Исправление ошибок

// TODO

## Code Style Guide

Данный документ наследует общий codestyle для разработки - [CodeStyle. Best Practices](https://jira.zyfra.com/wiki/pages/viewpage.action?pageId=113012002).
и вносит дополнения.

### Структура проекта docs:

Проект для ведения документации.

`./input` - наименование компонента

```
├── examples
│   ├── setup-module.md - пример установки
│   ├── input-basic-example - базовый пример без лишней конфигурации
│   └── input-validation-example - кастомный пример
├── input
│   ├── input.component.html - документации компонента с примерами, API, Setup
│   ├── input.component.less
│   └── input.component.ts
└── input-example.module.ts
```

#### Документация компонента:

Разделы

#### Description and examples

Раздел с информацией о том как использовать компонент.
Примеры должны начинаться с <component>-basic-example

#### API

Исчерпывающие возможности компонента Input параметров

#### Разделы:

Базовый - включает только input и output
Дополнительный - включает сторонний контент (ng-content)

#### Setup

Информация о установке компонента

#### Examples

Именование:

import-module.md - всегда про setup компонента

<component>-basic-example - базовый пример без лишней конфигурации

<component>-<custom>-example - дополнительный пример

### Структура проекта next:

#### Naming

Модули, компоненты, директивы, pipe и все что выступает в public через `import {...} from "@prizm-ui/,,,"`
Должны иметь префикс - `prizm (zyfra-ui)`

Пример:
`PrizmInputModule`

Именование файлов:

```
my.component.ts
my.component.html
my.component.less
my.module.ts

my.pipe.ts

my.class.ts

my.model.ts
my.models.ts

...
```

**Cтили публикуемые наружу (styles.less).**

Стили не должны попадать в глобальную область видимости.
ViewEncapsulation - всегда Emulated (то что по дефолту).

**Subscribers**

Отписка - всегда сопровождается отпиской.
Для отписок используем

providers: [PrizmDestroyService],

**Переменные (css)**

--prizm-<name>
name - название переменной

**Exceptions**

Ошибки вызываемые в runtime необходимо описывать стандартными механизмами, наследуя от Error

Расположение

`libs/next/src/lib/exceptions`

Пример:

```
export class PrizmPureException extends Error {
constructor() {
super('prizmPure can only be used with functions or getters');
}
}

// use

if (typeof value !== 'function') {
throw new PrizmPureException();
}
```

## Icons

#### Форматы

В базе имеется форматы иконок: 24, 16, 8

24 - базовый

16, 8 - дополнительные, специально перерисованы для случаев когда scale иконки не удачный вариант.

#### Требования к иконкам

- Иконки должны быть с квадратной рамкой
- Оцентрированы
- Изображение не выходит за рамки квадрата
- Для экспорта изображение подготовлено в формате path а не линии.
- Fill-rule правильно обозначен https://github.com/jaywcjlove/svgtofont/issues/79) прогнан через плагин фигмы Fill Rule Editor plug-in,

#### Как добавить новую иконку в КБ:

- Экспортировать иконку из Figma в формате svg
- Положить в SDK /libs/components/assets/icons
- Выполнить сборку шрифтов nx run components:build-icons
