import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'prizm-checkbox-form-example',
  templateUrl: './checkbox-form-example.component.html',
  styleUrls: ['./checkbox-form-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxFormExampleComponent {
  formGroup = new UntypedFormGroup({
    control1: new UntypedFormControl(false),
    control2: new UntypedFormControl(false),
    control3: new UntypedFormControl(false),
  });
}
