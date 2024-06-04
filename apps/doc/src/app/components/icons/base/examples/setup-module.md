```ts
// Использование svg
import { NgModule } from '@angular/core';
import { PrizmIconsComponent, PrizmIconsFullComponent } from '@prizm-ui/icons';
import { prizmIconsProvideLazyLoader } from '@prizm-ui/icons-loader';
import { prizmIconsFullProvideLazyLoader } from '@prizm-ui/icons-loader/full';

// ...

@NgModule({
  imports: [
    // for base variant
    PrizmIconsComponent,
    // for full variant
    PrizmIconsFullComponent,
  ],
  providers: [
    /**
     * For lazy load full icons
     * use our loader for the get the full icons without having to register
     * */
    prizmIconsFullProvideLazyLoader(),
    /**
     * For lazy load base icons
     * use our loader for the get the icons without having to register
     * */
    prizmIconsProvideLazyLoader(),
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
      input: 'node_modules/@prizm-ui/icons/src/styles/icons-base',
      output: 'assets/prizm/icons/base',
    },
    {
      glob: '**/*',
      input: 'node_modules/@prizm-ui/icons/src/styles/icons-full',
      output: 'assets/prizm/icons/full',
    },
  ],
  styles: [
    'node_modules/@prizm-ui/icons/src/styles/styles.less',
    'node_modules/@prizm-ui/icons/src/styles/icons-base/prizm-base-icons.css',
    'node_modules/@prizm-ui/icons/src/styles/icons-base/prizm-base-icons-location.css',
    'node_modules/@prizm-ui/icons/src/styles/icons-full/prizm-full-icons.css',
    'node_modules/@prizm-ui/icons/src/styles/icons-full/prizm-full-icons-location.css',
  ],
};
```
