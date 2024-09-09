import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  forwardRef,
  inject,
  Inject,
  Injector,
  Input,
  Optional,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormsModule, NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { PRIZM_INPUT_DATE_RANGE_PROVIDERS } from './input-date-range.providers';
import { PrizmDayRange } from '../../../@core/date-time/day-range';
import { PrizmDay } from '../../../@core/date-time/day';
import { prizmCreateDateRangeMask } from '../../../@core/mask/create-date-range-mask';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmBooleanHandler } from '../../../types/handler';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PrizmMarkerHandler } from '../../../types/marker-handler';
import { PRIZM_DEFAULT_MARKER_HANDLER } from '../../../constants/default-marker-handler';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PrizmDayRangePeriod } from '../../../@core/classes/day-range-period';
import { PRIZM_FIRST_DAY, PRIZM_LAST_DAY } from '../../../@core/date-time/days.const';
import { PrizmDayLike } from '../../../types/day-like';
import { PRIZM_DATE_SEPARATOR } from '../../../@core/date-time/date-separator';
import { PrizmDialogService } from '../../dialogs/dialog/dialog.service';
import { PRIZM_DATE_FORMAT } from '../../../@core/date-time/date-format';
import { PrizmDateMode } from '../../../types/date-mode';
import { PRIZM_DATE_TEXTS } from '../../../tokens/i18n';
import { PRIZM_DATE_RANGE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';
import { prizmNullableSame } from '../../../util/common/nullable-same';
import { PrizmDestroyService, PrizmLetDirective } from '@prizm-ui/helpers';
import { PrizmInputControl } from '../common/base/input-control.class';
import { PrizmInputNgControl } from '../common/base/input-ng-control.class';
import { map } from 'rxjs/operators';
import { prizmCreateDateNgxMask } from '../../../@core';
import { PrizmInputZoneDirective, PrizmInputZoneModule } from '../../../directives/input-zone';
import { prizmI18nInitWithKey } from '../../../services';
import { CommonModule } from '@angular/common';
import { PrizmMaskModule } from '../../../modules';
import {
  PolymorphOutletDirective,
  PrizmLifecycleDirective,
  PrizmValueAccessorDirective,
} from '../../../directives';
import { PrizmInputTextModule } from '../input-text';
import { PrizmDropdownHostComponent } from '../../dropdowns/dropdown-host';
import { PrizmCalendarRangeComponent } from '../../calendar-range';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import { prizmIconsCalendarRange } from '@prizm-ui/icons/full/source';

@Component({
  selector: `prizm-input-layout-date-range`,
  templateUrl: `./input-layout-date-range.component.html`,
  styleUrls: [
    `./input-layout-date-range.component.less`,
    './../input-date/input-layout-date-shared.component.less',
  ],
  providers: [
    ...prizmI18nInitWithKey(PRIZM_DATE_TEXTS, 'dateTexts'),
    ...PRIZM_INPUT_DATE_RANGE_PROVIDERS,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmInputLayoutDateRangeComponent),
      multi: true,
    },
    PrizmDestroyService,
    { provide: PrizmInputControl, useExisting: PrizmInputLayoutDateRangeComponent },
  ],
  standalone: true,
  imports: [
    CommonModule,
    PrizmMaskModule,
    PrizmInputZoneModule,
    PrizmLifecycleDirective,
    PrizmLetDirective,
    PolymorphOutletDirective,
    PrizmInputTextModule,
    PrizmDropdownHostComponent,
    PrizmCalendarRangeComponent,
    PrizmValueAccessorDirective,
    FormsModule,
  ],
})
export class PrizmInputLayoutDateRangeComponent extends PrizmInputNgControl<PrizmDayRange | null> {
  hasClearButton = true;
  nativeElementType = 'input-layout-date-range';

  @ViewChild('focusableElementRef', { read: PrizmInputZoneDirective })
  public override readonly focusableElement?: PrizmInputZoneDirective;

  @ContentChild('footerFrom', { read: TemplateRef })
  public readonly footerFromTemplate?: TemplateRef<HTMLInputElement>;

  @ContentChild('footerTo', { read: TemplateRef })
  public readonly footerToTemplate?: TemplateRef<HTMLInputElement>;

  @Input()
  @prizmDefaultProp()
  disabledItemHandler: PrizmBooleanHandler<PrizmDay> = PRIZM_ALWAYS_FALSE_HANDLER;

  @Input()
  @prizmDefaultProp()
  markerHandler: PrizmMarkerHandler = PRIZM_DEFAULT_MARKER_HANDLER;

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
  min = PRIZM_FIRST_DAY;

  @Input()
  @prizmDefaultProp()
  max = PRIZM_LAST_DAY;

  @Input()
  @prizmDefaultProp()
  minLength: PrizmDayLike | null = null;

  @Input()
  @prizmDefaultProp()
  maxLength: PrizmDayLike | null = null;

  open = false;

  override readonly testId_ = 'ui_input_date_range';

  get interactive() {
    return !this.disabled;
  }
  readonly nativeValue$$ = new BehaviorSubject<[string, string]>(['', '']);

  override get empty(): Observable<boolean> {
    return combineLatest([this.value$, this.nativeValue$$]).pipe(
      map(([value, nativeValue]) => {
        return !value && !nativeValue.find(Boolean);
      })
    ) as Observable<boolean>;
  }

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor(
    @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
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
    override readonly valueTransformer: PrizmControlValueTransformer<PrizmDayRange | null> | null
  ) {
    super(injector, valueTransformer);

    this.iconsFullRegistry.registerIcons(prizmIconsCalendarRange);
  }

  public get focused(): Observable<boolean> {
    return this.focusableElement?.focused$ ?? of(false);
  }

