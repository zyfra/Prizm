import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';

import { InputNumberBasicExampleComponent } from './examples/input-number-basic-example/input-number-basic-example.component';
import { InputNumberExampleComponent } from './input-number-example.component';
import { ZuiInputNumberModule } from '@digital-plant/zui-components';
import { InputNumberCounterExampleComponent } from './examples/input-number-counter-example/input-number-counter-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    RouterModule.forChild(generateRoutes(InputNumberExampleComponent)),
    ReactiveFormsModule,
    FormsModule,
    ZuiInputNumberModule,
  ],
  declarations: [
    InputNumberBasicExampleComponent,
    InputNumberExampleComponent,
    InputNumberCounterExampleComponent,
  ],
  exports: [InputNumberExampleComponent],
})
export class InputNumberExampleModule {}

