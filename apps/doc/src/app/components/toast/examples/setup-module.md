```ts
import { NgModule } from '@angular/core';
import { PrizmToastModule, prizmToastOptionsProvider } from '@prizm-ui/components';

@NgModule({
  imports: [
    // required - import our module
    PrizmToastModule,
  ],
  providers: [
    /* optional - we can override default options */
    prizmToastOptionsProvider({
      timer: 1000
    })
  ]
})
export class MyModule {
}
```
