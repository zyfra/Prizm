import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolymorphModule, PrizmFocusTrapModule } from '../../../directives';
import { PrizmOverlayModule } from '../../../modules/overlay';
import { PrizmButtonModule } from '../../button';
import { PrizmDialogConfirmComponent } from './confirm-dialog.component';
import { PrizmScrollbarModule } from '../../scrollbar';
import { PrizmThemeModule } from '@prizm-ui/theme';

@NgModule({
  imports: [
    CommonModule,
    PolymorphModule,
    PrizmOverlayModule,
    PrizmThemeModule,
    PrizmButtonModule,
    PrizmFocusTrapModule,
    PrizmScrollbarModule,
  ],
  declarations: [PrizmDialogConfirmComponent],
  exports: [PrizmDialogConfirmComponent],
})
export class PrizmConfirmDialogModule {}
