import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrizmAddonDocModule, prizmDocGenerateRoutes } from '@prizm-ui/doc';
import { RouterModule } from '@angular/router';
import { PrizmTimePickerExampleComponent } from './time-picker-example.component';
import { PrizmTimePickerBasicExampleComponent } from './examples/time-picker-basic-example/time-picker-basic-example.component';
import { PrizmTimePickerComponent } from '@prizm-ui/components';

@NgModule({
  declarations: [PrizmTimePickerExampleComponent, PrizmTimePickerBasicExampleComponent],
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    RouterModule.forChild(prizmDocGenerateRoutes(PrizmTimePickerExampleComponent)),
    PrizmTimePickerComponent,
  ],
})
export class TimePickerExampleModule {}
