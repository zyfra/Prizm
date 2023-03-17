import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-overlay-example',
  templateUrl: './theme.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeComponent {
  readonly exampleModule: RawLoaderContent = import('./examples/import-component.md?raw');
  readonly baseExample: TuiDocExample = {
    TypeScript: import('./examples/base/base.component?raw'),
    HTML: import('./examples/base/base.component.html?raw'),
  };
  readonly localExample: TuiDocExample = {
    TypeScript: import('./examples/local/local.component?raw'),
    HTML: import('./examples/local/local.component.html?raw'),
  };
}
