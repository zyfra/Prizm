import { Component } from '@angular/core';
import { PrizmChartsColumnOptions } from '@prizm-ui/charts';
import { PrizmThemeService } from '@prizm-ui/theme';

@Component({
  selector: 'prizm-charts-column-base-example',
  templateUrl: './prizm-charts-column-example.component.html',
  styles: [
    `
      .block {
        width: 100%;
        height: 300px;
      }
    `,
  ],
})
export class PrizmChartsColumnExampleComponent {
  public data = [
    {
      type: 'Бытовая техника',
      sales: 38,
    },
    {
      type: 'Непродовольственные товары',
      sales: 52,
    },
    {
      type: 'Свежие фрукты',
      sales: 61,
    },
    {
      type: 'Бьюти-стирка',
      sales: 145,
    },
    {
      type: 'товары ребенка',
      sales: 48,
    },
    {
      type: 'импортная еда',
      sales: 38,
    },
    {
      type: 'Еда и напитки',
      sales: 38,
    },
    {
      type: 'Уборка дома',
      sales: 38,
    },
  ];

  public label: PrizmChartsColumnOptions['label'] = {
    position: 'middle',
    style: {
      fill: '#FFFFFF',
      opacity: 0.6,
    },
  };

  public options = {
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'категория',
      },
      sales: {
        alias: 'продажи',
      },
    },
  };

  constructor(public readonly prizmTheme: PrizmThemeService) {}
}
