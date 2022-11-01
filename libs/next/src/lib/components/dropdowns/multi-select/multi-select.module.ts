import { NgModule } from '@angular/core';
import { ZuiMultiSelectComponent } from './multi-select.component';
import { PzmOverlayModule } from '../../../modules/overlay';
import { PolymorphModule, ZuiAutoFocusModule } from '../../../directives';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZuiDataListModule } from '../../data-list';
import { ZuiDropdownHostModule } from '../dropdown-host';
import { PzmScrollbarModule } from '../../scrollbar';
import { ZuiDropdownControllerModule } from '../../../directives/dropdown-controller';
import { PzmChipsModule } from '../../chips';
import { PzmInputTextModule } from '../../input/input-text/input-text.module';
import { PzmCallFuncModule, PzmLetModule } from '@digital-plant/zyfra-helpers';
import { PzmHintModule } from '../../../directives/hint';
import { PzmIconModule } from '../../icon';
import { ZuiCheckboxModule } from '../../checkbox';

@NgModule({
    imports: [
      PzmOverlayModule,
      PolymorphModule,
      PzmInputTextModule,
      PzmChipsModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      PzmLetModule,
      PzmHintModule,
      PzmIconModule,
      PzmCallFuncModule,
      ZuiAutoFocusModule,
      PzmScrollbarModule,
      ZuiDropdownControllerModule,
      ZuiDataListModule,
      ZuiCheckboxModule,
      ZuiDropdownHostModule
    ],
    declarations: [ZuiMultiSelectComponent],
    exports: [ZuiMultiSelectComponent],
})
export class ZuiMultiSelectModule {}
