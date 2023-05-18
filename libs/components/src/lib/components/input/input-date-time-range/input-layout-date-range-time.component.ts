import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  forwardRef,
  Inject,
  Injector,
  Input,
  Optional,
  Self,
  Type,
  ViewChild,
} from '@angular/core';
import { PRIZM_INPUT_DATE_TIME_RANGE_PROVIDERS } from './input-date-range-time.providers';
import { AbstractPrizmNullableControl } from '../../../abstract/nullable-control';
import { PrizmWithOptionalMinMax } from '../../../types/with-optional-min-max';
import { PrizmDay } from '../../../@core/date-time/day';
import { PrizmFocusableElementAccessor } from '../../../types/focusable-element-accessor';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmBooleanHandler } from '../../../types/handler';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PrizmMarkerHandler } from '../../../types/marker-handler';
import { PRIZM_DEFAULT_MARKER_HANDLER } from '../../../constants/default-marker-handler';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PRIZM_FIRST_DAY_WITH_TIME, PRIZM_LAST_DAY_WITH_TIME } from '../../../@core/date-time/days.const';
import { PrizmDayLike } from '../../../types/day-like';
import { PrizmDateTime } from '../../../@core/date-time/date-time';
import { prizmIsNativeFocusedIn, prizmNullableSame, prizmSetNativeFocused } from '../../../util';
import { PrizmDateTimeRange } from '../../../@core/date-time/day-time-range';
import { PrizmDayRangePeriod } from '../../../@core/classes/day-range-period';
import { UntypedFormControl, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  PRIZM_DATE_RANGE_VALUE_TRANSFORMER,
  PRIZM_DATE_TEXTS,
  PRIZM_IS_MOBILE,
  PRIZM_MOBILE_CALENDAR,
} from '../../../tokens';
import { PrizmDialogService } from '../../dialogs/dialog';
import {
  PRIZM_DATE_FORMAT,
  PRIZM_DATE_RANGE_FILLER_LENGTH,
  PRIZM_DATE_SEPARATOR,
  PrizmDayRange,
  PrizmTime,
} from '../../../@core';
import { PrizmControlValueTransformer, PrizmDateMode, PrizmTimeMode } from '../../../types';
import { Observable } from 'rxjs';
import { PrizmInputSize } from '../common/models/prizm-input.models';
import { takeUntil } from 'rxjs/operators';
import { PrizmDestroyService, PrizmFormControlHelpers } from '@prizm-ui/helpers';
import { PrizmInputControl, PrizmInputNgControl } from '@prizm-ui/components';
import { prizmCreateDateRangeMask } from '../../../@core/mask/create-date-range-mask';

@Component({
  selector: `prizm-input-layout-date-time-range`,
  templateUrl: `./input-date-range-time.component.html`,
  styleUrls: [`./input-date-range-time.component.less`],
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
  nativeElementType = 'date-time-range';
  hasClearButton = true;
  @ViewChild('focusableElementRef', { read: ElementRef })
  public readonly focusableElement?: ElementRef<HTMLInputElement>;

  @Input()
  @prizmDefaultProp()
  disabledItemHandler: PrizmBooleanHandler<PrizmDay> = PRIZM_ALWAYS_FALSE_HANDLER;

  @Input()
  @prizmDefaultProp()
  markerHandler: PrizmMarkerHandler = PRIZM_DEFAULT_MARKER_HANDLER;

  @Input() forceClear: boolean | null = null;

  @Input()
  @prizmDefaultProp()
  label = 'Выберите дату и время';

  @Input()
  @prizmDefaultProp()
  size: PrizmInputSize = 'm';

  @Input()
  @prizmDefaultProp()
  outer = false;

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

  public dateControl = new UntypedFormControl();
  public timeControlFrom = new UntypedFormControl();
  public timeControlTo = new UntypedFormControl();

  public get nativeFocusableElement(): HTMLInputElement | null {
    return this.focusableElement ? (this.focusableElement.nativeElement as HTMLInputElement) : null;
  }

  public get focused(): boolean {
    return this.focusableElement?.nativeElement
      ? prizmIsNativeFocusedIn(this.focusableElement.nativeElement)
      : false;
  }
  constructor(
    @Optional()
    @Self()
    @Inject(NgControl)
    control: NgControl | null,
    private readonly destroyed$: PrizmDestroyService,
    @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    @Inject(Injector) injector: Injector,
    @Inject(PRIZM_IS_MOBILE) private readonly isMobile: boolean,
    @Inject(PrizmDialogService) private readonly dialogService: PrizmDialogService,
    @Optional()
    @Inject(PRIZM_MOBILE_CALENDAR)
    private readonly mobileCalendar: Type<any> | null,
    @Inject(PRIZM_DATE_FORMAT) readonly dateFormat: PrizmDateMode,
    @Inject(PRIZM_DATE_SEPARATOR) readonly dateSeparator: string,
    @Inject(PRIZM_DATE_TEXTS)
    readonly dateTexts$: Observable<Record<PrizmDateMode, string>>,
    @Optional()
    @Inject(PRIZM_DATE_RANGE_VALUE_TRANSFORMER)
    override readonly valueTransformer: PrizmControlValueTransformer<PrizmDateTimeRange | null> | null
  ) {
    super(injector, valueTransformer);
  }

  protected valueChanged(
    previousValue: PrizmDateTimeRange | null,
    currentValue: PrizmDateTimeRange | null
  ): boolean {
    return previousValue?.toString() !== currentValue?.toString();
  }

  public override ngOnInit(): void {
    super.ngOnInit();
  }

  private getDefaultValue(): PrizmDateTimeRange {
    return new PrizmDateTimeRange(
      new PrizmDayRange(
        PrizmDay.fromLocalNativeDate(new Date()),
        PrizmDay.fromLocalNativeDate(new Date()).append({ month: 2 })
      )
    );
  }
}
