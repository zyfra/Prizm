import { Component, ElementRef, Injector, Input } from '@angular/core';
import { Radar } from '@antv/g2plot';
import { PrizmChartsAbstractComponent } from '../../abstract/prizm-charts-abstract';
import { PrizmChartsRadarItem, PrizmChartsRadarOptions, PrizmChartsRadarOrigin } from './model';

@Component({
  selector: 'prizm-charts-radar',
  templateUrl: './prizm-charts-radar.component.html',
  styleUrls: ['./prizm-charts-radar.component.less'],
})
export class PrizmChartsRadarComponent<
  T extends Record<string, unknown>
> extends PrizmChartsAbstractComponent<PrizmChartsRadarOrigin, PrizmChartsRadarOptions> {
  private origin_: PrizmChartsRadarOrigin;
  get origin(): PrizmChartsRadarOrigin {
    return this.origin_;
  }
  public readonly name = 'radar';

  @Input()
  set data(value: PrizmChartsRadarItem[]) {
    this.updateOptions({
      data: value,
    });
  }
  get data(): PrizmChartsRadarItem[] {
    return this.origin?.options?.data;
  }

  @Input()
  public set label(value: PrizmChartsRadarOptions['label']) {
    this.updateOptions({ label: value });
  }
  public get label(): PrizmChartsRadarOptions['label'] {
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

  constructor(private readonly elRef: ElementRef<HTMLElement>, private readonly injector: Injector) {
    super(injector);
    this.init();
  }

  // ngOnInit(): void {
  //   prizmChartsSetDefaultThemes();
  //
  //   const radarPlot = new Radar(this.container.nativeElement, {
  //     data: this.data.map((d: any) => ({ ...d, star: Math.sqrt(d.star) })),
  //     xField: 'name',
  //     yField: 'star',
  //   });
  //   radarPlot.render();
  // }

  private init(): void {
    this.origin_ = new Radar(this.elRef.nativeElement, {
      data: [],
      xField: 'x',
      yField: 'y',
      theme: 'light',
    });
    this.render();
  }
}
