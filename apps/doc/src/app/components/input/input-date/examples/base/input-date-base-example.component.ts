import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrizmDay } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-input-date-base-example',
  templateUrl: './input-date-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class PrizmInputDateBaseExampleComponent {
  public readonly control = new FormControl(new PrizmDay(2017, 0, 15));
}
