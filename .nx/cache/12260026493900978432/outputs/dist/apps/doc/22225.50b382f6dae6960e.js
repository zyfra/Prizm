'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [22225],
  {
    22225: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { PrizmCronTabItem } from '@prizm-ui/components';\n\n@Component({\n  selector: 'prizm-cron-specified-tabs-example',\n  templateUrl: './cron-specified-tabs-example.component.html',\n  styles: [\n    `\n      .box {\n        display: flex;\n        gap: 1rem;\n      }\n    `,\n  ],\n})\nexport class PrizmCronSpecifiedTabsExampleComponent {\n  public value = true;\n\n  public selected: PrizmCronTabItem = 'month';\n  readonly tabs: PrizmCronTabItem[] = ['hour', 'day', 'month', 'year'];\n}\n";
    },
  },
]);
