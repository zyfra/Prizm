import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  Inject,
  Injector,
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
import { PzmDay } from '../../../@core/date-time/day';
import { PZM_FIRST_DAY, PZM_LAST_DAY } from '../../../@core/date-time/days.const';
import { PzmMonth } from '../../../@core/date-time/month';
import { ZuiTime } from '../../../@core/date-time/time';
import { AbstractZuiControl } from '../../../abstract/control';
import { PZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { ZUI_DATE_TIME_SEPARATOR, ZUI_DATE_TIME_SEPARATOR_NGX } from '../../../constants/date-time-separator';
import { pzmDefaultProp } from '../../../decorators/default-prop';
import { ZUI_DATE_TIME_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { ZUI_DATE_TEXTS, ZUI_TIME_TEXTS } from '../../../tokens/i18n';
import { PzmContextWithImplicit } from '../../../types/context-with-implicit';
import { ZuiControlValueTransformer } from '../../../types/control-value-transformer';
import { ZuiDateMode } from '../../../types/date-mode';
import { PzmFocusableElementAccessor } from '../../../types/focusable-element-accessor';
import { PzmBooleanHandler } from '../../../types/handler';
import { ZuiTimeMode } from '../../../types/time-mode';
import { PzmWithOptionalMinMax } from '../../../types/with-optional-min-max';
import { ZUI_INPUT_DATE_TIME_PROVIDERS } from './input-date-time.providers';
import { pzmNullableSame } from '../../../util/common/nullable-same';
import { pzmIsNativeFocusedIn } from '../../../util/is-native-focused-in';
import { pzmPure } from '../../../decorators/pure';
import { zuiCreateDateNgxMask } from '../../../@core/mask/create-date-mask';
import { zuiCreateTimeNgxMask } from '../../../@core/mask/create-time-mask';
import { pzmClamp } from '../../../util/math/clamp';
import { PzmInputSize } from '../common/models/zui-input.models';
import { ZUI_DATE_RIGHT_BUTTONS } from '../../../tokens/date-extra-buttons';
import { ZuiDateButton } from '../../../types/date-button';
import { ZUI_STRICT_MATCHER } from '../../../constants';

@Component({
    selector: `zui-input-date-time`,
    templateUrl: `./input-date-time.component.html`,
    styleUrls: [`./input-date-time.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: ZUI_INPUT_DATE_TIME_PROVIDERS,
})
export class ZuiInputDateTimeComponent
    extends AbstractZuiControl<[PzmDay | null, ZuiTime | null]>
    implements
        PzmWithOptionalMinMax<PzmDay | [PzmDay, ZuiTime]>,
        PzmFocusableElementAccessor
{
    private month: PzmMonth | null = null;

    @ViewChild('focusableElementRef', {read: ElementRef})
    public readonly focusableElement?: ElementRef<HTMLInputElement>;

    @Input()
    @pzmDefaultProp()
    timeItems: readonly ZuiTime[] = new Array(24).fill(null).map(
      (_, i) => new ZuiTime(i, 0, 0, 0)
    );

    @Input()
    @pzmDefaultProp()
    label = 'Абсолютное';

    @Input()
    @pzmDefaultProp()
    placeholder = 'Выберите дату и время';

    @Input()
    @pzmDefaultProp()
    size: PzmInputSize = 'm';

    @Input()
    @pzmDefaultProp()
    extraButtonInjector: Injector = this.injector;

    @Input()
    @pzmDefaultProp()
    outer = false;

    @Input()
    @pzmDefaultProp()
    min: PzmDay | [PzmDay, ZuiTime] = PZM_FIRST_DAY;

    @Input()
    @pzmDefaultProp()
    max: PzmDay | [PzmDay, ZuiTime] = PZM_LAST_DAY;

    @Input()
    @pzmDefaultProp()
    timeStrict = false;

    @Input()
    @pzmDefaultProp()
    disabledItemHandler: PzmBooleanHandler<PzmDay> = PZM_ALWAYS_FALSE_HANDLER;

    @Input()
    @pzmDefaultProp()
    defaultActiveYearMonth = PzmMonth.currentLocal();

    @Input()
    @pzmDefaultProp()
    timeMode: ZuiTimeMode = `HH:MM`;

    @HostBinding('attr.testId')
    readonly testId = 'pzm_input_date_time';

    public openTimeTemplate = false;

    open = false;

    readonly type!: PzmContextWithImplicit<unknown>;

    get filteredTime(): readonly ZuiTime[] {
      return this.filterTime(this.timeItems, this.timeMode, this.computedSearchTime);
    }

    get computedSearchTime(): string {
      return this.computedValue.length !== this.timeMode.length ? this.computedValue : ``;
    }

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
            [PzmDay | null, ZuiTime | null]
        > | null,
    ) {
        super(control, changeDetectorRef, valueTransformer);
    }

    @pzmPure
    private filterTime(
      items: readonly ZuiTime[],
      mode: ZuiTimeMode,
      search: string,
    ): readonly ZuiTime[] {
      return items.filter(item => item.toString(mode).includes(search));
    }


    public override ngOnInit(): void {
      super.ngOnInit();
      this.rightButtons$ = this.extraButtonInjector.get(ZUI_DATE_RIGHT_BUTTONS);
    }

    public get nativeFocusableElement(): HTMLInputElement | null {
      return this.focusableElement ? this.focusableElement.nativeElement as HTMLInputElement : null;
    }

    public get focused(): boolean {
      return this.focusableElement?.nativeElement ? pzmIsNativeFocusedIn(this.focusableElement.nativeElement) : false;
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

    get calendarValue(): PzmDay | null {
        return this.value[0];
    }

    get calendarMinDay(): PzmDay {
        return Array.isArray(this.min) ? this.min[0] : this.min;
    }

    get calendarMaxDay(): PzmDay {
        return Array.isArray(this.max) ? this.max[0] : this.max;
    }

    get computedActiveYearMonth(): PzmMonth {
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

        const parsedDate = PzmDay.normalizeParse(date, this.dateFormat);
        const parsedTime =
            time && time.length === this.timeMode.length
                ? this.zuiClampTime(ZuiTime.fromString(time), parsedDate)
                : null;

        const match = parsedTime && this.getMatch(time);

        this.updateValue([parsedDate, match || (this.timeStrict ? this.findNearestTimeFromItems(parsedTime) : parsedTime)]);
        this.open = false;
    }

    public onDayClick(day: PzmDay, time?: ZuiTime): void {
        const modifiedTime = time ?? (this.value[1] && this.zuiClampTime(this.value[1], day));

        this.updateValue([day, modifiedTime]);
        this.updateNativeValue(day);
        this.open = false;
    }

    public onHovered(hovered: boolean): void {
        this.updateHovered(hovered);
    }

    public onMonthChange(month: PzmMonth): void {
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

    public override writeValue(value: [PzmDay | null, ZuiTime | null] | null): void {
        super.writeValue(value);

        this.nativeValue = value && (value[0] || value[1]) ? this.computedValue : ``;
    }

    protected getFallbackValue(): [PzmDay | null, ZuiTime | null] {
        return [null, null];
    }

    protected override valueIdenticalComparator(
        oldValue: [PzmDay | null, ZuiTime | null],
        newValue: [PzmDay | null, ZuiTime | null],
    ): boolean {
        return (
            pzmNullableSame(oldValue[0], newValue[0], (a, b) => a.daySame(b)) &&
            pzmNullableSame(oldValue[1], newValue[1], (a, b) => String(a) === String(b))
        );
    }

    @pzmPure
    private calculateMask(
        day: PzmDay | null,
        min: PzmDay,
        max: PzmDay,
        timeMode: ZuiTimeMode,
        dateFormat: ZuiDateMode,
        dateSeparator: string,
    ): string {
        return `${zuiCreateDateNgxMask(dateFormat, dateSeparator)} ${zuiCreateTimeNgxMask(timeMode)}`
    }

    @pzmPure
    private getDateTimeString(
        date: PzmDay | string,
        time: ZuiTime | string | null,
        timeMode: ZuiTimeMode = `HH:MM`,
    ): string {
        const dateString =
            date instanceof PzmDay
                ? date.toString(this.dateFormat, this.dateSeparator)
                : date;
        const timeString = time instanceof ZuiTime ? time.toString(timeMode) : time || ``;

        return `${dateString}${ZUI_DATE_TIME_SEPARATOR}${timeString}`;
    }

    private updateNativeValue(day: PzmDay): void {
        const time = this.nativeValue.split(ZUI_DATE_TIME_SEPARATOR)[1] || ``;

        this.nativeValue = this.getDateTimeString(day, time);
    }

    private findNearestTimeFromItems(value: ZuiTime): ZuiTime | null {
      return this.timeItems.reduce((previous, current) =>
        Math.abs(current.toAbsoluteMilliseconds() - value.toAbsoluteMilliseconds()) <
        Math.abs(previous.toAbsoluteMilliseconds() - value.toAbsoluteMilliseconds())
          ? current
          : previous,
      );
    }

    private getMatch(value: string): ZuiTime | undefined {
      return this.timeItems.find(item => ZUI_STRICT_MATCHER(item, value));
    }

    public onTimeMenuClick(item: ZuiTime, ev: Event): void {
      ev.preventDefault();
      ev.stopPropagation();

      this.openTimeTemplate = this.open = false;
      this.changeDetectorRef.markForCheck();

      if (this.value[1] && item.isSameTime(this.value[1])) return;

      this.onDayClick(
        this.value[0] ?? PzmDay.currentLocal(),
        item
      );
    }

    private zuiClampTime(time: ZuiTime, day: PzmDay): ZuiTime {
        const ms = time.toAbsoluteMilliseconds();
        const min =
            Array.isArray(this.min) && day.daySame(this.calendarMinDay)
                ? this.min[1].toAbsoluteMilliseconds()
                : -Infinity;
        const max =
            Array.isArray(this.max) && day.daySame(this.calendarMaxDay)
                ? this.max[1].toAbsoluteMilliseconds()
                : Infinity;

        return ZuiTime.fromAbsoluteMilliseconds(pzmClamp(ms, min, max));
    }

    public openTimeDropdown(): void {
      this.openTimeTemplate = true;
    }
}
