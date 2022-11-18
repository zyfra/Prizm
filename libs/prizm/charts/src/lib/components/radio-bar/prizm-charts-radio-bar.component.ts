import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { RadialBar } from '@antv/g2plot';
import { prizmDefaultProp } from '@prizm-ui/core';
import { prizmChartsSetDefaultThemes, PrizmChartTheme } from '../../theme';

@Component({
  selector: 'prizm-charts-radio-bar',
  templateUrl: './prizm-charts-radio-bar.component.html',
  styleUrls: ['./prizm-charts-radio-bar.component.less'],
})
export class PrizmChartsRadioBarComponent<T extends Record<string, unknown>> implements OnInit {
    @Input()
    @prizmDefaultProp()
    data: unknown[] = [
      { name: 'X6', star: 297 },
      { name: 'G', star: 506 },
      { name: 'AVA', star: 805 },
      { name: 'G2Plot', star: 1478 },
      { name: 'L7', star: 2029 },
      { name: 'G6', star: 7100 },
      { name: 'F2', star: 7346 },
      { name: 'G2', star: 10178 },
    ];

    @Input()
    @prizmDefaultProp()
    theme: null | PrizmChartTheme = null;


    @ViewChild('container', {static: true, read: ElementRef}) container: ElementRef<HTMLElement>;

    ngOnInit(): void {
      prizmChartsSetDefaultThemes();

      const bar = new RadialBar(this.container.nativeElement, {
        data: this.data,
        xField: 'name',
        yField: 'star',
        // maxAngle: 90, //最大旋转角度,
        radius: 0.8,
        innerRadius: 0.2,
        tooltip: {
          formatter: (datum) => {
            return { name: 'star', value: datum.star };
          },
        },
      });
      bar.render();
    }
}
