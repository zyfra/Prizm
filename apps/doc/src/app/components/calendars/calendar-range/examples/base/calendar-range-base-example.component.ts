import { Component } from '@angular/core';
import { ZuiDay, ZuiDayRange } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-calendar-range-base-example',
  templateUrl: './calendar-range-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiCalendarRangeBaseExampleComponent {
  public value = new ZuiDayRange(new ZuiDay(2022, 1, 7), new ZuiDay(2022, 1, 14));
}
