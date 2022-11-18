import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { InputDateComponent } from './input-date.component';
import { PolymorphModule, PrizmInputDateModule } from '@prizm-ui/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmInputDateBaseExampleComponent } from './examples/base/input-date-base-example.component';
import {
  PrizmInputNativeDateBaseExampleComponent,
} from './examples/native-date/input-native-date-base-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PrizmInputDateModule,
    RouterModule.forChild(generateRoutes(InputDateComponent)),
  ],
  declarations: [
    PrizmInputDateBaseExampleComponent,
    PrizmInputNativeDateBaseExampleComponent,
    InputDateComponent
  ],
  exports: [InputDateComponent],
})
export class InputDateModule {}
