import { NgModule } from '@angular/core';
import { PrizmDropdownHostComponent } from './dropdown-host.component';
import { PrizmOverlayModule } from '../../../modules/overlay';
import {
  PolymorphModule,
  PrizmDropdownZoneModule,
  PrizmLifecycleModule,
  PrizmMutationObserveModule,
  PrizmOutsideEventModule,
} from '../../../directives';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    PrizmOverlayModule,
    PrizmLifecycleModule,
    PrizmOutsideEventModule,
    PolymorphModule,
    PrizmDropdownZoneModule,
    PrizmMutationObserveModule,
  ],
  declarations: [PrizmDropdownHostComponent],
  exports: [PrizmDropdownHostComponent, PrizmDropdownZoneModule],
})
export class PrizmDropdownHostModule {}
