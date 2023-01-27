import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmSliderCnobComponent } from './slider-cnob.component';
import { PrizmSliderComponent } from './slider.component';

@NgModule({
  declarations: [PrizmSliderComponent, PrizmSliderCnobComponent],
  imports: [CommonModule],
  exports: [PrizmSliderComponent, PrizmSliderCnobComponent],
})
export class PrizmSliderModule {}
