import { Inject, Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
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
