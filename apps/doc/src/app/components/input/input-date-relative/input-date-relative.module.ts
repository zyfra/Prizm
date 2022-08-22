import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { InputDateRelativeRelativeComponent } from './input-date-relative.component';
import { PolymorphModule, ZuiInputDateRelativeModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZuiInputDateRelativeBaseExampleComponent } from './examples/base/input-date-relative-base-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    ZuiInputDateRelativeModule,
    RouterModule.forChild(generateRoutes(InputDateRelativeRelativeComponent)),
  ],
  declarations: [
    ZuiInputDateRelativeBaseExampleComponent,
    InputDateRelativeRelativeComponent
  ],
  exports: [InputDateRelativeRelativeComponent],
})
export class InputDateRelativeRelativeModule {}
