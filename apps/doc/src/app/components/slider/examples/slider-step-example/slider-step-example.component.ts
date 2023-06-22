import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-slider-step-example',
  templateUrl: './slider-step-example.component.html',
  styleUrls: ['./slider-step-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmSliderStepExampleComponent {
  fc = new UntypedFormControl(0);
}
