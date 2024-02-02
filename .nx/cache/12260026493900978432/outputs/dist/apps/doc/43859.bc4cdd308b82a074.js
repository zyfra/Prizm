'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [43859],
  {
    43859: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { PrizmThemeService } from '@prizm-ui/theme';\n\n@Component({\n  selector: 'prizm-charts-line-example',\n  templateUrl: './prizm-charts-line-example.component.html',\n  styles: [\n    `\n      .block {\n        width: 100%;\n        height: 300px;\n      }\n    `,\n  ],\n})\nexport class PrizmChartsLinesExampleComponent {\n  data = [\n    {\n      x: '\u041f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a',\n      y: 50,\n    },\n    {\n      x: '\u0412\u0442\u043e\u0440\u043d\u0438\u043a',\n      y: 200,\n    },\n    {\n      x: '\u0421\u0440\u0435\u0434\u0430',\n      y: 150,\n    },\n    {\n      x: '\u0427\u0435\u0442\u0432\u0435\u0440\u0433',\n      y: 100,\n    },\n    {\n      x: '\u041f\u044f\u0442\u043d\u0438\u0446\u0430',\n      y: 150,\n    },\n    {\n      x: '\u0421\u0443\u0431\u0431\u043e\u0442\u0430',\n      y: 200,\n    },\n    {\n      x: '\u0412\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435',\n      y: 200,\n    },\n  ];\n\n  constructor(public readonly prizmTheme: PrizmThemeService) {}\n}\n";
    },
  },
]);
