import { NgModule } from '@angular/core';
import { PrizmIconComponent } from './icon.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmIconComponent],
  exports: [PrizmIconComponent],
})
export class PrizmIconModule {}
