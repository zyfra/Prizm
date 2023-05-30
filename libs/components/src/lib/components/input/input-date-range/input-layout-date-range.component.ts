import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  forwardRef,
  HostBinding,
  Inject,
  Injector,
  Input,
  Optional,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
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
import { PRIZM_DATE_RANGE_FILLER_LENGTH } from '../../../@core/date-time/date-fillers';
import { prizmSetNativeFocused } from '../../../util/set-native-focused';
import { prizmIsNativeFocusedIn } from '../../../util';
import { PrizmDestroyService } from '@prizm-ui/helpers';
import { PrizmInputControl } from '../common/base/input-control.class';
import { PrizmInputNgControl } from '../common/base/input-ng-control.class';

@Component({
  selector: `prizm-input-layout-date-range`,
  templateUrl: `./input-layout-date-range.component.html`,
  styleUrls: [`./input-layout-date-range.component.less`],
  providers: [
    ...PRIZM_INPUT_DATE_RANGE_PROVIDERS,
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PrizmInputLayoutDateRangeComponent),
      multi: true,
    },
    PrizmDestroyService,
    { provide: PrizmInputControl, useExisting: PrizmInputLayoutDateRangeComponent },
  ],
})
export class PrizmInputLayoutDateRangeComponent extends PrizmInputNgControl<PrizmDayRange> {
  hasClearButton = true;
  nativeElementType = 'input-layout-date-range';
  @ViewChild('focusableElementRef', { read: ElementRef })
  public readonly focusableElement?: ElementRef<HTMLInputElement>;

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

  @HostBinding('attr.data-testid')
  readonly testId = 'ui_input_date_range';

  get interactive() {
    return !this.disabled;
  }

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
  }

  public get nativeFocusableElement(): HTMLInputElement | null {
    return this.focusableElement ? (this.focusableElement.nativeElement as HTMLInputElement) : null;
  }

  public get focused(): boolean {
    return this.focusableElement?.nativeElement
      ? prizmIsNativeFocusedIn(this.focusableElement.nativeElement)
      : false;
  }

  public get canOpen(): boolean {
    return this.interactive;
  }

  public closeOnOutsideClick = true;

  get computedMask(): string {
    return prizmCreateDateRangeMask(this.dateFormat, this.dateSeparator);
  }

  get stringValue(): string {
    return this.value?.toString() ?? '';
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

  get computedValue(): string {
    const { value, nativeValue, activePeriod } = this;

    if (activePeriod) {
      return String(activePeriod);
    }

    return value ? value.getFormattedDayRange(this.dateFormat, this.dateSeparator) : nativeValue;
  }

  get nativeValue(): string {
    return this.nativeFocusableElement ? this.nativeFocusableElement.value : ``;
  }

  set nativeValue(value: string) {
    if (!this.nativeFocusableElement) {
      return;
    }

    this.nativeFocusableElement.value = value;
  }

  public onOpenChange(open: boolean): void {
    this.open = open;
    this.changeDetectorRef.markForCheck();
  }

  public onValueChange(value: string): void {
    if (value === this.stringValue) return;

    if (value == null) {
      this.onOpenChange(true);
    }

    if (!value || value.length !== PRIZM_DATE_RANGE_FILLER_LENGTH) {
      if (!value) this.updateValue(null);
      return;
    }

    const parsedValue = PrizmDayRange.normalizeParse(value, this.dateFormat);

    this.updateValue(!this.minLength && !this.maxLength ? parsedValue : this.clampValue(parsedValue));
  }

  public onRangeChange(range: PrizmDayRange | null): void {
    this.focusInput();

    if (!range) {
      this.nativeValue = ``;
    }

    if (!prizmNullableSame<PrizmDayRange>(this.value, range, (a, b) => a.daySame(b))) {
      this.updateValue(range);
      this.open = false;
    }
    this.focusableElement.nativeElement.value = this.stringValue;
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
      this.nativeValue = ``;
    }
  }

  public override writeValue(value: PrizmDayRange | null): void {
    super.writeValue(value);
    this.nativeValue = value ? this.computedValue : ``;
  }

  private toggle(): void {
    this.open = !this.open;
  }

  private focusInput(preventScroll: boolean = false): void {
    if (this.nativeFocusableElement) {
      prizmSetNativeFocused(this.nativeFocusableElement, true, preventScroll);
    }
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
}
