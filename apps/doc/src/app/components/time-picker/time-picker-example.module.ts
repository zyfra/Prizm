import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { PrizmTimePickerExampleComponent } from './time-picker-example.component';
import { PrizmTimePickerBasicExampleComponent } from './examples/time-picker-basic-example/time-picker-basic-example.component';
import { PrizmTimePickerComponent } from '@prizm-ui/components';
import { PrizmTimePickerMinMaxExampleComponent } from './examples/time-picker-min-max-example/time-picker-min-max-example.component';

@NgModule({
  declarations: [
    PrizmTimePickerExampleComponent,
    PrizmTimePickerBasicExampleComponent,
    PrizmTimePickerMinMaxExampleComponent,
  ],
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(PrizmTimePickerExampleComponent)),
    PrizmTimePickerComponent,
  ],
})
export class TimePickerExampleModule {}
