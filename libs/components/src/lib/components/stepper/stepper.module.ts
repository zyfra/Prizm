import { NgModule } from '@angular/core';
import { PrizmStepperComponent } from './stepper.component';
import { PrizmStepperStepDirective } from './stepper-step.directive';
import { PrizmStepperSelectorItemDirective } from './stepper-selector-item.directive';
import { PrizmStepperSelectorComponent } from './stepper-selector.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  exports: [PrizmStepperComponent, PrizmStepperStepDirective],
  imports: [
    PrizmStepperComponent,
    PrizmStepperStepDirective,
    PrizmStepperSelectorComponent,
    PrizmStepperSelectorItemDirective,
  ],
})
export class PrizmStepperModule {}
