import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import {
  PolymorphContent,
  PZM_HINT_DEFAULT_OPTIONS, PZM_TOOLTIP_DEFAULT_OPTIONS,
  PzmOverlayOutsidePlacement,
  PzmTooltipOptions,
} from '@digital-plant/zui-components';

@Component({
  selector: 'zui-tooltip-example',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent {
  public content = 'Тестовое содержимое';
  public pzmAutoReposition = false;

  public readonly zuiTooltipDirectionVariants: ReadonlyArray<PzmTooltipOptions['direction']> = Object.values(PzmOverlayOutsidePlacement);

  public pzmTooltipDirection: PzmTooltipOptions['direction'] = PZM_HINT_DEFAULT_OPTIONS.direction;

  public pzmTooltipId = 'tooltip-id';

  public pzmTooltipShowDelay: number = PZM_TOOLTIP_DEFAULT_OPTIONS.showDelay;

  public pzmTooltipHideDelay: number = PZM_TOOLTIP_DEFAULT_OPTIONS.hideDelay;

  public pzmTooltipHost: HTMLElement | null = null

  public readonly zuiTooltipVariants = [
    'Tooltip'
  ];

  public pzmTooltip: PolymorphContent =  this.zuiTooltipVariants[0];

  readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
  );

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
