import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { InputDateMultiRelativeComponent } from './input-date-multi.component';
import {
  PolymorphModule,
  PzmInputDateModule,
  PzmInputDateMultiModule,
  PzmInputDateRelativeModule,
  PzmInputDateTimeModule,
  PzmInputTimeModule,
} from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PzmInputDateMultiBaseExampleComponent } from './examples/base/input-date-multi-base-example.component';
import { PzmInputDateMultiFourExampleComponent } from './examples/four/input-date-multi-four-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PzmInputDateMultiModule,
    PzmInputDateTimeModule,
    PzmInputDateModule,
    PzmInputTimeModule,
    PzmInputDateRelativeModule,
    RouterModule.forChild(generateRoutes(InputDateMultiRelativeComponent)),
  ],
  declarations: [
    PzmInputDateMultiFourExampleComponent,
    PzmInputDateMultiBaseExampleComponent,
    InputDateMultiRelativeComponent
  ],
  exports: [InputDateMultiRelativeComponent],
})
export class InputDateMultiModule {}
