import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Treemap } from '@antv/g2plot';
import { prizmDefaultProp } from '@prizm-ui/core';
import { prizmChartsSetDefaultThemes, PrizmChartTheme } from '../../theme';

@Component({
  selector: 'prizm-charts-treemap',
  templateUrl: './prizm-charts-treemap.component.html',
  styleUrls: ['./prizm-charts-treemap.component.less'],
})
export class PrizmChartsTreemapComponent<T extends Record<string, unknown>> implements OnInit {
  @Input()
  @prizmDefaultProp()
  data: unknown = {
    name: 'root',
    children: [
      { name: 'Категория 1', value: 560 },
      { name: 'Категория 2', value: 500 },
      { name: 'Категория 3', value: 150 },
      { name: 'Категория 4', value: 140 },
      { name: 'Категория 5', value: 115 },
      { name: 'Категория 6', value: 95 },
      { name: 'Категория 7', value: 90 },
      { name: 'Категория 8', value: 75 },
      { name: 'Категория 9', value: 98 },
      { name: 'Категория 10', value: 60 },
      { name: 'Категория 11', value: 45 },
      { name: 'Категория 12', value: 40 },
      { name: 'Категория 13', value: 40 },
      { name: 'категория 14', value: 35 },
      { name: 'Категория 15', value: 40 },
      { name: 'Категория 16', value: 40 },
      { name: 'Категория 17', value: 40 },
      { name: 'Категория 18', value: 30 },
      { name: 'категория 19', value: 28 },
      { name: 'категория 20', value: 16 },
    ],
  };

  @Input()
  @prizmDefaultProp()
  theme: null | PrizmChartTheme = null;

  @ViewChild('container', { static: true, read: ElementRef }) container: ElementRef<HTMLElement>;

  ngOnInit(): void {
    prizmChartsSetDefaultThemes();
    const treemapPlot = new Treemap(this.container.nativeElement, {
      data: this.data,
      colorField: 'name',
    });

    treemapPlot.render();
  }
}
