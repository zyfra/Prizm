import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrizmDay, PrizmTime } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-input-date-time-base-example',
  templateUrl: './input-date-time-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class PrizmInputDateTimeBaseExampleComponent {
  public readonly value = new FormControl([new PrizmDay(2017, 2, 15), new PrizmTime(12, 30)]);
}
