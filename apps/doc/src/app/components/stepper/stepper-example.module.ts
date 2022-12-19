import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { prizmDocGenerateRoutes, PrizmAddonDocModule } from '@prizm/doc-base';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmStepperBasicExampleComponent } from './examples/stepper-basic-example/stepper-basic-example.component';
import {
  PrizmButtonModule,
  PrizmCheckboxModule,
  PrizmSelectModule,
  PrizmStepperModule,
} from '@prizm-ui/components';
import { PrizmStepperExampleComponent } from './stepper-example.component';
import { PrizmStepperVerticalExampleComponent } from './examples/stepper-vertical-example/stepper-vertical-example.component';
import { PrizmStepperAsyncExampleComponent } from './examples/stepper-async-example/stepper-async-example.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmAddonDocModule,
    PrizmStepperModule,
    RouterModule.forChild(prizmDocGenerateRoutes(PrizmStepperExampleComponent)),
    FormsModule,
    ReactiveFormsModule,
    PrizmButtonModule,
    PrizmSelectModule,
    PrizmCheckboxModule,
  ],
  declarations: [
    PrizmStepperExampleComponent,
    PrizmStepperBasicExampleComponent,
    PrizmStepperVerticalExampleComponent,
    PrizmStepperAsyncExampleComponent,
  ],
  exports: [PrizmStepperExampleComponent],
})
export class PrizmStepperExampleModule {}
