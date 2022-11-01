import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RawLoaderContent, TuiDocExample} from "@taiga-ui/addon-doc";
import {
  PolymorphContent,
  PZM_HINT_DEFAULT_OPTIONS,
  PzmHintOptions,
  PzmOverlayOutsidePlacement
} from "@digital-plant/zui-components";

@Component({
  selector: 'pzm-hint-example',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HintComponent {
  public pzmAutoReposition = false;
  public pzmHintCanShow = true;
  public content = "Тестовое содержимое";

  public readonly pzmHintDirectionVariants: ReadonlyArray<PzmHintOptions['direction']> = Object.values(PzmOverlayOutsidePlacement);

  public pzmHintDirection: PzmHintOptions['direction'] = PZM_HINT_DEFAULT_OPTIONS.direction;

  public pzmHintId = 'hint-id';

  public pzmHintShowDelay: number = PZM_HINT_DEFAULT_OPTIONS.showDelay;

  public pzmHintHideDelay: number = PZM_HINT_DEFAULT_OPTIONS.hideDelay;

  public pzmHintHost: HTMLElement = null;

  public readonly pzmHintVariants = [
    'Новый хинт'
  ];

  public pzmHint: PolymorphContent =  this.pzmHintVariants[0];

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
