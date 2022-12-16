import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm/doc-base';
import {
  PolymorphContent,
  PRIZM_HINT_DEFAULT_OPTIONS,
  PRIZM_TOOLTIP_DEFAULT_OPTIONS,
  PrizmOverlayOutsidePlacement,
  PrizmTooltipOptions,
} from '@prizm-ui/components';

@Component({
  selector: 'prizm-tooltip-example',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent {
  public content = 'Тестовое содержимое';
  public prizmAutoReposition = false;

  public readonly prizmTooltipDirectionVariants: ReadonlyArray<PrizmTooltipOptions['direction']> =
    Object.values(PrizmOverlayOutsidePlacement);

  public prizmTooltipDirection: PrizmTooltipOptions['direction'] = PRIZM_HINT_DEFAULT_OPTIONS.direction;

  public prizmTooltipId = 'tooltip-id';

  public prizmTooltipShowDelay: number = PRIZM_TOOLTIP_DEFAULT_OPTIONS.showDelay;

  public prizmTooltipHideDelay: number = PRIZM_TOOLTIP_DEFAULT_OPTIONS.hideDelay;

  public prizmTooltipHost: HTMLElement | null = null;

  public readonly prizmTooltipVariants = ['Tooltip'];

  public prizmTooltip: PolymorphContent = this.prizmTooltipVariants[0];

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/tooltip-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/tooltip-base-example.component.html'),
  };

  readonly exampleWithTemplate: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-template/tooltip-with-template-example.component.ts'),
    HTML: import('!!raw-loader!./examples/with-template/tooltip-with-template-example.component.html'),
  };

  readonly exampleWithComponent: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-component/tooltip-with-component-example.component.ts'),
    HTML: import('!!raw-loader!./examples/with-component/tooltip-with-component-example.component.html'),
  };
}
