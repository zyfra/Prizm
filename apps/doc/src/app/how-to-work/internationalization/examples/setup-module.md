```ts
import { PRIZM_LANGUAGE, prizmLanguageSwitcher, PRIZM_RUSSIAN_LANGUAGE } from '@prizm-ui/i18n';

@NgModule({
  // ...
  providers: [
    {
      provide: PRIZM_LANGUAGE,
      useValue: of(PRIZM_RUSSIAN_LANGUAGE),
    },
    //
    prizmLanguageSwitcher(async lang => {
      if (lang === 'ru') return PRIZM_RUSSIAN_LANGUAGE;
      if (lang === 'en') return 'YOU_LANGUAGE';

      return PRIZM_RUSSIAN_LANGUAGE;
    }),
  ],
})
export class AppModule {
  constructor(private readonly prizmLanguageSwitcher: PrizmLanguageSwitcher) {
    // set language
    this.prizmLanguageSwitcher.setLanguage('ru');
  }
}
```
