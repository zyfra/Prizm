import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { prizmCapitalizeFirstLetter } from '@prizm-ui/core';

@Pipe({
  name: 'prizmCronWeek',
})
export class PrizmCronWeekPipe implements PipeTransform {
  readonly datePipe = new DatePipe(this.locale);
  constructor(
    @Inject(LOCALE_ID) private locale: string
  ) {
  }
  public transform(day = 2, format = 'EEEE'): string {
    const date = new Date(
      1990,
      0,
      day - 1,
    );

    return prizmCapitalizeFirstLetter(
      this.datePipe.transform(
        date,
        format
      )
    )
  }
}
