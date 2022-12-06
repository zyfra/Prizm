import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { PrizmIconsRegistryService, PrizmIconsType } from '@prizm-ui/icons';
import {
  completeIconSet,
  prizmIconFlagAs,
  PrizmIconFlagEnum,
  PrizmIconFlagIconsRegistry,
  prizmIconFlagRu,
} from '@prizm-ui/icon-flags';

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

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/icon-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/icon-base-example.component.html'),
  };

  constructor(
    private readonly iconFlagsRegistry: PrizmIconFlagIconsRegistry,
  ) {
  }


  ngOnInit() {
    this.iconFlagsRegistry.registerIcons([
      ...completeIconSet
    ]);
  }
}
