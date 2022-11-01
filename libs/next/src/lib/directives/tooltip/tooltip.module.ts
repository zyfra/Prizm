import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolymorphModule } from '../polymorph';
import { PzmTooltipDirective } from './tooltip.directive';
import { PzmHintModule } from '../hint';
import { PzmTooltipContainerComponent } from './tooltip-container.component';
import { PzmIconModule } from '../../components/icon';
import { PzmScrollbarModule } from '../../components/scrollbar';
import { PzmFocusTrapModule } from '../focus-trap';

@NgModule({
  imports: [
    CommonModule,
    PolymorphModule,
    PzmFocusTrapModule,
    PzmHintModule,
    PzmScrollbarModule,
    PzmIconModule
  ],
  declarations: [
    PzmTooltipDirective,
    PzmTooltipContainerComponent
  ],
  exports: [PzmTooltipDirective],
})
export class PzmTooltipModule {}
