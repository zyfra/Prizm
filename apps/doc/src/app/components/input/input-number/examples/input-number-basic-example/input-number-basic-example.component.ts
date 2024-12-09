import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UntypedFormControl, Validators } from '@angular/forms';

@Component({
  selector: 'prizm-input-number-basic-example',
  templateUrl: './input-number-basic-example.component.html',
  styleUrls: ['./input-number-basic-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputNumberBasicExampleComponent {
  public requiredInputControl = new UntypedFormControl(2);
}
