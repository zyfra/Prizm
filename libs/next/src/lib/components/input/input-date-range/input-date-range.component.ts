import {
  ChangeDetectorRef,
  Component,
  ElementRef, HostBinding,
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
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PZM_INPUT_DATE_RANGE_PROVIDERS } from './input-date-range.providers';
import { AbstractPrizmNullableControl } from '../../../abstract/nullable-control';
import { PrizmDayRange } from '../../../@core/date-time/day-range';
import { PrizmWithOptionalMinMax } from '../../../types/with-optional-min-max';
import { PrizmDay } from '../../../@core/date-time/day';
import { PrizmFocusableElementAccessor } from '../../../types/focusable-element-accessor';
import { pzmCreateDateRangeMask } from '../../../@core/mask/create-date-range-mask';
import { pzmDefaultProp } from '../../../decorators/default-prop';
import { PrizmBooleanHandler } from '../../../types/handler';
import { PZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PrizmMarkerHandler } from '../../../types/marker-handler';
import { PZM_DEFAULT_MARKER_HANDLER } from '../../../constants/default-marker-handler';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PrizmDayRangePeriod } from '../../../@core/classes/day-range-period';
import { PZM_FIRST_DAY, PZM_LAST_DAY } from '../../../@core/date-time/days.const';
import { PrizmDayLike } from '../../../types/day-like';
import { PrizmMapper } from '../../../types/mapper';
import { PZM_MAX_DAY_RANGE_LENGTH_MAPPER } from '../../../constants/max-day-range-length-mapper';
import { PZM_DATE_SEPARATOR, pzmChangeDateSeparator } from '../../../@core/date-time/date-separator';
import { PZM_IS_MOBILE } from '../../../tokens/is-mobile';
import { PrizmDialogService } from '../../dialogs/dialog/dialog.service';
import { PZM_MOBILE_CALENDAR } from '../../../tokens/mobile-calendar';
import { PZM_DATE_FORMAT } from '../../../@core/date-time/date-format';
import { PrizmDateMode } from '../../../types/date-mode';
import { PZM_DATE_TEXTS } from '../../../tokens/i18n';
import { PZM_DATE_RANGE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';
import { pzmNullableSame } from '../../../util/common/nullable-same';
import { PrizmInputSize } from '../common/models/pzm-input.models';
import { PZM_DATE_FILLER_LENGTH, PZM_DATE_RANGE_FILLER_LENGTH } from '../../../@core/date-time/date-fillers';
import { PZM_RANGE_SEPARATOR_CHAR } from '../../../@core/date-time/date-time';
import { pzmSetNativeFocused } from '../../../util/set-native-focused';
import { pzmIsNativeFocusedIn } from '../../../util';

@Component({
    selector: `pzm-input-date-range`,
    templateUrl: `./input-date-range.component.html`,
    styleUrls: [`./input-date-range.component.less`],
    providers: PZM_INPUT_DATE_RANGE_PROVIDERS,
})
export class PrizmInputDateRangeComponent
    extends AbstractPrizmNullableControl<PrizmDayRange>
    implements PrizmWithOptionalMinMax<PrizmDay>, PrizmFocusableElementAccessor
{
    @ViewChild('focusableElementRef', {read: ElementRef})
    public readonly focusableElement?: ElementRef<HTMLInputElement>;

    @Input()
    @pzmDefaultProp()
    disabledItemHandler: PrizmBooleanHandler<PrizmDay> = PZM_ALWAYS_FALSE_HANDLER;

    @Input()
    @pzmDefaultProp()
    markerHandler: PrizmMarkerHandler = PZM_DEFAULT_MARKER_HANDLER;

    @Input()
    @pzmDefaultProp()
    defaultViewedMonth = PrizmMonth.currentLocal();

    @Input()
    @pzmDefaultProp()
    items: readonly PrizmDayRangePeriod[] = [];

    @Input()
    @pzmDefaultProp()
    placeholder = '';

    @Input()
    @pzmDefaultProp()
    min = PZM_FIRST_DAY;

    @Input()
    @pzmDefaultProp()
    max = PZM_LAST_DAY;

    @Input()
    @pzmDefaultProp()
    minLength: PrizmDayLike | null = null;

    @Input()
    @pzmDefaultProp()
    maxLength: PrizmDayLike | null = null;

    @HostBinding('attr.testId')
    readonly testId = 'pzm_input_date_range';

    open = false;

    readonly maxLengthMapper: PrizmMapper<PrizmDay, PrizmDay> = PZM_MAX_DAY_RANGE_LENGTH_MAPPER;
    readonly dateFiller$ = this.dateTexts$.pipe(
        map(dateTexts =>
            pzmChangeDateSeparator(dateTexts[this.dateFormat], this.dateSeparator),
        ),
    );

    @Input()
    @pzmDefaultProp()
    label = 'Выберите дату';

    @Input()
    @pzmDefaultProp()
    size: PrizmInputSize = 'm';

    @Input()
    @pzmDefaultProp()
    outer = false;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(Injector) private readonly injector: Injector,
        @Inject(PZM_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(PrizmDialogService) private readonly dialogService: PrizmDialogService,
        @Optional()
        @Inject(PZM_MOBILE_CALENDAR)
        private readonly mobileCalendar: Type<any> | null,
        @Inject(PZM_DATE_FORMAT) readonly dateFormat: PrizmDateMode,
        @Inject(PZM_DATE_SEPARATOR) readonly dateSeparator: string,
        @Inject(PZM_DATE_TEXTS)
        readonly dateTexts$: Observable<Record<PrizmDateMode, string>>,
        @Optional()
        @Inject(PZM_DATE_RANGE_VALUE_TRANSFORMER)
        override readonly valueTransformer: PrizmControlValueTransformer<PrizmDayRange | null> | null,
    ) {
        super(control, changeDetectorRef, valueTransformer);
    }

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.focusableElement ? this.focusableElement.nativeElement as HTMLInputElement : null;
    }

    public get focused(): boolean {
      return this.focusableElement?.nativeElement ? pzmIsNativeFocusedIn(this.focusableElement.nativeElement) : false;
    }

    public get computedMobile(): boolean {
        return this.isMobile && !!this.mobileCalendar;
    }

    public get canOpen(): boolean {
        return this.interactive && !this.computedMobile;
    }

    get computedMask(): string {
        return pzmCreateDateRangeMask(this.dateFormat, this.dateSeparator);
    }

    get stringValue(): string {
      return this.value?.toString() ?? '';
    }


  get activePeriod(): PrizmDayRangePeriod | null {
        return (
            this.items.find(item =>
                pzmNullableSame(
                    this.value,
                    item.range,
                    (a, b) =>
                        a.from.daySame(b.from.dayLimit(this.min, this.max)) &&
                        a.to.daySame(b.to.dayLimit(this.min, this.max)),
                ),
            ) || null
        );
    }

    get computedValue(): string {
        const {value, nativeValue, activePeriod} = this;

        if (activePeriod) {
            return String(activePeriod);
        }

        return value
            ? value.getFormattedDayRange(this.dateFormat, this.dateSeparator)
            : nativeValue;
    }

    get innerPseudoFocused(): boolean | null {
        if (this.pseudoFocused === false) {
            return false;
        }

        if (this.open || this.computedFocused) {
            return true;
        }

        return null;
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

    @HostListener(`click`)
    public onClick(): void {
        if (!this.isMobile) {
            this.toggle();
        }
    }

    public onOpenChange(open: boolean): void {
        this.open = open;
    }

    public onValueChange(value: string): void {
        if (this.control) {
            this.control.updateValueAndValidity({emitEvent: false});
        }

        if (value == null) {
            this.onOpenChange(true);
        }

        if (!value || (value.length !== PZM_DATE_RANGE_FILLER_LENGTH)) {
          if (!value) this.updateValue(null);
          return;
        }

        const parsedValue = PrizmDayRange.normalizeParse(value, this.dateFormat);

        this.updateValue(
            !this.minLength && !this.maxLength
                ? parsedValue
                : this.clampValue(parsedValue),
        );
    }

    public onRangeChange(range: PrizmDayRange | null): void {
        this.toggle();
        this.focusInput();

        if (!range) {
            this.nativeValue = ``;
        }

        if (!pzmNullableSame<PrizmDayRange>(this.value, range, (a, b) => a.daySame(b))) {
            this.updateValue(range);
        }
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

    public onHovered(hovered: boolean): void {
        this.updateHovered(hovered);
    }

    public onPressed(pressed: boolean): void {
        this.updatePressed(pressed);
    }

    public override writeValue(value: PrizmDayRange | null): void {
        super.writeValue(value);
        this.nativeValue = value ? this.computedValue : ``;
    }

    private get itemSelected(): boolean {
        return this.items.findIndex(item => String(item) === this.nativeValue) !== -1;
    }

    private toggle(): void {
        this.open = !this.open;
    }

    private focusInput(preventScroll: boolean = false): void {
        if (this.nativeFocusableElement) {
            pzmSetNativeFocused(this.nativeFocusableElement, true, preventScroll);
        }
    }

    private clampValue(value: PrizmDayRange): PrizmDayRange {
        const clampedBottom =
            this.minLength && value.from.append(this.minLength).dayAfter(value.to)
                ? new PrizmDayRange(
                      value.from,
                      value.from.append(this.minLength).append({day: -1}),
                  )
                : value;

        const availableMax = this.maxLength
            ? clampedBottom.from.append(this.maxLength).append({day: -1})
            : this.max;

        return clampedBottom.to.dayAfter(availableMax)
            ? new PrizmDayRange(clampedBottom.from, availableMax)
            : clampedBottom;
    }

    private getDateRangeFiller(dateFiller: string): string {
        return `${dateFiller}${PZM_RANGE_SEPARATOR_CHAR}${dateFiller}`;
    }
}
