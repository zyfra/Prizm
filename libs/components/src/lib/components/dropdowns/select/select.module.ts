import { NgModule } from '@angular/core';
import { PrizmSelectComponent } from './select.component';
import { PrizmOverlayModule } from '../../../modules/overlay';
import { PolymorphModule, PrizmLifecycleModule } from '../../../directives';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmDataListModule } from '../../data-list';
import { PrizmDropdownHostModule } from '../dropdown-host';
import { PrizmScrollbarModule } from '../../scrollbar';
import { PrizmDropdownControllerModule } from '../../../directives/dropdown-controller';
import { PrizmChipsModule } from '../../chips';
import { PrizmInputTextModule } from '../../input/input-text/input-text.module';
import { PrizmCallFuncModule, PrizmLetModule } from '@prizm-ui/helpers';
import { PrizmHintModule } from '../../../directives/hint';
import { PrizmIconModule } from '../../icon';
import { PrizmSelectInputComponent } from './select-input.component';

@NgModule({
  imports: [
    PrizmOverlayModule,
    PolymorphModule,
    PrizmInputTextModule,
    PrizmChipsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    PrizmLetModule,
    PrizmHintModule,
    PrizmIconModule,
    PrizmCallFuncModule,
    PrizmScrollbarModule,
    PrizmDropdownControllerModule,
    PrizmLifecycleModule,
    PrizmDataListModule,
    PrizmDropdownHostModule,
  ],
  declarations: [PrizmSelectComponent, PrizmSelectInputComponent],
  exports: [PrizmSelectComponent, PrizmSelectInputComponent],
})
export class PrizmSelectModule {}
