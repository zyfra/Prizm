'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [50101],
  {
    50101: n => {
      n.exports =
        "import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';\nimport { PrizmThemeService } from '@prizm-ui/theme';\nimport { PrizmChartsBarComponent, PrizmChartsBarOptions } from '@prizm-ui/charts';\n\n@Component({\n  selector: 'prizm-charts-bar-example',\n  templateUrl: './prizm-charts-bar-example.component.html',\n  styles: [\n    `\n      .block {\n        width: 100%;\n        height: 300px;\n      }\n    `,\n  ],\n})\nexport class PrizmChartsBarExampleComponent implements AfterViewInit {\n  @ViewChild('bar') bar!: PrizmChartsBarComponent<any>;\n  public data = [\n    {\n      type: '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 1',\n      sales: 38,\n    },\n    {\n      type: '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 2',\n      sales: 52,\n    },\n    {\n      type: '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 3',\n      sales: 61,\n    },\n    {\n      type: '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 4',\n      sales: 145,\n    },\n    {\n      type: '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 5',\n      sales: 48,\n    },\n    {\n      type: '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 6',\n      sales: 38,\n    },\n    {\n      type: '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 7',\n      sales: 38,\n    },\n    {\n      type: '\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 8',\n      sales: 38,\n    },\n  ];\n  readonly color: PrizmChartsBarOptions['color'] = data => {\n    return data.sales > 40 ? 'red' : 'green';\n  };\n\n  constructor(public readonly prizmTheme: PrizmThemeService) {}\n\n  ngAfterViewInit(): void {\n    // we can update options manually\n    this.bar.updateOptions({\n      legend: false,\n      // color: this.color\n    });\n  }\n}\n";
    },
  },
]);
