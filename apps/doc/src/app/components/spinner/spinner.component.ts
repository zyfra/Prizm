import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrizmSize } from '@prizm-ui/components';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-spinner-example',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  public inheritColor = false;
  public overlay = true;
  public size: PrizmSize = 's';

  readonly setupModule: RawLoaderContent = import('./examples/setup-module.md?raw');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('./examples/base/spinner-base-example.component.ts?raw'),
    HTML: import('./examples/base/spinner-base-example.component.html?raw'),
  };
}
