import { ChangeDetectorRef, inject, Pipe, PipeTransform } from '@angular/core';
import { prizmCronHRToString } from '../human-readable/crons-i18n';
import { PRIZM_LANGUAGE, PrizmLanguageShortName } from '@prizm-ui/i18n';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'prizmCronHumanReadable',
  standalone: true,
})
export class PrizmCronHumanReadablePipe implements PipeTransform {
  readonly cdRef = inject(ChangeDetectorRef);
  readonly language$ = inject(PRIZM_LANGUAGE);

  public transform(expression: string, language?: PrizmLanguageShortName): Observable<string> {
    const lang = language ? of(language) : this.language$.pipe(map(i => i.shortName));

    return lang.pipe(
      map(shortLanguage => {
        return prizmCronHRToString(expression, {
          locale: shortLanguage,
        });
      })
    );
  }
}
