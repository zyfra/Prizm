import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PrizmDateTime, PrizmDateTimeRange, PrizmDay, PrizmDayRange, PrizmTime } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-date-time-range-base-example',
  templateUrl: './input-date-time-range-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class PrizmInputDateTimeRangeBaseExampleComponent {
  readonly value = new FormControl(
    new PrizmDateTimeRange(
      new PrizmDayRange(
        new PrizmDay(2018, 2, 10),
        new PrizmDay(2018, 2, 10)
      ),
    ),
  );
  readonly min = new PrizmDateTime(
    new PrizmDay(2000, 2, 20),
    new PrizmTime(0, 0)
  );
  readonly max = new PrizmDateTime(
    new PrizmDay(2040, 2, 20),
    new PrizmTime(0, 0)
  );
}
