import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { Clipboard } from '@angular/cdk/clipboard';
import { PrizmToastService } from '@prizm-ui/components';
import { copyToClipboard } from '../../../util';
import { PRIZM_ICONS_NAMES } from '@prizm-ui/icons/base/names';

@Component({
  selector: 'prizm-icon-example',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconsComponent {
  public color!: string;
  readonly sizeVariants = ['32px', 24, 16];
  public size = this.sizeVariants[0];

  public readonly iconsSet = PRIZM_ICONS_NAMES;
  readonly nameVariants = this.iconsSet;
  public name = this.nameVariants[0];

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/icons-base-example.component.ts?raw'),
    HTML: import('./examples/base/icons-base-example.component.html?raw'),
    CSS: import('./examples/base/icons-base-example.component.less?raw'),
  };
  readonly exampleAll: TuiDocExample = {
    TypeScript: import('./examples/all/icons-all-example.component.ts?raw'),
    HTML: import('./examples/all/icons-all-example.component.html?raw'),
    CSS: import('./examples/all/icons-all-example.component.less?raw'),
  };
  readonly exampleOldName: TuiDocExample = {
    TypeScript: import('./examples/old-transformer/icons-old-transformer-example.component.ts?raw'),
    HTML: import('./examples/old-transformer/icons-old-transformer-example.component.html?raw'),
    CSS: import('./examples/old-transformer/icons-old-transformer-example.component.less?raw'),
  };

  readonly exampleLazy: TuiDocExample = {
    TypeScript: import('./examples/lazy/icons-lazy-example.component.ts?raw'),
    HTML: import('./examples/lazy/icons-lazy-example.component.html?raw'),
  };

  constructor(
    @Inject(Clipboard) public readonly clipboard: Clipboard,
    private readonly toastService: PrizmToastService
  ) {}

  public copy(value: string): void {
    copyToClipboard(value, this.clipboard, this.toastService);
  }
}
