import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Gauge } from '@antv/g2plot';
import { prizmDefaultProp } from '@prizm-ui/core';
import { prizmChartsSetDefaultThemes, PrizmChartTheme } from '../../theme';

@Component({
  selector: 'prizm-charts-gauge',
  templateUrl: './prizm-charts-gauge.component.html',
  styleUrls: ['./prizm-charts-gauge.component.less'],
})
export class PrizmChartsGaugeComponent<T extends Record<string, unknown>> implements OnInit {
  @Input()
  @prizmDefaultProp()
  data: unknown[] = [];

  @Input()
  @prizmDefaultProp()
  theme: null | PrizmChartTheme = null;

  @ViewChild('container', { static: true, read: ElementRef }) container: ElementRef<HTMLElement>;

  ngOnInit(): void {
    prizmChartsSetDefaultThemes();

    const gauge = new Gauge(this.container.nativeElement, {
      percent: 0.75,
      range: {
        color: '#30BF78',
      },
      indicator: {
        pointer: {
          style: {
            stroke: '#D0D0D0',
          },
        },
        pin: {
          style: {
            stroke: '#D0D0D0',
          },
        },
      },
      axis: {
        label: {
          formatter(v): number {
            return Number(v) * 100;
          },
        },
        subTickLine: {
          count: 3,
        },
      },
      statistic: {
        content: {
          formatter: ({ percent }): string => `Rate: ${(percent * 100).toFixed(0)}%`,
          style: {
            color: 'white',
            fontSize: '24px',
          },
        },
      },
    });

    gauge.render();
  }
}
