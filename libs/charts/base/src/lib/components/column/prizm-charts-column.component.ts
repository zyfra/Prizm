import { Component, ElementRef, Injector, Input, ViewChild } from '@angular/core';
import { Column } from '@antv/g2plot';
import { PrizmChartsAbstractComponent } from '../../abstract/prizm-charts-abstract';
import { PrizmChartsColumnOptions, PrizmChartsColumnOrigin } from './model';
import { PrizmChartsAreaItem } from '../area';

@Component({
  selector: 'prizm-charts-column',
  templateUrl: './prizm-charts-column.component.html',
  styleUrls: ['./prizm-charts-column.component.less'],
  exportAs: 'prizmChartsColumn',
})
export class PrizmChartsColumnComponent<
  T extends Record<string, unknown>
> extends PrizmChartsAbstractComponent<PrizmChartsColumnOrigin, PrizmChartsColumnOptions> {
  private origin_!: Column;
  get origin(): Column {
    return this.origin_;
  }
  public readonly name = 'column';

  @Input()
  set data(value: PrizmChartsAreaItem[]) {
    this.updateOptions({
      data: value,
    });
  }
  get data(): PrizmChartsAreaItem[] {
    return this.origin?.options?.data;
  }

  @Input()
  public set seriesField(value: string) {
    this.updateOptions({ seriesField: value });
  }
  public get seriesField(): string {
    return this.options.seriesField as string;
  }

  @Input()
  public set yField(value: string) {
    this.updateOptions({ yField: value });
  }
  public get yField(): string {
    return this.options?.yField as string;
  }

  @Input()
  public set groupField(value: string) {
    this.updateOptions({ groupField: value });
  }
  public get groupField(): string {
    return this.options?.groupField as string;
  }

  @Input()
  public set label(value: PrizmChartsColumnOptions['label']) {
    this.updateOptions({ label: value });
  }
  public get label(): PrizmChartsColumnOptions['label'] {
    return this.options?.label;
  }

  @Input()
  public set xField(value: string) {
    this.updateOptions({ xField: value });
  }
  public get xField(): string {
    return this.options?.xField as string;
  }
  @ViewChild('container', { static: true, read: ElementRef }) container!: ElementRef<HTMLElement>;
  override readonly testId_ = 'ui_charts_column';

  constructor(private readonly elRef: ElementRef<HTMLElement>, private readonly injector: Injector) {
    super(injector);
    this.init();
  }

  private init(): void {
    this.origin_ = new Column(this.elRef.nativeElement, {
      data: [],
      xField: 'x',
      yField: 'y',
      theme: 'light',
    });
    this.render();
  }
}
