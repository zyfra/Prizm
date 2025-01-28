import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  PRIZM_FIRST_DAY,
  PRIZM_LAST_DAY,
  PrizmBooleanHandler,
  PRIZM_ALWAYS_FALSE_HANDLER,
  PrizmDay,
  PrizmYear,
} from '@prizm-ui/components';
import { TuiDocExample } from '@taiga-ui/addon-doc';

@Component({
  selector: `prizm-calendar-year-example`,
  templateUrl: `./calendar-year-example.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleCalendarYearComponent {
  readonly setup = import(`./examples/setup.md?raw`);
  readonly baseExample: TuiDocExample = {
    TypeScript: import(`./examples/base/base.component.ts?raw`),
    HTML: import(`./examples/base/base.component.html?raw`),
  };

  readonly minVariants = [PRIZM_FIRST_DAY, new PrizmYear(2019), new PrizmYear(2007)];

  readonly maxVariants = [PRIZM_LAST_DAY, new PrizmYear(2020), new PrizmYear(2023), new PrizmYear(2015)];

  min = this.minVariants[0];
  max = this.maxVariants[0];

  readonly disabledItemHandlerVariants: ReadonlyArray<PrizmBooleanHandler<number>> = [
    PRIZM_ALWAYS_FALSE_HANDLER,
    (year: number): boolean => year % 3 === 0,
  ];

  disabledItemHandler = this.disabledItemHandlerVariants[0];

  readonly valueVariants: ReadonlyArray<PrizmYear | null> = [
    PrizmDay.currentLocal(),
    new PrizmYear(2007),
    null,
  ];

  value: PrizmYear | null = null;

  readonly yearVariants: readonly PrizmYear[] = [PrizmDay.currentLocal(), new PrizmYear(2007)];

  year = this.yearVariants[0];

  public onYearClick(year: PrizmYear): void {
    console.log('onYearClick', {
      year,
    });
  }
}
