import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'zui-input-date-multi-example',
  templateUrl: './input-date-multi.component.html',
  styleUrls: ['./input-date-multi.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputDateMultiRelativeComponent {
  public readonly valueControl = new FormControl();

  readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
  );

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/input-date-multi-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/input-date-multi-base-example.component.html'),
  };

  readonly exampleFour: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/four/input-date-multi-four-example.component.ts'),
    HTML: import('!!raw-loader!./examples/four/input-date-multi-four-example.component.html'),
  };
}
