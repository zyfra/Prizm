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

```ts
//Использование шрифтов
//Добавить в конфиг файл ангуляра для использования шрифтов
const configFile = {
  assets: [
    {
      glob: '**/*',
      input: '@prizm-ui/icons/src/styles/icons-base',
      output: 'assets/prizm/icons/base',
    },
    {
      glob: '**/*',
      input: '@prizm-ui/icons/src/styles/icons-full',
      output: 'assets/prizm/icons/full',
    },
  ],
  styles: [
    '@prizm-ui/icons/src/styles/styles.less',
    '@prizm-ui/icons/src/styles/icons-base/prizm-base-icons.css',
    '@prizm-ui/icons/src/styles/icons-base/prizm-base-icons-location.css',
    '@prizm-ui/icons/src/styles/icons-full/prizm-full-icons.css',
    '@prizm-ui/icons/src/styles/icons-full/prizm-full-icons-location.css',
  ],
};
```
