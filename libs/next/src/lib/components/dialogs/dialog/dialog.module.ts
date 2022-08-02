import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZuiDialogComponent } from './dialog.component';
import { PolymorphModule } from '../../../directives';
import { ZuiOverlayModule } from '../../../modules/overlay';
import { ZuiButtonModule } from '../../button';
import { ZuiScrollbarModule } from '../../scrollbar';
import { ZuiFocusTrapModule } from '../../../directives/focus-trap';

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
    ZuiDialogComponent,
  ],
  exports: [
    ZuiDialogComponent,
  ],
})
export class ZuiDialogModule {}
