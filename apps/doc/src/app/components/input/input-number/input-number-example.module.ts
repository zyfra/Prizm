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
import { InputNumberInvalidExampleComponent } from './examples/input-number-invalid-example/input-number-invalid-example.component';
import { InputNumberMinMaxExampleComponent } from './examples/input-number-min-max-example/input-number-min-max-example.component';
import { PrizmIfLanguageDirective } from '@prizm-ui/i18n';
import { InputNumberDisabledExampleComponent } from './examples/disabled-example/input-number-disabled-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(InputNumberExampleComponent)),
    ReactiveFormsModule,
    FormsModule,
    PrizmInputNumberModule,
    InputNumberDisabledExampleComponent,
    PrizmIfLanguageDirective,
  ],
  declarations: [
    InputNumberInvalidExampleComponent,
    InputNumberCounterFloatExampleComponent,
    InputNumberBasicExampleComponent,
    InputNumberExampleComponent,
    InputNumberCounterExampleComponent,
    InputNumberMinMaxExampleComponent,
  ],
  exports: [InputNumberExampleComponent],
})
export class InputNumberExampleModule {}
