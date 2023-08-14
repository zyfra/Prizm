import { Component } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { PrizmDay, PrizmDayRange, PrizmDayRangePeriod } from '@prizm-ui/components';

@Component({
  selector: 'prizm-input-layout-date-range-list-example',
  templateUrl: './input-layout-date-range-list-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmInputLayoutDateRangeListExampleComponent {
  readonly value = new UntypedFormControl(
    new PrizmDayRange(new PrizmDay(2018, 2, 10), new PrizmDay(2018, 3, 20))
  );
  readonly min = new PrizmDay(2000, 2, 20);

  readonly max = new PrizmDay(2040, 2, 20);
  readonly items = [
    new PrizmDayRangePeriod(
      new PrizmDayRange(new PrizmDay(2018, 1, 1), new PrizmDay(2019, 11, 31)),
      '2018-2019'
    ),
    new PrizmDayRangePeriod(
      new PrizmDayRange(new PrizmDay(2019, 1, 1), new PrizmDay(2020, 11, 31)),
      '2019-2020'
    ),
  ];
}
