import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@prizm/taiga-ui/addon-doc';

@Component({
  selector: 'prizm-loader-example',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {
  showLoader = true;
  inheritColor = false;
  overlay = true;

  readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
  );

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/loader-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/loader-base-example.component.html'),
  };
}
