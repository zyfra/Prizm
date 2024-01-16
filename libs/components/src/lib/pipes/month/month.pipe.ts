import { Inject, Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { distinctUntilChanged, map, tap } from 'rxjs/operators';
import { PrizmMonth } from '../../@core/date-time/month';
import { PRIZM_MONTHS } from '../../tokens/i18n';

@Pipe({ name: `prizmMonth` })
export class PrizmMonthPipe implements PipeTransform {
  constructor(@Inject(PRIZM_MONTHS) private readonly months$: Observable<string[]>) {}

  public transform(month: number | null | undefined): Observable<string> {
    if (typeof month !== `number`) {
      return of(``);
    }

    return this.months$.pipe(map(months => months[month]));
  }
}
