import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-slider-basic-example',
  templateUrl: './slider-basic-example.component.html',
  styleUrls: ['./slider-basic-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmSliderBasicExampleComponent {
  small = new UntypedFormControl(60);
  big = new UntypedFormControl(500);
}
