import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZyfraSliderModule } from '@digital-plant/zyfra-components';
import { SliderTestComponent } from './slider-test.component';
import { APP_TOKEN } from '../../app.token';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SliderTestComponent],
  imports: [CommonModule, ZyfraSliderModule, FormsModule, ReactiveFormsModule],
  exports: [SliderTestComponent],
  providers: [
    {
      provide: APP_TOKEN,
      useValue: ['Slider', SliderTestComponent],
      multi: true,
    },
  ],
})
export class SliderTestModule {}
