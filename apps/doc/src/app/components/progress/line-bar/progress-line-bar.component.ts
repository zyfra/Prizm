import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { ZuiSizeM, ZuiSizeS } from '@digital-plant/zui-components';

@Component({
  selector: 'zui-progress-example',
  templateUrl: './progress-line-bar.component.html',
  styleUrls: ['./progress-line-bar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressLineBarComponent {

  public max = 100;
  public value = 50;

  readonly sizeVariants: ReadonlyArray<ZuiSizeS | ZuiSizeM> = [
    's',
    'm',
  ];
  size: ZuiSizeS | ZuiSizeM = this.sizeVariants[1];

  readonly colorVariants: ReadonlyArray<string | null> = [
    null,
    'transparent',
    'var(--zui-index-danger)',
    'var(--zui-index-warning)',
    'lightblue',
    'green'
  ];
  color: string | null = this.colorVariants[0];


  readonly trackColorVariants: ReadonlyArray<string | null> = [
    null,
    'transparent',
    'var(--zui-index-danger)',
    'var(--zui-index-warning)',
    'lightblue',
    'gray',
    'green'
  ];
  trackColor: string | null = this.trackColorVariants[0];

  readonly setupModule: RawLoaderContent = import(
    '!!raw-loader!./examples/setup-module.md'
  );

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/progress-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/progress-base-example.component.html'),
  };
}
