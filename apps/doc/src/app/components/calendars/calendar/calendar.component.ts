import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmDay } from '@prizm-ui/components';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'prizm-calendar-example',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
  public day = new PrizmDay(2017, 0, 15);
  public showAdjacent = true;
  public readonly control = new FormControl(new PrizmDay(2017, 0, 15));
  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/calendar-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/calendar-base-example.component.html'),
  };

  public onDayClick(day: PrizmDay): void {
    this.day = day;
  }
}
