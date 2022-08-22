import {
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
import { TextMaskConfig } from 'angular2-text-mask';
import { Observable } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

import { ZUI_INPUT_DATE_RANGE_PROVIDERS } from './input-date-range.providers';
import { AbstractZuiNullableControl } from '../../../abstract/nullable-control';
import { ZuiDayRange } from '../../../@core/date-time/day-range';
import { ZuiWithOptionalMinMax } from '../../../types/with-optional-min-max';
import { ZuiDay } from '../../../@core/date-time/day';
import { ZuiFocusableElementAccessor } from '../../../types/focusable-element-accessor';
import { zuiCreateDateRangeMask } from '../../../@core/mask/create-date-range-mask';
import { ZuiTextMaskOptions } from '../../../@core/mask/text-mask-options';
import { zuiCreateAutoCorrectedDateRangePipe } from '../../../@core/mask/create-auto-corrected-date-range-pipe';
import { zuiDefaultProp } from '../../../decorators/default-prop';
import { ZuiBooleanHandler } from '../../../types/handler';
import { ZUI_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { ZuiMarkerHandler } from '../../../types/marker-handler';
import { ZUI_DEFAULT_MARKER_HANDLER } from '../../../constants/default-marker-handler';
import { ZuiMonth } from '../../../@core/date-time/month';
import { ZuiDayRangePeriod } from '../../../@core/classes/day-range-period';
import { ZUI_FIRST_DAY, ZUI_LAST_DAY } from '../../../@core/date-time/days.const';
import { ZuiDayLike } from '../../../types/day-like';
import { ZuiMapper } from '../../../types/mapper';
import { ZUI_MAX_DAY_RANGE_LENGTH_MAPPER } from '../../../constants/max-day-range-length-mapper';
import { ZUI_DATE_SEPARATOR, zuiChangeDateSeparator } from '../../../@core/date-time/date-separator';
import { ZUI_IS_MOBILE } from '../../../tokens/is-mobile';
import { ZuiDialogService } from '../../dialogs/dialog/dialog.service';
import { ZUI_MOBILE_CALENDAR } from '../../../tokens/mobile-calendar';
import { ZUI_DATE_FORMAT } from '../../../@core/date-time/date-format';
import { ZuiDateMode } from '../../../types/date-mode';
import { ZUI_DATE_TEXTS } from '../../../tokens/i18n';
import { ZUI_DATE_RANGE_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { ZuiControlValueTransformer } from '../../../types/control-value-transformer';
import { zuiNullableSame } from '../../../util/common/nullable-same';
import { ZUI_EMPTY_MASK } from '../../../constants/empty-mask';
import { zuiSizeBigger } from '../../../util/size-bigger';
import { PolymorphComponent } from '../../../directives/polymorph/classes/component';
import { ZuiInputSize } from '../common/models/zui-input.models';
import { ZUI_DATE_FILLER_LENGTH, ZUI_DATE_RANGE_FILLER_LENGTH } from '../../../@core/date-time/date-fillers';
import { ZUI_RANGE_SEPARATOR_CHAR } from '../../../@core/date-time/date-time';
import { zuiSetNativeFocused } from '../../../util/set-native-focused';
import { zuiIsNativeFocusedIn } from '../../../util';

@Component({
    selector: `zui-input-date-range`,
    templateUrl: `./input-date-range.component.html`,
    styleUrls: [`./input-date-range.component.less`],
    providers: ZUI_INPUT_DATE_RANGE_PROVIDERS,
})
export class ZuiInputDateRangeComponent
    extends AbstractZuiNullableControl<ZuiDayRange>
    implements ZuiWithOptionalMinMax<ZuiDay>, ZuiFocusableElementAccessor
{
    @ViewChild('focusableElementRef', {read: ElementRef})
    public readonly focusableElement?: ElementRef<HTMLInputElement>;

    @Input()
    @zuiDefaultProp()
    disabledItemHandler: ZuiBooleanHandler<ZuiDay> = ZUI_ALWAYS_FALSE_HANDLER;

    @Input()
    @zuiDefaultProp()
    markerHandler: ZuiMarkerHandler = ZUI_DEFAULT_MARKER_HANDLER;

    @Input()
    @zuiDefaultProp()
    defaultViewedMonth = ZuiMonth.currentLocal();

    @Input()
    @zuiDefaultProp()
    items: readonly ZuiDayRangePeriod[] = [];

    @Input()
    @zuiDefaultProp()
    min = ZUI_FIRST_DAY;

    @Input()
    @zuiDefaultProp()
    max = ZUI_LAST_DAY;

    @Input()
    @zuiDefaultProp()
    minLength: ZuiDayLike | null = null;

    @Input()
    @zuiDefaultProp()
    maxLength: ZuiDayLike | null = null;

    open = false;

    readonly maxLengthMapper: ZuiMapper<ZuiDay, ZuiDay> = ZUI_MAX_DAY_RANGE_LENGTH_MAPPER;
    readonly dateFiller$ = this.dateTexts$.pipe(
        map(dateTexts =>
            zuiChangeDateSeparator(dateTexts[this.dateFormat], this.dateSeparator),
        ),
    );

    @Input()
    @zuiDefaultProp()
    label = 'Выберите дату';

    @Input()
    @zuiDefaultProp()
    size: ZuiInputSize = 'm';

    @Input()
    @zuiDefaultProp()
    outer = false;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(Injector) private readonly injector: Injector,
        @Inject(ZUI_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(ZuiDialogService) private readonly dialogService: ZuiDialogService,
        @Optional()
        @Inject(ZUI_MOBILE_CALENDAR)
        private readonly mobileCalendar: Type<any> | null,
        @Inject(ZUI_DATE_FORMAT) readonly dateFormat: ZuiDateMode,
        @Inject(ZUI_DATE_SEPARATOR) readonly dateSeparator: string,
        @Inject(ZUI_DATE_TEXTS)
        readonly dateTexts$: Observable<Record<ZuiDateMode, string>>,
        @Optional()
        @Inject(ZUI_DATE_RANGE_VALUE_TRANSFORMER)
        override readonly valueTransformer: ZuiControlValueTransformer<ZuiDayRange | null> | null,
    ) {
        super(control, changeDetectorRef, valueTransformer);
    }

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.focusableElement ? this.focusableElement.nativeElement as HTMLInputElement : null;
    }

    public get focused(): boolean {
      return this.focusableElement?.nativeElement ? zuiIsNativeFocusedIn(this.focusableElement.nativeElement) : false;
    }

    public get computedMobile(): boolean {
        return this.isMobile && !!this.mobileCalendar;
    }

    public get canOpen(): boolean {
        return this.interactive && !this.computedMobile;
    }

    get computedMask(): string {
        return zuiCreateDateRangeMask(this.dateFormat, this.dateSeparator);
    }

    get stringValue(): string {
      return this.value?.toString() ?? '';
    }


  get activePeriod(): ZuiDayRangePeriod | null {
        return (
            this.items.find(item =>
                zuiNullableSame(
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

        if (!value || (value.length !== ZUI_DATE_RANGE_FILLER_LENGTH)) {
          if (!value) this.updateValue(null);
          return;
        }

        const parsedValue = ZuiDayRange.normalizeParse(value, this.dateFormat);

        this.updateValue(
            !this.minLength && !this.maxLength
                ? parsedValue
                : this.clampValue(parsedValue),
        );
    }

    public onRangeChange(range: ZuiDayRange | null): void {
        this.toggle();
        this.focusInput();

        if (!range) {
            this.nativeValue = ``;
        }

        if (!zuiNullableSame<ZuiDayRange>(this.value, range, (a, b) => a.daySame(b))) {
            this.updateValue(range);
        }
    }

    public onItemSelect(item: string | ZuiDayRangePeriod): void {
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

    public onActiveZone(focused: boolean): void {
        this.updateFocused(focused);

        if (
            !focused &&
            !this.itemSelected &&
            (this.nativeValue.length === ZUI_DATE_FILLER_LENGTH ||
                this.nativeValue.length ===
                    ZUI_DATE_FILLER_LENGTH + ZUI_RANGE_SEPARATOR_CHAR.length)
        ) {
            this.updateValue(
                ZuiDayRange.normalizeParse(this.nativeValue, this.dateFormat),
            );
        }
    }

    public override writeValue(value: ZuiDayRange | null): void {
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
            zuiSetNativeFocused(this.nativeFocusableElement, true, preventScroll);
        }
    }

    private clampValue(value: ZuiDayRange): ZuiDayRange {
        const clampedBottom =
            this.minLength && value.from.append(this.minLength).dayAfter(value.to)
                ? new ZuiDayRange(
                      value.from,
                      value.from.append(this.minLength).append({day: -1}),
                  )
                : value;

        const availableMax = this.maxLength
            ? clampedBottom.from.append(this.maxLength).append({day: -1})
            : this.max;

        return clampedBottom.to.dayAfter(availableMax)
            ? new ZuiDayRange(clampedBottom.from, availableMax)
            : clampedBottom;
    }

    private getDateRangeFiller(dateFiller: string): string {
        return `${dateFiller}${ZUI_RANGE_SEPARATOR_CHAR}${dateFiller}`;
    }
}
