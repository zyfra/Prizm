import { NgModule } from '@angular/core';
import { PrizmPanelComponent } from './panel.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmPanelComponent],
  exports: [PrizmPanelComponent],
})
export class PrizmPanelModule {}