  public get canOpen(): boolean {
    return this.interactive;
  }

  public closeOnOutsideClick = true;

  get computedMask(): string {
    return prizmCreateDateRangeMask(this.dateFormat, this.dateSeparator);
  }

  get computedSingleMask(): string {
    return prizmCreateDateNgxMask(this.dateFormat, this.dateSeparator);
  }

  get stringValue(): string {
    return this.value?.toString() ?? '';
  }
  get fromValue(): string {
    return this.value?.from?.toString() ?? '';
  }
  get toValue(): string {
    return this.value?.to?.toString() ?? '';
  }

  get activePeriod(): PrizmDayRangePeriod | null {
    return (
      this.items.find(item =>
        prizmNullableSame(
          this.value,
          item.range,
          (a, b) =>
            a.from.daySame(b.from.dayLimit(this.min, this.max)) &&
            a.to.daySame(b.to.dayLimit(this.min, this.max))
        )
      ) || null
    );
  }

  public onOpenChange(open: boolean): void {
    this.open = open;
    this.changeDetectorRef.markForCheck();
  }

  public onValueFromChange(value: string, isFromValue: boolean): void {
    // Clear from mask
    value = value.replace(/[_]/g, '');

    const currentValue = isFromValue ? this.fromValue : this.toValue;
    if (value === currentValue) return;

    const otherValue = isFromValue ? this.nativeValue$$.value[1] : this.nativeValue$$.value[0];
    this.nativeValue$$.next(isFromValue ? [value, otherValue] : [otherValue, value]);

    if (value == null) {
      this.onOpenChange(true);
    }

    if (!value || value.length !== this.computedSingleMask.length) {
      if (!value && isFromValue && !this.value?.to && !isFromValue && !this.value?.from) {
        this.updateValue(null);
      }
      return;
    }

    const parsedValue = PrizmDay.normalizeParse(value, this.dateFormat);
    const [parsedFromValue, parsedToValue] = this.ensureCorrectDateOrder(
      isFromValue,
      isFromValue ? parsedValue : this.value?.from,
      isFromValue ? this.value?.to : parsedValue
    );

    this.updateWithCorrectDateAndTime(parsedFromValue ?? null, parsedToValue ?? null);
  }

  /**
   * Ensures that the date range is valid by adjusting the fromValue and toValue if necessary.
   * If the fromValue is later than the toValue, it corrects the order based on the isFromValue flag.
   *
   * @param isFromValue - A boolean indicating if the change was made to the fromValue.
   * @param fromValue - The starting date of the range.
   * @param toValue - The ending date of the range.
   * @returns A tuple containing the corrected fromValue and toValue.
   */
  private ensureCorrectDateOrder(
    isFromValue: boolean,
    fromValue?: PrizmDay,
    toValue?: PrizmDay
  ): [typeof fromValue, typeof toValue] {
    if (fromValue && toValue && fromValue.getTime() > toValue.getTime()) {
      if (isFromValue) {
        fromValue = toValue.copy();
      } else {
        toValue = fromValue.copy();
      }
    }
    return [fromValue, toValue];
  }

  public onRangeChange(range: PrizmDayRange | null): void {
    this.focusInput();

    if (!range) {
      this.nativeValue$$.next(['', '']);
    }

    if (!prizmNullableSame<PrizmDayRange>(this.value, range, (a, b) => a.daySame(b))) {
      this.updateValue(range);
      this.open = false;
    }
    this.nativeValue$$.next([this.fromValue, this.toValue]);
    this.changeDetectorRef.markForCheck();
  }

  public onItemSelect(item: string | PrizmDayRangePeriod): void {
    this.toggle();
    this.focusInput();

    if (typeof item !== `string`) {
      this.updateValue(item.range.dayLimit(this.min, this.max));

      return;
    }

    if (this.activePeriod !== null) {
      this.updateValue(null);
      this.nativeValue$$.next(['', '']);
    }
  }

  private updateWithCorrectDateAndTime(from: PrizmDay | null, to: PrizmDay | null): void {
    if (from) from = this.dayLimit(from);
    if (to) to = this.dayLimit(to);
    // need to update mask value for sync values
    // TODO move to helper and add to all similar cases
    this.focusableElement?.updateNativeValues(
      {
        idx: 0,
        value: from?.toString() ?? '',
      },
      {
        idx: 1,
        value: to?.toString() ?? '',
      }
    );
    this.updateValue(new PrizmDayRange(from as any, to as any));
  }

  private dayLimit(value: PrizmDay): PrizmDay {
    return value.dayLimit(this.min, this.max);
  }

  public override writeValue(value: PrizmDayRange | null): void {
    super.writeValue(value);
    this.nativeValue$$.next([value?.from?.toString() as string, value?.to?.toString() as string]);
  }

  private toggle(): void {
    this.open = !this.open;
  }

  private focusInput(): void {
    this.focusableElement?.focus(0);
  }

  private clampValue(value: PrizmDayRange): PrizmDayRange {
    const clampedBottom =
      this.minLength && value.from.append(this.minLength).dayAfter(value.to)
        ? new PrizmDayRange(value.from, value.from.append(this.minLength).append({ day: -1 }))
        : value;

    const availableMax = this.maxLength
      ? clampedBottom.from.append(this.maxLength).append({ day: -1 })
      : this.max;

    return clampedBottom.to.dayAfter(availableMax)
      ? new PrizmDayRange(clampedBottom.from, availableMax)
      : clampedBottom;
  }

  public override clear(ev: MouseEvent): void {
    ev.stopImmediatePropagation();
    super.clear(ev);
    this.nativeValue$$.next(['', '']);
    this.updateValue(null);
    this.layoutComponent?.cdr.markForCheck();
  }
}
