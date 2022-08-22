import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolymorphModule } from '../polymorph';
import { ZuiTooltipDirective } from './tooltip.directive';
import { ZuiHintModule } from '../hint';
import { ZuiTooltipContainerComponent } from './tooltip-container.component';
import { ZuiIconModule } from '../../components/icon';
import { ZuiScrollbarModule } from '../../components/scrollbar';
import { ZuiFocusTrapModule } from '../focus-trap';

@NgModule({
  imports: [
    CommonModule,
    PolymorphModule,
    ZuiFocusTrapModule,
    ZuiHintModule,
    ZuiScrollbarModule,
    ZuiIconModule
  ],
  declarations: [
    ZuiTooltipDirective,
    ZuiTooltipContainerComponent
  ],
  exports: [ZuiTooltipDirective],
})
export class ZuiTooltipModule {}
