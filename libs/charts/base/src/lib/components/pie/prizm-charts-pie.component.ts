import { Component, ElementRef, Injector, Input } from '@angular/core';
import { Pie } from '@antv/g2plot';
import { PrizmChartsAbstractComponent } from '../../abstract/prizm-charts-abstract';
import { PrizmChartsPieItem, PrizmChartsPieOptions, PrizmChartsPieOrigin } from './model';

@Component({
  selector: 'prizm-charts-pie',
  templateUrl: './prizm-charts-pie.component.html',
  styleUrls: ['./prizm-charts-pie.component.less'],
})
export class PrizmChartsPieComponent<T extends Record<string, unknown>> extends PrizmChartsAbstractComponent<
  PrizmChartsPieOrigin,
  PrizmChartsPieOptions
> {
  private origin_: Pie;
  get origin(): Pie {
    return this.origin_;
  }
  public readonly name = 'pie';

  @Input()
  set data(value: PrizmChartsPieItem[]) {
    this.updateOptions({
      data: value,
    });
  }
  get data(): PrizmChartsPieItem[] {
    return this.origin?.options?.data;
  }
  @Input()
  public set angleField(value: string) {
    this.updateOptions({ angleField: value });
  }
  public get groupField(): string {
    return this.options?.angleField;
  }

  @Input()
  public set colorField(value: string) {
    this.updateOptions({ colorField: value });
  }
  public get colorField(): string {
    return this.options?.colorField;
  }

  @Input()
  public set interactions(value: PrizmChartsPieOptions['interactions']) {
    this.updateOptions({ interactions: value });
  }
  public get interactions(): PrizmChartsPieOptions['interactions'] {
    return this.options?.interactions;
  }

  @Input()
  public set label(value: PrizmChartsPieOptions['label']) {
    this.updateOptions({ label: value });
  }
  public get label(): PrizmChartsPieOptions['label'] {
    return this.options?.label;
  }

  constructor(private readonly elRef: ElementRef<HTMLElement>, private readonly injector: Injector) {
    super(injector);
    this.init();
  }

  private init(): void {
    this.origin_ = new Pie(this.elRef.nativeElement, {
      data: [],
      angleField: '',
      colorField: '',
      theme: 'light',
    });
    this.render();
  }
}
