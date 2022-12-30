import { Component, ElementRef, Injector, Input, ViewChild } from '@angular/core';
import { prizmDefaultProp } from '@prizm-ui/core';
import { Area } from '@antv/g2plot';
import { PrizmChartsAreaItem, PrizmChartsAriaOptions, PrizmChartsAreaOrigin } from './model';
import { PrizmChartsAbstractComponent } from '../../abstract/prizm-charts-abstract';
import { prizmChartsGetDataObjectFromArr } from '../../theme';

@Component({
  selector: 'prizm-charts-area',
  templateUrl: './prizm-charts-area.component.html',
  styleUrls: ['./prizm-charts-area.component.less'],
})
export class PrizmChartsAreaComponent
<T extends Record<string, unknown>>
extends PrizmChartsAbstractComponent<PrizmChartsAreaOrigin, PrizmChartsAriaOptions> {
  get origin(): Area {
      throw this.origin_;
  }
  @Input()
  set data(value: [string | number, number][]) {
    this.updateOptions({
      data: prizmChartsGetDataObjectFromArr(this._data = value)
    })
  }
  get data(): PrizmChartsAreaItem[] {
    return this._data;
  }

  @prizmDefaultProp()
  private _data: PrizmChartsAreaItem[] = [];

  @Input() set autoFit(value: boolean) {
    this.updateOptions({autoFit: value});
  }

  @Input()
  public set xField (value: string) {
    this.updateOptions({xField: value});
  };
  public get xField(): string {
    return this.options.xField;
  }

  @Input()
  public set yField (value: string) {
    this.updateOptions({yField: value});
  };
  public get yField(): string {
    return this.options.yField;
  }

  get autoFit(): boolean {
    return this.options?.autoFit ?? false;
  }
  public readonly name = 'area';
  private origin_: PrizmChartsAreaOrigin;
  constructor(
    private readonly elRef: ElementRef<HTMLElement>,
    private readonly injector: Injector,
  ) {
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
