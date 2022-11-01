import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicatorComponent } from './indicator.component';
import { PzmIconModule } from '../icon';

@NgModule({
  declarations: [IndicatorComponent],
  imports: [CommonModule, PzmIconModule],
  exports: [IndicatorComponent],
})
export class PzmIndicatorModule {}
