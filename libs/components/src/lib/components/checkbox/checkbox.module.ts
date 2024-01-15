import { NgModule } from '@angular/core';
import { PrizmCheckboxComponent } from './checkbox.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmCheckboxComponent],
  exports: [PrizmCheckboxComponent],
})
export class PrizmCheckboxModule {}
