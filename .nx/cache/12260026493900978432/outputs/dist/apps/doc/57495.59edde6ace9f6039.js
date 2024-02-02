'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [57495],
  {
    57495: n => {
      n.exports =
        "import { Component, Inject } from '@angular/core';\nimport { POLYMORPH_CONTEXT } from '@prizm-ui/components';\n\n@Component({\n  template: `FROM COMPONENT {{ context.a }}`,\n  styles: [],\n})\nexport class PrizmPolymorphSubComponentExampleComponent {\n  constructor(\n    /** WE CAN GET INPUT CONTEXT VIA DI, FOR THIS YOU NEED TO USE TOKEN POLYMORPH_CONTEXT*/\n    @Inject(POLYMORPH_CONTEXT) readonly context: any\n  ) {}\n}\n";
    },
  },
]);
