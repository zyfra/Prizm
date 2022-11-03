import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicatorComponent } from './indicator.component';
import { PrizmIconModule } from '../icon';

@NgModule({
  declarations: [IndicatorComponent],
  imports: [CommonModule, PrizmIconModule],
  exports: [IndicatorComponent],
})
export class PrizmIndicatorModule {}
