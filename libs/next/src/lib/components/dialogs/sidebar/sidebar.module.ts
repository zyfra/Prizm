import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolymorphModule, PzmFocusTrapModule } from '../../../directives';
import { PzmOverlayModule } from '../../../modules/overlay';
import { PzmButtonModule } from '../../button';
import { ZuiSidebarComponent } from './sidebar.component';
import { PzmScrollbarModule } from '../../scrollbar';
import { PzmInputIconButtonModule } from '../../input/common/input-icon-button/input-icon-button.module';

@NgModule({
  imports: [
    CommonModule,
    PolymorphModule,
    PzmOverlayModule,
    PzmInputIconButtonModule,
    PzmButtonModule,
    PzmFocusTrapModule,
    PzmScrollbarModule
  ],
  declarations: [
    ZuiSidebarComponent
  ],
  exports: [
    ZuiSidebarComponent
  ],
})
export class ZuiSidebarModule {}
