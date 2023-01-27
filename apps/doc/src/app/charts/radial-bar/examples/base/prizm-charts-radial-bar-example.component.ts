import { Component } from '@angular/core';
import { PrizmChartsRadialBarItem, PrizmChartsRadialBarOptions } from '@prizm-ui/charts';
import { PrizmThemeService } from '@prizm-ui/theme';

@Component({
  selector: 'prizm-charts-radio-bar-example',
  templateUrl: './prizm-charts-radial-bar-example.component.html',
  styles: [
    `
      .block {
        width: 100%;
        height: 300px;
      }
    `,
  ],
})
export class PrizmChartsRadialBarExampleComponent {
  public data: PrizmChartsRadialBarItem[] = [
    { name: 'X6', star: 297 },
    { name: 'G', star: 506 },
    { name: 'AVA', star: 805 },
    { name: 'G2Plot', star: 1478 },
    { name: 'L7', star: 2029 },
    { name: 'G6', star: 7100 },
    { name: 'F2', star: 7346 },
    { name: 'G2', star: 10178 },
  ];

  public options: Partial<PrizmChartsRadialBarOptions> = {
    radius: 0.8,
    innerRadius: 0.2,
    tooltip: {
      formatter: (datum): any => {
        return { name: 'star', value: datum.star };
      },
    },
  };

  constructor(public readonly prizmTheme: PrizmThemeService) {}
}
