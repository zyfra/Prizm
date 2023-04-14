import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'prizm-slider-range-example',
  templateUrl: './slider-range-example.component.html',
  styleUrls: ['./slider-range-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmSliderRangeExampleComponent {
  small = new FormControl([20, 40]);
  big = new FormControl([700, 900]);
}
