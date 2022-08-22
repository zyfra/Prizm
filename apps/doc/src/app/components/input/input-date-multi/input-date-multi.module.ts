import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { InputDateMultiRelativeComponent } from './input-date-multi.component';
import {
  PolymorphModule,
  ZuiInputDateModule,
  ZuiInputDateMultiModule,
  ZuiInputDateRelativeModule,
  ZuiInputDateTimeModule,
  ZuiInputTimeModule,
} from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZuiInputDateMultiBaseExampleComponent } from './examples/base/input-date-multi-base-example.component';
import { ZuiInputDateMultiFourExampleComponent } from './examples/four/input-date-multi-four-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    ZuiInputDateMultiModule,
    ZuiInputDateTimeModule,
    ZuiInputDateModule,
    ZuiInputTimeModule,
    ZuiInputDateRelativeModule,
    RouterModule.forChild(generateRoutes(InputDateMultiRelativeComponent)),
  ],
  declarations: [
    ZuiInputDateMultiFourExampleComponent,
    ZuiInputDateMultiBaseExampleComponent,
    InputDateMultiRelativeComponent
  ],
  exports: [InputDateMultiRelativeComponent],
})
export class InputDateMultiModule {}
