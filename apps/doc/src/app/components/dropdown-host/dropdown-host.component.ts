import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RawLoaderContent, TuiDocExample} from "@taiga-ui/addon-doc";
import {PolymorpheusContent, ZuiContextWithImplicit, ZuiSizeL, ZuiSizeM} from '@digital-plant/zui-components';

@Component({
  selector: 'zui-dropdown-host-example',
  templateUrl: './dropdown-host.component.html',
  styleUrls: ['./dropdown-host.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DropdownHostComponent {
  readonly exampleModule: RawLoaderContent = import(
    '!!raw-loader!./examples/import-module.md'
  );

  readonly example1: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/1/template.ts'),
    HTML: import('!!raw-loader!./examples/1/template.html'),
  };
}
