import { DoCheck } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmInputMonthRangeComponent } from './input-month-range.component';
import { AbstractPrizmTextfieldHost } from '../../../abstract/abstract-textfield-host';
import { PrizmHandler } from '../../../types/handler';
import { PrizmMonth } from '../../../@core/date-time/month';
import * as i0 from "@angular/core";
export declare class PrizmInputLayoutMonthRangeDirective extends AbstractPrizmTextfieldHost<PrizmInputMonthRangeComponent> implements DoCheck {
    private readonly value$;
    private localizedValue;
    constructor(host: PrizmInputMonthRangeComponent, formatter: PrizmHandler<PrizmMonth | null, Observable<string>>, destroy$: Observable<unknown>);
    get readOnly(): boolean;
    get value(): string;
    ngDoCheck(): void;
    onValueChange(value: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputLayoutMonthRangeDirective, [null, null, { self: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmInputLayoutMonthRangeDirective, "prizm-input-month-range", never, {}, {}, never, never, true, never>;
}
