import { NgModule } from '@angular/core';
import { PzmSelectComponent } from './select.component';
import { PzmOverlayModule } from '../../../modules/overlay';
import { PolymorphModule } from '../../../directives';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PzmDataListModule } from '../../data-list';
import { PzmDropdownHostModule } from '../dropdown-host';
import { PzmScrollbarModule } from '../../scrollbar';
import { PzmDropdownControllerModule } from '../../../directives/dropdown-controller';
import { PzmChipsModule } from '../../chips';
import { PzmInputTextModule } from '../../input/input-text/input-text.module';
import { PzmCallFuncModule, PzmLetModule } from '@digital-plant/zyfra-helpers';
import { PzmHintModule } from '../../../directives/hint';
import { PzmIconModule } from '../../icon';

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
      PzmScrollbarModule,
      PzmDropdownControllerModule,
      PzmDataListModule,
      PzmDropdownHostModule
    ],
    declarations: [PzmSelectComponent],
    exports: [PzmSelectComponent],
})
export class PzmSelectModule {}
