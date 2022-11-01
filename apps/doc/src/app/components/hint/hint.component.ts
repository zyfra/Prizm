import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RawLoaderContent, TuiDocExample} from "@taiga-ui/addon-doc";
import {
  PolymorphContent,
  PZM_HINT_DEFAULT_OPTIONS,
  PzmHintOptions,
  PzmOverlayOutsidePlacement
} from "@digital-plant/zui-components";

@Component({
  selector: 'zui-hint-example',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HintComponent {
  public pzmAutoReposition = false;
  public zuiHintCanShow = true;
  public content = "Тестовое содержимое";

  public readonly zuiHintDirectionVariants: ReadonlyArray<PzmHintOptions['direction']> = Object.values(PzmOverlayOutsidePlacement);

  public zuiHintDirection: PzmHintOptions['direction'] = PZM_HINT_DEFAULT_OPTIONS.direction;

  public zuiHintId = 'hint-id';

  public zuiHintShowDelay: number = PZM_HINT_DEFAULT_OPTIONS.showDelay;

  public zuiHintHideDelay: number = PZM_HINT_DEFAULT_OPTIONS.hideDelay;

  public zuiHintHost: HTMLElement = null;

  public readonly zuiHintVariants = [
    'Новый хинт'
  ];

  public pzmHint: PolymorphContent =  this.zuiHintVariants[0];

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
