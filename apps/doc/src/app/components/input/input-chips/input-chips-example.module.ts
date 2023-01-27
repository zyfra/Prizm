import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm-ui/doc';

import { InputChipsExampleBaseComponent } from './examples/input-chips-basic-example/input-chips-basic-example.component';
import { InputChipsExampleComponent } from './input-chips-example.component';
import { PrizmChipsModule, PrizmInputTextModule } from '@prizm-ui/components';
import { InputChipsOuterExampleComponent } from './examples/input-chips-outer-example/input-chips-outer-example.component';

@NgModule({
  imports: [
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(InputChipsExampleComponent)),
    PrizmInputTextModule,
    PrizmChipsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [InputChipsExampleBaseComponent, InputChipsExampleComponent, InputChipsOuterExampleComponent],
  exports: [InputChipsExampleComponent],
})
export class InputChipsExampleModule {}
