import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PzmDataListModule } from '../../data-list/data-list.module';
import { PzmValueAccessorModule } from '../../../directives/value-accessor/value-accessor.module';
import { PzmInputTimeComponent } from './input-time.component';
import { PzmDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { PzmInputTextModule } from '../input-text/input-text.module';
import { FormsModule } from '@angular/forms';
import { PzmButtonModule } from '../../button/button.module';
import { PzmDropdownControllerModule } from '../../../directives';
import { PzmMaskModule } from '../../../modules';

@NgModule({
  imports: [
    CommonModule,
    PzmMaskModule,
    PzmDataListModule,
    PzmDropdownControllerModule,
    PzmDropdownHostModule,
    PzmInputTextModule,
    PzmButtonModule,
    FormsModule,
    PzmValueAccessorModule,
  ],
  declarations: [PzmInputTimeComponent],
  exports: [PzmInputTimeComponent],
})
export class PzmInputTimeModule {}

