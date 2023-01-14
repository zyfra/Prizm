import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';
import { prizmChartsSetDefaultThemes, PrizmChartTheme } from '../../theme';
import { Bar } from '@antv/g2plot';

@Component({
  selector: 'prizm-charts-group-bar',
  templateUrl: './prizm-charts-group-bar.component.html',
  styleUrls: ['./prizm-charts-group-bar.component.less'],
})
export class PrizmChartsGroupBarComponent<T extends Record<string, unknown>> implements OnInit {
  @Input()
  @prizmDefaultProp()
  data: unknown[] = [
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

  @Input()
  @prizmDefaultProp()
  theme: null | PrizmChartTheme = null;

  @ViewChild('container', { static: true, read: ElementRef }) container: ElementRef<HTMLElement>;

  ngOnInit(): void {
    prizmChartsSetDefaultThemes();

    const stackedBarPlot = new Bar(this.container.nativeElement, {
      data: this.data,
      isGroup: true,
      xField: 'value',
      yField: 'label',
      /** 自定义颜色 */
      // color: ['#1383ab', '#c52125'],
      seriesField: 'type',
      marginRatio: 0,
      label: {
        // 可手动配置 label 数据标签位置
        position: 'middle', // 'left', 'middle', 'right'
        // 可配置附加的布局方法
        layout: [
          // 柱形图数据标签位置自动调整
          { type: 'interval-adjust-position' },
          // 数据标签防遮挡
          { type: 'interval-hide-overlap' },
          // 数据标签文颜色自动调整
          { type: 'adjust-color' },
        ],
      },
    });

    stackedBarPlot.render();
  }
}
