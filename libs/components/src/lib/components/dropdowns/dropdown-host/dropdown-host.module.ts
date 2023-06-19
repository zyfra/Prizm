import { NgModule } from '@angular/core';
import { PrizmDropdownHostComponent } from './dropdown-host.component';
import { PrizmOverlayModule } from '../../../modules/overlay';
import {
  PolymorphModule,
  PrizmDropdownZoneModule,
  PrizmLifecycleModule,
  PrizmMutationObserveModule,
  PrizmZoneEventModule,
} from '../../../directives';
import { CommonModule } from '@angular/common';
import { PrizmThemeModule } from '@prizm-ui/theme';

@NgModule({
  imports: [
    CommonModule,
    PrizmOverlayModule,
    PrizmThemeModule,
    PrizmLifecycleModule,
    PrizmZoneEventModule,
    PolymorphModule,
    PrizmDropdownZoneModule,
    PrizmMutationObserveModule,
  ],
  declarations: [PrizmDropdownHostComponent],
  exports: [PrizmDropdownHostComponent, PrizmDropdownZoneModule],
})
export class PrizmDropdownHostModule {}
