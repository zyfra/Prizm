import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm/doc-base';
import {
  PolymorphContent,
  PRIZM_HINT_DEFAULT_OPTIONS,
  PrizmHintOptions,
  PrizmOverlayOutsidePlacement,
} from '@prizm-ui/components';

@Component({
  selector: 'prizm-hint-example',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HintComponent {
  public prizmAutoReposition = false;
  public prizmHintCanShow = true;
  public content = 'Тестовое содержимое';

  public readonly prizmHintDirectionVariants: ReadonlyArray<PrizmHintOptions['direction']> = Object.values(
    PrizmOverlayOutsidePlacement
  );

  public prizmHintDirection: PrizmHintOptions['direction'] = PRIZM_HINT_DEFAULT_OPTIONS.direction;

  public prizmHintId = 'hint-id';

  public prizmHintShowDelay: number = PRIZM_HINT_DEFAULT_OPTIONS.showDelay;

  public prizmHintHideDelay: number = PRIZM_HINT_DEFAULT_OPTIONS.hideDelay;

  public prizmHintHost: HTMLElement = null;

  public readonly prizmHintVariants = ['Новый хинт'];

  public prizmHint: PolymorphContent = this.prizmHintVariants[0];

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');

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
