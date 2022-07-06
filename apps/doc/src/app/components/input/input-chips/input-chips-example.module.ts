import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { ZuiInputChipsModule } from '@digital-plant/zui-components';
import { InputChipsExampleBaseComponent } from './examples/input-chips-basic-example/input-chips-basic-example.component';
import { InputChipsExampleComponent } from './input-chips-example.component';

@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    RouterModule.forChild(generateRoutes(InputChipsExampleComponent)),
    ZuiInputChipsModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  declarations: [InputChipsExampleBaseComponent, InputChipsExampleComponent],
  exports: [InputChipsExampleComponent],
})
export class InputChipsExampleModule {}
