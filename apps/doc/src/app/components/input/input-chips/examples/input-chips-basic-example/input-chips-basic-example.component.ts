import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'zui-input-chips-basic-example',
  templateUrl: './input-chips-basic-example.component.html',
  styleUrls: ['./input-chips-basic-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputChipsExampleBaseComponent {
  public deletable = true;
  public requiredInputControl = new FormControl('', Validators.required);
  public chipsControl = new FormControl(['Чипс 1', 'Чипс 2']);
}
