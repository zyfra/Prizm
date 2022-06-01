import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'zui-input-disabled-example',
  templateUrl: './input-disabled-example.component.html',
  styleUrls: ['./input-disabled-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputDisabledExampleComponent {
  public disabledInputControl = new FormControl({ value: 'Задизайблено', disabled: true });
}
