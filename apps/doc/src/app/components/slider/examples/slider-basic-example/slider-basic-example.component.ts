import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'prizm-slider-basic-example',
  templateUrl: './slider-basic-example.component.html',
  styleUrls: ['./slider-basic-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmSliderBasicExampleComponent {
  small = new FormControl(60);
  big = new FormControl(500);
}
