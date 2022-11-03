```ts
import { NgModule } from '@angular/core';
import { PrizmToastModule, pzmToastOptionsProvider } from '@digital-plant/zui-components';

@NgModule({
  imports: [
    // required - import our module
    PrizmToastModule,
  ],
  providers: [
    /* optional - we can override default options */
    pzmToastOptionsProvider({
      timer: 1000
    })
  ]
})
export class MyModule {
}
```
