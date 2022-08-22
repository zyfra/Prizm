import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'zui-input-number-basic-example',
  templateUrl: './input-number-basic-example.component.html',
  styleUrls: ['./input-number-basic-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputNumberBasicExampleComponent {
  public requiredInputControl = new FormControl('', Validators.required);
}

