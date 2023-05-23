## CodeStyle Guide

---

### Базовые

Мы придерживаемся следующих CodeStyle:

- [HTML CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
- [TypeScript Style Guide](https://google.github.io/styleguide/tsguide.html)
- [Angular coding style guide](https://angular.io/guide/styleguide)

#### Исключения TypeScript Style Guide:

В пункте [TypeSystem](https://google.github.io/styleguide/tsguide.html#type-system)

Разрешено и рекомендовано:

```
const x: boolean = true;
```

#### Базовые форматтеры кода, линтеры

Репозитории с установленными правилами содержит правила в файлах

```
.eslintrc.json
.prettierrc.json,
.stylelintrc.json
```

### Best Practices

#### Angular.

- Короткие заметки по Angular - [Cheat Sheet](https://angular.io/guide/cheatsheet).
- Сниппеты для улучшения кода на Angular - [30-seconds-of-angular](https://github.com/fetis/30-seconds-of-angular).

#### Angular Performance.

Необходимо понимать как устроен Angular, и за счет чего работает “реактиваность” и обновление контента.
[Почитать](https://blog.angular-university.io/how-does-angular-2-change-detection-really-work/)

- OnPush - желательно всегда использовать. [Почитать](https://blog.angular-university.io/onpush-change-detection-how-it-works/)
- Подписался - отпишись, unsubscribe, takeWhile (никак не take(1)) [Почитать](https://medium.com/ngx/why-do-you-need-unsubscribe-ee0c62b5d21f)
- Не использовать в приложениях “impure” pipe.
- Помнить о zonejs, правильно оборачивать NgZone. [Почитать](https://indepth.dev/posts/1434/running-event-listeners-outside-of-the-ngzone) и [Почитать2](https://blog.thoughtram.io/angular/2017/02/21/using-zones-in-angular-for-better-performance.html)
- Хак setTimeOut(func,0), это прежде всего хак, и это уже означает что что то делаете не так.
- Нужно понимать как работает DI. Провайдить безумно все в рут не следует. [Посмотреть схему](https://christiankohler.net/2c07040f5b28e2b086aab313309719a6/angular-di-infographic.pdf)
- Максимум в модули, а лучше в lazy.
- Роутинг организовывать стандартными методами, RouterModule. Помнить что большинство state можно пробросить через него, и то что бывает различные способы их получить (QueryParams, Params, MatrixParams)
- Помнить о существовании HttpContext, особенно для interceptor
- Angular шаблоны.

#### Структура и чистота.

Следует придерживать следующего CodeStyle в element-name, в самих секциях группировки - сортировка по смыслу и алфавиту:

- якорь шаблона (#myId)
- управляющие директивы, чаще структурные директивы
- структурные директивы
- аттрибутные директивы
- input
- динамические аттрибуты html,
- output
- статичные аттрибуты html

Пример:

```html
<some-element
  class="element-class"
  #myElement
  *ngIf="condition"
  [myAttrDirective]="someName"
  [label]="label"
  [attr.alt]="alt"
  [ngClass]="'some'"
  [class.my-class-name]="ifTrue"
  [style.width.px]="width"
>
</some-element>
```

#### Функции в шаблонах.

Не следует `[color]="getControlColor('selectedValueField')"`,
допустимо если это обычный getter, без какой либо нагруженной логики.

#### Дублирование в шаблоне.

Простота - лучшее решение. Если виден повторяющийся кусок вынесите в ng-template.

#### Решение дублей в стилях.

```html
<comp
  class="component"
  [style.height]="iconSize + 'px'"
  [style.min-height]="iconSize + 'px'"
  [style.min-width]="iconSize + 'px'"
  [style.width]="iconSize + 'px'"
></comp>
```

можно через css vars и отдать остальное в css:

template.html:

```html
<comp class="component" [style.--icon-size]="iconSize"></comp>
```

.component.css

```css
height: var(--icon-size);
```

А еще можно и

```
[style.height.px]="iconSize"
```

### TS:

#### Чистота класса

Сперва должны идти блоки public, затем private, причем если есть свойство readonly то оно выше, и сортировка в блоках лучше указывать по алфавиту если между членами нет какой либо смысловой связи, или же если свойство является gettter/setter.

Пример:

```ts
public readonly a: string;
public readonly b: string;


public ab: string;
public abc: string;


public get abba(v: string): void {
this._abba = v;
}
private _abba: string;


private readonly aba: string;
private abca: string;
```

#### Название методов, свойств.

Пишите названия честно, правильно. Методы - глаголы, прилагательные.

Хорошо если в проекте будет заданы одни и те же глаголы.
Правильно юзайте антонимы `add/remove`, `increment/decrement`, `open/close`, `begin/end`, `subscribe/unsubscribe`

Подчеркивание не обязательно для указания приватности:

```
private _trimSourceTagName(): string
```

#### Методы, функции.

Не следует держать чистые функции в классах. Если можно метод выделить в чистую функцию - делайте.

### Общее

Если ваш код напоминает вам какой либо паттерн → реализуйте его и зовите свойства своими именами.

Отнеситесь к написанию кода как к технической статье, ожидая что ваш код будут читать. Правильно употребляйте переносы, заголовки и “знаки препинания”

Не используемые методы, пустые методы следует убрать.

действия производимые из шаблона (output) события, следует называть как обработчик например: `(click)="dictionariesFilter()"` → `(click)="onDictionaryFilterClick()"`

Дубли порождают доп баги и сложность сопровождения. Избавляйтесь от них.

### Promise vs Observable

Рекомендуем использовать в большинстве случаев для работы с потоками данных Observable. Исключение утилитный функционал (Напр: работа с файловой системой, генераторы,..), и если эта библиотека без внешних зависимостей.

Почему:

- Promise является нетерпеливым, в то время как Observable - ленивым,
- Promise всегда асинхронный, в то время как Observable может быть как асинхронным, так и синхронным,
- Promise может предоставить одно значение, в то время как Observable - поток значений (от 0 до нескольких значений),
- Вы можете применить операторы RxJS к Observable, чтобы получить новый поток значений.
- Для Promise необходимо придумывать механизмы отмены.
