import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Inject, Injector,
  Input,
  Optional,
  Self,
  ViewChild,
} from '@angular/core';
import { NgControl } from '@angular/forms';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { ZUI_DATE_FILLER_LENGTH } from '../../../@core/date-time/date-fillers';
import { ZUI_DATE_FORMAT } from '../../../@core/date-time/date-format';
import { ZUI_DATE_SEPARATOR, zuiChangeDateSeparator } from '../../../@core/date-time/date-separator';
import { ZuiDay } from '../../../@core/date-time/day';
import { ZUI_FIRST_DAY, ZUI_LAST_DAY } from '../../../@core/date-time/days.const';
import { ZuiMonth } from '../../../@core/date-time/month';
import { ZuiTime } from '../../../@core/date-time/time';
import { AbstractZuiControl } from '../../../abstract/control';
import { ZUI_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { ZUI_DATE_TIME_SEPARATOR, ZUI_DATE_TIME_SEPARATOR_NGX } from '../../../constants/date-time-separator';
import { zuiDefaultProp } from '../../../decorators/default-prop';
import { ZuiActiveZoneDirective } from '../../../directives/active-zone/active-zone.directive';
import { ZUI_DATE_TIME_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { ZUI_DATE_TEXTS, ZUI_TIME_TEXTS } from '../../../tokens/i18n';
import { ZuiContextWithImplicit } from '../../../types/context-with-implicit';
import { ZuiControlValueTransformer } from '../../../types/control-value-transformer';
import { ZuiDateMode } from '../../../types/date-mode';
import { ZuiFocusableElementAccessor } from '../../../types/focusable-element-accessor';
import { ZuiBooleanHandler } from '../../../types/handler';
import { ZuiTimeMode } from '../../../types/time-mode';
import { ZuiWithOptionalMinMax } from '../../../types/with-optional-min-max';
import { ZUI_INPUT_DATE_TIME_PROVIDERS } from './input-date-time.providers';
import { zuiNullableSame } from '../../../util/common/nullable-same';
import { zuiIsNativeFocusedIn } from '../../../util/is-native-focused-in';
import { zuiPure } from '../../../decorators/pure';
import { zuiCreateDateNgxMask } from '../../../@core/mask/create-date-mask';
import { zuiCreateTimeNgxMask } from '../../../@core/mask/create-time-mask';
import { zuiClamp } from '../../../util/math/clamp';
import { ZuiInputSize } from '../common/models/zui-input.models';
import { ZUI_DATE_RIGHT_BUTTONS } from '../../../tokens/date-extra-buttons';
import { ZuiDateButton } from '../../../types/date-button';

@Component({
    selector: `zui-input-date-time`,
    templateUrl: `./input-date-time.component.html`,
    styleUrls: [`./input-date-time.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: ZUI_INPUT_DATE_TIME_PROVIDERS,
})
export class ZuiInputDateTimeComponent
    extends AbstractZuiControl<[ZuiDay | null, ZuiTime | null]>
    implements
        ZuiWithOptionalMinMax<ZuiDay | [ZuiDay, ZuiTime]>,
        ZuiFocusableElementAccessor
{
    private month: ZuiMonth | null = null;

    @ViewChild('focusableElementRef', {read: ElementRef})
    public readonly focusableElement?: ElementRef<HTMLInputElement>;

    @Input()
    @zuiDefaultProp()
    label = 'Абсолютное';

    @Input()
    @zuiDefaultProp()
    placeholder = 'Выберите дату и время';

    @Input()
    @zuiDefaultProp()
    size: ZuiInputSize = 'm';

    @Input()
    @zuiDefaultProp()
    extraButtonInjector: Injector = this.injector;

    @Input()
    @zuiDefaultProp()
    outer = false;

    @Input()
    @zuiDefaultProp()
    min: ZuiDay | [ZuiDay, ZuiTime] = ZUI_FIRST_DAY;

    @Input()
    @zuiDefaultProp()
    max: ZuiDay | [ZuiDay, ZuiTime] = ZUI_LAST_DAY;

    @Input()
    @zuiDefaultProp()
    disabledItemHandler: ZuiBooleanHandler<ZuiDay> = ZUI_ALWAYS_FALSE_HANDLER;

    @Input()
    @zuiDefaultProp()
    defaultActiveYearMonth = ZuiMonth.currentLocal();

    @Input()
    @zuiDefaultProp()
    timeMode: ZuiTimeMode = `HH:MM`;

    open = false;

    readonly type!: ZuiContextWithImplicit<ZuiActiveZoneDirective>;

    readonly filler$: Observable<string> = combineLatest([
        this.dateTexts$.pipe(
            map(dateTexts =>
                zuiChangeDateSeparator(dateTexts[this.dateFormat], this.dateSeparator),
            ),
        ),
        this.timeTexts$.pipe(pluck(this.timeMode)),
    ]).pipe(map(fillers => this.getDateTimeString(...fillers)));


    public rightButtons$: BehaviorSubject<ZuiDateButton[]>;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(ZUI_DATE_FORMAT) readonly dateFormat: ZuiDateMode,
        @Inject(ZUI_DATE_SEPARATOR) readonly dateSeparator: string,
        @Inject(ZUI_TIME_TEXTS)
        readonly timeTexts$: Observable<Record<ZuiTimeMode, string>>,
        private readonly injector: Injector,
        @Inject(ZUI_DATE_TEXTS)
        readonly dateTexts$: Observable<Record<ZuiDateMode, string>>,
        @Optional()
        @Inject(ZUI_DATE_TIME_VALUE_TRANSFORMER)
        override readonly valueTransformer: ZuiControlValueTransformer<
            [ZuiDay | null, ZuiTime | null]
        > | null,
    ) {
        super(control, changeDetectorRef, valueTransformer);
    }


    public override ngOnInit(): void {
      super.ngOnInit();
      this.rightButtons$ = this.extraButtonInjector.get(ZUI_DATE_RIGHT_BUTTONS);
    }

    public get nativeFocusableElement(): HTMLInputElement | null {
      return this.focusableElement ? this.focusableElement.nativeElement as HTMLInputElement : null;
    }

    public get focused(): boolean {
      return this.focusableElement?.nativeElement ? zuiIsNativeFocusedIn(this.focusableElement.nativeElement) : false;
    }

    get fillerLength(): number {
        return ZUI_DATE_FILLER_LENGTH + ZUI_DATE_TIME_SEPARATOR.length + this.timeMode.length;
    }

    get textMaskOptions(): string {
        return this.calculateMask(
            this.value[0],
            this.calendarMinDay,
            this.calendarMaxDay,
            this.timeMode,
            this.dateFormat,
            this.dateSeparator,
        );
    }

    get stringValue(): string {
      return this.value?.toString() ?? '';
    }

    get computedValue(): string {
        const {value, nativeValue, timeMode} = this;
        const [date, time] = value;
        const hasTimeInputChars = nativeValue.length > ZUI_DATE_FILLER_LENGTH;

        if (!date || (!time && hasTimeInputChars)) {
            return nativeValue;
        }

        return this.getDateTimeString(date, time, timeMode);
    }

    get calendarValue(): ZuiDay | null {
        return this.value[0];
    }

    get calendarMinDay(): ZuiDay {
        return Array.isArray(this.min) ? this.min[0] : this.min;
    }

    get calendarMaxDay(): ZuiDay {
        return Array.isArray(this.max) ? this.max[0] : this.max;
    }

    get computedActiveYearMonth(): ZuiMonth {
        return this.month || this.value[0] || this.defaultActiveYearMonth;
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
        this.open = !this.open;
    }

    public onValueChange(value: string): void {
        if (!value || value.length < 16) {
            if (!value) this.updateValue([null, null]);
            return;
        }

        const [date, time] = value.split(ZUI_DATE_TIME_SEPARATOR_NGX);

        const parsedDate = ZuiDay.normalizeParse(date, this.dateFormat);
        const parsedTime =
            time && time.length === this.timeMode.length
                ? this.zuiClampTime(ZuiTime.fromString(time), parsedDate)
                : null;

        this.updateValue([parsedDate, parsedTime]);
        this.open = false;
    }

    public onDayClick(day: ZuiDay): void {
        const modifiedTime = this.value[1] && this.zuiClampTime(this.value[1], day);

        this.updateValue([day, modifiedTime]);
        this.updateNativeValue(day);
        this.open = false;
    }

    public onHovered(hovered: boolean): void {
        this.updateHovered(hovered);
    }

    public onMonthChange(month: ZuiMonth): void {
        this.month = month;
    }

    public onOpenChange(open: boolean): void {
        this.open = open;
    }

    public onFocused(focused: boolean): void {
        this.updateFocused(focused);

        if (
            focused ||
            this.value[0] === null ||
            this.value[1] !== null ||
            this.nativeValue.length <= this.fillerLength + ZUI_DATE_TIME_SEPARATOR.length ||
            this.timeMode === `HH:MM`
        ) {
            return;
        }

        const [, time] = this.nativeValue.split(ZUI_DATE_TIME_SEPARATOR);

        if (!time) {
            return;
        }

        const parsedTime = ZuiTime.fromString(time);

        this.updateValue([this.value[0], parsedTime]);

        setTimeout(() => {
            if (this.nativeValue.endsWith(`.`) || this.nativeValue.endsWith(`:`)) {
                this.nativeValue = this.nativeValue.slice(0, -1);
            }
        });
    }

    public override setDisabledState(): void {
        super.setDisabledState();
        this.open = false;
    }

    public override writeValue(value: [ZuiDay | null, ZuiTime | null] | null): void {
        super.writeValue(value);

        this.nativeValue = value && (value[0] || value[1]) ? this.computedValue : ``;
    }

    protected getFallbackValue(): [ZuiDay | null, ZuiTime | null] {
        return [null, null];
    }

    protected override valueIdenticalComparator(
        oldValue: [ZuiDay | null, ZuiTime | null],
        newValue: [ZuiDay | null, ZuiTime | null],
    ): boolean {
        return (
            zuiNullableSame(oldValue[0], newValue[0], (a, b) => a.daySame(b)) &&
            zuiNullableSame(oldValue[1], newValue[1], (a, b) => String(a) === String(b))
        );
    }

    @zuiPure
    private calculateMask(
        day: ZuiDay | null,
        min: ZuiDay,
        max: ZuiDay,
        timeMode: ZuiTimeMode,
        dateFormat: ZuiDateMode,
        dateSeparator: string,
    ): string {
        return `${zuiCreateDateNgxMask(dateFormat, dateSeparator)} ${zuiCreateTimeNgxMask(timeMode)}`
    }

    @zuiPure
    private getDateTimeString(
        date: ZuiDay | string,
        time: ZuiTime | string | null,
        timeMode: ZuiTimeMode = `HH:MM`,
    ): string {
        const dateString =
            date instanceof ZuiDay
                ? date.toString(this.dateFormat, this.dateSeparator)
                : date;
        const timeString = time instanceof ZuiTime ? time.toString(timeMode) : time || ``;

        return `${dateString}${ZUI_DATE_TIME_SEPARATOR}${timeString}`;
    }

    private updateNativeValue(day: ZuiDay): void {
        const time = this.nativeValue.split(ZUI_DATE_TIME_SEPARATOR)[1] || ``;

        this.nativeValue = this.getDateTimeString(day, time);
    }

    private zuiClampTime(time: ZuiTime, day: ZuiDay): ZuiTime {
        const ms = time.toAbsoluteMilliseconds();
        const min =
            Array.isArray(this.min) && day.daySame(this.calendarMinDay)
                ? this.min[1].toAbsoluteMilliseconds()
                : -Infinity;
        const max =
            Array.isArray(this.max) && day.daySame(this.calendarMaxDay)
                ? this.max[1].toAbsoluteMilliseconds()
                : Infinity;

        return ZuiTime.fromAbsoluteMilliseconds(zuiClamp(ms, min, max));
    }
}
