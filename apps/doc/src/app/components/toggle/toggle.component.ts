import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  PolymorphContent,
  PrizmContextWithImplicit,
  PrizmDay,
  PrizmSizeL,
  PrizmSizeM,
} from '@prizm-ui/components';

@Component({
  selector: 'prizm-toggle-example',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleComponent {
  public readOnly = false;
  val: boolean;
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
  disabled = false;
  showLoader = false;

  singleColor = false;

  readonly sizeVariants: ReadonlyArray<PrizmSizeL | PrizmSizeM> = ['m', 'l'];
  size: PrizmSizeL | PrizmSizeM = this.sizeVariants[0];

  readonly iconVariants: ReadonlyArray<PolymorphContent<PrizmContextWithImplicit<PrizmSizeL | PrizmSizeM>>> =
    [
      '',
      'selection-checkbox-marked-circle',
      'selection-checkbox-marked-circle-chanel',
      'arrows-chevron-left',
      'arrows-chevron-right',
    ];
  iconOn: PolymorphContent<PrizmContextWithImplicit<PrizmSizeL | PrizmSizeM>> = this.iconVariants[0];
  iconOff: PolymorphContent<PrizmContextWithImplicit<PrizmSizeL | PrizmSizeM>> = this.iconVariants[0];
  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/toggle-base-example.component.ts?raw'),
    HTML: import('./examples/base/toggle-base-example.component.html?raw'),
  };
}
