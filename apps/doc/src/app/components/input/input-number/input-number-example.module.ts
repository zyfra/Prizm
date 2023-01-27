import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';

import { InputNumberBasicExampleComponent } from './examples/input-number-basic-example/input-number-basic-example.component';
import { InputNumberExampleComponent } from './input-number-example.component';
import { PrizmInputNumberModule } from '@prizm-ui/components';
import { InputNumberCounterExampleComponent } from './examples/input-number-counter-example/input-number-counter-example.component';

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
    InputNumberBasicExampleComponent,
    InputNumberExampleComponent,
    InputNumberCounterExampleComponent,
  ],
  exports: [InputNumberExampleComponent],
})
export class InputNumberExampleModule {}
