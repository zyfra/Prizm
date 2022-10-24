import { Component } from '@angular/core';
import { ZuiDay, ZuiDayWithStatus } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-calendar-base-example',
  templateUrl: './calendar-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiCalendarBaseExampleComponent {
  public day = new ZuiDay(2017, 0, 15);
  public daysWithStatus = [
    new ZuiDayWithStatus(2017, 0, 10, 'index'),
    new ZuiDayWithStatus(2017, 0, 11, 'warning'),
    new ZuiDayWithStatus(2017, 0, 12, 'danger'),
    new ZuiDayWithStatus(2017, 0, 13, 'success'),
    new ZuiDayWithStatus(2017, 0, 17, 'yellow'),
  ];

  public onDayClick(day: ZuiDay): void {
    this.day = day;
  }
}
