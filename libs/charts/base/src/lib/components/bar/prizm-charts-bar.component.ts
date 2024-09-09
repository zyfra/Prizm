import { Component, ElementRef, Injector, Input } from '@angular/core';
import { Bar } from '@antv/g2plot';
import { PrizmChartsAbstractComponent } from '../../abstract/prizm-charts-abstract';
import { PrizmChartsBarItem, PrizmChartsBarOptions, PrizmChartsBarOrigin } from './model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'prizm-charts-bar',
  templateUrl: './prizm-charts-bar.component.html',
  styleUrls: ['./prizm-charts-bar.component.less'],
  exportAs: 'prizmChartsBar',
  standalone: true,
  imports: [CommonModule],
})
export class PrizmChartsBarComponent<T extends Record<string, unknown>> extends PrizmChartsAbstractComponent<
  PrizmChartsBarOrigin,
  PrizmChartsBarOptions
> {
  public readonly name = 'bar';

  @Input()
  set data(data: PrizmChartsBarItem[]) {
    this.updateOptions({
      data: data,
    });
  }
  get data(): PrizmChartsBarItem[] {
    return this.options?.data ?? ([] as PrizmChartsBarItem[]);
  }

  @Input()
  public set xField(value: string) {
    this.updateOptions({ xField: value });
  }
  public get xField(): string {
    return this.options?.xField as string;
  }

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
  public set seriesField(value: string) {
    this.updateOptions({ seriesField: value });
  }
  public get seriesField(): string {
    return this.options.seriesField as string;
  }
  @Input()
  public set label(value: PrizmChartsBarOptions['label']) {
    this.updateOptions({ label: value });
  }
  public get label(): PrizmChartsBarOptions['label'] {
    return this.options.label;
  }

  @Input()
  public set color(value: PrizmChartsBarOptions['color']) {
    this.updateOptions({ color: value });
  }
  public get color(): PrizmChartsBarOptions['color'] {
    return this.options.color;
  }
  override readonly testId_ = 'ui_charts_bar';

  private origin_!: Bar;

  constructor(private readonly elRef: ElementRef<HTMLElement>, private readonly injector: Injector) {
    super(injector);
    this.prizmChartThemeService.initIfNecessary();
    this.init();
  }
  public init(): void {
    this.origin_ = new Bar(this.elRef.nativeElement, {
      data: this.data ?? [],
      xField: this.xField ?? 'x',
      yField: this.yField ?? 'y',
    });

    this.origin.render();
  }

  get origin(): Bar {
    return this.origin_;
  }
}
