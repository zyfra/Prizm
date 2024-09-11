import { NgModule } from '@angular/core';
import { PrizmDropdownHostControlDirective } from './dropdown-host-control.directive';
import { PrizmDropdownHostComponent } from './dropdown-host.component';
import { PrizmDropdownZoneDirective } from '../../../directives/event-zone';
import { PrizmDropdownHostDirective } from './dropdown-host.directive';

@NgModule({
  imports: [
    PrizmDropdownHostDirective,
    PrizmDropdownZoneDirective,
    PrizmDropdownHostControlDirective,
    PrizmDropdownHostComponent,
  ],
  exports: [
    PrizmDropdownHostDirective,
    PrizmDropdownHostControlDirective,
    PrizmDropdownHostComponent,
    PrizmDropdownZoneDirective,
  ],
})
export class PrizmDropdownHostModule {}
