import { Component, ElementRef, Injector, Input } from '@angular/core';
import { Scatter } from '@antv/g2plot';
import { prizmDefaultProp } from '@prizm-ui/core';
import { PrizmChartsAbstractComponent } from '../../abstract/prizm-charts-abstract';
import { PrizmChartsScatterItem, PrizmChartsScatterOptions, PrizmChartsScatterOrigin } from './model';

@Component({
  selector: 'prizm-charts-scatter',
  templateUrl: './prizm-charts-scatter.component.html',
  styleUrls: ['./prizm-charts-scatter.component.less'],
  exportAs: 'prizmChartsScatter',
})
export class PrizmChartsScatterComponent<
  T extends Record<string, unknown>
> extends PrizmChartsAbstractComponent<PrizmChartsScatterOrigin, PrizmChartsScatterOptions> {
  readonly name = 'scatter';

  get origin(): PrizmChartsScatterOrigin {
    return this.origin_;
  }

  origin_!: PrizmChartsScatterOrigin;

  @Input() set autoFit(value: boolean) {
    this.updateOptions({ autoFit: value });
  }

  @Input()
  public set yField(value: string) {
    this.updateOptions({ yField: value });
  }
  public get yField(): string {
    return this.options?.yField as string;
  }

  @Input()
  public set xField(value: string) {
    this.updateOptions({ xField: value });
  }
  public get xField(): string {
    return this.options.xField as string;
  }

  @Input()
  public set colorField(value: string) {
    this.updateOptions({ colorField: value });
  }
  public get colorField(): string {
    return this.options.colorField as string;
  }
  @Input()
  @prizmDefaultProp()
  set data(data: PrizmChartsScatterItem[]) {
    this.updateOptions({ data: data });
  }
  get data(): PrizmChartsScatterItem[] {
    return this.options?.data ?? [];
  }
  override readonly testId_ = 'ui_charts_scatter';

  constructor(private readonly elRef: ElementRef<HTMLElement>, private readonly injector: Injector) {
    super(injector);
    this.prizmChartThemeService.initIfNecessary();
    this.init();
  }

  private init(): void {
    this.origin_ = new Scatter(this.elRef.nativeElement, {
      appendPadding: 10,
      data: this.data,
      xField: 'x',
      yField: 'y',
      shape: 'circle',
      // tooltip: {
      // domStyles: {
      //   'g2-tooltip': {
      //     background: 'rgba(0, 0, 0, 0.65)',
      //   }
      // },
      // crosshairs: {
      //   textBackground: {
      //     style: {
      //        fill: 'red',
      //         stroke: 'green'
      //     }
      //   }
      // }
      // }
    });

    this.render();
  }
}
