import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicatorComponent } from './indicator.component';
import { PrizmIconSvgModule } from '../icon';

@NgModule({
  declarations: [IndicatorComponent],
  imports: [CommonModule, PrizmIconSvgModule],
  exports: [IndicatorComponent],
})
export class PrizmIndicatorModule {}
