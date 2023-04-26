# Contributing

---

## Issue

**Любое обращение начинается с создания issue**

#### Увидели проблему

1. Найти похожий issue или создать новый issue

#### Хочу исправить проблему

1. Найти или создать issue
2. Получить апрув от участников команды на выполнение
3. Прислать MR

#### Как получить доступ в gitlab

Для получения доступа напишите на почту "denis.biktanov@idp.zyfra.com" с заголовком письма "PrizmUI - получение доступа"

#### Создание issue

(?) Посмотрите требования к заголовкам MR, Issue

1. Зайти в https://github.com/zyfra/Prizm/issues
2. Добавить заголовок.
3. Выбрать шаблон из предложенного
4. Оформить и отправить на рассмотрение

## Требования к заголовку MR, Issue

Заголовок сообщения коммитов и MR должны состоять из:

```
<type>(<scope>/(component?)): <short summary>
```

#### type

Тип коммита

Должен быть одним из:

- **build**: Изменения в способе сборки, например nx,
- **ci**: Изменения в pipeline .gitlab-ci.yml
- **docs**: Документация
- **feat**: Новая фича
- **fix**: Фикс бага
- **perf**: Изменения в первормансе
- **refactor**: Изменения которые не исправляют баги и не добавляют новую фичу, а лишь изменяют качество кодовой базы.
- **test**: Добавление теста

#### scope

Окружение npm либа или же приложение

Должен быть одним из:

- core
- components - КБ
- charts
- helpers - либа хелперов
- schematics - либа схематиков, установщиков
- executors - тулы для самой работы sdk
- generators - схематики для самой sdk
- doc - приложение витрины компонентов

##### component

Часть непосредственно самого scope.

Для components может быть:

`button`, `calendar`, `input` и т.д.

## Стиль написания кода

Данный документ наследует общий codestyle для разработки - [CodeStyle](/codestyle).

## Структура проекта docs:

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

#### Naming

Модули, компоненты, директивы, pipe и все что выступает в public через `import {...} from "@prizm-ui/,,,"`
Должны иметь префикс - `prizm`

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

`libs/components/src/lib/exceptions`

Пример:

```ts
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
