import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-overlay-example',
  templateUrl: './polymorph.component.html',
  styleUrls: ['./polymorph.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PolymorphComponent {
  readonly exampleModule: RawLoaderContent = import('./examples/import-module.md?raw');

  readonly baseExample: TuiDocExample = {
    TypeScript: import('./examples/base/base.component?raw'),
    Module: import('./examples/base/base.module?raw'),
    HTML: import('./examples/base/base.component.html?raw'),
  };
  readonly numberExample: TuiDocExample = {
    TypeScript: import('./examples/number/number.component?raw'),
    Module: import('./examples/number/number.module?raw'),
    HTML: import('./examples/number/number.component.html?raw'),
  };
  readonly functionExample: TuiDocExample = {
    TypeScript: import('./examples/function/function.component?raw'),
    Module: import('./examples/function/function.module?raw'),
    HTML: import('./examples/function/function.component.html?raw'),
  };
  readonly templateExample: TuiDocExample = {
    TypeScript: import('./examples/template/template.component?raw'),
    Module: import('./examples/template/template.module?raw'),
    HTML: import('./examples/template/template.component.html?raw'),
  };
  readonly componentExample: TuiDocExample = {
    TypeScript: import('./examples/component/component.component?raw'),
    SubComponent: import('./examples/component/sub-component?raw'),
    Module: import('./examples/component/component.module?raw'),
    HTML: import('./examples/component/component.component.html?raw'),
  };
  readonly injectorExample: TuiDocExample = {
    TypeScript: import('./examples/injector/injector.component?raw'),
    SubComponent: import('./examples/injector/sub-component?raw'),
    Module: import('./examples/injector/injector.module?raw'),
    HTML: import('./examples/injector/injector.component.html?raw'),
  };
}
