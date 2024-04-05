import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PolymorphContent, PrizmContextWithImplicit, PrizmSizeL, PrizmSizeM } from '@prizm-ui/components';
import { PrizmIconsFullRegistry } from '@prizm-ui/icons/core';
import {
  prizmIconsAngleLeft,
  prizmIconsAngleRight,
  prizmIconsTempSelectionCheckboxMarkedCircleChanel,
} from '@prizm-ui/icons/full/source';

@Component({
  selector: 'prizm-toggle-example',
  templateUrl: './toggle-example.component.html',
  styleUrls: ['./toggle-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleExampleComponent {
  testIdPostfix!: string;
  public readOnly = false;
  public pseudoInvalid = false;
  public pseudoHovered = false;
  public pseudoPressed = false;
  public pseudoFocused = false;
  public pseudoState = '';
  public focusable = false;

  public focusedChange = false;
  public pressedChange = false;
  public hoveredChange = false;
  public focusVisibleChange = false;

  value = true;
  val = this.value;
  disabled = false;
  showLoader = false;

  singleColor = false;

  readonly sizeVariants: ReadonlyArray<PrizmSizeL | PrizmSizeM> = ['m', 'l'];
  size: PrizmSizeL | PrizmSizeM = this.sizeVariants[0];

  readonly iconVariants: ReadonlyArray<PolymorphContent<PrizmContextWithImplicit<PrizmSizeL | PrizmSizeM>>> =
    ['', 'temp-selection-checkbox-marked-circle-chanel', 'angle-left', 'angle-right'];
  iconOn: PolymorphContent<PrizmContextWithImplicit<PrizmSizeL | PrizmSizeM>> = this.iconVariants[0];
  iconOff: PolymorphContent<PrizmContextWithImplicit<PrizmSizeL | PrizmSizeM>> = this.iconVariants[0];
  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/toggle-base-example.component.ts?raw'),
    HTML: import('./examples/base/toggle-base-example.component.html?raw'),
  };

  private readonly iconsFullRegistry = inject(PrizmIconsFullRegistry);

  constructor() {
    this.iconsFullRegistry.registerIcons(
      prizmIconsTempSelectionCheckboxMarkedCircleChanel,
      prizmIconsAngleLeft,
      prizmIconsAngleRight
    );
  }
}
