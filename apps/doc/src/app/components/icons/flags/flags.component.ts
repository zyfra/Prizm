import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { PRIZM_ICON_FLAGS_SET, PrizmIconFlagEnum, PrizmIconFlagsRegistry } from '@prizm-ui/icon-flags';

@Component({
  selector: 'prizm-icon-example',
  templateUrl: './flags.component.html',
  styleUrls: ['./flags.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlagsComponent {
  readonly nameVariants = Object.values(PrizmIconFlagEnum);
  public name = this.nameVariants[0];

  readonly sizeVariants = [
    '32px',
    24,
    16
  ]
  public size = this.sizeVariants[0];



  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');

  readonly exampleSvg: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/icon-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/icon-base-example.component.html'),
  };
  readonly exampleFont: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/font/icon-font-example.component.ts'),
    HTML: import('!!raw-loader!./examples/font/icon-font-example.component.html'),
  };

  constructor(
    private readonly iconFlagsRegistry: PrizmIconFlagsRegistry,
  ) {
  }


  ngOnInit() {
    this.iconFlagsRegistry.registerIcons([
      ...PRIZM_ICON_FLAGS_SET
    ]);
  }
}
