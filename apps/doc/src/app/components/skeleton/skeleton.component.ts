import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';
import { PolymorphContent, PrizmContextWithImplicit, PrizmSizeL, PrizmSizeM } from '@prizm-ui/components';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'prizm-skeleton-example',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkeletonComponent {
  active = true;
  isText = false;
  isRounded = false;
  isShort = false;
  public readonly toggleControl = new FormControl();

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
    TypeScript: import('./examples/base/skeleton-base-example.component.ts?raw'),
    HTML: import('./examples/base/skeleton-base-example.component.html?raw'),
  };
}
