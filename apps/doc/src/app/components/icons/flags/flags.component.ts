import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import {
  PRIZM_ICON_FLAGS_SVG_SET,
  PrizmIconSvgFlagSvgEnum,
  PrizmFlagIconsRegistry,
} from '@prizm-ui/flag-icons';

@Component({
  selector: 'prizm-icon-example',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlagsComponent {
  readonly nameVariants = Object.values(PrizmIconSvgFlagSvgEnum);
  public name = this.nameVariants[0];

  readonly sizeVariants = ['32px', 24, 16];
  public size = this.sizeVariants[0];

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleSvg: TuiDocExample = {
    TypeScript: import('./examples/base/icon-base-example.component.ts?raw'),
    HTML: import('./examples/base/icon-base-example.component.html?raw'),
  };
  readonly exampleFont: TuiDocExample = {
    TypeScript: import('./examples/font/icon-font-example.component.ts?raw'),
    HTML: import('./examples/font/icon-font-example.component.html?raw'),
  };

  constructor(private readonly iconFlagsRegistry: PrizmFlagIconsRegistry) {}

  ngOnInit(): void {
    this.iconFlagsRegistry.registerIcons([...PRIZM_ICON_FLAGS_SVG_SET]);
  }
}
