import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Column } from '@antv/g2plot';
import { prizmDefaultProp } from '@prizm-ui/core';
import { prizmChartsSetDefaultThemes, PrizmChartTheme } from '../../theme';

@Component({
  selector: 'prizm-charts-stack',
  templateUrl: './prizm-charts-stack.component.html',
  styleUrls: ['./prizm-charts-stack.component.less'],
})
export class PrizmChartsStackComponent<T extends Record<string, unknown>> implements OnInit {
  @Input()
  @prizmDefaultProp()
  data: unknown[] = [
    {
      year: '1991',
      value: 3,
      type: 'Lon',
    },
    {
      year: '1992',
      value: 4,
      type: 'Lon',
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Lon',
    },
    {
      year: '1994',
      value: 5,
      type: 'Lon',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Lon',
    },
    {
      year: '1996',
      value: 6,
      type: 'Lon',
    },
    {
      year: '1997',
      value: 7,
      type: 'Lon',
    },
    {
      year: '1998',
      value: 9,
      type: 'Lon',
    },
    {
      year: '1999',
      value: 13,
      type: 'Lon',
    },
    {
      year: '1991',
      value: 3,
      type: 'Bor',
    },
    {
      year: '1992',
      value: 4,
      type: 'Bor',
    },
    {
      year: '1993',
      value: 3.5,
      type: 'Bor',
    },
    {
      year: '1994',
      value: 5,
      type: 'Bor',
    },
    {
      year: '1995',
      value: 4.9,
      type: 'Bor',
    },
    {
      year: '1996',
      value: 6,
      type: 'Bor',
    },
    {
      year: '1997',
      value: 7,
      type: 'Bor',
    },
    {
      year: '1998',
      value: 9,
      type: 'Bor',
    },
    {
      year: '1999',
      value: 13,
      type: 'Bor',
    },
  ];

  @Input()
  @prizmDefaultProp()
  theme: null | PrizmChartTheme = null;

  @ViewChild('container', { static: true, read: ElementRef }) container: ElementRef<HTMLElement>;

  ngOnInit(): void {
    prizmChartsSetDefaultThemes();

    const stackedColumnPlot = new Column(this.container.nativeElement, {
      data: this.data,
      isStack: true,
      xField: 'year',
      yField: 'value',
      seriesField: 'type',
      label: {
        // 可手动配置 label 数据标签位置
        position: 'middle', // 'top', 'bottom', 'middle'
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

    stackedColumnPlot.render();
  }
}
