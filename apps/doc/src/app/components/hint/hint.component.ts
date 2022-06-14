import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RawLoaderContent, TuiDocExample} from "@taiga-ui/addon-doc";
import {PolymorpheusContent, ZUI_HINT_DEFAULT_OPTIONS, ZuiHintOptions} from "@digital-plant/zui-components";
import {ZuiOverlayOutsidePlacement} from "../../../../../../libs/next/src/lib/modules/overlay/models";

@Component({
  selector: 'zui-hint-example',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HintComponent {
  public readonly zuiHintModeVariants: ReadonlyArray<ZuiHintOptions['mode']> = [
    'light',
    'error',
    'dark',
  ];
  public zuiHintMode: ZuiHintOptions['mode'] = this.zuiHintModeVariants[0];

  public zuiAutoReposition = false;

  public readonly zuiHintDirectionVariants: ReadonlyArray<ZuiHintOptions['direction']> = Object.values(ZuiOverlayOutsidePlacement);

  public zuiHintDirection: ZuiHintOptions['direction'] = ZUI_HINT_DEFAULT_OPTIONS.direction;

  public zuiHintId: string;

  public zuiHintShowDelay: number = ZUI_HINT_DEFAULT_OPTIONS.zuiHintShowDelay;

  public zuiHintHideDelay: number = ZUI_HINT_DEFAULT_OPTIONS.zuiHintHideDelay;

  public zuiHintHost: HTMLElement

  public readonly zuiHintVariants = [
    'Новый хинт'
  ];

  public zuiHint: PolymorpheusContent =  this.zuiHintVariants[0];

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
