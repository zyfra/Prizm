import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-overlay-example',
  templateUrl: './theme.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeComponent {
  readonly exampleModule: RawLoaderContent = import('!!raw-loader!./examples/import-component.md');
  readonly baseExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/base.component'),
    HTML: import('!!raw-loader!./examples/base/base.component.html'),
  };
  readonly localExample: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/local/local.component'),
    HTML: import('!!raw-loader!./examples/local/local.component.html'),
  };
}
