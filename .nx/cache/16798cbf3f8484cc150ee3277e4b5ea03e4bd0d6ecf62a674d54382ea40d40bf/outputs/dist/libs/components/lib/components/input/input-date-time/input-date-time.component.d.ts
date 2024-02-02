import { ChangeDetectorRef, ElementRef, Injector } from '@angular/core';
import { NgControl, UntypedFormControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { PrizmDay } from '../../../@core/date-time/day';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PrizmTime } from '../../../@core/date-time/time';
import { AbstractPrizmControl } from '../../../abstract/control';
import { PrizmContextWithImplicit } from '../../../types/context-with-implicit';
import { PrizmControlValueTransformer } from '../../../types/control-value-transformer';
import { PrizmDateMode } from '../../../types/date-mode';
import { PrizmFocusableElementAccessor } from '../../../types/focusable-element-accessor';
import { PrizmBooleanHandler } from '../../../types/handler';
import { PrizmTimeMode } from '../../../types/time-mode';
import { PrizmWithOptionalMinMax } from '../../../types/with-optional-min-max';
import { PrizmInputSize } from '../common/models/prizm-input.models';
import { PrizmDateButton } from '../../../types/date-button';
import * as i0 from "@angular/core";
export declare class PrizmInputDateTimeComponent extends AbstractPrizmControl<[PrizmDay | null, PrizmTime | null]> implements PrizmWithOptionalMinMax<PrizmDay | [PrizmDay, PrizmTime]>, PrizmFocusableElementAccessor {
    readonly dateFormat: PrizmDateMode;
    readonly dateSeparator: string;
    readonly timeTexts$: Observable<Record<PrizmTimeMode, string>>;
    private readonly injector;
    readonly dateTexts$: Observable<Record<PrizmDateMode, string>>;
    readonly valueTransformer: PrizmControlValueTransformer<[
        PrizmDay | null,
        PrizmTime | null
    ]> | null;
    private month;
    readonly focusableElement?: ElementRef<HTMLInputElement>;
    timeItems: readonly PrizmTime[];
    label: string;
    forceClear: boolean | null;
    placeholder: string;
    size: PrizmInputSize;
    extraButtonInjector: Injector;
    outer: boolean;
    min: PrizmDay | [PrizmDay, PrizmTime];
    max: PrizmDay | [PrizmDay, PrizmTime];
    timeStrict: boolean;
    disabledItemHandler: PrizmBooleanHandler<PrizmDay>;
    defaultActiveYearMonth: PrizmMonth;
    timeMode: PrizmTimeMode;
    readonly testId_ = "ui_input_date_time";
    openTimeTemplate: any;
    open: boolean;
    /** for avoid time format 29:01 */
    readonly type: PrizmContextWithImplicit<unknown>;
    get filteredTime(): readonly PrizmTime[];
    get computedSearchTime(): string;
    readonly filler$: Observable<string>;
    rightButtons$: BehaviorSubject<PrizmDateButton[]>;
    readonly innerControl: UntypedFormControl;
    constructor(control: NgControl | null, changeDetectorRef: ChangeDetectorRef, dateFormat: PrizmDateMode, dateSeparator: string, timeTexts$: Observable<Record<PrizmTimeMode, string>>, injector: Injector, dateTexts$: Observable<Record<PrizmDateMode, string>>, valueTransformer: PrizmControlValueTransformer<[
        PrizmDay | null,
        PrizmTime | null
    ]> | null);
    private filterTime;
    private syncStateBetweenControls;
    private syncValidatorsBetweenControls;
    private syncValuesBetweenControls;
    ngOnInit(): void;
    get nativeFocusableElement(): HTMLInputElement | null;
    get focused(): boolean;
    get fillerLength(): number;
    get textMaskOptions(): string;
    get stringValue(): string;
    get computedValue(): string;
    get calendarValue(): PrizmDay | null;
    get calendarMinDay(): PrizmDay;
    get calendarMaxDay(): PrizmDay;
    get computedActiveYearMonth(): PrizmMonth;
    get nativeValue(): string;
    set nativeValue(value: string);
    onClick(): void;
    onValueChange(value: string): void;
    onDayClick(day: PrizmDay, time?: PrizmTime): void;
    onHovered(hovered: boolean): void;
    onMonthChange(month: PrizmMonth): void;
    onOpenChange(open: boolean): void;
    onFocused(focused: boolean): void;
    setDisabledState(): void;
    writeValue(value: [PrizmDay | null, PrizmTime | null] | null): void;
    protected getFallbackValue(): [PrizmDay | null, PrizmTime | null];
    protected valueIdenticalComparator(oldValue: [PrizmDay | null, PrizmTime | null], newValue: [PrizmDay | null, PrizmTime | null]): boolean;
    private calculateMask;
    private getDateTimeString;
    private updateNativeValue;
    private findNearestTimeFromItems;
    private getMatch;
    onTimeMenuClick(item: PrizmTime, ev: Event): void;
    private prizmClampTime;
    openTimeDropdown(): void;
    openDateDropdown(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputDateTimeComponent, [{ optional: true; self: true; }, null, null, null, null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmInputDateTimeComponent, "prizm-input-date-time", never, { "timeItems": "timeItems"; "label": "label"; "forceClear": "forceClear"; "placeholder": "placeholder"; "size": "size"; "extraButtonInjector": "extraButtonInjector"; "outer": "outer"; "min": "min"; "max": "max"; "timeStrict": "timeStrict"; "disabledItemHandler": "disabledItemHandler"; "defaultActiveYearMonth": "defaultActiveYearMonth"; "timeMode": "timeMode"; }, {}, never, never, false, never>;
}
