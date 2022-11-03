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
import { PZM_DATE_FILLER_LENGTH } from '../../../@core/date-time/date-fillers';
import { PZM_DATE_FORMAT } from '../../../@core/date-time/date-format';
import { PZM_DATE_SEPARATOR, pzmChangeDateSeparator } from '../../../@core/date-time/date-separator';
import { PrizmDay } from '../../../@core/date-time/day';
import { PZM_FIRST_DAY, PZM_LAST_DAY } from '../../../@core/date-time/days.const';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PrizmTime } from '../../../@core/date-time/time';
import { AbstractPrizmControl } from '../../../abstract/control';
import { PZM_ALWAYS_FALSE_HANDLER } from '../../../constants/always-false-handler';
import { PZM_DATE_TIME_SEPARATOR, PZM_DATE_TIME_SEPARATOR_NGX } from '../../../constants/date-time-separator';
import { pzmDefaultProp } from '../../../decorators/default-prop';
import { PZM_DATE_TIME_VALUE_TRANSFORMER } from '../../../tokens/date-inputs-value-transformers';
import { PZM_DATE_TEXTS, PZM_TIME_TEXTS } from '../../../tokens/i18n';
import { PrizmContextWithImplicit } from '../../../types/context-with-implicit';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';
import { PrizmDateMode } from '../../../types/date-mode';
import { PrizmFocusableElementAccessor } from '../../../types/focusable-element-accessor';
import { PrizmBooleanHandler } from '../../../types/handler';
import { PrizmTimeMode } from '../../../types/time-mode';
import { PrizmWithOptionalMinMax } from '../../../types/with-optional-min-max';
import { PZM_INPUT_DATE_TIME_PROVIDERS } from './input-date-time.providers';
import { pzmNullableSame } from '../../../util/common/nullable-same';
import { pzmIsNativeFocusedIn } from '../../../util/is-native-focused-in';
import { pzmPure } from '../../../decorators/pure';
import { pzmCreateDateNgxMask } from '../../../@core/mask/create-date-mask';
import { pzmCreateTimeNgxMask } from '../../../@core/mask/create-time-mask';
import { pzmClamp } from '../../../util/math/clamp';
import { PrizmInputSize } from '../common/models/pzm-input.models';
import { PZM_DATE_RIGHT_BUTTONS } from '../../../tokens/date-extra-buttons';
import { PrizmDateButton } from '../../../types/date-button';
import { PZM_STRICT_MATCHER } from '../../../constants';

