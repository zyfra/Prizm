import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PzmDay, PzmTime } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-input-date-time-with-seconds-example',
  templateUrl: './input-date-time-with-seconds-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class PzmInputDateTimeWithSecondsExampleComponent {
  public readonly value = new FormControl([new PzmDay(2017, 2, 15), new PzmTime(12, 30, 15)]);
}
