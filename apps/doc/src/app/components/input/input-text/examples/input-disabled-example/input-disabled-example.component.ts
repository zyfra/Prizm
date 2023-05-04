import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-input-disabled-example',
  templateUrl: './input-disabled-example.component.html',
  styleUrls: ['./input-disabled-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDisabledExampleComponent {
  public disabledInputControl = new UntypedFormControl({ value: 'Задизайблено', disabled: true });
}
