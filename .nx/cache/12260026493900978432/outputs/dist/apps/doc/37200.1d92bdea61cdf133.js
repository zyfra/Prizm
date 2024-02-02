'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [37200],
  {
    37200: n => {
      n.exports =
        "import { Component, Inject } from '@angular/core';\nimport { CUSTOM_TOKEN } from './token';\n\n@Component({\n  template: `FROM INJECTOR {{ value }}`,\n  styles: [],\n})\nexport class PrizmPolymorphSubComponentExampleComponent {\n  constructor(@Inject(CUSTOM_TOKEN) readonly value: number) {}\n}\n";
    },
  },
]);
