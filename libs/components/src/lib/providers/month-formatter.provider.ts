import { FactoryProvider } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { PrizmMonth } from '../@core/date-time/month';
import { PrizmMonthPipe } from '../pipes/month/month.pipe';
import { PRIZM_MONTH_FORMATTER } from '../tokens/month-formatter';
import { PrizmHandler } from '../types/handler';

export const PRIZM_MONTH_FORMATTER_PROVIDER: FactoryProvider = {
  provide: PRIZM_MONTH_FORMATTER,
  deps: [PrizmMonthPipe],
  useFactory: (pipe: PrizmMonthPipe): PrizmHandler<PrizmMonth | null, Observable<string>> => {
    return month =>
      month ? pipe.transform(month).pipe(map(formatted => `${formatted} ${month.formattedYear}`)) : of(``);
  },
};
