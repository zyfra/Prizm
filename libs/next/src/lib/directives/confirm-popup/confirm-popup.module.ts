import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolymorphModule } from '../polymorph';
import { PzmConfirmPopupDirective } from './confirm-popup.directive';
import { PzmHintModule } from '../hint';
import { PzmConfirmPopupContainerComponent } from './confirm-popup-container.component';
import { PzmIconModule } from '../../components/icon';
import { PzmScrollbarModule } from '../../components/scrollbar';
import { PzmButtonModule } from '../../components/button';
import { PzmFocusTrapModule } from '../focus-trap';

@NgModule({
  imports: [
    CommonModule,
    PolymorphModule,
    PzmFocusTrapModule,
    PzmHintModule,
    PzmScrollbarModule,
    PzmButtonModule,
    PzmIconModule
  ],
  declarations: [
    PzmConfirmPopupDirective,
    PzmConfirmPopupContainerComponent
  ],
  exports: [PzmConfirmPopupDirective],
})
export class PzmConfirmPopupModule {}
