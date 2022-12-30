import { Component, ElementRef, Injector, Input } from '@angular/core';
import { Line } from '@antv/g2plot';
import { prizmDefaultProp } from '@prizm-ui/core';
import { prizmChartsGetDataObjectFromArr, prizmChartsSetDefaultThemes } from '../../theme/util';
import { PrizmChartsAbstractComponent } from '../../abstract/prizm-charts-abstract';
import { PrizmChartsAreaItem } from '../area';
import { PrizmChartsLineItem, PrizmChartsLineOptions, PrizmChartsLineOrigin } from './model';

@Component({
  selector: 'prizm-charts-line',
  templateUrl: './prizm-charts-line.component.html',
  styleUrls: ['./prizm-charts-line.component.less'],
})
export class PrizmChartsLineComponent<T = unknown>
  extends PrizmChartsAbstractComponent<PrizmChartsLineOrigin, PrizmChartsLineOptions> {
  get origin(): PrizmChartsLineOrigin {
    return this.origin_;
  }

  private origin_: PrizmChartsLineOrigin;

  @Input() set autoFit(value: boolean) {
    this.updateOptions({autoFit: value});
  }
  get autoFit(): boolean {
    return this.options.autoFit ?? false;
  }

  @Input()
  set data(value: PrizmChartsLineItem[]) {
    this.updateOptions({
      data: prizmChartsGetDataObjectFromArr(this._data = value)
    })
  }
  get data(): PrizmChartsLineItem[] {
    return this._data;
  }

  @prizmDefaultProp()
  private _data: PrizmChartsAreaItem[] = [];

  public readonly name = 'line';

  constructor(
    private readonly elRef: ElementRef<HTMLElement>,
    private readonly injector: Injector,
  ) {
    super(injector);
    this.prizmChartThemeService.initIfNecessary();
    this.init();
  }

  public init(): void {
    prizmChartsSetDefaultThemes();
    const data = this._data;

    this.origin_ = new Line(this.elRef.nativeElement, {
      data,
      padding: 'auto',
      xField: 'x',
      yField: 'y',
      // xAxis: {
        // type: 'timeCat',
        // tickCount: 5,
      // },
    });

    this.render();
  }
}
