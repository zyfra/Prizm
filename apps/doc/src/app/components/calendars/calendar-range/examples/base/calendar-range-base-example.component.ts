import { Component } from '@angular/core';
import { PrizmDay, PrizmDayRange } from '@prizm-ui/components';

@Component({
  selector: 'prizm-calendar-range-base-example',
  templateUrl: './calendar-range-base-example.component.html',
  styles: [`
    .box {
      display: flex;
      gap: 1rem;
    }
  `]
})
export class PrizmCalendarRangeBaseExampleComponent {
  public value = new PrizmDayRange(new PrizmDay(2022, 1, 7), new PrizmDay(2022, 1, 14));
}
