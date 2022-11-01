import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PzmDay, ZuiTime } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-input-date-time-base-example',
  templateUrl: './input-date-time-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiInputDateTimeBaseExampleComponent {
  public readonly value = new FormControl([new PzmDay(2017, 2, 15), new ZuiTime(12, 30)]);
}
