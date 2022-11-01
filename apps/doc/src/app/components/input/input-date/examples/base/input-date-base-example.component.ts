import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PzmDay } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-input-date-base-example',
  templateUrl: './input-date-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiInputDateBaseExampleComponent {
  public readonly control = new FormControl(new PzmDay(2017, 0, 15));
}
