import { Component } from '@angular/core';
import { PzmDay, PzmDayRange } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-calendar-range-base-example',
  templateUrl: './calendar-range-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class ZuiCalendarRangeBaseExampleComponent {
  public value = new PzmDayRange(new PzmDay(2022, 1, 7), new PzmDay(2022, 1, 14));
}
