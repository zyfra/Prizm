import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZuiDialogComponent } from './dialog.component';
import { PolymorphModule, ZuiFocusTrapModule } from '../../../directives';
import { ZuiOverlayModule } from '../../../modules/overlay';
import { ZuiButtonModule } from '../../button';
import { ZuiIconModule } from '../../icon';
import { ZuiScrollbarModule } from '../../scrollbar';

@NgModule({
  imports: [
    CommonModule,
    PolymorphModule,
    ZuiOverlayModule,
    ZuiButtonModule,
    ZuiFocusTrapModule,
    ZuiIconModule,
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
