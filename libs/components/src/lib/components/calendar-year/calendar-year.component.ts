import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { PrizmAbstractTestId, prizmDefaultProp } from '@prizm-ui/core';
import { PrizmDay } from '../../@core/date-time/day';
import { PRIZM_FIRST_DAY, PRIZM_LAST_DAY } from '../../@core/date-time/days.const';
import { PrizmYear } from '../../@core/date-time/year';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../constants/always-false-handler';
import { PrizmWithOptionalMinMax } from '../../types/with-optional-min-max';
import { CommonModule } from '@angular/common';
import { PrizmPrimitiveYearPickerComponent } from '../internal';
import { PrizmScrollbarComponent } from '../scrollbar';
import { PrizmBooleanHandler } from '../../types/handler';
import { PrizmTestIdDirective } from '@prizm-ui/helpers';
const TODAY = PrizmDay.currentLocal();

@Component({
  selector: `prizm-calendar-year`,
  templateUrl: `./calendar-year.component.html`,
  styleUrls: [`./calendar-year.component.less`],
  standalone: true,
  imports: [CommonModule, PrizmPrimitiveYearPickerComponent, PrizmScrollbarComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  hostDirectives: [
    {
      directive: PrizmTestIdDirective,
      inputs: ['testId'],
    },
  ],
})
export class PrizmCalendarYearComponent implements PrizmWithOptionalMinMax<PrizmYear> {
  @Input()
  @prizmDefaultProp()
  value: PrizmYear | null = null;

  @Input()
  @prizmDefaultProp()
  disabledItemHandler: PrizmBooleanHandler<number> = PRIZM_ALWAYS_FALSE_HANDLER;

  @Input()
  @prizmDefaultProp()
  min: PrizmYear = PRIZM_FIRST_DAY;

  @Input()
  @prizmDefaultProp()
  max: PrizmYear = PRIZM_LAST_DAY;

  @Output()
  readonly yearClick = new EventEmitter<PrizmYear>();

  readonly hoveredItemChange = new EventEmitter<PrizmYear | null>();

  get initialYear(): PrizmYear {
    return this.value ?? TODAY;
  }

  hoveredItem: PrizmYear | null = null;
  pressedItem: PrizmYear | null = null;

  private readonly testIdDirective = inject(PrizmTestIdDirective, { host: true });

  constructor() {
    this.testIdDirective.generateMainTestId = 'ui_calendar_year';
  }

  public onPickerYearClick(year: PrizmYear): void {
    if (this.value?.yearSame(year)) {
      return;
    }

    this.value = year;

    this.yearClick.emit(year);
  }
}
