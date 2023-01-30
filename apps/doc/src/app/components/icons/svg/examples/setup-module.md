```ts
// Использование svg
import { NgModule } from '@angular/core';
import { PrizmIconsSvgModule } from '@prizm-ui/icons';

// ...

@NgModule({
  imports: [
    // ...
    PrizmIconsSvgModule,
  ],
})
export class MyModule {}
```

```bash
 # Использование шрифтов
 # Добавить в конфиг файл ангуляра для использования шрифтов
 "styles": [
    ...
    "@prizm-ui/icons/base/src/styles/styles.less"
  ],
```
