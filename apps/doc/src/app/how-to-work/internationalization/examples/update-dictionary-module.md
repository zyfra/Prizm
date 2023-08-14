```ts
import { PRIZM_LANGUAGE, PRIZM_RUSSIAN_LANGUAGE } from '@prizm-ui/i18n';

export const PRIZM_RUSSIAN_FILE_UPLOAD: PrizmLanguageFileUpload = {
  // Update file updload component
  fileUpload: {
    dropzone__description: 'Перетащите его в эту область',
    dropzone__title: 'Загрукзка файлов',
  },
};
export const PRIZM_RUSSIAN_CRON: PrizmLanguageCron = {
  // Update cron
  cron: {
    title: 'Cron',
    submitText: 'ОБНОВИТЬ',
    startDateLabel: 'Начало работы',
    endDateLabel: 'Начало работы',
    indefinitelyLabel: 'Бессрочно',
    day: {
      every: 'Каждый день',
    },
  },
};

@NgModule({
  // ...
  providers: [
    {
      provide: PRIZM_LANGUAGE,
      useValue: of({
        // Save all as it was
        ...PRIZM_RUSSIAN_LANGUAGE,
        // Pass updated dictionary
        ...PRIZM_RUSSIAN_CRON,
        ...PRIZM_RUSSIAN_FILE_UPLOAD,
      }),
    },
  ],
})
export class AppModule {}
```
