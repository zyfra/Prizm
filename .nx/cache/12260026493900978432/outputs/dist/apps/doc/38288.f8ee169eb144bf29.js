'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [38288],
  {
    38288: e => {
      e.exports =
        "import { Component } from '@angular/core';\nimport { PrizmThemeService } from '@prizm-ui/theme';\nimport { PrizmChartsBarItem, PrizmChartsBarOptions } from '@prizm-ui/charts';\n\n@Component({\n  selector: 'prizm-charts-bar-group-example',\n  templateUrl: './prizm-charts-group-bar-example.component.html',\n  styles: [\n    `\n      .block {\n        width: 100%;\n        height: 300px;\n      }\n    `,\n  ],\n})\nexport class PrizmChartsBarGroupExampleComponent {\n  public data: PrizmChartsBarItem[] = [\n    {\n      label: 'Mon.',\n      type: 'series1',\n      value: 2800,\n    },\n    {\n      label: 'Mon.',\n      type: 'series2',\n      value: 2260,\n    },\n    {\n      label: 'Tues.',\n      type: 'series1',\n      value: 1800,\n    },\n    {\n      label: 'Tues.',\n      type: 'series2',\n      value: 1300,\n    },\n    {\n      label: 'Wed.',\n      type: 'series1',\n      value: 950,\n    },\n    {\n      label: 'Wed.',\n      type: 'series2',\n      value: 900,\n    },\n    {\n      label: 'Thur.',\n      type: 'series1',\n      value: 500,\n    },\n    {\n      label: 'Thur.',\n      type: 'series2',\n      value: 390,\n    },\n    {\n      label: 'Fri.',\n      type: 'series1',\n      value: 170,\n    },\n    {\n      label: 'Fri.',\n      type: 'series2',\n      value: 100,\n    },\n  ];\n\n  public label: PrizmChartsBarOptions['label'] = {\n    position: 'middle', // 'left', 'middle', 'right'\n    layout: [\n      { type: 'interval-adjust-position' },\n      { type: 'interval-hide-overlap' },\n      { type: 'adjust-color' },\n    ],\n  };\n\n  constructor(public readonly prizmTheme: PrizmThemeService) {}\n}\n";
    },
  },
]);
