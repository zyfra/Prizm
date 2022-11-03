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
import { AbstractPzmNullableControl } from '../../../abstract/nullable-control';
import { PzmDayRange } from '../../../@core/date-time/day-range';
import { PzmWithOptionalMinMax } from '../../../types/with-optional-min-max';
import { PzmDay } from '../../../@core/date-time/day';
import { PzmFocusableElementAccessor } from '../../../types/focusable-element-accessor';
import { pzmCreateDateRangeMask } from '../../../@core/mask/create-date-range-mask';
import { pzmDefaultProp } from '../../../decorators/default-prop';
import { PzmBooleanHandler } from '../../../types/handler';
import { PZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PzmMarkerHandler } from '../../../types/marker-handler';
import { PZM_DEFAULT_MARKER_HANDLER } from '../../../constants/default-marker-handler';
import { PzmMonth } from '../../../@core/date-time/month';
import { PzmDayRangePeriod } from '../../../@core/classes/day-range-period';
import { PZM_FIRST_DAY, PZM_LAST_DAY } from '../../../@core/date-time/days.const';
import { PzmDayLike } from '../../../types/day-like';
import { PzmMapper } from '../../../types/mapper';
import { PZM_MAX_DAY_RANGE_LENGTH_MAPPER } from '../../../constants/max-day-range-length-mapper';
import { PZM_DATE_SEPARATOR, pzmChangeDateSeparator } from '../../../@core/date-time/date-separator';
import { PZM_IS_MOBILE } from '../../../tokens/is-mobile';
import { PzmDialogService } from '../../dialogs/dialog/dialog.service';
import { PZM_MOBILE_CALENDAR } from '../../../tokens/mobile-calendar';
import { PZM_DATE_FORMAT } from '../../../@core/date-time/date-format';
import { PzmDateMode } from '../../../types/date-mode';
import { PZM_DATE_TEXTS } from '../../../tokens/i18n';
import { PZM_DATE_RANGE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PzmControlValueTransformer } from '../../../types/control-value-transformer';
import { pzmNullableSame } from '../../../util/common/nullable-same';
import { PzmInputSize } from '../common/models/pzm-input.models';
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
export class PzmInputDateRangeComponent
    extends AbstractPzmNullableControl<PzmDayRange>
    implements PzmWithOptionalMinMax<PzmDay>, PzmFocusableElementAccessor
{
    @ViewChild('focusableElementRef', {read: ElementRef})
    public readonly focusableElement?: ElementRef<HTMLInputElement>;

    @Input()
    @pzmDefaultProp()
    disabledItemHandler: PzmBooleanHandler<PzmDay> = PZM_ALWAYS_FALSE_HANDLER;

    @Input()
    @pzmDefaultProp()
    markerHandler: PzmMarkerHandler = PZM_DEFAULT_MARKER_HANDLER;

    @Input()
    @pzmDefaultProp()
    defaultViewedMonth = PzmMonth.currentLocal();

    @Input()
    @pzmDefaultProp()
    items: readonly PzmDayRangePeriod[] = [];

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
    minLength: PzmDayLike | null = null;

    @Input()
    @pzmDefaultProp()
    maxLength: PzmDayLike | null = null;

    @HostBinding('attr.testId')
    readonly testId = 'pzm_input_date_range';

    open = false;

    readonly maxLengthMapper: PzmMapper<PzmDay, PzmDay> = PZM_MAX_DAY_RANGE_LENGTH_MAPPER;
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
    size: PzmInputSize = 'm';

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
        @Inject(PzmDialogService) private readonly dialogService: PzmDialogService,
        @Optional()
        @Inject(PZM_MOBILE_CALENDAR)
        private readonly mobileCalendar: Type<any> | null,
        @Inject(PZM_DATE_FORMAT) readonly dateFormat: PzmDateMode,
        @Inject(PZM_DATE_SEPARATOR) readonly dateSeparator: string,
        @Inject(PZM_DATE_TEXTS)
        readonly dateTexts$: Observable<Record<PzmDateMode, string>>,
        @Optional()
        @Inject(PZM_DATE_RANGE_VALUE_TRANSFORMER)
        override readonly valueTransformer: PzmControlValueTransformer<PzmDayRange | null> | null,
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


  get activePeriod(): PzmDayRangePeriod | null {
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

        const parsedValue = PzmDayRange.normalizeParse(value, this.dateFormat);

        this.updateValue(
            !this.minLength && !this.maxLength
                ? parsedValue
                : this.clampValue(parsedValue),
        );
    }

    public onRangeChange(range: PzmDayRange | null): void {
        this.toggle();
        this.focusInput();

        if (!range) {
            this.nativeValue = ``;
        }

        if (!pzmNullableSame<PzmDayRange>(this.value, range, (a, b) => a.daySame(b))) {
            this.updateValue(range);
        }
    }

    public onItemSelect(item: string | PzmDayRangePeriod): void {
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

    public override writeValue(value: PzmDayRange | null): void {
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

    private clampValue(value: PzmDayRange): PzmDayRange {
        const clampedBottom =
            this.minLength && value.from.append(this.minLength).dayAfter(value.to)
                ? new PzmDayRange(
                      value.from,
                      value.from.append(this.minLength).append({day: -1}),
                  )
                : value;

        const availableMax = this.maxLength
            ? clampedBottom.from.append(this.maxLength).append({day: -1})
            : this.max;

        return clampedBottom.to.dayAfter(availableMax)
            ? new PzmDayRange(clampedBottom.from, availableMax)
            : clampedBottom;
    }

    private getDateRangeFiller(dateFiller: string): string {
        return `${dateFiller}${PZM_RANGE_SEPARATOR_CHAR}${dateFiller}`;
    }
}
