import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  PolymorphContent,
  PRIZM_HINT_DEFAULT_OPTIONS,
  PrizmHintOptions,
  PrizmOverlayOutsidePlacement,
  PrizmContent,
  IconDefs,
  PrizmAppearance,
  PrizmAppearanceType,
  PrizmDialogSize,
} from '@prizm-ui/components';

@Component({
  selector: 'prizm-hint-example',
  templateUrl: './hint.component.html',
  styleUrls: ['./hint.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HintComponent {
  public pseudoHovered = false;
  public pseudoPressed = false;
  public pseudoFocused = false;
  public pseudoState = '';
  public focusable = false;

  public focusedChange = false;
  public pressedChange = false;
  public hoveredChange = false;
  public focusVisibleChange = false;

  iconVariants: ReadonlyArray<PrizmContent> = ['', ...IconDefs.reduce((a, c) => a.concat(c.data), [])];
  icon: PrizmContent = this.iconVariants[0];
  iconRight: PrizmContent = this.iconVariants[0];
  appearanceVariants: ReadonlyArray<PrizmAppearance> = [
    'primary',
    'secondary',
    'success',
    'warning',
    'danger',
  ];
  appearance: PrizmAppearance = this.appearanceVariants[0];

  appearanceTypeVariants: ReadonlyArray<PrizmAppearanceType> = ['fill', 'outline', 'ghost'];
  appearanceType: PrizmAppearanceType = this.appearanceTypeVariants[0];
  disabled = false;
  showLoader = false;
  public sizeVariants: PrizmDialogSize[] = ['m', 'l'];
  public size: PrizmDialogSize = 'm';

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

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBasic: TuiDocExample = {
    TypeScript: import('./examples/base/hint-base-example.component.ts?raw'),
    HTML: import('./examples/base/hint-base-example.component.html?raw'),
  };

  readonly exampleWithTemplate: TuiDocExample = {
    TypeScript: import('./examples/with-template/hint-with-template-example.component.ts?raw'),
    HTML: import('./examples/with-template/hint-with-template-example.component.html?raw'),
  };

  readonly exampleWithComponent: TuiDocExample = {
    TypeScript: import('./examples/with-component/hint-with-component-example.component.ts?raw'),
    HTML: import('./examples/with-component/hint-with-component-example.component.html?raw'),
  };
}
