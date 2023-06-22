import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmDay, PrizmDayRange } from '@prizm-ui/components';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'prizm-calendar-range-example',
  templateUrl: './calendar-range.component.html',
  styleUrls: ['./calendar-range.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarRangeComponent {
  public value = new PrizmDayRange(new PrizmDay(2022, 1, 7), new PrizmDay(2022, 3, 14));
  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/calendar-range-base-example.component.ts?raw'),
    HTML: import('./examples/base/calendar-range-base-example.component.html?raw'),
  };
  readonly exampleList: TuiDocExample = {
    TypeScript: import('./examples/list/calendar-range-list-example.component.ts?raw'),
    HTML: import('./examples/list/calendar-range-list-example.component.html?raw'),
  };
}
