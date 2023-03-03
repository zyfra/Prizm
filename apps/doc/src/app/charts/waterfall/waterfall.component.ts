import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PrizmSize } from '@prizm-ui/components';
import { PrizmChartsWaterfallItem } from '@prizm-ui/charts';
import { PrizmThemeService } from '@prizm-ui/theme';

@Component({
  selector: 'prizm-button-example',
  templateUrl: './waterfall.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WaterfallComponent {
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
  public width = 400;
  public height = 300;

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleOutline: TuiDocExample = {
    TypeScript: import('./examples/base/prizm-charts-waterfall-example.component.ts?raw'),
    HTML: import('./examples/base/prizm-charts-waterfall-example.component.html?raw'),
  };

  constructor(public readonly prizmTheme: PrizmThemeService) {}
}
