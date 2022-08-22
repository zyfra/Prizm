import { NgModule } from '@angular/core';
import { ZuiMultiSelectComponent } from './multi-select.component';
import { ZuiOverlayModule } from '../../../modules/overlay';
import { PolymorphModule, ZuiAutoFocusModule } from '../../../directives';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZuiDataListModule } from '../../data-list';
import { ZuiDropdownHostModule } from '../dropdown-host';
import { ZuiScrollbarModule } from '../../scrollbar';
import { ZuiDropdownControllerModule } from '../../../directives/dropdown-controller';
import { ZuiChipsModule } from '../../chips';
import { ZuiInputTextModule } from '../../input/input-text/input-text.module';
import { ZuiCallFuncModule, ZuiLetModule } from '@digital-plant/zyfra-helpers';
import { ZuiHintModule } from '../../../directives/hint';
import { ZuiIconModule } from '../../icon';
import { ZuiCheckboxModule } from '../../checkbox';

@NgModule({
    imports: [
      ZuiOverlayModule,
      PolymorphModule,
      ZuiInputTextModule,
      ZuiChipsModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      ZuiLetModule,
      ZuiHintModule,
      ZuiIconModule,
      ZuiCallFuncModule,
      ZuiAutoFocusModule,
      ZuiScrollbarModule,
      ZuiDropdownControllerModule,
      ZuiDataListModule,
      ZuiCheckboxModule,
      ZuiDropdownHostModule
    ],
    declarations: [ZuiMultiSelectComponent],
    exports: [ZuiMultiSelectComponent],
})
export class ZuiMultiSelectModule {}
