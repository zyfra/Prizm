import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-none-content-example',
  templateUrl: './none-content-example.component.html',
  styleUrls: ['./none-content-example.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrizmNoneContentExampleComponent {
  content =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/none-content-base-example.component.ts?raw'),
    HTML: import('./examples/base/none-content-base-example.component.html?raw'),
  };
}
