import { NgModule } from '@angular/core';
import { PrizmSpinnerComponent } from './spinner.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmSpinnerComponent],
  exports: [PrizmSpinnerComponent],
})
export class PrizmSpinnerModule {}
