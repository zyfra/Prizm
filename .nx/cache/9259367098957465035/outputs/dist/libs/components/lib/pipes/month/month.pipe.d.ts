import { PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { PrizmMonth } from '../../@core/date-time/month';
import * as i0 from "@angular/core";
export declare class PrizmMonthPipe implements PipeTransform {
    private readonly months$;
    constructor(months$: Observable<string[]>);
    transform({ month }: PrizmMonth): Observable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<PrizmMonthPipe, never>;
    static ɵpipe: i0.ɵɵPipeDeclaration<PrizmMonthPipe, "prizmMonth", false>;
}
