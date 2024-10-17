```ts
import { NgModule } from '@angular/core';
import { PrizmDropdownHostModule, PrizmDropdownTriggerClickDirective } from '@prizm-ui/components';

// ...

@NgModule({
  imports: [
    // ...
    PrizmDropdownTriggerClickDirective,
    PrizmDropdownHostModule,
  ],
})
export class MyModule {}
```
