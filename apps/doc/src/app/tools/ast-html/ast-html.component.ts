import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-ast-html-doc',
  templateUrl: './ast-html.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AstHtmlComponent {
  readonly exampleModule: RawLoaderContent = import('./examples/import-component.md?raw');
  readonly baseExample: TuiDocExample = {
    TypeScript: import('./examples/base/base.component?raw'),
    HTML: import('./examples/base/base.component.html?raw'),
  };
  readonly stringifyExample: TuiDocExample = {
    TypeScript: import('./examples/stringify/stringify.component?raw'),
    HTML: import('./examples/stringify/stringify.component.html?raw'),
  };
}
