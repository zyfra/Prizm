'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [2843],
  {
    2843: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { PrizmCronPeriod, PrizmDay, PrizmTime } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-cron-base-example',\n  templateUrl: './cron-base-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmCronBaseExampleComponent {\n  public value = true;\n  public period: PrizmCronPeriod = {\n    start: null,\n    end: null,\n    indefinitely: true,\n  };\n}\n";
    },
  },
]);
