import { NgModule } from '@angular/core';
import { PrizmScrollControlsComponent } from './scroll-controls.component';
import { PrizmScrollbarWrapperDirective } from './scrollbar-wrapper.directive';
import { PrizmScrollbarDirective } from './scrollbar.directive';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmScrollbarDirective, PrizmScrollbarWrapperDirective, PrizmScrollControlsComponent],
  exports: [PrizmScrollControlsComponent],
})
export class PrizmScrollControlsModule {}
