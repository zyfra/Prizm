import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolymorphModule, ZuiFocusTrapModule } from '../../../directives';
import { ZuiOverlayModule } from '../../../modules/overlay';
import { ZuiButtonModule } from '../../button';
import { ZuiDialogConfirmComponent } from './confirm-dialog.component';
import { ZuiScrollbarModule } from '../../scrollbar';

@NgModule({
  imports: [
    CommonModule,
    PolymorphModule,
    ZuiOverlayModule,
    ZuiButtonModule,
    ZuiFocusTrapModule,
    ZuiScrollbarModule
  ],
  declarations: [
    ZuiDialogConfirmComponent
  ],
  exports: [
    ZuiDialogConfirmComponent
  ],
})
export class ZuiConfirmDialogModule {}
