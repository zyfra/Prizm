import { Component, Self } from '@angular/core';
import {
  PRIZM_LANGUAGE,
  PRIZM_RUSSIAN_LANGUAGE,
  PrizmLanguageName,
  prizmLanguageSwitcher,
  PrizmLanguageSwitcher,
} from '@prizm-ui/i18n';
import { of } from 'rxjs';
import { PRIZM_ENGLISH_FILE_UPLOAD } from '../../../../components/file-upload/examples/i18n/file-upload-i18n-example.component';

@Component({
  selector: 'prizm-language-switcher-example',
  templateUrl: './language-switcher-example.component.html',
  styles: [
    `
      button:first-child {
        margin-right: 16px;
      }
    `,
  ],
  providers: [
    ...prizmLanguageSwitcher(async lang => {
      if (lang === ('ru' as PrizmLanguageName)) return PRIZM_RUSSIAN_LANGUAGE;
      if (lang === ('en' as PrizmLanguageName))
        return { ...PRIZM_RUSSIAN_LANGUAGE, ...PRIZM_ENGLISH_FILE_UPLOAD };

      return PRIZM_RUSSIAN_LANGUAGE;
    }),
    PrizmLanguageSwitcher,
  ],
})
export class PrizmLanguageSwitcherExampleComponent {
  constructor(
    @Self()
    private readonly prizmLanguageSwitcher: PrizmLanguageSwitcher
  ) {}

  public changeLanguage(lang: string) {
    this.prizmLanguageSwitcher.setLanguage(lang as PrizmLanguageName);
  }
}
