import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolymorphModule } from '../polymorph';
import { PrizmConfirmPopupDirective } from './confirm-popup.directive';
import { PrizmHintModule } from '../hint';
import { PrizmConfirmPopupContainerComponent } from './confirm-popup-container.component';
import { PrizmIconModule } from '../../components/icon';
import { PrizmScrollbarModule } from '../../components/scrollbar';
import { PrizmButtonModule } from '../../components/button';
import { PrizmFocusTrapModule } from '../focus-trap';
import { PrizmToObservableModule } from '@prizm-ui/helpers';

@NgModule({
  imports: [
    CommonModule,
    PolymorphModule,
    PrizmToObservableModule,
    PrizmFocusTrapModule,
    PrizmHintModule,
    PrizmScrollbarModule,
    PrizmButtonModule,
    PrizmIconModule,
  ],
  declarations: [PrizmConfirmPopupDirective, PrizmConfirmPopupContainerComponent],
  exports: [PrizmConfirmPopupDirective],
})
export class PrizmConfirmPopupModule {}
