import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ZuiDay, ZuiTime } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-input-date-time-with-seconds-example',
  templateUrl: './input-date-time-with-seconds-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiInputDateTimeWithSecondsExampleComponent {
  public readonly value = new FormControl([new ZuiDay(2017, 2, 15), new ZuiTime(12, 30, 15)]);
}
