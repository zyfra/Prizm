import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZuiDialogComponent } from './dialog.component';
import { PolymorphModule, ZuiFocusTrapModule } from '../../../directives';
import { ZuiOverlayModule } from '../../../modules/overlay';
import { ZuiButtonModule } from '../../button';
import { ZuiScrollbarModule } from '../../scrollbar';
import { ZuiInputIconButtonModule } from '../../input/common/input-icon-button/input-icon-button.module';

@NgModule({
  imports: [
    CommonModule,
    PolymorphModule,
    ZuiOverlayModule,
    ZuiButtonModule,
    ZuiFocusTrapModule,
    ZuiInputIconButtonModule,
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
