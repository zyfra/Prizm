```ts
import { NgModule } from '@angular/core';
import { PrizmNavigationModule } from '@prizm-ui/components';
import { PrizmHeaderModule } from './prizm-header.module';

// ...

@NgModule({
  imports: [
    // ...
    PrizmNavigationModule,
    PrizmHeaderModule,
  ],
})
export class MyModule {}
```
