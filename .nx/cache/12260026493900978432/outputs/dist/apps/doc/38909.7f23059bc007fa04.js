'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [38909],
  {
    38909: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { PrizmCronPeriod, PrizmDay, PrizmTime } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-cron-fullwidth-example',\n  templateUrl: './cron-fullwidth-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmCronFullwidthExampleComponent {\n  public value = true;\n  public period: PrizmCronPeriod = {\n    start: null,\n    end: null,\n    indefinitely: true,\n  };\n}\n";
    },
  },
]);
