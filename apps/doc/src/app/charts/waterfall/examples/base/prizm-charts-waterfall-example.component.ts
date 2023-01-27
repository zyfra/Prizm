import { Component } from '@angular/core';
import { PrizmChartsWaterfallItem } from '@prizm-ui/charts';
import { PrizmThemeService } from '@prizm-ui/theme';

@Component({
  selector: 'prizm-charts-waterfall-example',
  templateUrl: './prizm-charts-waterfall-example.component.html',
  styles: [
    `
      .block {
        width: 100%;
        height: 300px;
      }
    `,
  ],
})
export class PrizmChartsWaterfallExampleComponent {
  public data: PrizmChartsWaterfallItem[] = [
    { type: 'повседневные нужды', money: 120 },
    { type: 'расходы на питание', money: 900 },
    { type: 'транспорт', money: 200 },
    { type: 'счет за коммунальные услуги', money: 300 },
    { type: 'арендовать', money: 1200 },
    { type: 'торговый центр', money: 1000 },
    { type: 'доход', money: -2000 },
  ];
  public xField = 'type';
  public yField = 'money';
  public options = {
    appendPadding: [15, 0, 0, 0],
    meta: {
      type: {
        alias: 'категория',
      },
      money: {
        alias: 'доходы и расходы',
        formatter: (v: string): string => `${v} Р`,
      },
    },
    label: {
      style: { fontSize: 10, fill: 'rgba(0,0,0,0.65)' },
      layout: [{ type: 'interval-adjust-position' }],
    },
    total: {
      label: 'суммарные расходы',
      style: {
        fill: '#96a6a6',
      },
    },
  };

  constructor(public readonly prizmTheme: PrizmThemeService) {}
}
