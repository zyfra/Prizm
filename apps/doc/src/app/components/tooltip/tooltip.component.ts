import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import {
  PolymorphContent,
  ZUI_HINT_DEFAULT_OPTIONS, ZUI_TOOLTIP_DEFAULT_OPTIONS,
  ZuiOverlayOutsidePlacement,
  ZuiTooltipOptions,
} from '@digital-plant/zui-components';

@Component({
  selector: 'zui-tooltip-example',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent {
  public content = 'Тестовое содержимое';
  public zuiAutoReposition = false;

  public readonly zuiTooltipDirectionVariants: ReadonlyArray<ZuiTooltipOptions['direction']> = Object.values(ZuiOverlayOutsidePlacement);

  public zuiTooltipDirection: ZuiTooltipOptions['direction'] = ZUI_HINT_DEFAULT_OPTIONS.direction;

  public zuiTooltipId: string;

  public zuiTooltipShowDelay: number = ZUI_TOOLTIP_DEFAULT_OPTIONS.showDelay;

  public zuiTooltipHideDelay: number = ZUI_TOOLTIP_DEFAULT_OPTIONS.hideDelay;

  public zuiTooltipHost: HTMLElement

  public readonly zuiTooltipVariants = [
    'Tooltip'
  ];

  public zuiTooltip: PolymorphContent =  this.zuiTooltipVariants[0];

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
