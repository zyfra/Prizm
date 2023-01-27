import { NgModule } from '@angular/core';
import { PrizmDropdownHostComponent } from './calendar-select.component';
import { PrizmOverlayModule } from '../../../modules/overlay';
import { PolymorphModule, PrizmLifecycleModule, PrizmMutationObserveModule } from '../../../directives';
import { CommonModule } from '@angular/common';
import { PrizmShadowModule } from '../../../directives/shadow';

@NgModule({
  imports: [
    CommonModule,
    PrizmOverlayModule,
    PrizmLifecycleModule,
    PrizmShadowModule,
    PolymorphModule,
    PrizmMutationObserveModule,
  ],
  declarations: [PrizmDropdownHostComponent],
  exports: [PrizmDropdownHostComponent],
})
export class PrizmDropdownHostModule {}
