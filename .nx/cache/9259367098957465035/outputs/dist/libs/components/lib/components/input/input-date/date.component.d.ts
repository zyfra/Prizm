import { ChangeDetectorRef, ElementRef, Injector, Type } from '@angular/core';
import { NgControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { PrizmDay, PrizmMonth } from '../../../@core/date-time';
import { PrizmBooleanHandler, PrizmContextWithImplicit, PrizmControlValueTransformer, PrizmDateMode, PrizmFocusableElementAccessor } from '../../../types';
import { PrizmWithOptionalMinMax } from '../../../types/with-optional-min-max';
import { PrizmMarkerHandler } from '../../../types/marker-handler';
import { PrizmDialogService } from '../../dialogs/dialog';
import { PrizmNamedDay } from '../../../@core/classes/named-day';
import { AbstractPrizmNullableControl } from '../../../abstract/nullable-control';
import { PrizmInputSize } from '../common/models/prizm-input.models';
import { PrizmDateButton } from '../../../types/date-button';
import * as i0 from "@angular/core";
/**
 * @deprecated
 * use PrizmInputLayoutDateComponent
 * */
export declare class PrizmInputDateComponent extends AbstractPrizmNullableControl<PrizmDay> implements PrizmWithOptionalMinMax<PrizmDay>, PrizmFocusableElementAccessor {
    private readonly injector;
    private readonly isMobile;
    private readonly dialogService;
    private readonly mobileCalendar;
    readonly dateFormat: PrizmDateMode;
    readonly dateSeparator: string;
    readonly dateTexts$: Observable<Record<PrizmDateMode, string>>;
    readonly valueTransformer: PrizmControlValueTransformer<PrizmDay | null> | null;
    readonly focusableElement?: ElementRef<HTMLInputElement>;
    private month;
    mask: any;
    min: PrizmDay;
    placeholder: string;
    forceClear: boolean | null;
    max: PrizmDay;
    disabledItemHandler: PrizmBooleanHandler<PrizmDay>;
    markerHandler: PrizmMarkerHandler;
    items: readonly PrizmNamedDay[];
    defaultActiveYearMonth: PrizmMonth;
    label: string;
    size: PrizmInputSize;
    outer: boolean;
    extraButtonInjector: Injector;
    readonly testId_ = "ui_input_date";
    open: boolean;
    readonly type: PrizmContextWithImplicit<unknown>;
    readonly filler$: Observable<string>;
    rightButtons$: BehaviorSubject<PrizmDateButton[]>;
    onClick(): void;
    constructor(control: NgControl | null, changeDetectorRef: ChangeDetectorRef, injector: Injector, isMobile: boolean, dialogService: PrizmDialogService, mobileCalendar: Type<any> | null, dateFormat: PrizmDateMode, dateSeparator: string, dateTexts$: Observable<Record<PrizmDateMode, string>>, valueTransformer: PrizmControlValueTransformer<PrizmDay | null> | null);
    ngOnInit(): void;
    get computedMobile(): boolean;
    get computedActiveYearMonth(): PrizmMonth;
    get canOpen(): boolean;
    get stringValue(): string;
    get computedMask(): string;
    onValueChange(value: string): void;
    onDayClick(value: PrizmDay): void;
    onHovered(hovered: boolean): void;
    onMonthChange(month: PrizmMonth): void;
    onOpenChange(open: boolean): void;
    onFocused(focused: boolean): void;
    setDisabledState(): void;
    writeValue(value: PrizmDay | null): void;
    get nativeFocusableElement(): HTMLInputElement | null;
    get focused(): boolean;
    protected valueIdenticalComparator(oldValue: PrizmDay | null, newValue: PrizmDay | null): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputDateComponent, [{ optional: true; self: true; }, null, null, null, null, { optional: true; }, null, null, null, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmInputDateComponent, "prizm-input-date", never, { "min": { "alias": "min"; "required": false; }; "placeholder": { "alias": "placeholder"; "required": false; }; "forceClear": { "alias": "forceClear"; "required": false; }; "max": { "alias": "max"; "required": false; }; "disabledItemHandler": { "alias": "disabledItemHandler"; "required": false; }; "markerHandler": { "alias": "markerHandler"; "required": false; }; "items": { "alias": "items"; "required": false; }; "defaultActiveYearMonth": { "alias": "defaultActiveYearMonth"; "required": false; }; "label": { "alias": "label"; "required": false; }; "size": { "alias": "size"; "required": false; }; "outer": { "alias": "outer"; "required": false; }; "extraButtonInjector": { "alias": "extraButtonInjector"; "required": false; }; }, {}, never, never, false, never>;
}
