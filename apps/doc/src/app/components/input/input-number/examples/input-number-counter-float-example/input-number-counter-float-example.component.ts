import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'prizm-input-number-counter-float-example',
  templateUrl: './input-number-counter-float-example.component.html',
  styleUrls: ['./input-number-counter-float-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputNumberCounterFloatExampleComponent {
  public requiredInputControl = new UntypedFormControl(2.555, Validators.required);
}
