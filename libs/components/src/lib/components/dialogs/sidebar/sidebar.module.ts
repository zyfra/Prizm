import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolymorphModule, PrizmFocusTrapModule } from '../../../directives';
import { PrizmOverlayModule } from '../../../modules/overlay';
import { PrizmButtonModule } from '../../button';
import { PrizmSidebarComponent } from './sidebar.component';
import { PrizmScrollbarModule } from '../../scrollbar';
import { PrizmInputIconButtonModule } from '../../input/common/input-icon-button/input-icon-button.module';
import { PrizmThemeModule } from '@prizm-ui/theme';

@NgModule({
  imports: [
    CommonModule,
    PolymorphModule,
    PrizmThemeModule,
    PrizmOverlayModule,
    PrizmInputIconButtonModule,
    PrizmButtonModule,
    PrizmFocusTrapModule,
    PrizmScrollbarModule,
  ],
  declarations: [PrizmSidebarComponent],
  exports: [PrizmSidebarComponent],
})
export class PrizmSidebarModule {}
