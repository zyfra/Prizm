import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmDataListModule } from '../../data-list/data-list.module';
import { PrizmValueAccessorModule } from '../../../directives/value-accessor/value-accessor.module';
import { PrizmDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { FormsModule } from '@angular/forms';
import { PrizmButtonModule } from '../../button/button.module';
import { PrizmDropdownControllerModule, PrizmLifecycleModule } from '../../../directives';
import { PrizmMaskModule } from '../../../modules';
import { PrizmInputLayoutTimeComponent } from './input-layout-time.component';

@NgModule({
  imports: [
    CommonModule,
    PrizmLifecycleModule,
    PrizmMaskModule,
    PrizmDataListModule,
    PrizmDropdownControllerModule,
    PrizmDropdownHostModule,
    PrizmInputTextModule,
    PrizmButtonModule,
    FormsModule,
    PrizmValueAccessorModule,
  ],
  declarations: [PrizmInputLayoutTimeComponent],
  exports: [PrizmInputLayoutTimeComponent, PrizmInputTextModule],
})
export class PrizmInputLayoutTimeModule {}
