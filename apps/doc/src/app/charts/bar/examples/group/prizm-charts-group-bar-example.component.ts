import { Component } from '@angular/core';
import { PrizmThemeService } from '@prizm-ui/theme';
import { PrizmChartsBarItem, PrizmChartsBarOptions } from '@prizm-ui/charts';

@Component({
  selector: 'prizm-charts-bar-group-example',
  templateUrl: './prizm-charts-group-bar-example.component.html',
  styles: [
    `
      .block {
        width: 100%;
        height: 300px;
      }
    `
  ],
})
export class PrizmChartsBarGroupExampleComponent {
  public data: PrizmChartsBarItem[] = [
    {
      label: 'Mon.',
      type: 'series1',
      value: 2800,
    },
    {
      label: 'Mon.',
      type: 'series2',
      value: 2260,
    },
    {
      label: 'Tues.',
      type: 'series1',
      value: 1800,
    },
    {
      label: 'Tues.',
      type: 'series2',
      value: 1300,
    },
    {
      label: 'Wed.',
      type: 'series1',
      value: 950,
    },
    {
      label: 'Wed.',
      type: 'series2',
      value: 900,
    },
    {
      label: 'Thur.',
      type: 'series1',
      value: 500,
    },
    {
      label: 'Thur.',
      type: 'series2',
      value: 390,
    },
    {
      label: 'Fri.',
      type: 'series1',
      value: 170,
    },
    {
      label: 'Fri.',
      type: 'series2',
      value: 100,
    },
  ];

  public label: PrizmChartsBarOptions['label'] = {
    position: 'middle', // 'left', 'middle', 'right'
    layout: [
      { type: 'interval-adjust-position' },
      { type: 'interval-hide-overlap' },
      { type: 'adjust-color' },
    ],
  }

  constructor(
    public readonly prizmTheme: PrizmThemeService,
  ) {}
}
