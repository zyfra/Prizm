'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [31745],
  {
    31745: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { PrizmThemeService } from '@prizm-ui/theme';\n\n@Component({\n  selector: 'prizm-charts-stacked-bar-example',\n  templateUrl: './prizm-charts-stacked-bar-example.component.html',\n  styles: [\n    `\n      .block {\n        width: 100%;\n        height: 300px;\n      }\n    `,\n  ],\n})\nexport class PrizmChartsStackedBarExampleComponent {\n  public data = [\n    {\n      year: '1991',\n      value: 3,\n      type: 'Lon',\n    },\n    {\n      year: '1992',\n      value: 4,\n      type: 'Lon',\n    },\n    {\n      year: '1993',\n      value: 3.5,\n      type: 'Lon',\n    },\n    {\n      year: '1994',\n      value: 5,\n      type: 'Lon',\n    },\n    {\n      year: '1995',\n      value: 4.9,\n      type: 'Lon',\n    },\n    {\n      year: '1996',\n      value: 6,\n      type: 'Lon',\n    },\n    {\n      year: '1997',\n      value: 7,\n      type: 'Lon',\n    },\n    {\n      year: '1998',\n      value: 9,\n      type: 'Lon',\n    },\n    {\n      year: '1999',\n      value: 13,\n      type: 'Lon',\n    },\n    {\n      year: '1991',\n      value: 3,\n      type: 'Bor',\n    },\n    {\n      year: '1992',\n      value: 4,\n      type: 'Bor',\n    },\n    {\n      year: '1993',\n      value: 3.5,\n      type: 'Bor',\n    },\n    {\n      year: '1994',\n      value: 5,\n      type: 'Bor',\n    },\n    {\n      year: '1995',\n      value: 4.9,\n      type: 'Bor',\n    },\n    {\n      year: '1996',\n      value: 6,\n      type: 'Bor',\n    },\n    {\n      year: '1997',\n      value: 7,\n      type: 'Bor',\n    },\n    {\n      year: '1998',\n      value: 9,\n      type: 'Bor',\n    },\n    {\n      year: '1999',\n      value: 13,\n      type: 'Bor',\n    },\n  ];\n\n  constructor(public readonly prizmTheme: PrizmThemeService) {}\n}\n";
    },
  },
]);
