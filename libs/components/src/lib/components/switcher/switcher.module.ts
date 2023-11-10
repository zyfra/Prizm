import { NgModule } from '@angular/core';
import { PrizmSwitcherComponent } from './switcher.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmSwitcherComponent],
  exports: [PrizmSwitcherComponent],
})
export class PrizmSwitcherModule {}
