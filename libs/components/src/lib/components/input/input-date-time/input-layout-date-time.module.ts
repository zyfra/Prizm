import { NgModule } from '@angular/core';
import { PrizmDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmInputLayoutDateTimeComponent } from './input-layout-date-time.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmDropdownHostModule, PrizmInputLayoutDateTimeComponent, PrizmInputTextModule],
  exports: [PrizmDropdownHostModule, PrizmInputLayoutDateTimeComponent, PrizmInputTextModule],
})
export class PrizmInputLayoutDateTimeModule {}
