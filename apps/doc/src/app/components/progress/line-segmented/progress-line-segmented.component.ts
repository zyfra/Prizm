import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { ZuiSizeM, ZuiSizeS } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-progress-example',
  templateUrl: './progress-line-segmented.component.html',
  styleUrls: ['./progress-line-segmented.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressLineSegmentedComponent {

  public max = 10;
  public value = 3;

  readonly sizeVariants: ReadonlyArray<ZuiSizeS | ZuiSizeM> = [
    's',
    'm',
  ];
  size: ZuiSizeS | ZuiSizeM = this.sizeVariants[1];

  readonly colorsVariants: ReadonlyArray<string | string[]> = [
    [],
    'transparent',
    [
      'var(--zui-index-danger)',
      'var(--zui-index-warning)',
      'lightblue',
    ],
    [
      'black',
      'gray',
    ],
    'var(--zui-index-danger)',
    'var(--zui-index-warning)',
    'lightblue',
    'green'
  ];
  colors: string | string[] = this.colorsVariants[0];

  readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
  );

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/progress-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/progress-base-example.component.html'),
  };
}
