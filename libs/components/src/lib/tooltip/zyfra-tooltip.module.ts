import { NgModule } from '@angular/core';
import { ZyfraTooltipDirective } from './zyfra-tooltip.directive';
import { ZyfraTooltipComponent } from './zyfra-tooltip.component';
import { CommonModule } from '@angular/common';
import { ZyfraTooltipOverlayManager } from './zyfra-tooltip-overlay-manager.service';
import { CharLimitPipe } from '../@core/utils/chars-limit.pipe';

const EXPORTED_DECLARATIONS = [ZyfraTooltipDirective, ZyfraTooltipComponent];

@NgModule({
  imports: [CommonModule],
  exports: EXPORTED_DECLARATIONS,
  declarations: [
    ...EXPORTED_DECLARATIONS,
    CharLimitPipe
  ],
  providers: [ZyfraTooltipOverlayManager],
  entryComponents: [ZyfraTooltipComponent],
})
export class ZyfraTooltipModule {}
