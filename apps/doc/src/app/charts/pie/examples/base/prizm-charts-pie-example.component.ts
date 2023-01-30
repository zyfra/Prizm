import { Component } from '@angular/core';
import { PrizmChartsPieItem, PrizmChartsPieOptions } from '@prizm-ui/charts';
import { PrizmThemeService } from '@prizm-ui/theme';

@Component({
  selector: 'prizm-charts-pie-example',
  templateUrl: './prizm-charts-pie-example.component.html',
  styles: [
    `
      .block {
        width: 100%;
        height: 300px;
      }
    `,
  ],
})
export class PrizmChartsPieExampleComponent {
  data: PrizmChartsPieItem[] = [
    { type: 'категория один', value: 27 },
    { type: 'вторая категория', value: 25 },
    { type: 'категория три', value: 18 },
    { type: 'четвертая категория', value: 15 },
    { type: 'пятая категория', value: 10 },
    { type: 'другое', value: 5 },
  ];
  colorField = 'type';
  angleField = 'value';
  interactions: PrizmChartsPieOptions['interactions'] = [{ type: 'element-active' }];
  label: PrizmChartsPieOptions['label'] = {
    type: 'inner',
    offset: '-30%',
    content: ({ percent }): any => `${(percent * 100).toFixed(0)}%`,
    style: {
      fontSize: 14,
      textAlign: 'center',
    },
  };

  options: Partial<PrizmChartsPieOptions> = {
    appendPadding: 10,
    radius: 0.9,
  };

  constructor(public readonly prizmTheme: PrizmThemeService) {}
}
