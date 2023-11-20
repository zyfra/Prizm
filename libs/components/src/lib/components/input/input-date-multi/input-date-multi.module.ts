import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmInputDateMultiComponent } from './input-date-multi.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PolymorphOutletDirective, PrizmLifecycleModule } from '../../../directives';
import { PrizmDataListComponent } from '../../data-list';
import { PrizmDropdownHostComponent } from '../../dropdowns/dropdown-host';

@NgModule({
  imports: [
    CommonModule,
    PrizmInputTextModule,
    PrizmLifecycleModule,
    ReactiveFormsModule,
    PrizmDataListComponent,
    PolymorphOutletDirective,
    PrizmDropdownHostComponent,
  ],
  declarations: [PrizmInputDateMultiComponent],
  exports: [PrizmInputDateMultiComponent],
})
export class PrizmInputDateMultiModule {}
