import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'zyfra-select-button-test',
  templateUrl: './select-button-test.component.html',
  styleUrls: ['./select-button-test.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectButtonTestComponent {
  public city: any[];
  public multiple = true;
  public form: FormControl = new FormControl('3');

  constructor() {
    this.city = [
      { label: 'Paris', value: '1' },
      { label: 'London', value: '2' },
      { label: 'Rome', value: '3' },
    ];
  }
}
