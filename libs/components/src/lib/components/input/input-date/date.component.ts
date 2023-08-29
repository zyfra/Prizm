import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Inject,
  Injector,
  Input,
  Optional,
  Self,
  Type,
  ViewChild,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PRIZM_INPUT_DATE_PROVIDERS } from './input-date.providers';
import { prizmDefaultProp } from '@prizm-ui/core';
import {
  PRIZM_DATE_FILLER_LENGTH,
  PRIZM_DATE_FORMAT,
  PRIZM_DATE_SEPARATOR,
  PRIZM_FIRST_DAY,
  PRIZM_LAST_DAY,
  prizmChangeDateSeparator,
  PrizmDay,
  PrizmMonth,
} from '../../../@core/date-time';
import { PRIZM_IS_MOBILE } from '../../../tokens/is-mobile';
import {
  PrizmBooleanHandler,
  PrizmContextWithImplicit,
  PrizmControlValueTransformer,
  PrizmDateMode,
  PrizmFocusableElementAccessor,
} from '../../../types';
import { prizmNullableSame } from '../../../util/common/nullable-same';
import { PrizmWithOptionalMinMax } from '../../../types/with-optional-min-max';
import { PrizmMarkerHandler } from '../../../types/marker-handler';
import { PrizmDialogService } from '../../dialogs/dialog';
import { PRIZM_DEFAULT_MARKER_HANDLER } from '../../../constants/default-marker-handler';
import { PrizmNamedDay } from '../../../@core/classes/named-day';
import { PRIZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { prizmCreateDateNgxMask } from '../../../@core/mask/create-date-mask';
import { AbstractPrizmNullableControl } from '../../../abstract/nullable-control';
import { PRIZM_MOBILE_CALENDAR } from '../../../tokens/mobile-calendar';
import { PRIZM_DATE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PRIZM_DATE_TEXTS } from '../../../tokens/i18n';
import { PrizmInputSize } from '../common/models/prizm-input.models';
import { prizmIsNativeFocusedIn } from '../../../util';
import { PRIZM_DATE_RIGHT_BUTTONS } from '../../../tokens/date-extra-buttons';
import { PrizmDateButton } from '../../../types/date-button';
import { prizmI18nInitWithKey } from '../../../services';

/**
 * @deprecated
 * use PrizmInputLayoutDateComponent
 * */
@Component({
  selector: `prizm-input-date`,
  templateUrl: `./date.component.html`,
  styleUrls: [`./date.component.less`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [...prizmI18nInitWithKey(PRIZM_DATE_TEXTS, 'dateTexts'), ...PRIZM_INPUT_DATE_PROVIDERS],
})
export class PrizmInputDateComponent
  extends AbstractPrizmNullableControl<PrizmDay>
  implements PrizmWithOptionalMinMax<PrizmDay>, PrizmFocusableElementAccessor
{
  @ViewChild('focusableElementRef', { read: ElementRef })
  public readonly focusableElement?: ElementRef<HTMLInputElement>;

  private month: PrizmMonth | null = null;

  public mask = prizmCreateDateNgxMask(this.dateFormat, this.dateSeparator);

  @Input()
  @prizmDefaultProp()
  min = PRIZM_FIRST_DAY;

  @Input()
  @prizmDefaultProp()
  placeholder = '';

  @Input() forceClear: boolean | null = null;

  @Input()
  @prizmDefaultProp()
  max = PRIZM_LAST_DAY;

  @Input()
  @prizmDefaultProp()
  disabledItemHandler: PrizmBooleanHandler<PrizmDay> = PRIZM_ALWAYS_FALSE_HANDLER;

  @Input()
  @prizmDefaultProp()
  markerHandler: PrizmMarkerHandler = PRIZM_DEFAULT_MARKER_HANDLER;

  @Input()
  @prizmDefaultProp()
  items: readonly PrizmNamedDay[] = [];

  @Input()
  @prizmDefaultProp()
  defaultActiveYearMonth = PrizmMonth.currentLocal();

  @Input()
  @prizmDefaultProp()
  label = 'Выберите дату';

  @Input()
  @prizmDefaultProp()
  size: PrizmInputSize = 'm';

  @Input()
  @prizmDefaultProp()
  outer = false;

  @Input()
  @prizmDefaultProp()
  extraButtonInjector: Injector = this.injector;

  override readonly testId_ = 'ui_input_date';

  public open = false;

  readonly type!: PrizmContextWithImplicit<unknown>;

  readonly filler$: Observable<string> = this.dateTexts$.pipe(
    map(dateTexts => prizmChangeDateSeparator(dateTexts[this.dateFormat], this.dateSeparator))
  );
  public rightButtons$!: BehaviorSubject<PrizmDateButton[]>;

  @HostListener(`click`)
  public onClick(): void {
    if (!this.isMobile) {
      this.open = !this.open;
    }
  }

  constructor(
    @Optional()
    @Self()
    @Inject(NgControl)
    control: NgControl | null,
    @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    @Inject(Injector) private readonly injector: Injector,
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
    @Inject(PRIZM_DATE_VALUE_TRANSFORMER)
    override readonly valueTransformer: PrizmControlValueTransformer<PrizmDay | null> | null
  ) {
    super(control, changeDetectorRef, valueTransformer);
  }

  public override ngOnInit(): void {
    super.ngOnInit();
    this.rightButtons$ = this.extraButtonInjector.get(PRIZM_DATE_RIGHT_BUTTONS);
  }

  get computedMobile(): boolean {
    return this.isMobile && !!this.mobileCalendar;
  }

  get computedActiveYearMonth(): PrizmMonth {
    if (this.items[0] && this.value && this.value.daySame(this.items[0].day)) {
      return this.items[0].displayDay;
    }

    return this.month || this.value || this.defaultActiveYearMonth;
  }

  get canOpen(): boolean {
    return this.interactive && !this.computedMobile;
  }

  get stringValue(): string {
    return this.value?.toString() ?? '';
  }

  get computedMask(): string {
    return this.mask;
  }

  public onValueChange(value: string): void {
    if (this.control) {
      this.control.updateValueAndValidity({ emitEvent: false });
    }

    // if (value == null) {
    //     this.onOpenChange(true);
    // }

    if (!value || value.length !== PRIZM_DATE_FILLER_LENGTH) {
      if (!value) this.updateValue(null);
      return;
    }

    this.updateValue(
      value.length !== PRIZM_DATE_FILLER_LENGTH ? null : PrizmDay.normalizeParse(value, this.dateFormat)
    );
  }

  public onDayClick(value: PrizmDay): void {
    this.updateValue(value);
    this.open = false;
  }

  public onHovered(hovered: boolean): void {
    this.updateHovered(hovered);
  }

  public onMonthChange(month: PrizmMonth): void {
    this.month = month;
  }

  public onOpenChange(open: boolean): void {
    this.open = open;
  }

  public onFocused(focused: boolean): void {
    this.updateFocused(focused);
  }

  public override setDisabledState(): void {
    super.setDisabledState();
    this.open = false;
  }

  public override writeValue(value: PrizmDay | null): void {
    super.writeValue(value);
  }

  public get nativeFocusableElement(): HTMLInputElement | null {
    return this.focusableElement ? (this.focusableElement.nativeElement as HTMLInputElement) : null;
  }

  public get focused(): boolean {
    return this.focusableElement?.nativeElement
      ? prizmIsNativeFocusedIn(this.focusableElement.nativeElement)
      : false;
  }

  protected override valueIdenticalComparator(oldValue: PrizmDay | null, newValue: PrizmDay | null): boolean {
    return prizmNullableSame(oldValue, newValue, (a, b) => a.daySame(b));
  }
}
