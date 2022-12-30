import { Component } from '@angular/core';
import { PrizmThemeService } from '@prizm-ui/components';

@Component({
  selector: 'prizm-charts-bar-example',
  templateUrl: './prizm-charts-bar-example.component.html',
  styles: [
    `
      .block {
        width: 100%;
        height: 300px;
      }
    `
  ],
})
export class PrizmChartsBarExampleComponent {
  public data = [
    {
      type: 'Установка 1',
      sales: 38,
    },
    {
      type: 'Установка 2',
      sales: 52,
    },
    {
      type: 'Установка 3',
      sales: 61,
    },
    {
      type: 'Установка 4',
      sales: 145,
    },
    {
      type: 'Установка 5',
      sales: 48,
    },
    {
      type: 'Установка 6',
      sales: 38,
    },
    {
      type: 'Установка 7',
      sales: 38,
    },
    {
      type: 'Установка 8',
      sales: 38,
    },
  ];

  constructor(
    public readonly prizmTheme: PrizmThemeService,
  ) {
  }
}
