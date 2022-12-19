import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Radar } from '@antv/g2plot';
import { prizmDefaultProp } from '@prizm-ui/core';
import { prizmChartsSetDefaultThemes, PrizmChartTheme } from '../../theme';

@Component({
  selector: 'prizm-charts-radar',
  templateUrl: './prizm-charts-radar.component.html',
  styleUrls: ['./prizm-charts-radar.component.less'],
})
export class PrizmChartsRadarComponent<T extends Record<string, unknown>> implements OnInit {
  @Input()
  @prizmDefaultProp()
  data: unknown[] = [
    { name: 'G2', star: 10371 },
    { name: 'G6', star: 7380 },
    { name: 'F2', star: 7414 },
    { name: 'L7', star: 2140 },
    { name: 'X6', star: 660 },
    { name: 'AVA', star: 885 },
    { name: 'G2Plot', star: 1626 },
  ];

  @Input()
  @prizmDefaultProp()
  theme: null | PrizmChartTheme = null;

  @ViewChild('container', { static: true, read: ElementRef }) container: ElementRef<HTMLElement>;

  ngOnInit(): void {
    prizmChartsSetDefaultThemes();

    const radarPlot = new Radar(this.container.nativeElement, {
      data: this.data.map((d: any) => ({ ...d, star: Math.sqrt(d.star) })),
      xField: 'name',
      yField: 'star',
      appendPadding: [0, 10, 0, 10],
      meta: {
        star: {
          alias: 'star',
          min: 0,
          nice: true,
          formatter: v => Number(v).toFixed(2),
        },
      },
      xAxis: {
        tickLine: null,
      },
      yAxis: {
        label: false,
        grid: {
          alternateColor: 'rgba(0, 0, 0, 0.04)',
        },
      },
      point: {
        size: 2,
      },
      area: {},
    });
    radarPlot.render();
  }
}
