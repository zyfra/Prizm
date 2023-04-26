import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { prizmCapitalizeFirstLetter } from '@prizm-ui/core';

@Pipe({
  name: 'prizmCronMonth',
})
export class PrizmCronMonthPipe implements PipeTransform {
  readonly datePipe = new DatePipe(this.locale);
  constructor(@Inject(LOCALE_ID) private locale: string) {}
  public transform(month: number, day = 1, format = 'LLLL'): string {
    const date = new Date();
    date.setMonth(month ?? 1, day);
    return prizmCapitalizeFirstLetter(this.datePipe.transform(date, format));
  }
}
