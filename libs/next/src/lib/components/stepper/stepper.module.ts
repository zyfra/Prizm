import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmIconModule } from '../icon';
import { PrizmStepperComponent } from './stepper.component';

import { PrizmStepperStepDirective } from './stepper-step.directive';
import { PrizmStepperSelectorItemDirective } from './stepper-selector-item.directive';
import { PrizmStepperSelectorComponent } from './stepper-selector.component';

@NgModule({
  imports: [CommonModule, PrizmIconModule],
  exports: [PrizmStepperComponent, PrizmStepperStepDirective],
  declarations: [
    PrizmStepperComponent,
    PrizmStepperStepDirective,
    PrizmStepperSelectorComponent,
    PrizmStepperSelectorItemDirective,
  ],
})
export class PrizmStepperModule {}

