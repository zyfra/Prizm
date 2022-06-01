import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RawLoaderContent, TuiDocExample} from "@taiga-ui/addon-doc";

@Component({
  selector: 'zui-loader-example',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {
  readonly exampleModule: RawLoaderContent = import(
    '!!raw-loader!./examples/import-module.md'
  );

  readonly example1: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/1/template.ts'),
    HTML: import('!!raw-loader!./examples/1/template.html'),
  };
}
