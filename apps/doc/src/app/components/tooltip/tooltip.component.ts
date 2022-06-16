import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RawLoaderContent, TuiDocExample} from "@taiga-ui/addon-doc";
import {PolymorpheusContent, ZUI_HINT_DEFAULT_OPTIONS, ZuiTooltipOptions} from "@digital-plant/zui-components";
import {ZuiOverlayOutsidePlacement} from "../../../../../../libs/next/src/lib/modules/overlay/models";

@Component({
  selector: 'zui-tooltip-example',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TooltipComponent {
  public readonly zuiTooltipModeVariants: ReadonlyArray<ZuiTooltipOptions['mode']> = [
    'light',
    'error',
    'dark',
  ];
  public zuiTooltipMode: ZuiTooltipOptions['mode'] = this.zuiTooltipModeVariants[0];

  public zuiAutoReposition = false;

  public readonly zuiTooltipDirectionVariants: ReadonlyArray<ZuiTooltipOptions['direction']> = Object.values(ZuiOverlayOutsidePlacement);

  public zuiTooltipDirection: ZuiTooltipOptions['direction'] = ZUI_HINT_DEFAULT_OPTIONS.direction;

  public zuiTooltipId: string;

  public zuiTooltipShowDelay: number = ZUI_HINT_DEFAULT_OPTIONS.showDelay;

  public zuiTooltipHideDelay: number = ZUI_HINT_DEFAULT_OPTIONS.hideDelay;

  public zuiTooltipHost: HTMLElement

  public readonly zuiTooltipVariants = [
    'Tooltip'
  ];

  public zuiTooltip: PolymorpheusContent =  this.zuiTooltipVariants[0];

  readonly exampleModule: RawLoaderContent = import(
    '!!raw-loader!./examples/import-module.md'
  );

  readonly exampleBasic: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/basic/template.ts'),
    HTML: import('!!raw-loader!./examples/basic/template.html'),
  };

  readonly exampleWithTemplate: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-template/template.ts'),
    HTML: import('!!raw-loader!./examples/with-template/template.html'),
  };

  readonly exampleWithComponent: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-component/template.ts'),
    HTML: import('!!raw-loader!./examples/with-component/template.html'),
  };
}
