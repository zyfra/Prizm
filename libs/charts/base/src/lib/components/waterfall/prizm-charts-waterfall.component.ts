import { Component, ElementRef, Injector, Input } from '@angular/core';
import { PrizmChartsAbstractComponent } from '../../abstract/prizm-charts-abstract';
import { PrizmChartsWaterfallItem, PrizmChartsWaterfallOptions, PrizmChartsWaterfallOrigin } from './model';
import { Waterfall } from '@antv/g2plot';

@Component({
  selector: 'prizm-charts-waterfall',
  templateUrl: './prizm-charts-waterfall.component.html',
  styleUrls: ['./prizm-charts-waterfall.component.less'],
})
export class PrizmChartsWaterfallComponent
<T extends Record<string, unknown>>
  extends PrizmChartsAbstractComponent<PrizmChartsWaterfallOrigin, PrizmChartsWaterfallOptions>{
  readonly name = 'waterfall';
  private origin_: PrizmChartsWaterfallOrigin;

  @Input()
  set data(data: PrizmChartsWaterfallItem[]) {
    this.updateOptions({data});
  }
  get data(): PrizmChartsWaterfallItem[] {
    return this.options?.data ?? [];
  }

  @Input()
  public set xField (value: string) {
    this.updateOptions({xField: value});
  };
  public get xField(): string {
    return this.options?.xField;
  }

  @Input()
  public set yField (value: string) {
    this.updateOptions({yField: value});
  };
  public get yField(): string {
    return this.options?.yField;
  }
  get origin(): PrizmChartsWaterfallOrigin {
    return this.origin_;
  }
  constructor(private readonly elRef: ElementRef<HTMLElement>, private readonly injector: Injector) {
    super(injector);
    this.init();
  }
  private init(): void {
    this.origin_ = new Waterfall(this.elRef.nativeElement, {
      data: [],
      xField: '',
      yField: '',
      theme: 'light',
    });
    this.render();
  }

}
