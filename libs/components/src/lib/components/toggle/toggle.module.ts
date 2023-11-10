import { NgModule } from '@angular/core';
import { PrizmToggleComponent } from './toggle.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmToggleComponent],
  exports: [PrizmToggleComponent],
})
export class PrizmToggleModule {}
