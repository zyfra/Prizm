import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmDay } from '@prizm-ui/components';
import { UntypedFormControl } from '@angular/forms';

@Component({
  selector: 'prizm-calendar-example',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent {
  public day = new PrizmDay(2017, 0, 15);
  public showAdjacent = true;
  public readonly control = new UntypedFormControl(new PrizmDay(2017, 0, 15));
  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/calendar-base-example.component.ts?raw'),
    HTML: import('./examples/base/calendar-base-example.component.html?raw'),
  };

  public onDayClick(day: PrizmDay): void {
    this.day = day;
  }
}
