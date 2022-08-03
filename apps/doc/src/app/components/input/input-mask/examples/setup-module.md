```ts
import { NgModule } from '@angular/core';
import { ZuiInputTextModule } from '@digital-plant/zui-components';
import { NgxMaskModule } from 'ngx-mask';

// ...

@NgModule({
  imports: [
    // ...
    ZuiInputTextModule,
    NgxMaskModule.forRoot(),
  ],
})
export class MyModule {}
```

