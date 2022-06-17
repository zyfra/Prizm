import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { ICheckbox } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-checkbox-example-base',
  templateUrl: './checkbox-example-base.component.html',
  styleUrls: ['./checkbox-example-base.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CheckboxExampleBaseComponent {
  @Input() public size: 'l' | 's' = 'l';
  public data: ICheckbox[] = [
    {
      value: 'First',
      state: 'selected',
      label: 'МНПЗ',
    },
    {
      value: 'Second',
      label: 'ЯНОС',
      child: [
        {
          label: 'ЯНОС 1',
          value: 1,
          state: 'selected',
        },
        {
          label: 'ЯНОС 2',
          value: 2,
        },
        {
          label: 'ЯНОС 3',
          value: 3,
        },
      ],
    },
    { value: 'Third', state: 'selected', label: 'ОНПЗ' },
  ];
}
