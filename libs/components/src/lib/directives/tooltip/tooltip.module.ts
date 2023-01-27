import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolymorphModule } from '../polymorph';
import { PrizmTooltipDirective } from './tooltip.directive';
import { PrizmHintModule } from '../hint';
import { PrizmTooltipContainerComponent } from './tooltip-container.component';
import { PrizmIconModule } from '../../components/icon';
import { PrizmScrollbarModule } from '../../components/scrollbar';
import { PrizmFocusTrapModule } from '../focus-trap';

@NgModule({
  imports: [
    CommonModule,
    PolymorphModule,
    PrizmFocusTrapModule,
    PrizmHintModule,
    PrizmScrollbarModule,
    PrizmIconModule,
  ],
  declarations: [PrizmTooltipDirective, PrizmTooltipContainerComponent],
  exports: [PrizmTooltipDirective],
})
export class PrizmTooltipModule {}
