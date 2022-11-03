import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { generateRoutes, TuiAddonDocModule } from '@taiga-ui/addon-doc';
import { RouterModule } from '@angular/router';
import { InputDateComponent } from './input-date.component';
import { PolymorphModule, PzmInputDateModule } from '@digital-plant/zui-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PzmInputDateBaseExampleComponent } from './examples/base/input-date-base-example.component';
import {
  PzmInputNativeDateBaseExampleComponent,
} from './examples/native-date/input-native-date-base-example.component';


@NgModule({
  imports: [
    CommonModule,
    TuiAddonDocModule,
    FormsModule,
    ReactiveFormsModule,
    PolymorphModule,
    PzmInputDateModule,
    RouterModule.forChild(generateRoutes(InputDateComponent)),
  ],
  declarations: [
    PzmInputDateBaseExampleComponent,
    PzmInputNativeDateBaseExampleComponent,
    InputDateComponent
  ],
  exports: [InputDateComponent],
})
export class InputDateModule {}
