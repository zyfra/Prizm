import { Inject, Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PrizmMonth } from '../../@core/date-time/month';
import { PZM_MONTHS } from '../../tokens/i18n';

// @dynamic
@Pipe({name: `pzmMonth`})
export class PrizmMonthPipe implements PipeTransform {
    constructor(@Inject(PZM_MONTHS) private readonly months$: Observable<string[]>) {}

    public transform({month}: PrizmMonth): Observable<string> {
        return this.months$.pipe(map(months => months[month]));
    }
}
