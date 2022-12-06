import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolymorphModule } from '../polymorph';
import { PrizmConfirmPopupDirective } from './confirm-popup.directive';
import { PrizmHintModule } from '../hint';
import { PrizmConfirmPopupContainerComponent } from './confirm-popup-container.component';
import { PrizmIconSvgModule } from '../../components/icon';
import { PrizmScrollbarModule } from '../../components/scrollbar';
import { PrizmButtonModule } from '../../components/button';
import { PrizmFocusTrapModule } from '../focus-trap';

@NgModule({
  imports: [
    CommonModule,
    PolymorphModule,
    PrizmFocusTrapModule,
    PrizmHintModule,
    PrizmScrollbarModule,
    PrizmButtonModule,
    PrizmIconSvgModule
  ],
  declarations: [
    PrizmConfirmPopupDirective,
    PrizmConfirmPopupContainerComponent
  ],
  exports: [PrizmConfirmPopupDirective],
})
export class PrizmConfirmPopupModule {}
