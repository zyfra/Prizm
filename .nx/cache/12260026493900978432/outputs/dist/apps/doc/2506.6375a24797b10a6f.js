'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [2506],
  {
    2506: n => {
      n.exports =
        "```ts\nimport { PRIZM_LANGUAGE, PRIZM_RUSSIAN_LANGUAGE } from '@prizm-ui/i18n';\n\nexport const PRIZM_RUSSIAN_FILE_UPLOAD: PrizmLanguageFileUpload = {\n  // Update file updload component\n  fileUpload: {\n    dropzone__description: '\u041f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \u0435\u0433\u043e \u0432 \u044d\u0442\u0443 \u043e\u0431\u043b\u0430\u0441\u0442\u044c',\n    dropzone__title: '\u0417\u0430\u0433\u0440\u0443\u043a\u0437\u043a\u0430 \u0444\u0430\u0439\u043b\u043e\u0432',\n  },\n};\nexport const PRIZM_RUSSIAN_CRON: PrizmLanguageCron = {\n  // Update cron\n  cron: {\n    title: 'Cron',\n    submitText: '\u041e\u0411\u041d\u041e\u0412\u0418\u0422\u042c',\n    startDateLabel: '\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b',\n    endDateLabel: '\u041d\u0430\u0447\u0430\u043b\u043e \u0440\u0430\u0431\u043e\u0442\u044b',\n    indefinitelyLabel: '\u0411\u0435\u0441\u0441\u0440\u043e\u0447\u043d\u043e',\n    day: {\n      every: '\u041a\u0430\u0436\u0434\u044b\u0439 \u0434\u0435\u043d\u044c',\n    },\n  },\n};\n\n@NgModule({\n  // ...\n  providers: [\n    {\n      provide: PRIZM_LANGUAGE,\n      useValue: of({\n        // Save all as it was\n        ...PRIZM_RUSSIAN_LANGUAGE,\n        // Pass updated dictionary\n        ...PRIZM_RUSSIAN_CRON,\n        ...PRIZM_RUSSIAN_FILE_UPLOAD,\n      }),\n    },\n  ],\n})\nexport class AppModule {}\n```\n";
    },
  },
]);
