import { Component } from '@angular/core';
import { PrizmDay, PrizmDayWithStatus } from '@prizm-ui/components';

@Component({
  selector: 'prizm-calendar-base-example',
  templateUrl: './calendar-base-example.component.html',
  styles: [
    `
      .box {
        display: flex;
        gap: 1rem;
      }
    `,
  ],
})
export class PrizmCalendarBaseExampleComponent {
  public day = new PrizmDay(2017, 0, 15);
  public daysWithStatus = [
    new PrizmDayWithStatus(2017, 0, 10, 'index'),
    new PrizmDayWithStatus(2017, 0, 11, 'warning'),
    new PrizmDayWithStatus(2017, 0, 12, 'danger'),
    new PrizmDayWithStatus(2017, 0, 13, 'success'),
    new PrizmDayWithStatus(2017, 0, 17, 'yellow'),
  ];

  public onDayClick(day: PrizmDay): void {
    this.day = day;
  }
}
