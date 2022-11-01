import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolymorphModule } from '../polymorph';
import { ZuiConfirmPopupDirective } from './confirm-popup.directive';
import { PzmHintModule } from '../hint';
import { ZuiConfirmPopupContainerComponent } from './confirm-popup-container.component';
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
    ZuiConfirmPopupDirective,
    ZuiConfirmPopupContainerComponent
  ],
  exports: [ZuiConfirmPopupDirective],
})
export class ZuiConfirmPopupModule {}
