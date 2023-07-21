import { Component, HostBinding, Injector, Input, OnDestroy } from '@angular/core';
import { PrizmAbstractTestId, prizmDefaultProp } from '@prizm-ui/core';
import { PrizmChartsThemeService } from '../service/charts-theme.service';
import { PrizmChartTheme } from '../theme/types';
@Component({ template: '' })
export abstract class PrizmChartsAbstractComponent<
    ORIGIN extends Record<string, any>,
    OPTIONS extends Record<string, any>
  >
  extends PrizmAbstractTestId
  implements OnDestroy
{
  @HostBinding('style.width.px')
  @Input()
  set width(value: number | null) {
    if (value == this.width) return;
    this.updateOptions({
      width: value,
    } as unknown as OPTIONS);
  }
  get width(): number | null {
    return this.options.width;
  }

  @HostBinding('style.height.px')
  @Input()
  set height(value: number) {
    if (value == this.height) return;
    this.updateOptions({
      height: value,
    } as unknown as OPTIONS);
  }
  get height(): number {
    return this.options.height;
  }

  public abstract readonly name: string;

  @Input()
  set options(value: Partial<OPTIONS>) {
    this.updateOptions(value);
  }
  get options(): Partial<OPTIONS> {
    return this.origin?.options as Partial<OPTIONS>;
  }
  @Input()
  @prizmDefaultProp()
  set theme(value: PrizmChartTheme) {
    if (value == this.theme) return;
    const options = this.prizmChartThemeService.getComponentOptionsWithTheme(
      value,
      this.name,
      {
        theme: value,
      },
      this.options as unknown as Record<string, unknown>
    ) as unknown as OPTIONS;
    this.updateOptions(options);
  }
  readonly prizmChartThemeService: PrizmChartsThemeService;
  abstract get origin(): ORIGIN;
  constructor(injector: Injector) {
    super();
    this.prizmChartThemeService = injector.get(PrizmChartsThemeService);
    this.prizmChartThemeService.initIfNecessary();
  }
  public updateOptions(options: Partial<OPTIONS>): void {
    this.origin?.update(options);
  }
  public destroy(): void {
    this.origin?.destroy();
  }
  public render(): void {
    this.origin?.render();
  }

  ngOnDestroy(): void {
    this.destroy();
  }
}
