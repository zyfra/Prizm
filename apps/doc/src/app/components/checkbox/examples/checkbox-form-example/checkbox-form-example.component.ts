import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ICheckbox } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-checkbox-form-example',
  templateUrl: './checkbox-form-example.component.html',
  styleUrls: ['./checkbox-form-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxFormExampleComponent {
  data: ICheckbox = {
    value: 'Parent',
    label: 'Родительский элемент',
    child: [
      {
        label: 'Дочерний элемент 1',
        value: 1,
        state: 'selected',
      },
      {
        label: 'Дочерний элемент 2',
        value: 2,
        child: [
          {
            label: 'Дочерний элемент дочернего 1',
            value: 11,
            state: 'selected',
          },
          {
            label: 'Дочерний элемент дочернего 2',
            value: 12,
          },
        ],
      },
      {
        label: 'Дочерний элемент 3',
        value: 3,
      },
      {
        label: 'Дочерний элемент 4',
        value: 4,
      },
    ],
  };
  public form = new FormControl({ value: this.data, disabled: false });
}
