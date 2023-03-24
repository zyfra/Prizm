```ts
import { PRIZM_LANGUAGE, PRIZM_RUSSIAN_LANGUAGE } from '@prizm-ui/i18n';

@NgModule({
  // ...
  providers: [
    {
      provide: PRIZM_LANGUAGE,
      useValue: of(PRIZM_RUSSIAN_LANGUAGE),
    },
  ],
})
export class AppModule {}
```
