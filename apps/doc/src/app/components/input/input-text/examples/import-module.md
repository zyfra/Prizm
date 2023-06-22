```ts
import { NgModule } from '@angular/core';
import { PrizmInputTextModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// ...

@NgModule({
  imports: [
    // ...
    ReactiveFormsModule,
    FormsModule,
    PrizmInputTextModule,
  ],
})
export class MyModule {}
```
