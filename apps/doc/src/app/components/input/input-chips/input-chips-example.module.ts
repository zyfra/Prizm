import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';

import { InputChipsExampleBaseComponent } from './examples/input-chips-basic-example/input-chips-basic-example.component';
import { InputChipsExampleComponent } from './input-chips-example.component';
import { ZuiChipsModule, ZuiInputTextModule } from '@digital-plant/zui-components';

@NgModule({
  imports: [
    TuiAddonDocModule,
    RouterModule.forChild(generateRoutes(InputChipsExampleComponent)),
    ZuiInputTextModule,
    ZuiChipsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [InputChipsExampleBaseComponent, InputChipsExampleComponent],
  exports: [InputChipsExampleComponent],
})
export class InputChipsExampleModule {}

