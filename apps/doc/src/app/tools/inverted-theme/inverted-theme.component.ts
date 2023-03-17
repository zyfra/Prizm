import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-overlay-example',
  templateUrl: './inverted-theme.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InvertedThemeComponent {
  readonly exampleModule: RawLoaderContent = import('./examples/import-module.md?raw');
  readonly invertedExample: TuiDocExample = {
    TypeScript: import('./examples/inverted/inverted.component?raw'),
    HTML: import('./examples/inverted/inverted.component.html?raw'),
  };

  readonly baseExample: TuiDocExample = {
    TypeScript: import('./examples/base/base.component?raw'),
    HTML: import('./examples/base/base.component.html?raw'),
  };
}
