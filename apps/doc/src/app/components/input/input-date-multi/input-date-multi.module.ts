import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { InputDateMultiRelativeComponent } from './input-date-multi.component';
import {
  PolymorphModule,
  PrizmInputDateModule,
  PrizmInputDateMultiModule,
  PrizmInputDateRelativeModule,
  PrizmInputDateTimeModule,
  PrizmInputTimeModule,
} from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputDateMultiBaseExampleComponent } from './examples/base/input-date-multi-base-example.component';
import { PrizmInputDateMultiFourExampleComponent } from './examples/four/input-date-multi-four-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmInputDateMultiModule,
    PrizmInputDateTimeModule,
    PrizmInputDateModule,
    PrizmInputTimeModule,
    PrizmInputDateRelativeModule,
    RouterModule.forChild(generateRoutes(InputDateMultiRelativeComponent)),
  ],
  declarations: [
    PrizmInputDateMultiFourExampleComponent,
    PrizmInputDateMultiBaseExampleComponent,
    InputDateMultiRelativeComponent
  ],
  exports: [InputDateMultiRelativeComponent],
})
export class InputDateMultiModule {}
