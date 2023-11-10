import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PrizmSliderCnobComponent } from './slider-cnob.component';
import { PrizmSliderComponent } from './slider.component';

/**
 * @deprecated
 * use standalone
 * */
@NgModule({
  imports: [PrizmSliderComponent, PrizmSliderCnobComponent],
  exports: [PrizmSliderComponent, PrizmSliderCnobComponent],
})
export class PrizmSliderModule {}
