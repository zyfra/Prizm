import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RawLoaderContent, TuiDocExample} from "@taiga-ui/addon-doc";
import {TZyfraButtonIconPosision} from "@digital-plant/zyfra-components";
import { PolymorpheusContent, ZuiContextWithImplicit, ZuiSizeL, ZuiSizeM } from '@digital-plant/zui-components';

@Component({
  selector: 'zyfra-toggle-example',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToggleComponent {
  value = true;
  disabled = false;
  showLoader = false;

  singleColor = false;

  readonly iconVariants: ReadonlyArray<PolymorpheusContent<ZuiContextWithImplicit<ZuiSizeL | ZuiSizeM>>> = [
    '',
    'selection-checkbox-marked-circle',
    'selection-checkbox-marked-circle-chanel',
    'arrows-chevron-left',
    'arrows-chevron-right'
  ];
  iconOn: PolymorpheusContent<ZuiContextWithImplicit<ZuiSizeL | ZuiSizeM>> = this.iconVariants[0];
  iconOff: PolymorpheusContent<ZuiContextWithImplicit<ZuiSizeL | ZuiSizeM>> = this.iconVariants[0];
  readonly exampleModule: RawLoaderContent = import(
    '!!raw-loader!./examples/import-module.md'
    );

  readonly example1: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/1/template.ts'),
    HTML: import('!!raw-loader!./examples/1/template.html'),
  };
}
