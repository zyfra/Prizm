import { NgModule } from '@angular/core';
import { ZyfraHintDirective } from './zyfra-hint.directive';
import { ZyfraHintComponent } from './zyfra-hint.component';
import { CommonModule } from '@angular/common';
import { ZyfraHintOverlayManager } from './zyfra-hint-overlay-manager.service';

const EXPORTED_DECLARATIONS = [ZyfraHintDirective, ZyfraHintComponent];

@NgModule({
  imports: [CommonModule],
  exports: EXPORTED_DECLARATIONS,
  declarations: EXPORTED_DECLARATIONS,
  providers: [ZyfraHintOverlayManager],
  entryComponents: [ZyfraHintComponent],
})
export class ZyfraHintModule {}
