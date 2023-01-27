import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmDataListModule } from '../../data-list/data-list.module';
import { PrizmValueAccessorModule } from '../../../directives/value-accessor/value-accessor.module';
import { PrizmInputTimeComponent } from './input-time.component';
import { PrizmDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { FormsModule } from '@angular/forms';
import { PrizmButtonModule } from '../../button/button.module';
import { PrizmDropdownControllerModule } from '../../../directives';
import { PrizmMaskModule } from '../../../modules';

@NgModule({
  imports: [
    CommonModule,
    PrizmMaskModule,
    PrizmDataListModule,
    PrizmDropdownControllerModule,
    PrizmDropdownHostModule,
    PrizmInputTextModule,
    PrizmButtonModule,
    FormsModule,
    PrizmValueAccessorModule,
  ],
  declarations: [PrizmInputTimeComponent],
  exports: [PrizmInputTimeComponent],
})
export class PrizmInputTimeModule {}
