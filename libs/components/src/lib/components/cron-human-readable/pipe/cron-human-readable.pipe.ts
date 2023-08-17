import { Pipe, PipeTransform } from '@angular/core';
import { prizmCronHRToString } from '../human-readable/crons-i18n';

@Pipe({
  name: 'prizmCronHumanReadable',
})
export class PrizmCronHumanReadablePipe implements PipeTransform {
  transform(expression: any, lang: 'ru' | 'en' = 'ru'): any {
    return prizmCronHRToString(expression, {
      locale: lang,
    });
  }
}
