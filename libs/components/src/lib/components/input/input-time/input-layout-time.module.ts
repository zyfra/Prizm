import { NgModule } from '@angular/core';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmInputLayoutTimeComponent } from './input-layout-time.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmInputTextModule, PrizmInputLayoutTimeComponent],
  exports: [PrizmInputLayoutTimeComponent, PrizmInputTextModule],
})
export class PrizmInputLayoutTimeModule {}
