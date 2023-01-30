import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmInputDateMultiComponent } from './input-date-multi.component';
import { PrizmDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PolymorphModule, PrizmLifecycleModule } from '../../../directives';
import { PrizmDataListModule } from '../../data-list';

@NgModule({
  imports: [
    CommonModule,
    PrizmInputTextModule,
    PrizmLifecycleModule,
    ReactiveFormsModule,
    PrizmDataListModule,
    PolymorphModule,
    PrizmDropdownHostModule,
  ],
  declarations: [PrizmInputDateMultiComponent],
  exports: [PrizmInputDateMultiComponent],
})
export class PrizmInputDateMultiModule {}
