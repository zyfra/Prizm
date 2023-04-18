import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-overlay-example',
  templateUrl: './ast.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AstComponent {
  readonly exampleModule: RawLoaderContent = import('./examples/import-component.md?raw');
  readonly baseExample: TuiDocExample = {
    TypeScript: import('./examples/base/base.component?raw'),
    HTML: import('./examples/base/base.component.html?raw'),
  };
  readonly tsExample: TuiDocExample = {
    TypeScript: import('./examples/ts/ts.component?raw'),
    HTML: import('./examples/ts/ts.component.html?raw'),
  };
}
