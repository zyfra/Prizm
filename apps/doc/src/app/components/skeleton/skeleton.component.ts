import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { PolymorphContent, ZuiContextWithImplicit, ZuiSizeL, ZuiSizeM } from '@digital-plant/zui-components';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'zui-skeleton-example',
  templateUrl: './skeleton.component.html',
  styleUrls: ['./skeleton.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkeletonComponent {
  active = true;
  isText = false;
  isRounded = false;
  isShort = false;
  public readonly toggleControl = new FormControl();

  readonly iconVariants: ReadonlyArray<PolymorphContent<ZuiContextWithImplicit<ZuiSizeL | ZuiSizeM>>> = [
    '',
    'selection-checkbox-marked-circle',
    'selection-checkbox-marked-circle-chanel',
    'arrows-chevron-left',
    'arrows-chevron-right'
  ];
  iconOn: PolymorphContent<ZuiContextWithImplicit<ZuiSizeL | ZuiSizeM>> = this.iconVariants[0];
  iconOff: PolymorphContent<ZuiContextWithImplicit<ZuiSizeL | ZuiSizeM>> = this.iconVariants[0];
  readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
  );

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/skeleton-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/skeleton-base-example.component.html'),
  };
}
