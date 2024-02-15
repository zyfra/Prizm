import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolymorphModule } from '../polymorph';
import { PrizmTooltipDirective } from './tooltip.directive';
import { PrizmHintDirective } from '../hint';
import { PrizmTooltipContainerComponent } from './tooltip-container.component';
import { PrizmScrollbarModule } from '../../components/scrollbar';
import { PrizmFocusTrapModule } from '../focus-trap';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';

@NgModule({
  imports: [
    CommonModule,
    PolymorphModule,
    PrizmFocusTrapModule,
    PrizmHintDirective,
    PrizmScrollbarModule,
    PrizmIconsFullComponent,
  ],
  declarations: [PrizmTooltipDirective, PrizmTooltipContainerComponent],
  exports: [PrizmTooltipDirective],
})
export class PrizmTooltipModule {}
