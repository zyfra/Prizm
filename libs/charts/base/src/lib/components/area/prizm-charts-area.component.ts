import { Component, ElementRef, Injector, Input } from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';
import { Area } from '@antv/g2plot';
import { PrizmChartsAreaItem, PrizmChartsAreaOrigin, PrizmChartsAriaOptions } from './model';
import { PrizmChartsAbstractComponent } from '../../abstract/prizm-charts-abstract';
@Component({
  selector: 'prizm-charts-area',
  templateUrl: './prizm-charts-area.component.html',
  styleUrls: ['./prizm-charts-area.component.less'],
})
export class PrizmChartsAreaComponent<T extends Record<string, unknown>> extends PrizmChartsAbstractComponent<
  PrizmChartsAreaOrigin,
  PrizmChartsAriaOptions
> {
  @Input()
  set data(value: PrizmChartsAreaItem[]) {
    this.updateOptions({
      data: value,
    });
  }
  get data(): PrizmChartsAreaItem[] {
    return this.origin?.options?.data;
  }

  @Input() set autoFit(value: boolean) {
    this.updateOptions({ autoFit: value });
  }
  public get autoFit(): boolean {
    return this.options?.autoFit ?? false;
  }

  @Input()
  public set xField(value: string) {
    this.updateOptions({ xField: value });
  }
  public get xField(): string {
    return this.options.xField;
  }

  @Input()
  public set yField(value: string) {
    this.updateOptions({ yField: value });
  }
  public get yField(): string {
    return this.options.yField;
  }
  get origin(): Area {
    return this.origin_;
  }
  @prizmDefaultProp()
  private _data: PrizmChartsAreaItem[] = [];
  public readonly name = 'area';
  private origin_: PrizmChartsAreaOrigin;
  override readonly testId_ = 'ui_charts_area';
  constructor(private readonly elRef: ElementRef<HTMLElement>, private readonly injector: Injector) {
    super(injector);
    this.init();
  }

  private init(): void {
    this.origin_ = new Area(this.elRef.nativeElement, {
      data: [],
      xField: 'x',
      yField: 'y',
      theme: 'light',
    });
    this.render();
  }
}
