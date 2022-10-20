import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import {
  PolymorphContent,
  ZuiContextWithImplicit,
  ZuiSizeL,
  ZuiSizeM,
  ZuiSizeS,
  ZuiSizesXl,
} from '@digital-plant/zui-components';

@Component({
  selector: 'zui-progress-example',
  templateUrl: './progress-circle-bar.component.html',
  styleUrls: ['./progress-circle-bar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressCircleBarComponent {


  public max = 100;
  public value = 50;

  readonly sizeVariants: ReadonlyArray<ZuiSizeS | ZuiSizesXl> = [
    's',
    'm',
    'l',
    'xl'
  ];
  size: ZuiSizeS | ZuiSizesXl = this.sizeVariants[2];

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

  readonly exampleCircle: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/circle/progress-circle-example.component.ts'),
    HTML: import('!!raw-loader!./examples/circle/progress-circle-example.component.html'),
  };
}
