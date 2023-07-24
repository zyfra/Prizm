import { Component, ElementRef, Injector, Input } from '@angular/core';
import { RadialBar } from '@antv/g2plot';
import { PrizmChartsAbstractComponent } from '../../abstract/prizm-charts-abstract';
import { PrizmChartsRadialBarItem, PrizmChartsRadialBarOptions, PrizmChartsRadialBarOrigin } from './model';

@Component({
  selector: 'prizm-charts-radial-bar',
  templateUrl: './prizm-charts-radial-bar.component.html',
  styleUrls: ['./prizm-charts-radial-bar.component.less'],
  exportAs: 'prizmChartsRadialBar',
})
export class PrizmChartsRadialBarComponent<
  T extends Record<string, unknown>
> extends PrizmChartsAbstractComponent<PrizmChartsRadialBarOrigin, PrizmChartsRadialBarOptions> {
  private origin_: PrizmChartsRadialBarOrigin;
  get origin(): PrizmChartsRadialBarOrigin {
    return this.origin_;
  }
  public readonly name = 'radial-bar';
  @Input()
  set data(value: PrizmChartsRadialBarItem[]) {
    this.updateOptions({
      data: value,
    });
  }
  get data(): PrizmChartsRadialBarItem[] {
    return this.origin?.options?.data;
  }

  @Input()
  public set label(value: PrizmChartsRadialBarOptions['label']) {
    this.updateOptions({ label: value });
  }
  public get label(): PrizmChartsRadialBarOptions['label'] {
    return this.options?.label;
  }

  @Input()
  public set xField(value: string) {
    this.updateOptions({ xField: value });
  }
  public get xField(): string {
    return this.options?.xField;
  }

  @Input()
  public set yField(value: string) {
    this.updateOptions({ yField: value });
  }
  public get yField(): string {
    return this.options?.yField;
  }
  override readonly testId_ = 'ui_charts_radar_bar';

  constructor(private readonly elRef: ElementRef<HTMLElement>, private readonly injector: Injector) {
    super(injector);
    this.init();
  }

  private init(): void {
    this.origin_ = new RadialBar(this.elRef.nativeElement, {
      data: [],
      xField: '',
      yField: '',
      theme: 'light',
    });
    this.render();
  }
}
