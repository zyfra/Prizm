import { NgModule } from '@angular/core';
import { PrizmSliderCnobComponent } from './slider-cnob.component';
import { PrizmSliderComponent } from './slider.component';

/**
 * use standalone
 * */
@NgModule({
  imports: [PrizmSliderComponent, PrizmSliderCnobComponent],
  exports: [PrizmSliderComponent, PrizmSliderCnobComponent],
})
export class PrizmSliderModule {}
