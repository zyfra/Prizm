import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { PRIZM_FIRST_DAY, PRIZM_LAST_DAY } from '../../../@core/date-time/days.const';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PrizmYear } from '../../../@core/date-time/year';
import { PrizmAbstractTestId, prizmDefaultProp } from '@prizm-ui/core';
import { PrizmMonthLike } from '../../../types/month-like';
import { PrizmWithOptionalMinMax } from '../../../types/with-optional-min-max';
import { prizmI18nInitWithKey } from '../../../services/i18n.service';
import { PRIZM_MONTHS } from '../../../tokens/i18n';
import { CommonModule } from '@angular/common';
import { PrizmFocusableDirective } from '../../../directives';
import { PrizmPrimitiveSpinButtonComponent } from '../primitive-spin-button';
import { PrizmLinkComponent } from '../../link';
import { PrizmMonthPipe } from '../../../pipes';
import { PrizmIconsFullComponent } from '@prizm-ui/icons';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsTriangleDown } from '@prizm-ui/icons/full/source';

@Component({
  selector: `prizm-primitive-year-month-pagination`,
  templateUrl: `./primitive-year-month-pagination.component.html`,
  styleUrls: [`./primitive-year-month-pagination.component.less`],
  providers: [...prizmI18nInitWithKey(PRIZM_MONTHS, 'months')],
  standalone: true,
  imports: [
    CommonModule,
    PrizmFocusableDirective,
    PrizmPrimitiveSpinButtonComponent,
    PrizmLinkComponent,
    PrizmMonthPipe,
    PrizmIconsFullComponent,
  ],
})
export class PrizmPrimitiveYearMonthPaginationComponent
  extends PrizmAbstractTestId
  implements PrizmWithOptionalMinMax<PrizmMonth>
{
  @Input()
  @prizmDefaultProp()
  value = PrizmMonth.currentLocal();

  @Input()
  @prizmDefaultProp()
  hideButtons = false;

  @Input()
  @prizmDefaultProp()
  min: PrizmMonth = PRIZM_FIRST_DAY;

  @Input()
  @prizmDefaultProp()
  max: PrizmMonth = PRIZM_LAST_DAY;

  @Input()
  @prizmDefaultProp()
  monthActive = false;

  @Input()
  @prizmDefaultProp()
  yearActive = false;

  @Output()
  readonly valueChange = new EventEmitter<PrizmMonth>();

  @Output()
  readonly yearClick = new EventEmitter<PrizmYear>();

  @Output()
  readonly monthClick = new EventEmitter<PrizmMonth>();

  override readonly testId_ = 'ui_primitive_year_month_pagination';
  readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    super();

    this.iconsFullRegistry.registerIcons(prizmIconsTriangleDown);
  }

  public get prevMonthDisabled(): boolean {
    return this.value.monthSameOrBefore?.(this.min);
  }

  public get nextMonthDisabled(): boolean {
    return this.value.monthSameOrAfter?.(this.max);
  }

  public get oneYear(): boolean {
    return this.min.year === this.max.year;
  }

  public get oneMonth(): boolean {
    return this.min.month === this.max.month && this.oneYear;
  }

  public onYearClick($event: MouseEvent): void {
    // TODO delete after update dropdown-host (need activeZone optionan, for dynamic change elements)
    $event.stopImmediatePropagation();

    this.yearClick.next(this.value);
  }

  public onMonthClick($event: MouseEvent): void {
    this.monthClick.next(this.value);
  }

  public onPrevMonthClick(): void {
    this.appendValueWithLimit({ month: -1 });
  }

  public onNextMonthClick(): void {
    this.appendValueWithLimit({ month: 1 });
  }

  private appendValueWithLimit(date: PrizmMonthLike): void {
    const newMonth: PrizmMonth = this.value.append(date);

    if (this.min.monthSameOrAfter(newMonth)) {
      this.updateValue(this.min);

      return;
    }

    if (this.max.monthSameOrBefore(newMonth)) {
      this.updateValue(this.max);

      return;
    }

    this.updateValue(newMonth);
  }

  private updateValue(value: PrizmMonth): void {
    if (this.value.monthSame(value)) {
      return;
    }

    this.value = value;
    this.valueChange.emit(value);
  }
}
