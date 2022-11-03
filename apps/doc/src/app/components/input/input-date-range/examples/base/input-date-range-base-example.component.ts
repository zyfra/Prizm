import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PzmDay, PzmDayRange } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-input-date-range-base-example',
  templateUrl: './input-date-range-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class PzmInputDateRangeBaseExampleComponent {
  readonly value = new FormControl(
    new PzmDayRange(new PzmDay(2018, 2, 10), new PzmDay(2018, 3, 20)),
  );
  readonly min = new PzmDay(2000, 2, 20);

  readonly max = new PzmDay(2040, 2, 20);
}
