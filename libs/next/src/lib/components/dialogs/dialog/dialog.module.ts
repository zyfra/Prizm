import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PzmDialogComponent } from './dialog.component';
import { PolymorphModule, PzmFocusTrapModule } from '../../../directives';
import { PzmOverlayModule } from '../../../modules/overlay';
import { PzmButtonModule } from '../../button';
import { PzmScrollbarModule } from '../../scrollbar';
import { PzmInputIconButtonModule } from '../../input/common/input-icon-button/input-icon-button.module';

@NgModule({
  imports: [
    CommonModule,
    PolymorphModule,
    PzmOverlayModule,
    PzmButtonModule,
    PzmFocusTrapModule,
    PzmInputIconButtonModule,
    PzmScrollbarModule
  ],
  declarations: [
    PzmDialogComponent,
  ],
  exports: [
    PzmDialogComponent,
  ],
})
export class PzmDialogModule {}
