```ts
// Использование svg
import { NgModule } from '@angular/core';
import { PrizmIconsComponent, PrizmIconsFullComponent } from '@prizm-ui/icons';

// ...

@NgModule({
  imports: [
    // for base variant
    PrizmIconsComponent,
    // for full variant
    PrizmIconsFullComponent,
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
