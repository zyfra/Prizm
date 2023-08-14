import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import {
  PrizmDateTime,
  PrizmDateTimeRange,
  PrizmDay,
  PrizmDayRange,
  PrizmTime,
  PrizmTimeRange,
} from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-layout-date-time-range-disabled-example',
  templateUrl: './input-layout-date-time-range-disabled-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputLayoutDateTimeRangeDisabledExampleComponent implements OnInit {
  readonly value = new UntypedFormControl(
    new PrizmDateTimeRange(
      new PrizmDayRange(new PrizmDay(2018, 2, 10), new PrizmDay(2018, 3, 20)),
      new PrizmTimeRange(new PrizmTime(9, 0), new PrizmTime(18, 0))
    )
  );
  readonly min = new PrizmDay(2000, 2, 20);

  readonly max = new PrizmDay(2000, 2, 20);

  public ngOnInit(): void {
    this.value.disable();
  }
}
