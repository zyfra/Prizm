import {
  Component,
  ElementRef,
  forwardRef,
  Inject,
  Injector,
  Input,
  Optional,
  ViewChild,
} from '@angular/core';
import { PRIZM_INPUT_DATE_TIME_RANGE_PROVIDERS } from './input-date-range-time.providers';
import { PrizmDay } from '../../../@core/date-time/day';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmBooleanHandler } from '../../../types/handler';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PrizmMarkerHandler } from '../../../types/marker-handler';
import { PRIZM_DEFAULT_MARKER_HANDLER } from '../../../constants/default-marker-handler';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PRIZM_FIRST_DAY_WITH_TIME, PRIZM_LAST_DAY_WITH_TIME } from '../../../@core/date-time/days.const';
import { PrizmDayLike } from '../../../types/day-like';
import { prizmIsNativeFocusedIn } from '../../../util';
import { PrizmDateTimeRange } from '../../../@core/date-time/day-time-range';
import { PrizmDayRangePeriod } from '../../../@core/classes/day-range-period';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PRIZM_DATE_RANGE_VALUE_TRANSFORMER, PRIZM_DATE_TEXTS } from '../../../tokens';
import { PrizmDialogService } from '../../dialogs/dialog';
import { PRIZM_DATE_FORMAT, PRIZM_DATE_SEPARATOR, PrizmDayRange, PrizmTime } from '../../../@core';
import { PrizmControlValueTransformer, PrizmDateMode, PrizmTimeMode } from '../../../types';
import { Observable, timer } from 'rxjs';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputControl } from '../common/base/input-control.class';
import { PrizmInputNgControl } from '../common/base/input-ng-control.class';
import { PrizmInputLayoutDateRangeComponent } from '../input-date-range';
import { tap } from 'rxjs/operators';

@Component({
  selector: `prizm-input-layout-date-time-range`,
  templateUrl: `./input-layout-date-range-time.component.html`,
  styleUrls: [`./input-layout-date-range-time.component.less`],
  providers: [
    ...PRIZM_INPUT_DATE_TIME_RANGE_PROVIDERS,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmInputLayoutDateTimeRangeComponent),
      multi: true,
    },
    PrizmDestroyService,
    { provide: PrizmInputControl, useExisting: PrizmInputLayoutDateTimeRangeComponent },
  ],
})
export class PrizmInputLayoutDateTimeRangeComponent extends PrizmInputNgControl<PrizmDateTimeRange> {
  readonly hasClearButton = true;
  readonly nativeElementType = 'input-layout-date-range';

  @ViewChild('focusableElementRef', { read: ElementRef })
  public readonly focusableElement?: ElementRef<HTMLInputElement>;

  @Input()
  @prizmDefaultProp()
  disabledItemHandler: PrizmBooleanHandler<PrizmDay> = PRIZM_ALWAYS_FALSE_HANDLER;

  @Input()
  @prizmDefaultProp()
  markerHandler: PrizmMarkerHandler = PRIZM_DEFAULT_MARKER_HANDLER;

  @Input()
  @prizmDefaultProp()
  timeItems: readonly PrizmTime[] = new Array(24).fill(null).map((_, i) => new PrizmTime(i, 0, 0, 0));

  @Input()
  @prizmDefaultProp()
  defaultViewedMonth = PrizmMonth.currentLocal();

  @Input()
  @prizmDefaultProp()
  items: readonly PrizmDayRangePeriod[] = [];

  @Input()
  @prizmDefaultProp()
  placeholder = '';

  @Input()
  @prizmDefaultProp()
  timeMode: PrizmTimeMode = 'HH:MM';

  @Input()
  @prizmDefaultProp()
  min = PRIZM_FIRST_DAY_WITH_TIME;

  @Input()
  @prizmDefaultProp()
  max = PRIZM_LAST_DAY_WITH_TIME;

  @Input()
  @prizmDefaultProp()
  minLength: PrizmDayLike | null = null;

  @Input()
  @prizmDefaultProp()
  maxLength: PrizmDayLike | null = null;

  @Input()
  @prizmDefaultProp()
  timeStrict = false;

  override get empty() {
    return !this.value?.dayRange;
  }

  public get nativeFocusableElement(): HTMLInputElement | null {
    return this.focusableElement ? (this.focusableElement.nativeElement as HTMLInputElement) : null;
  }

  public get focused(): boolean {
    return this.focusableElement?.nativeElement
      ? prizmIsNativeFocusedIn(this.focusableElement.nativeElement)
      : false;
  }
  constructor(
    @Inject(Injector) injector: Injector,
    @Inject(PrizmDialogService) private readonly dialogService: PrizmDialogService,
    @Optional()
    @Inject(PRIZM_DATE_FORMAT)
    readonly dateFormat: PrizmDateMode,
    @Inject(PRIZM_DATE_SEPARATOR) readonly dateSeparator: string,
    @Inject(PRIZM_DATE_TEXTS)
    readonly dateTexts$: Observable<Record<PrizmDateMode, string>>,
    @Optional()
    @Inject(PRIZM_DATE_RANGE_VALUE_TRANSFORMER)
    override readonly valueTransformer: PrizmControlValueTransformer<PrizmDateTimeRange | null> | null
  ) {
    super(injector, valueTransformer);
  }

  public onOpenChange(val: boolean, component: PrizmInputLayoutDateRangeComponent): void {
    component.onOpenChange(val);
  }

  protected valueChanged(
    previousValue: PrizmDateTimeRange | null,
    currentValue: PrizmDateTimeRange | null
  ): boolean {
    return previousValue?.toString() !== currentValue?.toString();
  }

  public updateDayRange(dayRange: PrizmDayRange): void {
    let value = this.value?.copy();
    if (!dayRange) {
      value = null;
    } else if (value instanceof PrizmDateTimeRange) {
      value.dayRange = dayRange;
    } else {
      value = new PrizmDateTimeRange(dayRange);
    }
    this.updateValue(value);
  }

  public updateTimeFrom(value: PrizmTime): void {
    if (this.value.timeRange?.from?.isSameTime(value)) return;
    this.value.timeRange.from = value;
    this.updateValue(this.value?.copy());
  }

  public updateTimeTo(value: PrizmTime): void {
    if (this.value.timeRange?.to?.isSameTime(value)) return;
    this.value.timeRange.to = value;
    this.updateValue(this.value?.copy());
  }
}
