```ts
import { NgModule } from '@angular/core';
import {
  PrizmTreeMultiSelectModeDirective,
  PrizmTreeMultiSelectItemDirective,
  PrizmTreeMultiSelectItemComponent,
  PrizmInputTreeMultiSelectComponent,
  PrizmInputTreeMultiSelectCheckboxDirective,
} from '@prizm-ui/components';

@NgModule({
  imports: [
    PrizmTreeMultiSelectModeDirective,
    PrizmTreeMultiSelectItemDirective,
    PrizmTreeMultiSelectItemComponent,
    PrizmInputTreeMultiSelectCheckboxDirective,
    PrizmInputTreeMultiSelectComponent,
  ],
})
export class MyModule {}
```
