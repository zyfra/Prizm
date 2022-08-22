import { Component } from '@angular/core';
import { ZuiDay } from '@digital-plant/zui-components';

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

  public onDayClick(day: ZuiDay): void {
    this.day = day;
  }
}
