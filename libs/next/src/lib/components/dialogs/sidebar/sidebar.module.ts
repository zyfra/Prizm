import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolymorphModule, PrizmFocusTrapModule } from '../../../directives';
import { PrizmOverlayModule } from '../../../modules/overlay';
import { PrizmButtonModule } from '../../button';
import { PrizmSidebarComponent } from './sidebar.component';
import { PrizmScrollbarModule } from '../../scrollbar';
import { PrizmInputIconButtonModule } from '../../input/common/input-icon-button/input-icon-button.module';

@NgModule({
  imports: [
    CommonModule,
    PolymorphModule,
    PrizmOverlayModule,
    PrizmInputIconButtonModule,
    PrizmButtonModule,
    PrizmFocusTrapModule,
    PrizmScrollbarModule
  ],
  declarations: [
    PrizmSidebarComponent
  ],
  exports: [
    PrizmSidebarComponent
  ],
})
export class PrizmSidebarModule {}
