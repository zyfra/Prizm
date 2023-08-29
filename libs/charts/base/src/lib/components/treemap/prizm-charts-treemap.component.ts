import { Component, ElementRef, Injector, Input } from '@angular/core';
import { Treemap } from '@antv/g2plot';
import { PrizmChartsAbstractComponent } from '../../abstract/prizm-charts-abstract';
import { PrizmChartsTreemapData, PrizmChartsTreemapOptions, PrizmChartsTreemapOrigin } from './model';

@Component({
  selector: 'prizm-charts-treemap',
  templateUrl: './prizm-charts-treemap.component.html',
  styleUrls: ['./prizm-charts-treemap.component.less'],
  exportAs: 'prizmChartsTreemap',
})
export class PrizmChartsTreemapComponent<
  T extends Record<string, unknown>
> extends PrizmChartsAbstractComponent<PrizmChartsTreemapOrigin, PrizmChartsTreemapOptions> {
  @Input()
  set data(data: PrizmChartsTreemapData) {
    this.updateOptions({ data });
  }
  get data(): PrizmChartsTreemapData {
    return this.options?.data ?? {};
  }
  readonly name = 'treemap';
  private origin_: PrizmChartsTreemapOrigin;

  @Input()
  public set colorField(value: string) {
    this.updateOptions({ colorField: value });
  }
  public get colorField(): string {
    return this.options?.colorField as string;
  }
  override readonly testId_ = 'ui_charts_treemap';

  constructor(private readonly elRef: ElementRef<HTMLElement>, private readonly injector: Injector) {
    super(injector);
    this.prizmChartThemeService.initIfNecessary();
    this.init();
  }

  private init(): void {
    this.origin_ = new Treemap(this.elRef.nativeElement, {
      data: this.data,
      colorField: '',
    });

    this.render();
  }

  get origin(): PrizmChartsTreemapOrigin {
    return this.origin_;
  }
}
