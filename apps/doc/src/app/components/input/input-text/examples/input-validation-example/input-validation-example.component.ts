import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'prizm-input-validation-example',
  templateUrl: './input-validation-example.component.html',
  styleUrls: ['./input-validation-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputValidationExampleComponent {
  public requiredInputControl = new UntypedFormControl('', Validators.required);
}
