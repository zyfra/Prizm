import { NgModule } from '@angular/core';
import { PrizmDropdownHostControlDirective } from './dropdown-host-control.directive';
import { PrizmDropdownHostComponent } from './dropdown-host.component';
import { PrizmDropdownZoneModule } from '../../../directives/event-zone';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmDropdownHostControlDirective, PrizmDropdownHostComponent],
  exports: [PrizmDropdownHostControlDirective, PrizmDropdownHostComponent, PrizmDropdownZoneModule],
})
export class PrizmDropdownHostModule {}
