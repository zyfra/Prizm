import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { PolymorphContent, PrizmContextWithImplicit, PrizmSizeL, PrizmSizeM } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-toggle-example',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleComponent {
  value = true;
  disabled = false;
  showLoader = false;

  singleColor = false;

  readonly sizeVariants: ReadonlyArray<PrizmSizeL | PrizmSizeM> = [
    'm',
    'l'
  ];
  size: PrizmSizeL | PrizmSizeM = this.sizeVariants[0];

  readonly iconVariants: ReadonlyArray<PolymorphContent<PrizmContextWithImplicit<PrizmSizeL | PrizmSizeM>>> = [
    '',
    'selection-checkbox-marked-circle',
    'selection-checkbox-marked-circle-chanel',
    'arrows-chevron-left',
    'arrows-chevron-right'
  ];
  iconOn: PolymorphContent<PrizmContextWithImplicit<PrizmSizeL | PrizmSizeM>> = this.iconVariants[0];
  iconOff: PolymorphContent<PrizmContextWithImplicit<PrizmSizeL | PrizmSizeM>> = this.iconVariants[0];
  readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
  );

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/toggle-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/toggle-base-example.component.html'),
  };
}
