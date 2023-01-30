import { NgModule } from '@angular/core';
import { PrizmDropdownHostComponent } from './dropdown-host.component';
import { PrizmOverlayModule } from '../../../modules/overlay';
import {
  PolymorphModule,
  PrizmDropdownZoneModule,
  PrizmLifecycleModule,
  PrizmMutationObserveModule,
} from '../../../directives';
import { CommonModule } from '@angular/common';
import { PrizmShadowModule } from '../../../directives/shadow';

@NgModule({
  imports: [
    CommonModule,
    PrizmOverlayModule,
    PrizmLifecycleModule,
    PrizmShadowModule,
    PolymorphModule,
    PrizmDropdownZoneModule,
    PrizmMutationObserveModule,
  ],
  declarations: [PrizmDropdownHostComponent],
  exports: [PrizmDropdownHostComponent, PrizmDropdownZoneModule],
})
export class PrizmDropdownHostModule {}
