import { PrizmCronService } from '@prizm-ui/components';
import { PrizmCronUiHourType } from './model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class PrizmCronUiService {
  hourType$: Observable<PrizmCronUiHourType> = this.cron.hour$.pipe(
    map(
      (hour) => {
        if (hour === '*') {
          return PrizmCronUiHourType.every
        } else if (hour.includes('/')) {
          return PrizmCronUiHourType.after
        } else if (hour.includes('-')) {
          return PrizmCronUiHourType.between
        }

        return PrizmCronUiHourType.specified;
      }
    )
  )
  monthType$: Observable<PrizmCronUiHourType> = this.cron.hour$.pipe(
    map(
      (hour) => {
        if (hour === '*') {
          return PrizmCronUiHourType.every
        } else if (hour.includes('/')) {
          return PrizmCronUiHourType.after
        } else if (hour.includes('-')) {
          return PrizmCronUiHourType.between
        }

        return PrizmCronUiHourType.specified;
      }
    )
  )

  constructor(
    private cron: PrizmCronService
  ) {
  }
}
