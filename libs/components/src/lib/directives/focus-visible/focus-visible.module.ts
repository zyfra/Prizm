import { NgModule } from '@angular/core';
import { PrizmFocusVisibleDirective } from './focus-visible.directive';

@NgModule({
  declarations: [PrizmFocusVisibleDirective],
  exports: [PrizmFocusVisibleDirective],
})
export class PrizmFocusVisibleModule {}
