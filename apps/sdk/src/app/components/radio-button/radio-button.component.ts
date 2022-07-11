import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'zyfra-radio-button-test',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioButtonComponent {
  public items = [
    {
      label: 'red',
      value: 'red',
    },
    {
      label: 'black',
      value: 'black',
    },
    {
      label: 'blue',
      value: 'blue',
    },
    {
      label: 'pink',
      value: 'pink',
    },
    {
      label: 'Не заполнено',
      value: null,
    },
  ];

  public control = new FormControl('');
  public model = 'blue';
  public disabled = false;
}
