import { PRIZM_LANGUAGES_META, PrizmLanguageMeta } from './versions.constants';
import { inject, Injectable } from '@angular/core';
import { PrizmLanguageSwitcher } from '@prizm-ui/i18n';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class LanguageManagerService {
  readonly languageSwitcher = inject(PrizmLanguageSwitcher);
  readonly language$ = this.languageSwitcher.language$.pipe(
    map(i => {
      return PRIZM_LANGUAGES_META.find(l => l.code === i);
    })
  );
}
