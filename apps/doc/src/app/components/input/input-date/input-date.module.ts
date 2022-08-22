import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { InputDateComponent } from './input-date.component';
import { PolymorphModule, ZuiInputDateModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZuiInputDateBaseExampleComponent } from './examples/base/input-date-base-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    ZuiInputDateModule,
    RouterModule.forChild(generateRoutes(InputDateComponent)),
  ],
  declarations: [
    ZuiInputDateBaseExampleComponent,
    InputDateComponent
  ],
  exports: [InputDateComponent],
})
export class InputDateModule {}
