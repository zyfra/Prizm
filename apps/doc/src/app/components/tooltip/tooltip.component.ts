import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import {
  PolymorphContent,
  PZM_HINT_DEFAULT_OPTIONS, PZM_TOOLTIP_DEFAULT_OPTIONS,
  PrizmOverlayOutsidePlacement,
  PrizmTooltipOptions,
} from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-tooltip-example',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent {
  public content = 'Тестовое содержимое';
  public pzmAutoReposition = false;

  public readonly pzmTooltipDirectionVariants: ReadonlyArray<PrizmTooltipOptions['direction']> = Object.values(PrizmOverlayOutsidePlacement);

  public pzmTooltipDirection: PrizmTooltipOptions['direction'] = PZM_HINT_DEFAULT_OPTIONS.direction;

  public pzmTooltipId = 'tooltip-id';

  public pzmTooltipShowDelay: number = PZM_TOOLTIP_DEFAULT_OPTIONS.showDelay;

  public pzmTooltipHideDelay: number = PZM_TOOLTIP_DEFAULT_OPTIONS.hideDelay;

  public pzmTooltipHost: HTMLElement | null = null

  public readonly pzmTooltipVariants = [
    'Tooltip'
  ];

  public pzmTooltip: PolymorphContent =  this.pzmTooltipVariants[0];

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
