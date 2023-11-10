import { NgModule } from '@angular/core';
import { PrizmLoaderComponent } from './loader.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmLoaderComponent],
  exports: [PrizmLoaderComponent],
})
export class PrizmLoaderModule {}
