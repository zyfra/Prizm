import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { InputDateMultiRelativeComponent } from './input-date-multi.component';
import {
  PolymorphModule,
  PrizmInputDateMultiComponent,
  PrizmInputLayoutDateModule,
  PrizmInputLayoutDateRelativeModule,
  PrizmInputLayoutDateTimeModule,
  PrizmInputLayoutTimeModule,
} from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputDateMultiBaseExampleComponent } from './examples/base/input-date-multi-base-example.component';
import { PrizmInputDateMultiFourExampleComponent } from './examples/four/input-date-multi-four-example.component';
import { PrizmCallFuncPipe } from '@prizm-ui/helpers';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmInputDateMultiComponent,
    PrizmInputLayoutDateTimeModule,
    PrizmCallFuncPipe,
    PrizmInputLayoutDateModule,
    PrizmInputLayoutTimeModule,
    PrizmInputLayoutDateRelativeModule,
    RouterModule.forChild(prizmDocGenerateRoutes(InputDateMultiRelativeComponent)),
  ],
  declarations: [
    PrizmInputDateMultiFourExampleComponent,
    PrizmInputDateMultiBaseExampleComponent,
    InputDateMultiRelativeComponent,
  ],
  exports: [InputDateMultiRelativeComponent],
})
export class InputDateMultiModule {}
