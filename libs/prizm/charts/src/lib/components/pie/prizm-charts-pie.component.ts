import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Pie } from '@antv/g2plot';
import { prizmDefaultProp } from '@prizm-ui/core';
import { prizmChartsSetDefaultThemes, PrizmChartTheme } from '../../theme';

@Component({
  selector: 'prizm-charts-pie',
  templateUrl: './prizm-charts-pie.component.html',
  styleUrls: ['./prizm-charts-pie.component.less'],
})
export class PrizmChartsPieComponent<T extends Record<string, unknown>> implements OnInit {
    @Input()
    @prizmDefaultProp()
    data: unknown[] = [
      {  type: 'категория один', value: 27},
      {  type: 'вторая категория', value: 25},
      {  type: 'категория три', value: 18},
      {  type: 'четвертая категория', value: 15},
      {  type: 'пятая категория', value: 10},
      {  type: 'другое', value: 5},
    ];

    @Input()
    @prizmDefaultProp()
    theme: null | PrizmChartTheme = null;


    @ViewChild('container', {static: true, read: ElementRef}) container: ElementRef<HTMLElement>;

    ngOnInit(): void {
      prizmChartsSetDefaultThemes();

      const piePlot = new Pie(this.container.nativeElement, {
        appendPadding: 10,
        data: this.data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
          type: 'inner',
          offset: '-30%',
          content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
          style: {
            fontSize: 14,
            textAlign: 'center',
          },
        },
        interactions: [{ type: 'element-active' }],
      });

      piePlot.render();
    }
}
