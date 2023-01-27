import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-overlay-example',
  templateUrl: './polymorph.component.html',
  styleUrls: ['./polymorph.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolymorphComponent {
  readonly exampleModule: RawLoaderContent = import('!!raw-loader!./examples/import-module.md');

  readonly baseExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/base.component'),
    Module: import('!!raw-loader!./examples/base/base.module'),
    HTML: import('!!raw-loader!./examples/base/base.component.html'),
  };
  readonly numberExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/number/number.component'),
    Module: import('!!raw-loader!./examples/number/number.module'),
    HTML: import('!!raw-loader!./examples/number/number.component.html'),
  };
  readonly functionExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/function/function.component'),
    Module: import('!!raw-loader!./examples/function/function.module'),
    HTML: import('!!raw-loader!./examples/function/function.component.html'),
  };
  readonly templateExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/template/template.component'),
    Module: import('!!raw-loader!./examples/template/template.module'),
    HTML: import('!!raw-loader!./examples/template/template.component.html'),
  };
  readonly componentExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/component/component.component'),
    SubComponent: import('!!raw-loader!./examples/component/sub-component'),
    Module: import('!!raw-loader!./examples/component/component.module'),
    HTML: import('!!raw-loader!./examples/component/component.component.html'),
  };
}
