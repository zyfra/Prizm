import { ChangeDetectorRef, ElementRef, Injector } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { AbstractPrizmNullableControl } from '../../../abstract/nullable-control';
import { PrizmMonthRange } from '../../../@core/date-time/month-range';
import { PrizmWithOptionalMinMax } from '../../../types/with-optional-min-max';
import { PrizmFocusableElementAccessor } from '../../../types/focusable-element-accessor';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PrizmBooleanHandlerWithContext } from '../../../types/handler-with-context';
import { PrizmMonthContext } from '../../../@core/date-time/month-context';
import { PrizmHandler } from '../../../types/handler';
import { PrizmInputDateOptions } from '../../../tokens/input-date-options';
import { PrizmInputSize } from '../common/models/prizm-input.models';
import * as i0 from "@angular/core";
export declare class PrizmInputMonthRangeComponent extends AbstractPrizmNullableControl<PrizmMonthRange> implements PrizmWithOptionalMinMax<PrizmMonth>, PrizmFocusableElementAccessor {
    readonly formatter: PrizmHandler<PrizmMonth | null, Observable<string>>;
    private readonly options;
    private readonly injector;
    readonly testId_ = "ui_input_month_range";
    readonly focusableElement?: ElementRef<HTMLInputElement>;
    outer: boolean;
    label: string;
    forceClear: boolean | null;
    size: PrizmInputSize;
    placeholder: string;
    min: PrizmMonth;
    max: PrizmMonth;
    disabledItemHandler: PrizmBooleanHandlerWithContext<PrizmMonth, PrizmMonthContext>;
    extraButtonInjector: Injector;
    open: boolean;
    onClick(): void;
    constructor(control: NgControl | null, changeDetectorRef: ChangeDetectorRef, formatter: PrizmHandler<PrizmMonth | null, Observable<string>>, options: PrizmInputDateOptions, injector: Injector);
    get nativeFocusableElement(): HTMLInputElement | null;
    get focused(): boolean;
    get calendarIcon(): PrizmInputDateOptions['icon'];
    computeValue(from: string | null, to: string | null): string;
    onValueChange(value: string): void;
    onMonthClick(month: PrizmMonth): void;
    onOpenChange(open: boolean): void;
    onActiveZone(focused: boolean): void;
    setDisabledState(): void;
    private close;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputMonthRangeComponent, [{ optional: true; self: true; }, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmInputMonthRangeComponent, "prizm-input-month-range", never, { "outer": "outer"; "label": "label"; "forceClear": "forceClear"; "size": "size"; "placeholder": "placeholder"; "min": "min"; "max": "max"; "disabledItemHandler": "disabledItemHandler"; "extraButtonInjector": "extraButtonInjector"; }, {}, never, never, false, never>;
}
