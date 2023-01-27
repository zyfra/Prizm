import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'prizm-checkbox-form-example',
  templateUrl: './checkbox-form-example.component.html',
  styleUrls: ['./checkbox-form-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxFormExampleComponent {
  formGroup = new FormGroup({
    control1: new FormControl(false),
    control2: new FormControl(false),
    control3: new FormControl(false),
  });
}
