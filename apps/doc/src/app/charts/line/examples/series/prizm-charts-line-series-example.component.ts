import { Component } from '@angular/core';
import { PrizmThemeService } from '@prizm-ui/theme';

@Component({
  selector: 'prizm-charts-line-series-example',
  templateUrl: './prizm-charts-line-series-example.component.html',
  styles: [
    `
      .block {
        width: 100%;
        height: 300px;
      }
    `,
  ],
})
export class PrizmChartsLinesSeriesExampleComponent {
  data = [
    {
      time: '00:10',
      city: 'Москва',
      value: 30,
    },
    {
      time: '00:20',
      city: 'Москва',
      value: 10,
    },
    {
      time: '00:30',
      city: 'Москва',
      value: 20,
    },
    {
      time: '00:40',
      city: 'Москва',
      value: 25,
    },
    {
      time: '00:50',
      city: 'Москва',
      value: 5,
    },
    {
      time: '00:10',
      city: 'Санкт-Петербург',
      value: 40,
    },
    {
      time: '00:20',
      city: 'Санкт-Петербург',
      value: 50,
    },
    {
      time: '00:30',
      city: 'Санкт-Петербург',
      value: 1,
    },
    {
      time: '00:40',
      city: 'Санкт-Петербург',
      value: 10,
    },
    {
      time: '00:50',
      city: 'Санкт-Петербург',
      value: 20,
    },
  ];

  constructor(public readonly prizmTheme: PrizmThemeService) {}
}
