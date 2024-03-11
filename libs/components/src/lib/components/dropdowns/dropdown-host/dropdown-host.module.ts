import { NgModule } from '@angular/core';
import { PrizmDropdownHostControlDirective } from './dropdown-host-control.directive';
import { PrizmDropdownHostComponent } from './dropdown-host.component';
import { PrizmDropdownZoneModule } from '../../../directives/event-zone';
import { PrizmDropdownHostDirective } from './dropdown-host.directive';

@NgModule({
  imports: [PrizmDropdownHostDirective, PrizmDropdownHostControlDirective, PrizmDropdownHostComponent],
  exports: [
    PrizmDropdownHostDirective,
    PrizmDropdownHostControlDirective,
    PrizmDropdownHostComponent,
    PrizmDropdownZoneModule,
  ],
})
export class PrizmDropdownHostModule {}
