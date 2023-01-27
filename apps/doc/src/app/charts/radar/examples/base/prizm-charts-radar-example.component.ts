import { Component } from '@angular/core';
import { PrizmChartsRadarItem, PrizmChartsRadarOptions } from '@prizm-ui/charts';
import { PrizmThemeService } from '@prizm-ui/theme';

@Component({
  selector: 'prizm-charts-radar-example',
  templateUrl: './prizm-charts-radar-example.component.html',
  styles: [
    `
      .block {
        width: 100%;
        height: 300px;
      }
    `,
  ],
})
export class PrizmChartsRadarExampleComponent {
  public data: PrizmChartsRadarItem[] = [
    { name: 'G2', star: 10371 },
    { name: 'G6', star: 7380 },
    { name: 'F2', star: 7414 },
    { name: 'L7', star: 2140 },
    { name: 'X6', star: 660 },
    { name: 'AVA', star: 885 },
    { name: 'G2Plot', star: 1626 },
  ].map((d: any) => ({ ...d, star: Math.sqrt(d.star) }));

  public xField = 'name';
  public yField = 'star';
  public options: Partial<PrizmChartsRadarOptions> = {
    appendPadding: [0, 10, 0, 10],
    meta: {
      star: {
        alias: 'star',
        min: 0,
        nice: true,
        formatter: (v): string => Number(v).toFixed(2),
      },
    },
    xAxis: {
      tickLine: null,
    },
    yAxis: {
      label: false,
      grid: {
        alternateColor: 'rgba(0, 0, 0, 0.04)',
      },
    },
    point: {
      size: 2,
    },
    area: {},
  };

  constructor(public readonly prizmTheme: PrizmThemeService) {}
}
