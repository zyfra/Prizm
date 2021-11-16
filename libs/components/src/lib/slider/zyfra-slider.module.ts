import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {SliderModule} from 'primeng/slider';
import { ZyfraSliderComponent } from './zyfra-slider.component';


@NgModule({
  declarations: [ZyfraSliderComponent],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    SliderModule,
  ],
  exports: [ZyfraSliderComponent]
})
export class ZyfraSliderModule { }
