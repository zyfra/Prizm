import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolymorphModule, PzmFocusTrapModule } from '../../../directives';
import { PzmOverlayModule } from '../../../modules/overlay';
import { PzmButtonModule } from '../../button';
import { ZuiDialogConfirmComponent } from './confirm-dialog.component';
import { PzmScrollbarModule } from '../../scrollbar';

@NgModule({
  imports: [
    CommonModule,
    PolymorphModule,
    PzmOverlayModule,
    PzmButtonModule,
    PzmFocusTrapModule,
    PzmScrollbarModule
  ],
  declarations: [
    ZuiDialogConfirmComponent
  ],
  exports: [
    ZuiDialogConfirmComponent
  ],
})
export class ZuiConfirmDialogModule {}
