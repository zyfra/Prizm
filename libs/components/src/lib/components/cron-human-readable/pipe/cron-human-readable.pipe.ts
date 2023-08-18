import { ChangeDetectorRef, inject, Inject, Pipe, PipeTransform } from '@angular/core';
import { prizmCronHRToString } from '../human-readable/crons-i18n';
import { PRIZM_LANGUAGE, PrizmLanguage } from '@prizm-ui/i18n';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'prizmCronHumanReadable',
})
export class PrizmCronHumanReadablePipe implements PipeTransform {
  readonly cdRef = inject(ChangeDetectorRef);
  readonly language$ = inject(PRIZM_LANGUAGE);
  readonly asyncPipe = new AsyncPipe(this.cdRef);

  public transform(expression: string): string {
    const lang = this.asyncPipe.transform(this.language$.pipe(map(i => i.shortName)));

    if (!lang) return '';

    return prizmCronHRToString(expression, {
      locale: lang,
    });
  }
}
