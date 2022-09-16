```ts
import { NgModule } from '@angular/core';
import { ZuiToastModule, zuiToastOptionsProvider } from '@digital-plant/zui-components';

@NgModule({
  imports: [
    // required - import our module
    ZuiToastModule,
  ],
  providers: [
    /* optional - we can override default options */
    zuiToastOptionsProvider({
      timer: 1000
    })
  ]
})
export class MyModule {
}
```
