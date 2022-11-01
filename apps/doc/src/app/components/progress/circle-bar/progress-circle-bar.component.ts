import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import {
  PolymorphContent,
  PzmContextWithImplicit,
  PzmSizeL,
  PzmSizeM,
  PzmSizeS,
  PzmSizesXl,
} from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-progress-example',
  templateUrl: './progress-circle-bar.component.html',
  styleUrls: ['./progress-circle-bar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressCircleBarComponent {


  public max = 100;
  public value = 50;

  readonly sizeVariants: ReadonlyArray<PzmSizeS | PzmSizesXl> = [
    's',
    'm',
    'l',
    'xl'
  ];
  size: PzmSizeS | PzmSizesXl = this.sizeVariants[2];

  readonly colorVariants: ReadonlyArray<string | null> = [
    null,
    'transparent',
    'var(--pzm-index-danger)',
    'var(--pzm-index-warning)',
    'var(--pzm-index-plan)',
    'var(--pzm-index-good)',
    'lightblue',
  ];
  color: string | null = this.colorVariants[0];

  readonly trackColorVariants: ReadonlyArray<string | null> = [
    null,
    'transparent',
    'var(--pzm-index-danger)',
    'var(--pzm-index-warning)',
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
