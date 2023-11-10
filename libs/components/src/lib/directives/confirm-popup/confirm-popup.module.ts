import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolymorphOutletDirective } from '../polymorph';
import { PrizmConfirmPopupDirective } from './confirm-popup.directive';
import { PrizmHintDirective } from '../hint';
import { PrizmConfirmPopupContainerComponent } from './confirm-popup-container.component';
import { PrizmIconComponent } from '../../components/icon';
import { PrizmScrollbarModule } from '../../components/scrollbar';
import { PrizmButtonComponent } from '../../components/button';
import { PrizmFocusTrapModule } from '../focus-trap';
import { PrizmToObservablePipe } from '@prizm-ui/helpers';

@NgModule({
  imports: [
    CommonModule,
    PolymorphOutletDirective,
    PrizmToObservablePipe,
    PrizmFocusTrapModule,
    PrizmHintDirective,
    PrizmScrollbarModule,
    PrizmButtonComponent,
    PrizmIconComponent,
  ],
  declarations: [PrizmConfirmPopupDirective, PrizmConfirmPopupContainerComponent],
  exports: [PrizmConfirmPopupDirective],
})
export class PrizmConfirmPopupModule {}
