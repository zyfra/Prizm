```ts
// Использование svg
import { NgModule } from '@angular/core';
import { PrizmIconsComponent, PrizmIcons16Component } from '@prizm-ui/icons';

// ...

@NgModule({
  imports: [
    // for base variant
    PrizmIconsComponent,
    // for 16 varian
    PrizmIcons16Component,
  ],
})
export class MyModule {}
```

<!--    TODO: 4.0.0 rc.2 add font support for icons -->

[//]: # '```bash'
[//]: # ' # Использование шрифтов'
[//]: # ' # Добавить в конфиг файл ангуляра для использования шрифтов'
[//]: # ' "styles": ['
[//]: # '    ...'
[//]: # '    "@prizm-ui/icons/base/src/styles/styles.less"'
[//]: # '  ],'
[//]: # '```'
