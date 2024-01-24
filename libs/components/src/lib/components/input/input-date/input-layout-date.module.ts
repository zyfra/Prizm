import { NgModule } from '@angular/core';
import { PrizmInputTextModule } from '../input-text/input-text.module';
import { PrizmInputLayoutDateComponent } from './input-layout-date.component';

@NgModule({
  imports: [PrizmInputLayoutDateComponent],
  exports: [PrizmInputLayoutDateComponent, PrizmInputTextModule],
})
export class PrizmInputLayoutDateModule {}
