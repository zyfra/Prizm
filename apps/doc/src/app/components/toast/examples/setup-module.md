```ts
import { NgModule } from '@angular/core';
import { PzmToastModule, pzmToastOptionsProvider } from '@digital-plant/pzm-components';

@NgModule({
  imports: [
    // required - import our module
    PzmToastModule,
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
