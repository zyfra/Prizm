import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';

import { InputNumberBasicExampleComponent } from './examples/input-number-basic-example/input-number-basic-example.component';
import { InputNumberExampleComponent } from './input-number-example.component';
import { PrizmInputNumberModule } from '@prizm-ui/components';
import { InputNumberCounterExampleComponent } from './examples/input-number-counter-example/input-number-counter-example.component';
import { InputNumberCounterFloatExampleComponent } from './examples/input-number-counter-float-example/input-number-counter-float-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(InputNumberExampleComponent)),
    ReactiveFormsModule,
    FormsModule,
    PrizmInputNumberModule,
  ],
  declarations: [
    InputNumberCounterFloatExampleComponent,
    InputNumberBasicExampleComponent,
    InputNumberExampleComponent,
    InputNumberCounterExampleComponent,
  ],
  exports: [InputNumberExampleComponent],
})
export class InputNumberExampleModule {}
