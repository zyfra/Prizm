import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  PolymorphContent,
  PRIZM_HINT_DEFAULT_OPTIONS,
  PRIZM_TOOLTIP_DEFAULT_OPTIONS,
  PrizmOverlayOutsidePlacement,
  PrizmTooltipOptions,
  PrizmAppearanceType,
  PrizmAppearance,
  PrizmContent,
  IconDefs,
  PrizmDialogSize,
  PrizmSize,
} from '@prizm-ui/components';

@Component({
  selector: 'prizm-tooltip-example',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent {
  public pseudoHovered = false;
  public pseudoPressed = false;
  public pseudoFocused = false;
  public pseudoState = '';
  public focusable = false;
  public sizeVariants: PrizmDialogSize[] = ['m', 'l'];
  size: PrizmDialogSize = this.sizeVariants[0];
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
  public testIdPostfix!: string;
  public content = 'Тестовое содержимое';
  public prizmAutoReposition = false;
  public prizmTooltipShow = true;
  public prizmTooltipCanShow = true;

  public readonly prizmTooltipDirectionVariants: ReadonlyArray<PrizmTooltipOptions['direction']> =
    Object.values(PrizmOverlayOutsidePlacement);

  public prizmTooltipDirection: PrizmTooltipOptions['direction'] = PRIZM_HINT_DEFAULT_OPTIONS.direction;

  public prizmTooltipId = 'tooltip-id';

  public prizmTooltipShowDelay: number = PRIZM_TOOLTIP_DEFAULT_OPTIONS.showDelay;

  public prizmTooltipHideDelay: number = PRIZM_TOOLTIP_DEFAULT_OPTIONS.hideDelay;

  public prizmTooltipHost: HTMLElement | null = null;

  public readonly prizmTooltipVariants = ['Tooltip'];

  public prizmTooltip: PolymorphContent = this.prizmTooltipVariants[0];

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/tooltip-base-example.component.ts?raw'),
    HTML: import('./examples/base/tooltip-base-example.component.html?raw'),
  };

  readonly exampleWithTemplate: TuiDocExample = {
    TypeScript: import('./examples/with-template/tooltip-with-template-example.component.ts?raw'),
    HTML: import('./examples/with-template/tooltip-with-template-example.component.html?raw'),
  };

  readonly exampleWithComponent: TuiDocExample = {
    TypeScript: import('./examples/with-component/tooltip-with-component-example.component.ts?raw'),
    HTML: import('./examples/with-component/tooltip-with-component-example.component.html?raw'),
  };
}
