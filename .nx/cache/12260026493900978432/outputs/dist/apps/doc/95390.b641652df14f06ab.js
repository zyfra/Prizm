"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[95390],{95390:n=>{n.exports="```ts\nimport { PRIZM_LANGUAGE, prizmLanguageSwitcher, PRIZM_RUSSIAN_LANGUAGE } from '@prizm-ui/i18n';\n\n@NgModule({\n  // ...\n  providers: [\n    {\n      provide: PRIZM_LANGUAGE,\n      useValue: of(PRIZM_RUSSIAN_LANGUAGE),\n    },\n    //\n    prizmLanguageSwitcher(async lang => {\n      if (lang === 'ru') return PRIZM_RUSSIAN_LANGUAGE;\n      if (lang === 'en') return 'YOU_LANGUAGE';\n\n      return PRIZM_RUSSIAN_LANGUAGE;\n    }),\n  ],\n})\nexport class AppModule {\n  constructor(private readonly prizmLanguageSwitcher: PrizmLanguageSwitcher) {\n    // set language\n    this.prizmLanguageSwitcher.setLanguage('ru');\n  }\n}\n```\n"}}]);