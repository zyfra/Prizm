import { Component, ElementRef, Injector, Input } from '@angular/core';
import { PrizmChartsAbstractComponent } from '../../abstract/prizm-charts-abstract';
import { PrizmChartsGaugeOptions, PrizmChartsGaugeOrigin } from './model';
import { Gauge } from '@antv/g2plot';

@Component({
  selector: 'prizm-charts-gauge',
  templateUrl: './prizm-charts-gauge.component.html',
  styleUrls: ['./prizm-charts-gauge.component.less'],
  exportAs: 'prizmChartsGauge',
})
export class PrizmChartsGaugeComponent<
  T extends Record<string, unknown>
> extends PrizmChartsAbstractComponent<PrizmChartsGaugeOrigin, PrizmChartsGaugeOptions> {
  private origin_: PrizmChartsGaugeOrigin;
  get origin(): PrizmChartsGaugeOrigin {
    return this.origin_;
  }
  public readonly name = 'gauge';
  @Input()
  set percent(value: number) {
    this.updateOptions({
      percent: value,
    });
  }
  get percent(): number {
    return this.origin?.options.percent;
  }

  constructor(private readonly elRef: ElementRef<HTMLElement>, private readonly injector: Injector) {
    super(injector);
    this.init();
  }

  private init(): void {
    this.origin_ = new Gauge(this.elRef.nativeElement, {
      percent: 0,
      theme: 'light',
    });
    this.render();
  }
}
