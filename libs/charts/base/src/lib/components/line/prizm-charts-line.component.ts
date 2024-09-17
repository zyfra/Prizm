import { Component, ElementRef, Injector, Input } from '@angular/core';
import { Line } from '@antv/g2plot';
import { prizmChartsSetDefaultThemes } from '../../theme/util';
import { PrizmChartsAbstractComponent } from '../../abstract/prizm-charts-abstract';
import { PrizmChartsLineItem, PrizmChartsLineOptions, PrizmChartsLineOrigin } from './model';

@Component({
  selector: 'prizm-charts-line',
  templateUrl: './prizm-charts-line.component.html',
  styleUrls: ['./prizm-charts-line.component.less'],
  exportAs: 'prizmChartsLine',
  standalone: true,
})
export class PrizmChartsLineComponent<T = unknown> extends PrizmChartsAbstractComponent<
  PrizmChartsLineOrigin,
  PrizmChartsLineOptions
> {
  get origin(): PrizmChartsLineOrigin {
    return this.origin_;
  }

  private origin_!: PrizmChartsLineOrigin;

  @Input()
  public set color(value: PrizmChartsLineOptions['color']) {
    this.updateOptions({ color: value });
  }
  public get color(): PrizmChartsLineOptions['color'] {
    return this.options.color;
  }

  @Input() set autoFit(value: boolean) {
    this.updateOptions({ autoFit: value });
  }
  get autoFit(): boolean {
    return this.options.autoFit ?? false;
  }

  @Input()
  public set xField(value: string) {
    this.updateOptions({ xField: value });
  }
  public get xField(): string {
    return this.options.xField as string;
  }

  @Input()
  public set yField(value: string) {
    this.updateOptions({ yField: value });
  }
  public get yField(): string {
    return this.options.yField as string;
  }

  @Input()
  public set seriesField(value: string) {
    this.updateOptions({ seriesField: value });
  }
  public get seriesField(): string {
    return this.options.seriesField as string;
  }

  @Input()
  set data(value: PrizmChartsLineItem[]) {
    this.updateOptions({
      data: value,
    });
  }
  get data(): PrizmChartsLineItem[] {
    return this.origin?.options?.data ?? [];
  }

  public readonly name = 'line';
  override readonly testId_ = 'ui_charts_line';

  constructor(private readonly elRef: ElementRef<HTMLElement>, private readonly injector: Injector) {
    super(injector);
    this.prizmChartThemeService.initIfNecessary();
    this.init();
  }

  public init(): void {
    prizmChartsSetDefaultThemes();
    this.origin_ = new Line(this.elRef.nativeElement, {
      data: [],
      padding: 'auto',
      xField: 'x',
      yField: 'y',
    });

    this.render();
  }
}
