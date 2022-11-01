import { Component } from '@angular/core';
import { PzmDay, PzmDayWithStatus } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-calendar-base-example',
  templateUrl: './calendar-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiCalendarBaseExampleComponent {
  public day = new PzmDay(2017, 0, 15);
  public daysWithStatus = [
    new PzmDayWithStatus(2017, 0, 10, 'index'),
    new PzmDayWithStatus(2017, 0, 11, 'warning'),
    new PzmDayWithStatus(2017, 0, 12, 'danger'),
    new PzmDayWithStatus(2017, 0, 13, 'success'),
    new PzmDayWithStatus(2017, 0, 17, 'yellow'),
  ];

  public onDayClick(day: PzmDay): void {
    this.day = day;
  }
}
