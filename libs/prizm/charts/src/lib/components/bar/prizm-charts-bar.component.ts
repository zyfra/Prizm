import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Bar } from '@antv/g2plot';
import { prizmDefaultProp } from '@prizm-ui/core';
import { prizmChartsSetDefaultThemes, PrizmChartTheme } from '../../theme';

@Component({
  selector: 'prizm-charts-bar',
  templateUrl: './prizm-charts-bar.component.html',
  styleUrls: ['./prizm-charts-bar.component.less'],
})
export class PrizmChartsBarComponent<T extends Record<string, unknown>> implements OnInit {
    @Input()
    @prizmDefaultProp()
    data: unknown[] = [
      { year: '1951', value: 38 },
      { year: '1952', value: 52 },
      { year: '1956', value: 61 },
      { year: '1957', value: 145 },
      { year: '1958', value: 48 },
    ];

    @Input()
    @prizmDefaultProp()
    theme: null | PrizmChartTheme = null;


    @ViewChild('container', {static: true, read: ElementRef}) container: ElementRef<HTMLElement>;

    ngOnInit(): void {
      prizmChartsSetDefaultThemes();
      const bar = new Bar(this.container.nativeElement, {
        data: this.data,
        xField: 'value',
        yField: 'year',
        seriesField: 'year',
        legend: {
          position: 'top-left',
        },
      });

      bar.render();
    }
}
