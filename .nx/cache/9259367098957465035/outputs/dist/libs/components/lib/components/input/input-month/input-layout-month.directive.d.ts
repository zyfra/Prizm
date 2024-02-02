import { DoCheck } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmInputMonthComponent } from './input-month.component';
import { AbstractPrizmTextfieldHost } from '../../../abstract/abstract-textfield-host';
import { PrizmHandler } from '../../../types/handler';
import { PrizmMonth } from '../../../@core/date-time/month';
import * as i0 from "@angular/core";
export declare class PrizmInputLayoutMonthDirective extends AbstractPrizmTextfieldHost<PrizmInputMonthComponent> implements DoCheck {
    private readonly value$;
    private localizedValue;
    constructor(host: PrizmInputMonthComponent, formatter: PrizmHandler<PrizmMonth | null, Observable<string>>, destroy$: Observable<unknown>);
    get readOnly(): boolean;
    get value(): string;
    ngDoCheck(): void;
    onValueChange(value: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmInputLayoutMonthDirective, [null, null, { self: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<PrizmInputLayoutMonthDirective, "prizm-input-month", never, {}, {}, never, never, true, never>;
}
