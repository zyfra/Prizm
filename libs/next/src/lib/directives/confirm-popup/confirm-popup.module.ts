import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolymorphModule } from '../polymorph';
import { ZuiConfirmPopupDirective } from './confirm-popup.directive';
import { ZuiHintModule } from '../hint';
import { ZuiConfirmPopupContainerComponent } from './confirm-popup-container.component';
import { ZuiIconModule } from '../../components/icon';
import { ZuiScrollbarModule } from '../../components/scrollbar';
import { ZuiButtonModule } from '../../components/button';
import { ZuiFocusTrapModule } from '../focus-trap';

@NgModule({
  imports: [
    CommonModule,
    PolymorphModule,
    ZuiFocusTrapModule,
    ZuiHintModule,
    ZuiScrollbarModule,
    ZuiButtonModule,
    ZuiIconModule
  ],
  declarations: [
    ZuiConfirmPopupDirective,
    ZuiConfirmPopupContainerComponent
  ],
  exports: [ZuiConfirmPopupDirective],
})
export class ZuiConfirmPopupModule {}
