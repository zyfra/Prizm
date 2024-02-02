'use strict';
(self.webpackChunkdoc = self.webpackChunkdoc || []).push([
  [24352],
  {
    24352: n => {
      n.exports =
        "import { Component } from '@angular/core';\nimport { PrizmChartsGaugeOptions } from '@prizm-ui/charts';\nimport { PrizmThemeService } from '@prizm-ui/theme';\n\n@Component({\n  selector: 'prizm-charts-gauge-example',\n  templateUrl: './prizm-charts-gauge-example.component.html',\n  styles: [\n    `\n      .block {\n        width: 100%;\n        height: 300px;\n      }\n    `,\n  ],\n})\nexport class PrizmChartsGaugeExampleComponent {\n  public options: PrizmChartsGaugeOptions = {\n    range: {\n      color: '#30BF78',\n    },\n    indicator: {\n      pointer: {\n        style: {\n          stroke: '#D0D0D0',\n        },\n      },\n      pin: {\n        style: {\n          stroke: '#D0D0D0',\n        },\n      },\n    },\n    axis: {\n      label: {\n        formatter(v): number {\n          return Number(v) * 100;\n        },\n      },\n      subTickLine: {\n        count: 3,\n      },\n    },\n    statistic: {\n      content: {\n        formatter: (data): string => {\n          const percent = data?.percent ?? 0;\n          return `Rate: ${(percent * 100).toFixed(0)}%`;\n        },\n        style: {\n          color: 'var(--prizm-v3-status-success-primary-default)',\n          fontSize: '24px',\n        },\n      },\n    },\n  };\n\n  constructor(public readonly prizmTheme: PrizmThemeService) {}\n}\n";
    },
  },
]);
