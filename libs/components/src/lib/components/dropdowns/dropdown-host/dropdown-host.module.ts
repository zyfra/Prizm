import { NgModule } from '@angular/core';
import { PrizmDropdownHostControlDirective } from './dropdown-host-control.directive';
import { PrizmDropdownHostComponent } from './dropdown-host.component';
import { PrizmDropdownZoneModule } from '@prizm-ui/components';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmDropdownHostControlDirective, PrizmDropdownHostComponent],
  exports: [PrizmDropdownHostControlDirective, PrizmDropdownHostComponent, PrizmDropdownZoneModule],
})
export class PrizmDropdownHostModule {}
