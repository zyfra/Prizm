import { ElementRef, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmMonthRange } from '../../../@core/date-time/month-range';
import { PrizmMonth } from '../../../@core/date-time/month';
import { PrizmBooleanHandlerWithContext } from '../../../types/handler-with-context';
import { PrizmMonthContext } from '../../../@core/date-time/month-context';
import { PrizmHandler } from '../../../types/handler';
import { PrizmInputDateOptions } from '../../../tokens/input-date-options';
import { PrizmInputNgControl } from '../common/base/input-ng-control.class';
import * as i0 from "@angular/core";
export declare class PrizmInputLayoutMonthRangeComponent extends PrizmInputNgControl<PrizmMonthRange | null> {
    readonly formatter: PrizmHandler<PrizmMonth | null, Observable<string>>;
    private readonly options;
    readonly nativeElementType = "input-month-range";
    readonly hasClearButton = true;
    readonly testId_ = "ui_input_month_range";
    readonly focusableElement?: ElementRef<HTMLInputElement>;
    placeholder: string;
    min: PrizmMonth;
    max: PrizmMonth;
    disabledItemHandler: PrizmBooleanHandlerWithContext<PrizmMonth, PrizmMonthContext>;
    extraButtonInjector: Injector;
    open: boolean;
    get interactive(): boolean;
    constructor(formatter: PrizmHandler<PrizmMonth | null, Observable<string>>, options: PrizmInputDateOptions, injector: Injector);
    get nativeFocusableElement(): HTMLInputElement | null;
    get focused(): boolean;
    get empty(): boolean;
    computeValue(from: string | null, to: string | null): string;
    onValueChange(value: string): void;
    onMonthClick(month: PrizmMonth): void;
    onOpenChange(open: boolean): void;
    private close;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputLayoutMonthRangeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<PrizmInputLayoutMonthRangeComponent, "prizm-input-layout-month-range", never, { "placeholder": { "alias": "placeholder"; "required": false; }; "min": { "alias": "min"; "required": false; }; "max": { "alias": "max"; "required": false; }; "disabledItemHandler": { "alias": "disabledItemHandler"; "required": false; }; "extraButtonInjector": { "alias": "extraButtonInjector"; "required": false; }; }, {}, never, never, true, never>;
}
