import { Component } from '@angular/core';
import { PrizmChartsGaugeOptions } from '@prizm-ui/charts';
import { PrizmThemeService } from '@prizm-ui/theme';

@Component({
  selector: 'prizm-charts-gauge-example',
  templateUrl: './prizm-charts-gauge-example.component.html',
  styles: [
    `
      .block {
        width: 100%;
        height: 300px;
      }
    `,
  ],
})
export class PrizmChartsGaugeExampleComponent {
  public options: PrizmChartsGaugeOptions = {
    range: {
      color: '#30BF78',
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
        },
      },
    },
    axis: {
      label: {
        formatter(v): number {
          return Number(v) * 100;
        },
      },
      subTickLine: {
        count: 3,
      },
    },
    statistic: {
      content: {
        formatter: ({ percent }): string => `Rate: ${(percent * 100).toFixed(0)}%`,
        style: {
          color: 'var(--prizm-index-good)',
          fontSize: '24px',
        },
      },
    },
  };

  constructor(public readonly prizmTheme: PrizmThemeService) {}
}
