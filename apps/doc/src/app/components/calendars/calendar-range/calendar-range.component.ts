import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { ZuiDay, ZuiDayRange } from '@digital-plant/zui-components';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'zui-calendar-range-example',
  templateUrl: './calendar-range.component.html',
  styleUrls: ['./calendar-range.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarRangeComponent {
  public value = new ZuiDayRange(new ZuiDay(2022, 1, 7), new ZuiDay(2022, 3, 14));
  readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
  );

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/calendar-range-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/calendar-range-base-example.component.html'),
  };
}
