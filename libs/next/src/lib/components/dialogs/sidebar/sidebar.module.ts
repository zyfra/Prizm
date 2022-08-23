import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PolymorphModule, ZuiFocusTrapModule } from '../../../directives';
import { ZuiOverlayModule } from '../../../modules/overlay';
import { ZuiButtonModule } from '../../button';
import { ZuiSidebarComponent } from './sidebar.component';
import { ZuiScrollbarModule } from '../../scrollbar';
import { ZuiInputIconButtonModule } from '../../input/common/input-icon-button/input-icon-button.module';

@NgModule({
  imports: [
    CommonModule,
    PolymorphModule,
    ZuiOverlayModule,
    ZuiInputIconButtonModule,
    ZuiButtonModule,
    ZuiFocusTrapModule,
    ZuiScrollbarModule
  ],
  declarations: [
    ZuiSidebarComponent
  ],
  exports: [
    ZuiSidebarComponent
  ],
})
export class ZuiSidebarModule {}
