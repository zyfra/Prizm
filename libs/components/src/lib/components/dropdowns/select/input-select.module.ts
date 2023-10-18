import { NgModule } from '@angular/core';
import { PrizmOverlayModule } from '../../../modules/overlay';
import { PolymorphModule, PrizmAutoFocusModule, PrizmLifecycleModule } from '../../../directives';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrizmDataListModule } from '../../data-list';
import { PrizmDropdownHostModule } from '../dropdown-host';
import { PrizmScrollbarModule } from '../../scrollbar';
import { PrizmDropdownControllerModule } from '../../../directives/dropdown-controller';
import { PrizmChipsModule } from '../../chips';
import { PrizmInputTextModule } from '../../input/input-text/input-text.module';
import { PrizmCallFuncModule, PrizmLetModule, PrizmToObservableModule } from '@prizm-ui/helpers';
import { PrizmHintModule } from '../../../directives/hint';
import { PrizmIconModule } from '../../icon';
import { PrizmSelectInputComponent } from './input-select.component';
import { PrizmSelectItemDirective } from './select-item.directive';

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
    PrizmAutoFocusModule,
    PrizmHintModule,
    PrizmIconModule,
    PrizmCallFuncModule,
    PrizmScrollbarModule,
    PrizmDropdownControllerModule,
    PrizmLifecycleModule,
    PrizmDataListModule,
    PrizmDropdownHostModule,
    PrizmToObservableModule,
  ],
  declarations: [PrizmSelectInputComponent, PrizmSelectItemDirective],
  exports: [PrizmSelectItemDirective, PrizmSelectInputComponent, PrizmDataListModule, PrizmInputTextModule],
})
export class PrizmInputSelectModule {}
