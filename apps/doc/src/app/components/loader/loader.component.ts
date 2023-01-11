import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrizmSize } from '@prizm-ui/components';
import { RawLoaderContent, TuiDocExample } from '@prizm-ui/doc';

@Component({
  selector: 'prizm-loader-example',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderComponent {
  public showLoader = true;
  public inheritColor = false;
  public overlay = true;
  public size: PrizmSize = 's';

  readonly setupModule: RawLoaderContent = import('!!raw-loader!./examples/setup-module.md');

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/loader-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/loader-base-example.component.html'),
  };
}
