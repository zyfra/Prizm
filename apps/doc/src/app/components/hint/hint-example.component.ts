import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  IconDefs,
  PolymorphContent,
  PRIZM_HINT_DEFAULT_OPTIONS,
  PrizmAppearance,
  PrizmAppearanceType,
  PrizmDialogSize,
  PrizmHintOptions,
  PrizmOverlayOutsidePlacement,
  PrizmSize,
} from '@prizm-ui/components';

@Component({
  selector: 'prizm-hint-example',
  templateUrl: './hint-example.component.html',
  styleUrls: ['./hint-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HintExampleComponent {
  public pseudoHovered = false;
  public pseudoPressed = false;
  public pseudoFocused = false;
  public pseudoState = '';
  public focusable = false;

  public focusedChange = false;
  public pressedChange = false;
  public hoveredChange = false;
  public focusVisibleChange = false;

  iconVariants: ReadonlyArray<PolymorphContent<{ size: PrizmSize }>> = [
    '',
    ...IconDefs.reduce((a: any[], c) => a.concat(c.data), []),
  ];
  icon: PolymorphContent<{ size: PrizmSize }> = this.iconVariants[0];
  iconRight: PolymorphContent<{ size: PrizmSize }> = this.iconVariants[0];
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
  public prizmHintShow = false;
  public content = 'Тестовое содержимое';

  public readonly prizmHintDirectionVariants: ReadonlyArray<PrizmHintOptions['direction']> = Object.values(
    PrizmOverlayOutsidePlacement
  );

  public prizmHintDirection: PrizmHintOptions['direction'] = PRIZM_HINT_DEFAULT_OPTIONS.direction;

  public readonly prizmHintThemeVariants: ReadonlyArray<PrizmHintOptions['theme']> = [null, 'dark', 'light'];
  public prizmHintTheme: PrizmHintOptions['theme'] = PRIZM_HINT_DEFAULT_OPTIONS.theme;

  public prizmHintId = 'hint-id';

  public prizmHintShowDelay: number = PRIZM_HINT_DEFAULT_OPTIONS.showDelay;

  public prizmHintHideDelay: number = PRIZM_HINT_DEFAULT_OPTIONS.hideDelay;
  public prizmHintContext = {};

  public prizmHintHost: HTMLElement | null = null;

  public readonly prizmHintVariants = ['Новый хинт'];

  public prizmHint: PolymorphContent = this.prizmHintVariants[0];

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBasic: TuiDocExample = {
    TypeScript: import('./examples/base/hint-base-example.component.ts?raw'),
    HTML: import('./examples/base/hint-base-example.component.html?raw'),
  };

  readonly exampleChangeTheme: TuiDocExample = {
    TypeScript: import('./examples/change-theme/hint-change-theme-example.component.ts?raw'),
    HTML: import('./examples/change-theme/hint-change-theme-example.component.html?raw'),
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
