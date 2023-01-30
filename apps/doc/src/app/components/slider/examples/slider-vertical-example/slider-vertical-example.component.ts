import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'prizm-slider-vertical-example',
  templateUrl: './slider-vertical-example.component.html',
  styleUrls: ['./slider-vertical-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmSliderVerticalExampleComponent {
  fc = new FormControl(60);
}
