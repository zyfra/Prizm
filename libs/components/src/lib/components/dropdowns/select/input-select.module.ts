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
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  imports: [
    ScrollingModule,
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
  declarations: [PrizmSelectInputComponent],
  exports: [PrizmSelectInputComponent, PrizmInputTextModule],
})
export class PrizmInputSelectModule {}