@Component({
    selector: `pzm-input-date-time`,
    templateUrl: `./input-date-time.component.html`,
    styleUrls: [`./input-date-time.component.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: PZM_INPUT_DATE_TIME_PROVIDERS,
})
export class PrizmInputDateTimeComponent
    extends AbstractPrizmControl<[PrizmDay | null, PrizmTime | null]>
    implements
        PrizmWithOptionalMinMax<PrizmDay | [PrizmDay, PrizmTime]>,
        PrizmFocusableElementAccessor
{
    private month: PrizmMonth | null = null;

    @ViewChild('focusableElementRef', {read: ElementRef})
    public readonly focusableElement?: ElementRef<HTMLInputElement>;

    @Input()
    @pzmDefaultProp()
    timeItems: readonly PrizmTime[] = new Array(24).fill(null).map(
      (_, i) => new PrizmTime(i, 0, 0, 0)
    );

    @Input()
    @pzmDefaultProp()
    label = 'Абсолютное';

    @Input()
    @pzmDefaultProp()
    placeholder = 'Выберите дату и время';

    @Input()
    @pzmDefaultProp()
    size: PrizmInputSize = 'm';

    @Input()
    @pzmDefaultProp()
    extraButtonInjector: Injector = this.injector;

    @Input()
    @pzmDefaultProp()
    outer = false;

    @Input()
    @pzmDefaultProp()
    min: PrizmDay | [PrizmDay, PrizmTime] = PZM_FIRST_DAY;

    @Input()
    @pzmDefaultProp()
    max: PrizmDay | [PrizmDay, PrizmTime] = PZM_LAST_DAY;

    @Input()
    @pzmDefaultProp()
    timeStrict = false;

    @Input()
    @pzmDefaultProp()
    disabledItemHandler: PrizmBooleanHandler<PrizmDay> = PZM_ALWAYS_FALSE_HANDLER;

    @Input()
    @pzmDefaultProp()
    defaultActiveYearMonth = PrizmMonth.currentLocal();

    @Input()
    @pzmDefaultProp()
    timeMode: PrizmTimeMode = `HH:MM`;

    @HostBinding('attr.testId')
    readonly testId = 'pzm_input_date_time';

    public openTimeTemplate = false;

    open = false;

    readonly type!: PrizmContextWithImplicit<unknown>;

    get filteredTime(): readonly PrizmTime[] {
      return this.filterTime(this.timeItems, this.timeMode, this.computedSearchTime);
    }

    get computedSearchTime(): string {
      return this.computedValue.length !== this.timeMode.length ? this.computedValue : ``;
    }

    readonly filler$: Observable<string> = combineLatest([
        this.dateTexts$.pipe(
            map(dateTexts =>
                pzmChangeDateSeparator(dateTexts[this.dateFormat], this.dateSeparator),
            ),
        ),
        this.timeTexts$.pipe(pluck(this.timeMode)),
    ]).pipe(map(fillers => this.getDateTimeString(...fillers)));


    public rightButtons$: BehaviorSubject<PrizmDateButton[]>;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(PZM_DATE_FORMAT) readonly dateFormat: PrizmDateMode,
        @Inject(PZM_DATE_SEPARATOR) readonly dateSeparator: string,
        @Inject(PZM_TIME_TEXTS)
        readonly timeTexts$: Observable<Record<PrizmTimeMode, string>>,
        private readonly injector: Injector,
        @Inject(PZM_DATE_TEXTS)
        readonly dateTexts$: Observable<Record<PrizmDateMode, string>>,
        @Optional()
        @Inject(PZM_DATE_TIME_VALUE_TRANSFORMER)
        override readonly valueTransformer: PrizmControlValueTransformer<
            [PrizmDay | null, PrizmTime | null]
        > | null,
    ) {
        super(control, changeDetectorRef, valueTransformer);
    }

    @pzmPure
    private filterTime(
      items: readonly PrizmTime[],
      mode: PrizmTimeMode,
      search: string,
    ): readonly PrizmTime[] {
      return items.filter(item => item.toString(mode).includes(search));
    }


    public override ngOnInit(): void {
      super.ngOnInit();
      this.rightButtons$ = this.extraButtonInjector.get(PZM_DATE_RIGHT_BUTTONS);
    }

    public get nativeFocusableElement(): HTMLInputElement | null {
      return this.focusableElement ? this.focusableElement.nativeElement as HTMLInputElement : null;
    }

    public get focused(): boolean {
      return this.focusableElement?.nativeElement ? pzmIsNativeFocusedIn(this.focusableElement.nativeElement) : false;
    }

    get fillerLength(): number {
        return PZM_DATE_FILLER_LENGTH + PZM_DATE_TIME_SEPARATOR.length + this.timeMode.length;
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
        const hasTimeInputChars = nativeValue.length > PZM_DATE_FILLER_LENGTH;

        if (!date || (!time && hasTimeInputChars)) {
            return nativeValue;
        }

        return this.getDateTimeString(date, time, timeMode);
    }

    get calendarValue(): PrizmDay | null {
        return this.value[0];
    }

    get calendarMinDay(): PrizmDay {
        return Array.isArray(this.min) ? this.min[0] : this.min;
    }

    get calendarMaxDay(): PrizmDay {
        return Array.isArray(this.max) ? this.max[0] : this.max;
    }

    get computedActiveYearMonth(): PrizmMonth {
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

        const [date, time] = value.split(PZM_DATE_TIME_SEPARATOR_NGX);

        const parsedDate = PrizmDay.normalizeParse(date, this.dateFormat);
        const parsedTime =
            time && time.length === this.timeMode.length
                ? this.pzmClampTime(PrizmTime.fromString(time), parsedDate)
                : null;

        const match = parsedTime && this.getMatch(time);

        this.updateValue([parsedDate, match || (this.timeStrict ? this.findNearestTimeFromItems(parsedTime) : parsedTime)]);
        this.open = false;
    }

    public onDayClick(day: PrizmDay, time?: PrizmTime): void {
        const modifiedTime = time ?? (this.value[1] && this.pzmClampTime(this.value[1], day));

        this.updateValue([day, modifiedTime]);
        this.updateNativeValue(day);
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

        if (
            focused ||
            this.value[0] === null ||
            this.value[1] !== null ||
            this.nativeValue.length <= this.fillerLength + PZM_DATE_TIME_SEPARATOR.length ||
            this.timeMode === `HH:MM`
        ) {
            return;
        }

        const [, time] = this.nativeValue.split(PZM_DATE_TIME_SEPARATOR);

        if (!time) {
            return;
        }

        const parsedTime = PrizmTime.fromString(time);

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

    public override writeValue(value: [PrizmDay | null, PrizmTime | null] | null): void {
        super.writeValue(value);

        this.nativeValue = value && (value[0] || value[1]) ? this.computedValue : ``;
    }

    protected getFallbackValue(): [PrizmDay | null, PrizmTime | null] {
        return [null, null];
    }

    protected override valueIdenticalComparator(
        oldValue: [PrizmDay | null, PrizmTime | null],
        newValue: [PrizmDay | null, PrizmTime | null],
    ): boolean {
        return (
            pzmNullableSame(oldValue[0], newValue[0], (a, b) => a?.daySame(b)) &&
            pzmNullableSame(oldValue[1], newValue[1], (a, b) => String(a) === String(b))
        );
    }

    @pzmPure
    private calculateMask(
        day: PrizmDay | null,
        min: PrizmDay,
        max: PrizmDay,
        timeMode: PrizmTimeMode,
        dateFormat: PrizmDateMode,
        dateSeparator: string,
    ): string {
        return `${pzmCreateDateNgxMask(dateFormat, dateSeparator)} ${pzmCreateTimeNgxMask(timeMode)}`
    }

    @pzmPure
    private getDateTimeString(
        date: PrizmDay | string,
        time: PrizmTime | string | null,
        timeMode: PrizmTimeMode = `HH:MM`,
    ): string {
        const dateString =
            date instanceof PrizmDay
                ? date.toString(this.dateFormat, this.dateSeparator)
                : date;
        const timeString = time instanceof PrizmTime ? time.toString(timeMode) : time || ``;

        return `${dateString}${PZM_DATE_TIME_SEPARATOR}${timeString}`;
    }

    private updateNativeValue(day: PrizmDay): void {
        const time = this.nativeValue.split(PZM_DATE_TIME_SEPARATOR)[1] || ``;

        this.nativeValue = this.getDateTimeString(day, time);
    }

    private findNearestTimeFromItems(value: PrizmTime): PrizmTime | null {
      return this.timeItems.reduce((previous, current) =>
        Math.abs(current.toAbsoluteMilliseconds() - value.toAbsoluteMilliseconds()) <
        Math.abs(previous.toAbsoluteMilliseconds() - value.toAbsoluteMilliseconds())
          ? current
          : previous,
      );
    }

    private getMatch(value: string): PrizmTime | undefined {
      return this.timeItems.find(item => PZM_STRICT_MATCHER(item, value));
    }

    public onTimeMenuClick(item: PrizmTime, ev: Event): void {
      ev.preventDefault();
      ev.stopPropagation();

      this.openTimeTemplate = this.open = false;
      this.changeDetectorRef.markForCheck();

      if (this.value[1] && item.isSameTime(this.value[1])) return;

      this.onDayClick(
        this.value[0] ?? PrizmDay.currentLocal(),
        item
      );
    }

    private pzmClampTime(time: PrizmTime, day: PrizmDay): PrizmTime {
        const ms = time.toAbsoluteMilliseconds();
        const min =
            Array.isArray(this.min) && day.daySame(this.calendarMinDay)
                ? this.min[1].toAbsoluteMilliseconds()
                : -Infinity;
        const max =
            Array.isArray(this.max) && day.daySame(this.calendarMaxDay)
                ? this.max[1].toAbsoluteMilliseconds()
                : Infinity;

        return PrizmTime.fromAbsoluteMilliseconds(pzmClamp(ms, min, max));
    }

    public openTimeDropdown(): void {
      this.openTimeTemplate = !this.openTimeTemplate;
    }
}
