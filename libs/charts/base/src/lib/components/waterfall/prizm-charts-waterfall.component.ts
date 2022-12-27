import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Waterfall } from '@antv/g2plot';
import { prizmDefaultProp } from '@prizm-ui/core';
import { prizmChartsSetDefaultThemes, PrizmChartTheme } from '../../theme';

@Component({
  selector: 'prizm-charts-waterfall',
  templateUrl: './prizm-charts-waterfall.component.html',
  styleUrls: ['./prizm-charts-waterfall.component.less'],
})
export class PrizmChartsWaterfallComponent<T extends Record<string, unknown>> implements OnInit {
  @Input()
  @prizmDefaultProp()
  data: unknown[] = [
    { type: 'повседневные нужды', money: 120 },
    { type: 'расходы на питание', money: 900 },
    { type: 'транспорт', money: 200 },
    { type: 'счет за коммунальные услуги', money: 300 },
    { type: 'арендовать', money: 1200 },
    { type: 'торговый центр', money: 1000 },
    { type: 'доход', money: -2000 },
  ];

  @Input()
  @prizmDefaultProp()
  theme: null | PrizmChartTheme = null;

  @ViewChild('container', { static: true, read: ElementRef }) container: ElementRef<HTMLElement>;

  ngOnInit(): void {
    prizmChartsSetDefaultThemes();

    const waterfallPlot = new Waterfall(this.container.nativeElement, {
      data: this.data,
      xField: 'type',
      yField: 'money',
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
    });

    waterfallPlot.render();
  }
}
