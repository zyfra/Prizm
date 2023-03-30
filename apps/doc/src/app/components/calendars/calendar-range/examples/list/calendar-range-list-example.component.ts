import { Component } from '@angular/core';
import { PrizmDay, PrizmDayRange, PrizmDayRangePeriod } from '@prizm-ui/components';

@Component({
  selector: 'prizm-calendar-range-list-example',
  templateUrl: './calendar-range-list-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmCalendarRangeListExampleComponent {
  public value = new PrizmDayRange(new PrizmDay(2022, 1, 7), new PrizmDay(2022, 2, 14));
  readonly items = [
    new PrizmDayRangePeriod(new PrizmDayRange(new PrizmDay(2022, 1, 1), new PrizmDay(2022, 1, 10)), '1-10'),
    new PrizmDayRangePeriod(new PrizmDayRange(new PrizmDay(2022, 1, 10), new PrizmDay(2022, 1, 20)), '10-20'),
  ];
}
