import { Inject, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ZuiMonth } from '../../@core/date-time/month';
import { ZUI_MONTHS } from '../../tokens/i18n';

// @dynamic
@Pipe({name: `zuiMonth`})
export class ZuiMonthPipe implements PipeTransform {
    constructor(@Inject(ZUI_MONTHS) private readonly months$: Observable<string[]>) {}

    public transform({month}: ZuiMonth): Observable<string> {
        return this.months$.pipe(map(months => months[month]));
    }
}
