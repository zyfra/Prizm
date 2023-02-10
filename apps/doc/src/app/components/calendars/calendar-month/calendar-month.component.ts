import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import {
  PRIZM_FIRST_DAY,
  PrizmMonth,
  PRIZM_LAST_DAY,
  PrizmBooleanHandler,
  PRIZM_ALWAYS_FALSE_HANDLER,
  PrizmDay,
  PrizmMonthRange,
  PrizmYear,
} from '@prizm-ui/components';
import { TuiDocExample } from '@taiga-ui/addon-doc';
import { TuiAlertService } from '@taiga-ui/core';

@Component({
  selector: `prizm-example-prizm-calendar-month`,
  templateUrl: `./calendar-month.component.html`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExampleCalendarMonthComponent {
  readonly exampleModule = import(`./examples/import/import-module.md?raw`);
  readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

  readonly example1: TuiDocExample = {
    TypeScript: import(`./examples/base/base.component.ts?raw`),
    HTML: import(`./examples/base/base.component.html?raw`),
  };

  readonly example2: TuiDocExample = {
    TypeScript: import(`./examples/range/range.component.ts?raw`),
    HTML: import(`./examples/range/range.component.html?raw`),
  };

  readonly minVariants = [PRIZM_FIRST_DAY, new PrizmMonth(2019, 2), new PrizmMonth(2007, 0)];

  readonly maxVariants = [
    PRIZM_LAST_DAY,
    new PrizmMonth(2020, 2),
    new PrizmMonth(2023, 0),
    new PrizmMonth(2019, 4),
  ];

  min = this.minVariants[0];
  max = this.maxVariants[0];

  readonly disabledItemHandlerVariants: ReadonlyArray<PrizmBooleanHandler<PrizmMonth>> = [
    PRIZM_ALWAYS_FALSE_HANDLER,
    ({ month }: PrizmMonth): boolean => month % 3 === 0,
  ];

  disabledItemHandler = this.disabledItemHandlerVariants[0];

  readonly valueVariants: ReadonlyArray<PrizmMonth | PrizmMonthRange> = [
    PrizmDay.currentLocal(),
    new PrizmMonthRange(PrizmDay.currentLocal(), PrizmDay.currentLocal().append({ month: 3 })),
    new PrizmMonth(2007, 2),
  ];

  value: PrizmMonth | PrizmMonthRange | null = null;

  readonly yearVariants: readonly PrizmYear[] = [PrizmDay.currentLocal(), new PrizmYear(2007)];

  year = this.yearVariants[0];

  constructor(
    @Inject(TuiAlertService)
    private readonly alertService: TuiAlertService
  ) {}

  public onMonthClick(month: PrizmMonth): void {
    this.alertService.open(String(month)).subscribe();
  }
}
