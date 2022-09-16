import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RawLoaderContent, TuiDocExample} from "@taiga-ui/addon-doc";
import {
  PolymorphContent,
  ZUI_HINT_DEFAULT_OPTIONS,
  ZuiHintOptions,
  ZuiOverlayOutsidePlacement
} from "@digital-plant/zui-components";

@Component({
  selector: 'zui-hint-example',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HintComponent {
  public zuiAutoReposition = false;
  public zuiCanShow = true;
  public content = "Тестовое содержимое";

  public readonly zuiHintDirectionVariants: ReadonlyArray<ZuiHintOptions['direction']> = Object.values(ZuiOverlayOutsidePlacement);

  public zuiHintDirection: ZuiHintOptions['direction'] = ZUI_HINT_DEFAULT_OPTIONS.direction;

  public zuiHintId: string;

  public zuiHintShowDelay: number = ZUI_HINT_DEFAULT_OPTIONS.showDelay;

  public zuiHintHideDelay: number = ZUI_HINT_DEFAULT_OPTIONS.hideDelay;

  public zuiHintHost: HTMLElement

  public readonly zuiHintVariants = [
    'Новый хинт'
  ];

  public zuiHint: PolymorphContent =  this.zuiHintVariants[0];

  readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
  );

  readonly exampleBasic: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/hint-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/hint-base-example.component.html'),
  };

  readonly exampleWithTemplate: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-template/hint-with-template-example.component.ts'),
    HTML: import('!!raw-loader!./examples/with-template/hint-with-template-example.component.html'),
  };

  readonly exampleWithComponent: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/with-component/hint-with-component-example.component.ts'),
    HTML: import('!!raw-loader!./examples/with-component/hint-with-component-example.component.html'),
  };
}
