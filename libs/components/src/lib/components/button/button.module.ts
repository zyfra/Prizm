import { NgModule } from '@angular/core';
import { PrizmButtonComponent } from './button.component';
import { PrizmSplitButtonComponent } from './split-button/split-button.component';

/**
 * use standalone
 * */
@NgModule({
  imports: [PrizmButtonComponent, PrizmSplitButtonComponent],
  exports: [PrizmButtonComponent, PrizmSplitButtonComponent],
})
export class PrizmButtonModule {}
