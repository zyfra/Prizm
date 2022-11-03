import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RawLoaderContent, TuiDocExample } from '@taiga-ui/addon-doc';
import { PrizmSizeM, PrizmSizeS } from '@digital-plant/zui-components';

@Component({
  selector: 'pzm-progress-example',
  templateUrl: './progress-line-bar.component.html',
  styleUrls: ['./progress-line-bar.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgressLineBarComponent {

  public max = 100;
  public value = 50;

  readonly sizeVariants: ReadonlyArray<PrizmSizeS | PrizmSizeM> = [
    's',
    'm',
  ];
  size: PrizmSizeS | PrizmSizeM = this.sizeVariants[1];

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

  readonly exampleBase: TuiDocExample = {
    TypeScript: import('!!raw-loader!./examples/base/progress-base-example.component.ts'),
    HTML: import('!!raw-loader!./examples/base/progress-base-example.component.html'),
  };
}
