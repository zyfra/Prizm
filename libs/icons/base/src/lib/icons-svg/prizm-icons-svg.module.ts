import { NgModule } from '@angular/core';
import { PrizmIconsSvgComponent } from './prizm-icons-svg.component';

/*
 * @deprecated from 4
 * use PrizmIconsComponent instead of this
 * */
@NgModule({
  imports: [PrizmIconsSvgComponent],
  exports: [PrizmIconsSvgComponent],
})
export class PrizmIconsSvgModule {}
