import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZuiDataListModule } from '../../data-list/data-list.module';
import { ZuiValueAccessorModule } from '../../../directives/value-accessor/value-accessor.module';
import { ZuiInputTimeComponent } from './input-time.component';
import { ZuiDropdownHostModule } from '../../dropdowns/dropdown-host/dropdown-host.module';
import { ZuiInputTextModule } from '../input-text/input-text.module';
import { FormsModule } from '@angular/forms';
import { ZuiButtonModule } from '../../button/button.module';
import { ZuiDropdownControllerModule } from '../../../directives';
import { ZuiMaskModule } from '../../../modules';

@NgModule({
  imports: [
    CommonModule,
    ZuiMaskModule,
    ZuiDataListModule,
    ZuiDropdownControllerModule,
    ZuiDropdownHostModule,
    ZuiInputTextModule,
    ZuiButtonModule,
    FormsModule,
    ZuiValueAccessorModule,
  ],
  declarations: [ZuiInputTimeComponent],
  exports: [ZuiInputTimeComponent],
})
export class ZuiInputTimeModule {}

