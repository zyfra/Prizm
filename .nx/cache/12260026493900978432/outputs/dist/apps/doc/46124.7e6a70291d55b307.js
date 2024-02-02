'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [46124],
  {
    46124: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { PrizmCronPeriod } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-cron-reset-example',\n  templateUrl: './cron-reset-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmCronResetExampleComponent {\n  public value = true;\n  public period: PrizmCronPeriod = {\n    start: null,\n    end: null,\n    indefinitely: true,\n  };\n}\n";
    },
  },
]);
