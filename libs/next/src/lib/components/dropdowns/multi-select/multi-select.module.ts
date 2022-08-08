import { NgModule } from '@angular/core';
import { ZuiMultiSelectComponent } from './multi-select.component';
import { ZuiOverlayModule } from '../../../modules/overlay';
import { PolymorphModule } from '../../../directives';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZuiDataListModule } from '../../data-list';
import { ZuiDropdownHostModule } from '../dropdown-host';
import { ZuiScrollbarModule } from '../../scrollbar';
import { ZuiDropdownControllerModule } from '../../../directives/dropdown-controller';
import { ZuiCheckboxModule } from '../../checkbox';
import { CallFuncModule } from '@digital-plant/zyfra-helpers';
import { ZuiChipsModule } from '../../chips';
import { ZuiInputTextModule } from '../../input/input-text/input-text.module';

@NgModule({
    imports: [
      ZuiOverlayModule,
      PolymorphModule,
      ZuiChipsModule,
      ZuiInputTextModule,
      FormsModule,
      ReactiveFormsModule,
      CallFuncModule,
      CommonModule,
      ZuiScrollbarModule,
      ZuiCheckboxModule,
      ZuiDropdownControllerModule,
      ZuiDataListModule,
      ZuiDropdownHostModule
    ],
    declarations: [ZuiMultiSelectComponent],
    exports: [ZuiMultiSelectComponent],
})
export class ZuiMultiSelectModule {}
