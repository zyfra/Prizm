import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicatorComponent } from './indicator.component';
import { ZuiIconModule } from '../icon';

@NgModule({
  declarations: [IndicatorComponent],
  imports: [CommonModule, ZuiIconModule],
  exports: [IndicatorComponent],
})
export class ZuiIndicatorModule {}
